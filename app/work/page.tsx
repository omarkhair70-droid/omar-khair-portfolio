import type { Metadata } from "next";
import Link from "next/link";
import { laneLabels, projects, type ProjectLane } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected products, systems, client work and creative direction by Omar Khair.",
  alternates: { canonical: "/work" }
};

const laneOrder: ProjectLane[] = ["flagship", "client", "creative", "independent"];

export default function WorkPage() {
  return (
    <main id="main-content">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow" data-reveal>Index / Selected work</p>
          <h1 data-reveal>Not one style.<br /><em>One point of view.</em></h1>
          <p className="page-hero__copy" data-reveal>
            Products are organised by what they prove—not by the technology used to make them. Flagship systems show depth,
            client work shows delivery, creative work shows visual authorship and independent work shows initiative.
          </p>
        </div>
      </header>

      <section className="work-index">
        <div className="shell">
          {laneOrder.map((lane) => {
            const label = laneLabels[lane];
            const laneProjects = projects.filter((project) => project.lane === lane);
            return (
              <section className="work-lane" key={lane} aria-labelledby={`lane-${lane}`}>
                <div className="work-lane__heading">
                  <p className="eyebrow" data-reveal>{label.index}</p>
                  <h2 id={`lane-${lane}`} data-reveal>{label.title}</h2>
                  <p data-reveal>{label.description}</p>
                </div>
                <div className="work-list">
                  {laneProjects.map((project) => {
                    const destination = project.caseStudy
                      ? `/work/${project.slug}`
                      : project.links.find((link) => link.kind === "live")?.href ?? "#";
                    const external = destination.startsWith("http");
                    const content = (
                      <>
                        <span className="work-row__index">{project.index}</span>
                        <span className="work-row__title">{project.compactTitle}</span>
                        <span className="work-row__category">{project.category}</span>
                        <span className="work-row__status">{project.status}</span>
                      </>
                    );
                    return external ? (
                      <a className="work-row" href={destination} target="_blank" rel="noreferrer" key={project.slug} data-reveal>
                        {content}
                      </a>
                    ) : (
                      <Link className="work-row" href={destination} key={project.slug} data-reveal>
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
