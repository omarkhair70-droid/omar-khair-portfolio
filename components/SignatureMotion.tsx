"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "cover" | "reveal";

function destinationLabel(anchor: HTMLAnchorElement, url: URL) {
  const explicit = anchor.dataset.motionLabel?.trim();
  if (explicit) return explicit;

  const anchorText = anchor.textContent
    ?.replace(/\s+/g, " ")
    .replace(/[↗→←]/g, "")
    .replace(/^\d{2}\s*/, "")
    .trim();

  if (anchorText && anchorText.length <= 34) return anchorText;
  if (url.pathname === "/") return "Home";

  const segments = url.pathname.split("/").filter(Boolean);
  const raw = segments.at(-1) ?? "Next";

  return raw
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function SignatureMotion() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const [label, setLabel] = useState("Next");
  const pendingPath = useRef<string | null>(null);
  const coverTimer = useRef<number | null>(null);
  const revealTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!pendingPath.current) return;
    if (pathname !== pendingPath.current) return;

    pendingPath.current = null;
    phaseRef.current = "reveal";
    setPhase("reveal");

    if (revealTimer.current) window.clearTimeout(revealTimer.current);
    revealTimer.current = window.setTimeout(() => {
      phaseRef.current = "idle";
      setPhase("idle");
      revealTimer.current = null;
    }, 430);
  }, [pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (reducedMotion.matches || phaseRef.current !== "idle") return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.dataset.noMotion === "true") return;
      if (anchor.hasAttribute("download")) return;

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) return;
      if (/^(mailto:|tel:|sms:|javascript:)/i.test(rawHref)) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const current = new URL(window.location.href);
      if (
        url.pathname === current.pathname &&
        url.search === current.search &&
        url.hash === current.hash
      ) {
        return;
      }

      event.preventDefault();

      const destination = `${url.pathname}${url.search}${url.hash}`;
      setLabel(destinationLabel(anchor, url));
      phaseRef.current = "cover";
      setPhase("cover");

      if (coverTimer.current) window.clearTimeout(coverTimer.current);
      coverTimer.current = window.setTimeout(() => {
        pendingPath.current = url.pathname;
        router.push(destination);
        coverTimer.current = null;
      }, 360);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      if (coverTimer.current) window.clearTimeout(coverTimer.current);
      if (revealTimer.current) window.clearTimeout(revealTimer.current);
    };
  }, [router]);

  return (
    <div
      className="signature-shutter"
      data-phase={phase}
      data-testid="signature-shutter"
      aria-hidden="true"
    >
      <div className="signature-shutter-panel">
        <div className="signature-shutter-grid">
          <p className="signature-shutter-wordmark">
            <span>OMAR</span>
            <span aria-hidden="true">/</span>
            <em>Khair</em>
          </p>
          <p className="signature-shutter-index">PORTFOLIO / 26</p>
        </div>
        <div className="signature-shutter-destination">
          <span className="signature-shutter-kicker">Turning to</span>
          <span className="signature-shutter-label">{label}</span>
        </div>
        <span className="signature-shutter-rule" />
      </div>
    </div>
  );
}
