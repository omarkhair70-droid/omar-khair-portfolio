import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Omar Khair works across digital product engineering, business development, strategic partnerships and visual direction.",
  alternates: { canonical: "/about" }
};

const lenses = [
  ["Product", "Scope, flows and prioritisation that turn an idea into one coherent product rather than a pile of features."],
  ["Engineering", "Next.js, React, TypeScript, mobile, native Android, backend systems, realtime behaviour, CI and release work."],
  ["Visual direction", "Typography, composition, Arabic/RTL product language, brand expression and project-specific interface systems."],
  ["Launch", "Deployment, store/release operations, product presentation and AI-assisted Premiere workflows for launch material."]
];

const opportunitySteps = [
  ["Discover", "Research opportunities, organisations and the operational problem behind a request."],
  ["Translate", "Turn requirements, workflows and constraints into a product or technical scope that can be evaluated."],
  ["Align", "Connect commercial discussions with technical planning, delivery assumptions and practical next actions."]
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow" data-reveal>About / Practice</p>
          <h1 data-reveal>Built between <em>disciplines.</em></h1>
          <p className="page-hero__copy" data-reveal>
            I build products and explore business opportunities across web, mobile and operational systems. My work
            connects product thinking, engineering and visual direction with business development and strategic partnerships.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="shell">
          <div className="about-intro">
            <div className="about-intro__portrait" aria-label="Omar Khair initials" data-reveal>OK</div>
            <div className="about-intro__copy" data-reveal>
              <p className="eyebrow">The short version</p>
              <h2>A builder who understands the brief.</h2>
              <p>
                I design and ship digital products, from customer-facing interfaces to the workflows underneath them.
                Alongside delivery, I research opportunities, read organisational and procurement requirements, and help turn
                an initial business conversation into a technical direction worth evaluating. Technical products prove depth;
                client work proves delivery; creative projects show how the experience can have its own identity.
              </p>
              <p>
                Background: Computer Science coursework at Nahda University in Beni Suef, alongside visual arts /
                Fine Arts preparation and a design background.
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

      <section className="opportunity-practice section-pad" aria-labelledby="opportunity-title">
        <div className="shell opportunity-practice__grid">
          <div className="opportunity-practice__heading" data-reveal>
            <p className="eyebrow">Business development / Strategic partnerships</p>
            <h2 id="opportunity-title">The work starts <em>before the build.</em></h2>
          </div>
          <div className="opportunity-practice__detail" data-reveal>
            <p className="opportunity-practice__lead">
              The same thinking used to build a product helps evaluate an opportunity: understand the need, test the fit,
              translate the requirements and make the next decision clear. This is ongoing work across opportunity
              research, partnership conversations and solution scoping—not a claim of contracts won.
            </p>
            <div className="opportunity-practice__steps">
              {opportunitySteps.map(([title, description], index) => (
                <div className="opportunity-practice__step" key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
