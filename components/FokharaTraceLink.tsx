"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function FokharaTraceLink({ href, children, className }: Props) {
  const router = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const updatePointer = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--trace-x", `${x}%`);
    event.currentTarget.style.setProperty("--trace-y", `${y}%`);
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
    anchor.dataset.leaving = "true";

    window.setTimeout(() => {
      router.push(href);
    }, 360);
  };

  return (
    <Link
      ref={anchorRef}
      href={href}
      className={`${className ?? ""} fokhara-trace-link`.trim()}
      onPointerMove={updatePointer}
      onClick={navigate}
      data-reveal
    >
      <span className="fokhara-trace-link__wash" aria-hidden="true" />
      <span className="fokhara-trace-link__imprint" aria-hidden="true" />
      <span className="fokhara-trace-link__content">{children}</span>
    </Link>
  );
}
