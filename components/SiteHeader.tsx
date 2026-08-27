"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteNavigation } from "@/data/site";

function routeIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header sticky top-0 z-50 border-b border-black/15 bg-[#f1eee6] text-[#11110f] backdrop-blur-md">
      <div className="home-editorial-shell flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="site-wordmark group inline-flex min-w-0 items-baseline gap-2"
          aria-label="Omar Khair home"
          onClick={() => setOpen(false)}
        >
          <span className="site-wordmark-sans">OMAR</span>
          <span className="site-wordmark-divider" aria-hidden="true">/</span>
          <span className="site-wordmark-serif">Khair</span>
          <span className="site-wordmark-year" aria-hidden="true">26</span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {siteNavigation.map((item, index) => {
            const active = routeIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`site-nav-link ${active ? "site-nav-link--active" : ""}`}
              >
                <span className="site-nav-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="site-header-cta hidden sm:inline-flex"
          >
            Start a project <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="site-menu-button md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="site-menu-button-mark" aria-hidden="true">{open ? "×" : "+"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-black/15 bg-[#f1eee6] md:hidden" aria-label="Mobile navigation">
          <div className="home-editorial-shell grid py-4">
            <div className="flex items-center justify-between pb-3">
              <p className="home-meta text-[#6f6a60]">Navigate / Omar Khair</p>
              <p className="home-meta text-[#6f6a60]">2026</p>
            </div>

            {siteNavigation.map((item, index) => {
              const active = routeIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`site-mobile-nav-link ${active ? "site-mobile-nav-link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="site-mobile-nav-title">{item.label}</span>
                  <span className="home-meta text-[#6f6a60]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}

            <Link
              href="/local-business"
              className="mt-6 grid grid-cols-[1fr_auto] items-end gap-5 border-t border-black/15 pt-5"
              onClick={() => setOpen(false)}
            >
              <span>
                <span className="home-meta block text-[#6f6a60]">Limited local scope</span>
                <span className="mt-2 block text-lg font-semibold tracking-[-0.035em]">Local Launch Offer</span>
              </span>
              <span className="home-display-serif text-3xl italic">1,000 EGP ↗</span>
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
