import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectLinks from "@/components/ProjectLinks";
import SignalCanvas from "@/components/SignalCanvas";
import { featuredProjects, getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Systems with a pulse",
  description:
    "Omar Khair builds digital products between engineering, visual direction and launch — across web, mobile and business systems.",
  alternates: { canonical: "/" }
};

const practices = [
  ["01", "Product", "Shape the problem, the sequence and the smallest coherent version worth building."],
  ["02", "Engineering", "Own the working system across interface, data, native behaviour, deployment and release gates."],
  ["03", "Visual direction", "Give the product a composition, rhythm and image language that belong to its subject."],
  ["04", "Launch", "Extend the product into release, presentation and short-form moving-image workflows when it helps."]
];

export default function Home() {
  const bahja = getProject("bahja-store")!;
  const habba = getProject("habba")!;

  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <SignalCanvas />
        <div className="shell hero__grid">
          <p className="hero__intro" data-reveal>
            <strong>Omar Khair</strong> is a product builder and creative developer working across web, mobile,
            business systems and visual direction.
          </p>
          <p className="hero__coordinates" aria-label="Based in Egypt">
            30.0444° N<br />31.2357° E<br />Egypt · 2026
          </p>
          <h1 className="hero__title" id="hero-title">
            <span>Systems</span>
            <span className="hero__title-line--two">with a <em>pulse.</em></span>
          </h1>
          <div className="hero__footer">
            <p>Product · Engineering · Image</p>
            <p>Scroll to enter</p>
            <p>Available for selected collaborations</p>
          </div>
        </div>
      </section>

      <section className="manifesto section-pad">
        <div className="shell manifesto__grid">
          <p className="eyebrow manifesto__label" data-reveal>Practice / 01</p>
          <p className="manifesto__statement" data-reveal>
            I build in the space between <em>logic and feeling</em>, product and image, Arabic and global.
          </p>
          <p className="manifesto__note" data-reveal>
            The interface is only one layer. The work includes the product decision, the system underneath it,
            the visual world around it and the discipline required to launch it.
          </p>
        </div>
      </section>

      <section className="chapter-list" id="work">
        <div className="shell chapter-list__header">
          <p className="eyebrow" data-reveal>Selected work / 02</p>
          <h2 data-reveal>Different worlds.<br /><span className="display-serif">One practice.</span></h2>
        </div>
        <div className="shell">
          {featuredProjects.map((project) => (
            <article className={`project-chapter project-chapter--${project.tone}`} key={project.slug}>
              <div className="project-chapter__meta">
                <span>{project.index}</span>
                <span>{project.category}<br />{project.year}</span>
              </div>
              <div className="project-chapter__visual" data-reveal>
                {project.cover ? (
                  <Image src={project.cover} alt={project.galleryAlt[0]} fill sizes="(max-width: 900px) 100vw, 48vw" data-parallax />
                ) : null}
              </div>
              <div className="project-chapter__copy" data-reveal>
                <h3>{project.compactTitle}</h3>
                <p>{project.lead}</p>
                <ProjectLinks links={project.links.slice(0, 2)} className="project-chapter__links" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="capability-strip" aria-label="Capabilities">
        <div className="capability-strip__track">
          {[...practices, ...practices].map((item, index) => <span key={`${item[1]}-${index}`}>{item[1]}</span>)}
        </div>
      </div>

      <section className="creative-proof section-pad">
        <div className="shell">
          <div className="creative-proof__intro">
            <p className="eyebrow" data-reveal>Creative range / 03</p>
            <h2 data-reveal>The system can still <span className="display-serif">touch.</span></h2>
          </div>
          <div className="creative-grid">
            {[bahja, habba].map((project) => (
              <Link href={`/work/${project.slug}`} className="creative-card" key={project.slug} data-reveal>
                <Image src={project.cover!} alt={project.galleryAlt[0]} fill sizes="(max-width: 900px) 100vw, 60vw" />
                <span className="creative-card__caption">
                  <span>{project.compactTitle} · {project.category}</span><span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="practice section-pad">
        <div className="shell practice__grid">
          <div className="practice__title" data-reveal>
            <p className="eyebrow">The practice / 04</p>
            <h2>One person.<br /><span className="display-serif">Four lenses.</span></h2>
          </div>
          <div className="practice__list">
            {practices.map(([number, title, description]) => (
              <article className="practice-row" key={number} data-reveal>
                <span className="practice-row__number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
