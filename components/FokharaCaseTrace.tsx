"use client";

import { useEffect, useState } from "react";
import styles from "./FokharaCaseTrace.module.css";

type TraceOrigin = {
  x: number;
  y: number;
  ts: number;
};

const STORAGE_KEY = "fokhara-trace-origin";
const MAX_AGE_MS = 5000;

export default function FokharaCaseTrace() {
  const [origin, setOrigin] = useState<TraceOrigin | null>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }

    const raw = sessionStorage.getItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as TraceOrigin;
      if (
        !Number.isFinite(parsed.x) ||
        !Number.isFinite(parsed.y) ||
        !Number.isFinite(parsed.ts) ||
        Date.now() - parsed.ts > MAX_AGE_MS
      ) {
        return;
      }

      setOrigin(parsed);
      const frame = window.requestAnimationFrame(() => setSettled(true));
      return () => window.cancelAnimationFrame(frame);
    } catch {
      return;
    }
  }, []);

  if (!origin) return null;

  return (
    <div
      className={`${styles.trace} ${settled ? styles.settled : ""}`.trim()}
      style={
        {
          "--trace-origin-x": `${origin.x}%`,
          "--trace-origin-y": `${origin.y}%`
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <span className={styles.field} />
      <span className={styles.pressure} />
      <span className={styles.memory} />
    </div>
  );
}
