import Link from "next/link";

export default function SiteHeader() {
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
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link href="/#contact" className="availability">
          <span aria-hidden="true" />
          Available for selected work
        </Link>
      </div>
    </header>
  );
}
