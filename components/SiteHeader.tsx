"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <header className="site-header site-header--home">
        <div className="site-header__inner site-header__inner--home">
          <Link href="/" className="wordmark wordmark--home" aria-label="Omar Khair home">
            <span>OMAR</span>
            <span className="wordmark__serif">Khair</span>
          </Link>
          <nav className="site-nav site-nav--home" aria-label="Primary navigation">
            <Link href="/work">Index</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="wordmark" aria-label="Omar Khair home">
          <span>OMAR</span>
          <span className="wordmark__serif">Khair</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="availability">
          <span aria-hidden="true" />
          Available for selected work
        </Link>
      </div>
    </header>
  );
}
