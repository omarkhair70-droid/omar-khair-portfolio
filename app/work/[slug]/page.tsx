import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectLinks from "@/components/ProjectLinks";
import { caseStudyProjects, getProject } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) return {};
  return {
    title: project.compactTitle,
    description: project.lead,
    alternates: { canonical: `/work/${project.slug}` }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const currentIndex = caseStudyProjects.findIndex((item) => item.slug === project.slug);
  const next = caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length];
  const externalLinks = project.links.filter((link) => link.kind !== "case-study");
  const galleryClass = project.visualMode === "web" ? "web-story" : "mobile-story";
  const itemClass = project.visualMode === "web" ? "web-shot" : "mobile-shot";

  return (
    <main id="main-content">
      <header className={`case-hero case-hero--${project.tone}`}>
        <div className="shell case-hero__grid">
          <div className="case-hero__meta">
            <span>{project.index} / {project.category}</span>
            <span>{project.role}</span>
            <span>{project.year} / {project.status}</span>
          </div>
          <h1>{project.title}</h1>
          {project.cover ? (
            <div className="case-hero__visual" data-reveal>
              <Image src={project.cover} alt={project.galleryAlt[0]} fill priority sizes="(max-width: 900px) 100vw, 60vw" />
            </div>
          ) : null}
          <div className="case-hero__lead" data-reveal>
            <p>{project.lead}</p>
            <ProjectLinks links={externalLinks} />
          </div>
        </div>
      </header>

      <div className="case-main">
        <section className="shell case-overview section-pad">
          <aside className="case-overview__aside" data-reveal>
            <p className="eyebrow">Project anatomy</p>
            <dl>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Status</dt><dd>{project.status}</dd></div>
              <div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div>
              <div><dt>Proof</dt><dd>{project.capabilities.join(" · ")}</dd></div>
            </dl>
          </aside>
          <div className="case-overview__story">
            <section data-reveal>
              <p className="eyebrow">01 / The tension</p>
              <h2>{project.challenge}</h2>
            </section>
            <section data-reveal>
              <p className="eyebrow">02 / The system</p>
              <h2>A product decision before a screen decision.</h2>
              <p>{project.approach}</p>
            </section>
            <section data-reveal>
              <p className="eyebrow">03 / The value</p>
              <h2>Evidence over adjectives.</h2>
              <p>{project.value}</p>
            </section>
          </div>
        </section>

        <section className="shell case-gallery">
          <div className="case-gallery__heading">
            <p className="eyebrow" data-reveal>Product evidence</p>
            <h2 data-reveal>A story told through <span className="display-serif">real states.</span></h2>
          </div>
          {project.gallery.length ? (
            <div className={galleryClass}>
              {project.gallery.map((image, index) => (
                <figure className={itemClass} key={image} data-reveal>
                  <Image
                    src={image}
                    alt={project.galleryAlt[index] ?? `${project.compactTitle} product screen ${index + 1}`}
                    fill
                    sizes={project.visualMode === "web" ? "100vw" : "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"}
                  />
                </figure>
              ))}
            </div>
          ) : (
            <div className="text-evidence" data-reveal>
              <p>The proof is the delivered experience: a clear narrative, responsive implementation and a direct path to the live work.</p>
            </div>
          )}
        </section>
      </div>

      <section className="next-project">
        <Link href={`/work/${next.slug}`} className="shell">
          <span className="eyebrow">Next case</span>
          <h2>{next.compactTitle} <span aria-hidden="true">↗</span></h2>
        </Link>
      </section>
    </main>
  );
}
