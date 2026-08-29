"use client";

import { useEffect, useRef } from "react";

type SignalNode = {
  x: number;
  y: number;
  phase: number;
  speed: number;
  color: number;
};

export default function SignalCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

      const nodes: SignalNode[] = [
        { x: 0.08, y: 0.2, phase: 0.1, speed: 0.42, color: 0xff5a30 },
        { x: 0.2, y: 0.7, phase: 1.5, speed: 0.28, color: 0xf0ede4 },
        { x: 0.34, y: 0.34, phase: 2.7, speed: 0.36, color: 0x8a75ff },
        { x: 0.48, y: 0.78, phase: 3.3, speed: 0.31, color: 0xff5a30 },
        { x: 0.6, y: 0.18, phase: 4.8, speed: 0.37, color: 0xf0ede4 },
        { x: 0.73, y: 0.58, phase: 5.4, speed: 0.26, color: 0xb9d8e8 },
        { x: 0.9, y: 0.3, phase: 6.5, speed: 0.39, color: 0xff5a30 },
        { x: 0.88, y: 0.82, phase: 7.2, speed: 0.3, color: 0xf0ede4 }
      ];

      const pointer = { x: -1000, y: -1000 };
      const onPointerMove = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
      };
      const onPointerLeave = () => {
        pointer.x = -1000;
        pointer.y = -1000;
      };

      host.addEventListener("pointermove", onPointerMove, { passive: true });
      host.addEventListener("pointerleave", onPointerLeave);

      app.ticker.add((ticker) => {
        const width = app.screen.width;
        const height = app.screen.height;
        const time = ticker.lastTime * 0.001;
        drawing.clear();

        for (let column = 1; column < 12; column += 1) {
          const x = (width / 12) * column;
          drawing.moveTo(x, 0).lineTo(x, height).stroke({ color: 0xffffff, width: 1, alpha: 0.045 });
        }

        const liveNodes = nodes.map((node) => {
          const drift = Math.sin(time * node.speed + node.phase);
          const x = node.x * width + drift * Math.min(width * 0.025, 28);
          const y = node.y * height + Math.cos(time * node.speed * 0.82 + node.phase) * Math.min(height * 0.025, 24);
          const distance = Math.hypot(pointer.x - x, pointer.y - y);
          const pull = Math.max(0, 1 - distance / 220);
          return {
            ...node,
            px: x + (pointer.x - x) * pull * 0.08,
            py: y + (pointer.y - y) * pull * 0.08,
            pull
          };
        });

        for (let a = 0; a < liveNodes.length; a += 1) {
          for (let b = a + 1; b < liveNodes.length; b += 1) {
            const one = liveNodes[a];
            const two = liveNodes[b];
            const distance = Math.hypot(one.px - two.px, one.py - two.py);
            if (distance < width * 0.34) {
              drawing
                .moveTo(one.px, one.py)
                .lineTo(two.px, two.py)
                .stroke({ color: 0xffffff, width: 1, alpha: Math.max(0.025, 0.16 - distance / (width * 2.4)) });
            }
          }
        }

        liveNodes.forEach((node, index) => {
          const radius = (index % 3 === 0 ? 5 : 3) + node.pull * 7;
          drawing.circle(node.px, node.py, radius + 6).fill({ color: node.color, alpha: 0.055 + node.pull * 0.08 });
          drawing.circle(node.px, node.py, radius).fill({ color: node.color, alpha: 0.72 });
        });
      });

      cleanup = () => {
        host.removeEventListener("pointermove", onPointerMove);
        host.removeEventListener("pointerleave", onPointerLeave);
        app.destroy({ removeView: true }, { children: true });
      };
    };

    void start();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div className="signal-canvas" ref={hostRef} aria-hidden="true" />;
}
