"use client";

import { useEffect, useRef } from "react";
import styles from "./HomeOpening.module.css";

type FieldNode = {
  ux: number;
  uy: number;
  gx: number;
  gy: number;
  phase: number;
  drift: number;
  row: number;
  column: number;
  emphasis: number;
};

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));
const mix = (from: number, to: number, amount: number) => from + (to - from) * amount;

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createNodes() {
  const random = seededRandom(20260923);
  const nodes: FieldNode[] = [];
  const columns = 10;
  const rows = 9;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (random() < 0.12 && !(row > 2 && row < 7 && column > 2 && column < 8)) continue;

      const gx = 0.43 + (column / (columns - 1)) * 0.5;
      const gy = 0.11 + (row / (rows - 1)) * 0.74;
      const edgeBias = Math.abs(column - (columns - 1) / 2) / ((columns - 1) / 2);
      const jitterX = (random() - 0.5) * (0.085 + edgeBias * 0.025);
      const jitterY = (random() - 0.5) * 0.105;

      nodes.push({
        ux: clamp(gx + jitterX, 0.34, 0.99),
        uy: clamp(gy + jitterY, 0.04, 0.94),
        gx,
        gy,
        phase: random() * Math.PI * 2,
        drift: 0.6 + random() * 0.9,
        row,
        column,
        emphasis: random()
      });
    }
  }

  return nodes;
}

export default function HomeOpeningField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let cleanup = () => undefined;

    const start = async () => {
      const { Application, Graphics } = await import("pixi.js");
      if (cancelled) return;

      const app = new Application();
      await app.init({
        resizeTo: host,
        antialias: true,
        backgroundAlpha: 0,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 1.5),
        preference: "webgl"
      });

      if (cancelled) {
        app.destroy({ removeView: true }, { children: true });
        return;
      }

      app.canvas.setAttribute("aria-hidden", "true");
      host.appendChild(app.canvas);

      const drawing = new Graphics();
      app.stage.addChild(drawing);

      const nodes = createNodes();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const pointer = {
        targetX: -1000,
        targetY: -1000,
        x: -1000,
        y: -1000,
        previousX: -1000,
        previousY: -1000,
        active: false,
        energy: 0,
        lastInputAt: performance.now() - 3200
      };

      let memoryX = 0.76;
      let memoryY = 0.48;
      let memoryStrength = 0.18;
      let scrollEnergy = 0;
      let previousScrollY = window.scrollY;

      const setPointer = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        const nextX = event.clientX - rect.left;
        const nextY = event.clientY - rect.top;

        if (pointer.active) {
          const distance = Math.hypot(nextX - pointer.targetX, nextY - pointer.targetY);
          pointer.energy = Math.max(pointer.energy, clamp(distance / 80));
        }

        pointer.previousX = pointer.targetX;
        pointer.previousY = pointer.targetY;
        pointer.targetX = nextX;
        pointer.targetY = nextY;
        pointer.active = true;
        pointer.lastInputAt = performance.now();

        if (rect.width > 0 && rect.height > 0) {
          memoryX = clamp(nextX / rect.width);
          memoryY = clamp(nextY / rect.height);
          memoryStrength = Math.max(memoryStrength, 0.72);
        }
      };

      const clearPointer = () => {
        pointer.active = false;
        pointer.lastInputAt = performance.now();
      };

      const onScroll = () => {
        const delta = Math.abs(window.scrollY - previousScrollY);
        previousScrollY = window.scrollY;
        scrollEnergy = Math.max(scrollEnergy, clamp(delta / 90));
        if (delta > 1) pointer.lastInputAt = performance.now();
      };

      const draw = (time: number, fixedAlignment?: number) => {
        const width = app.screen.width;
        const height = app.screen.height;
        if (!width || !height) return;

        const now = performance.now();
        const stillness = fixedAlignment === undefined
          ? clamp((now - pointer.lastInputAt - 1050) / 2300)
          : clamp((fixedAlignment - 0.08) / 0.58);

        const alignment = fixedAlignment ?? (0.08 + stillness * 0.58);
        const pressure = clamp(pointer.energy * 0.72 + scrollEnergy * 0.35);
        const radius = Math.min(width, height) * 0.32;

        drawing.clear();

        if (pointer.active) {
          pointer.x = mix(pointer.x < -100 ? pointer.targetX : pointer.x, pointer.targetX, 0.055);
          pointer.y = mix(pointer.y < -100 ? pointer.targetY : pointer.y, pointer.targetY, 0.055);
        }

        const points = nodes.map((node) => {
          const baseX = mix(node.ux, node.gx, alignment);
          const baseY = mix(node.uy, node.gy, alignment);
          const residual = 1 - alignment;
          const driftX = Math.sin(time * 0.00019 * node.drift + node.phase) * 0.0055 * residual;
          const driftY = Math.cos(time * 0.00016 * node.drift + node.phase * 0.73) * 0.0065 * residual;

          let x = (baseX + driftX) * width;
          let y = (baseY + driftY) * height;

          if (pointer.active && pointer.x > -100) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            const distance = Math.max(1, Math.hypot(dx, dy));

            if (distance < radius) {
              const local = Math.pow(1 - distance / radius, 2);
              const force = local * (8 + pressure * 26) * (0.6 + node.emphasis * 0.8);
              const tangentX = -dy / distance;
              const tangentY = dx / distance;
              x += (dx / distance) * force * 0.42 + tangentX * force * 0.2;
              y += (dy / distance) * force * 0.42 + tangentY * force * 0.2;
            }
          }

          const memoryDx = x / width - memoryX;
          const memoryDy = y / height - memoryY;
          const memoryDistance = Math.hypot(memoryDx, memoryDy);
          const memoryInfluence = clamp(1 - memoryDistance / 0.22) * memoryStrength;
          y -= memoryInfluence * 6 * Math.sin(node.phase + time * 0.00012);

          return { ...node, x, y, memoryInfluence };
        });

        const lineAlpha = 0.018 + alignment * 0.085;
        for (let row = 0; row < 9; row += 1) {
          const rowPoints = points.filter((point) => point.row === row).sort((a, b) => a.column - b.column);
          for (let index = 0; index < rowPoints.length - 1; index += 1) {
            const one = rowPoints[index];
            const two = rowPoints[index + 1];
            if (two.column - one.column > 2) continue;
            drawing
              .moveTo(one.x, one.y)
              .lineTo(two.x, two.y)
              .stroke({
                color: 0x0a0a0a,
                width: 1,
                alpha: lineAlpha * (0.72 + Math.min(one.emphasis, two.emphasis) * 0.5)
              });
          }
        }

        const verticalAlpha = Math.max(0, alignment - 0.23) * 0.105;
        if (verticalAlpha > 0.002) {
          for (let column = 0; column < 10; column += 2) {
            const columnPoints = points.filter((point) => point.column === column).sort((a, b) => a.row - b.row);
            for (let index = 0; index < columnPoints.length - 1; index += 1) {
              const one = columnPoints[index];
              const two = columnPoints[index + 1];
              if (two.row - one.row > 2) continue;
              drawing
                .moveTo(one.x, one.y)
                .lineTo(two.x, two.y)
                .stroke({ color: 0x0a0a0a, width: 1, alpha: verticalAlpha });
            }
          }
        }

        points.forEach((point) => {
          const memory = point.memoryInfluence;
          const radiusValue = 0.9 + point.emphasis * 1.25 + pressure * 0.4;
          const isMemoryPoint = memory > 0.38 && point.emphasis > 0.54;
          const color = isMemoryPoint ? 0xd95739 : 0x0a0a0a;
          const alpha = isMemoryPoint
            ? 0.48 + memory * 0.28
            : 0.19 + point.emphasis * 0.25 + alignment * 0.12;

          drawing.circle(point.x, point.y, radiusValue).fill({ color, alpha });
        });

        const tracePoints = points
          .filter((point) => point.column === 5 || point.column === 6)
          .sort((a, b) => a.y - b.y);

        for (let index = 0; index < tracePoints.length - 1; index += 1) {
          const one = tracePoints[index];
          const two = tracePoints[index + 1];
          const memory = Math.max(one.memoryInfluence, two.memoryInfluence);
          if (memory < 0.07) continue;
          drawing
            .moveTo(one.x, one.y)
            .lineTo(two.x, two.y)
            .stroke({ color: 0xd95739, width: 1, alpha: memory * 0.16 });
        }
      };

      if (reducedMotion) {
        draw(0, 0.36);
        app.ticker.stop();
      } else {
        host.addEventListener("pointermove", setPointer, { passive: true });
        host.addEventListener("pointerleave", clearPointer);
        window.addEventListener("scroll", onScroll, { passive: true });

        app.ticker.add((ticker) => {
          pointer.energy *= Math.pow(0.925, ticker.deltaTime);
          scrollEnergy *= Math.pow(0.88, ticker.deltaTime);
          memoryStrength *= Math.pow(0.997, ticker.deltaTime);
          memoryStrength = Math.max(0.12, memoryStrength);

          draw(ticker.lastTime);
        });
      }

      cleanup = () => {
        host.removeEventListener("pointermove", setPointer);
        host.removeEventListener("pointerleave", clearPointer);
        window.removeEventListener("scroll", onScroll);
        app.destroy({ removeView: true }, { children: true });
      };
    };

    void start();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div className={styles.field} ref={hostRef} aria-hidden="true" />;
}
