"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import styles from "./ProjectInteractionLink.module.css";

export type ProjectInteractionVariant = "nova" | "wavezero" | "balcona" | "teswa";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant: ProjectInteractionVariant;
};

const STORAGE_KEY = "portfolio-project-entry";

export default function ProjectInteractionLink({ href, children, className, variant }: Props) {
  const router = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const lastPoint = useRef({ x: 50, y: 50 });

  const updatePointer = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const localX = ((event.clientX - rect.left) / rect.width) * 100;
    const localY = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--interaction-x", `${localX}%`);
    event.currentTarget.style.setProperty("--interaction-y", `${localY}%`);
    lastPoint.current = {
      x: (event.clientX / window.innerWidth) * 100,
      y: (event.clientY / window.innerHeight) * 100
    };
  };

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor = anchorRef.current;
    if (!anchor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    const point = event.detail === 0 ? { x: 50, y: 50 } : lastPoint.current;

    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ variant, x: point.x, y: point.y, ts: Date.now() })
    );

    anchor.dataset.leaving = "true";
    window.setTimeout(() => router.push(href), 360);
  };

  return (
    <Link
      ref={anchorRef}
      href={href}
      className={`${className ?? ""} ${styles.root}`.trim()}
      data-variant={variant}
      data-reveal
      onPointerMove={updatePointer}
      onClick={navigate}
    >
      <span className={styles.layerA} aria-hidden="true" />
      <span className={styles.layerB} aria-hidden="true" />
      <span className={styles.layerC} aria-hidden="true" />
      <span className={styles.content}>{children}</span>
    </Link>
  );
}
