import type { Metadata } from "next";
import { serviceRanges } from "@/data/site";

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

    </main>
  );
}
