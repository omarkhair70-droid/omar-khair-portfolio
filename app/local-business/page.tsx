import type { Metadata } from "next";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "Local launch offer",
  description: "A deliberately limited 1,000 EGP launch offer for compact local business websites.",
  alternates: { canonical: "/local-business" }
};

export default function LocalBusinessPage() {
  return (
    <main id="main-content" className="local-offer">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow" data-reveal>Limited local launch</p>
          <h1 data-reveal>Small scope.<br /><em>Real finish.</em></h1>
          <p className="page-hero__copy" data-reveal>
            A compact one-page presence for a local clinic, café, service business or professional. This is a tightly limited offer,
            not the normal price of custom applications, dashboards or larger websites.
          </p>
        </div>
      </header>

      <section className="shell section-pad offer-layout">
        <div className="offer-price" data-reveal>
          <strong>1,000<br />EGP</strong>
          <span>500 EGP to start · 500 EGP on launch</span>
        </div>
        <div className="offer-content">
          <section className="offer-block" data-reveal>
            <p className="eyebrow">Included</p>
            <h2>Everything needed for one clear public page.</h2>
            <ul>
              <li>Compact multi-section page</li><li>Mobile responsive build</li>
              <li>Services or product presentation</li><li>WhatsApp and contact flow</li>
              <li>Location and social links</li><li>Basic SEO metadata</li>
              <li>Deployment</li><li>One revision</li>
            </ul>
          </section>
          <section className="offer-block" data-reveal>
            <p className="eyebrow">Separate scope</p>
            <h2>The boundary is part of the offer.</h2>
            <p>
              Domain fees, paid third-party services, custom backend work, dashboards, ordering logic, large catalogues,
              additional pages and expanded revision rounds are quoted separately. Standard projects start from 15,000 EGP.
            </p>
          </section>
          <section className="offer-block" data-reveal>
            <p className="eyebrow">Start</p>
            <h2>Send the smallest useful brief.</h2>
            <ProjectInquiryForm />
          </section>
        </div>
      </section>
    </main>
  );
}
