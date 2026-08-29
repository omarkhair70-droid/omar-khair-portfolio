import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Omar Khair is a product builder and creative developer based in Egypt.",
  alternates: { canonical: "/about" }
};

const lenses = [
  ["Product", "Scope, flows and prioritisation that turn an idea into one coherent product rather than a pile of features."],
  ["Engineering", "Next.js, React, TypeScript, mobile, native Android, backend systems, realtime behaviour, CI and release work."],
  ["Visual direction", "Typography, composition, Arabic/RTL product language, brand expression and project-specific interface systems."],
  ["Launch", "Deployment, store/release operations, product presentation and AI-assisted Premiere workflows for launch material."]
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow" data-reveal>About / Practice</p>
          <h1 data-reveal>Built between <em>disciplines.</em></h1>
          <p className="page-hero__copy" data-reveal>
            I am based in Egypt and build products end to end: product thinking, interface, web and mobile engineering,
            business workflows, visual direction and the work required to put the result in front of people.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="shell">
          <div className="about-intro">
            <div className="about-intro__portrait" aria-label="Omar Khair initials" data-reveal>OK</div>
            <div className="about-intro__copy" data-reveal>
              <p className="eyebrow">The short version</p>
              <h2>Not just the person who writes the code.</h2>
              <p>
                The strongest work happens when product decisions, visual decisions and engineering decisions are made together.
                That is the practice: understand the real system, give it a recognisable form, build the working behaviour and stay
                until release. Technical products prove depth. Creative projects prove range. Client projects prove delivery.
              </p>
              <p>
                Background: Computer Science coursework at Nahda University in Beni Suef, with visual arts / Fine Arts preparation
                and a design background. The public story stays factual and focused on the work.
              </p>
            </div>
          </div>
          <div className="about-facts">
            {lenses.map(([title, description], index) => (
              <article className="about-fact" key={title} data-reveal>
                <p className="eyebrow">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
