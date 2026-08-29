import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer__inner">
        <p className="eyebrow" data-reveal>
          Start somewhere real
        </p>
        <div className="site-footer__headline" data-reveal>
          <span>Have a system, product</span>
          <span>
            or <em>strange idea?</em>
          </span>
        </div>
        <a className="contact-link" href="mailto:omar.khair70@gmail.com" data-reveal>
          omar.khair70@gmail.com
          <span aria-hidden="true">↗</span>
        </a>
        <div className="site-footer__meta">
          <p>Egypt · Working worldwide</p>
          <div>
            <a href="https://github.com/omarkhair70-droid" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/omar-khair-70" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://wa.me/201151891310" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link href="/services">Services</Link>
            <Link href="/local-business">Local offer</Link>
          </div>
          <p>© 2026 Omar Khair</p>
        </div>
      </div>
    </footer>
  );
}
