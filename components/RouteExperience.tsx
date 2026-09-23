"use client";

import { useEffect } from "react";

export default function RouteExperience({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let disposed = false;
    let destroy = () => undefined;

    const start = async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis")
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const context = gsap.context(() => {
        gsap.to(".route-shutter__panel", {
          scaleY: 0,
          transformOrigin: "top",
          duration: reduced ? 0 : 0.72,
          stagger: reduced ? 0 : 0.07,
          ease: "power4.inOut"
        });

        if (!reduced) {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              { y: 44, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: element, start: "top 88%", once: true }
              }
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
            gsap.fromTo(
              element,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true }
              }
            );
          });
        }
      });

      let lenis: InstanceType<typeof Lenis> | undefined;
      const tick = (time: number) => lenis?.raf(time * 1000);
      if (!reduced) {
        lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.88, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
      }

      ScrollTrigger.refresh();
      destroy = () => {
        lenis?.destroy();
        gsap.ticker.remove(tick);
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    void start();
    return () => {
      disposed = true;
      destroy();
    };
  }, []);

  return (
    <>
      <div className="route-shutter" aria-hidden="true">
        <span className="route-shutter__panel" />
        <span className="route-shutter__panel" />
        <span className="route-shutter__panel" />
      </div>
      {children}
    </>
  );
}
