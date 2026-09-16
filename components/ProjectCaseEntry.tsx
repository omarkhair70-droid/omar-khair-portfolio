"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { ProjectInteractionVariant } from "./ProjectInteractionLink";
import styles from "./ProjectCaseEntry.module.css";

type EntryState = {
  variant: ProjectInteractionVariant;
  x: number;
  y: number;
  ts: number;
};

type Props = {
  variant: ProjectInteractionVariant;
};

const STORAGE_KEY = "portfolio-project-entry";
const MAX_AGE_MS = 5000;

export default function ProjectCaseEntry({ variant }: Props) {
  const [entry, setEntry] = useState<EntryState | null>(null);
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
      const parsed = JSON.parse(raw) as EntryState;
      if (
        parsed.variant !== variant ||
        !Number.isFinite(parsed.x) ||
        !Number.isFinite(parsed.y) ||
        !Number.isFinite(parsed.ts) ||
        Date.now() - parsed.ts > MAX_AGE_MS
      ) {
        return;
      }

      setEntry(parsed);
      const frame = window.requestAnimationFrame(() => setSettled(true));
      return () => window.cancelAnimationFrame(frame);
    } catch {
      return;
    }
  }, [variant]);

  if (!entry) return null;

  return (
    <div
      className={`${styles.root} ${settled ? styles.settled : ""}`.trim()}
      data-variant={variant}
      style={
        {
          "--entry-x": `${entry.x}%`,
          "--entry-y": `${entry.y}%`
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <span className={styles.layerA} />
      <span className={styles.layerB} />
      <span className={styles.layerC} />
    </div>
  );
}
