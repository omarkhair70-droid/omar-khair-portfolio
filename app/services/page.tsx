import type { Metadata } from "next";
import Link from "next/link";
import { localLaunchOffer, serviceRanges } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & project ranges",
  description: "Project scopes for websites, ordering experiences, business systems and mobile products.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow">Services / project ranges</p>
          <h1>Scope the product <em>first.</em></h1>
          <p className="page-hero__copy">
            Starting ranges keep the conversation attached to the real work. Content, backend logic, release needs and operational constraints still shape the final scope.
          </p>
        </div>
      </header>

      <section className="services-index section-pad">
        <div className="shell">
          <div className="services-index__intro" data-reveal>
            <p className="eyebrow">Standard work</p>
            <h2>Different systems should not arrive in the same package.</h2>
          </div>
          <div className="service-list">
            {serviceRanges.map((service, index) => (
              <article className="service-row" key={service.name} data-reveal>
                <span>0{index + 1}</span>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
                <strong>{service.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-local">
        <div className="shell service-local__grid">
          <div data-reveal>
            <p className="eyebrow">Separate local path</p>
            <p className="service-local__price">{localLaunchOffer.price}</p>
          </div>
          <div data-reveal>
            <h2>{localLaunchOffer.name}</h2>
            <p>{localLaunchOffer.summary}</p>
            <p className="eyebrow">{localLaunchOffer.payment}</p>
            <Link className="project-link" href="/local-business">Open the limited offer ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
