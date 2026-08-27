import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import { getProject, getProjectsByLane, type ProjectAction, type ProjectRecord } from "@/data/projects";
import { getProjectVisualPlan, getVisual, projectVisuals, type CuratedVisual } from "@/data/project-visuals";

export const metadata: Metadata = {
  title: "Selected Work — Omar Khair",
  description:
    "Selected work across flagship products and systems, client delivery, creative direction, and independent digital work.",
  alternates: { canonical: "/work" }
};

const flagshipOrder = ["teswa", "nova", "hiltech", "wavezero", "balcona-bar"] as const;
const clientVisualIds = new Set(["tuscanini", "habba", "bahja"]);

function actionClass(inverted: boolean) {
  return [
    "group inline-flex items-center gap-2 border-b pb-1 text-xs font-semibold uppercase tracking-[0.1em] transition",
    inverted
      ? "border-white/30 text-white hover:border-white"
      : "border-black/25 text-[#11110f] hover:border-black"
  ].join(" ");
}

function ProjectActionLink({ action, inverted = false }: { action: ProjectAction; inverted?: boolean }) {
  const label = (
    <>
      <span>{action.label}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </>
  );

  if (!action.external) {
    return <Link href={action.href} className={actionClass(inverted)}>{label}</Link>;
  }

  return <a href={action.href} target="_blank" rel="noreferrer" className={actionClass(inverted)}>{label}</a>;
}

function VisualSet({ projectId, visuals, mode }: { projectId: string; visuals: CuratedVisual[]; mode: "mobile" | "wide" | "single" }) {
  if (mode === "wide") {
    return (
      <div className="work-wide-stage" aria-label={`${projectId} visual preview`}>
        {visuals.slice(0, 3).map((visual, index) => (
          <figure key={visual.sourceId} className={`work-wide-frame work-wide-frame--${index + 1}`}>
            <Image
              src={visual.publicPath}
              alt={visual.alt}
              fill
              className="object-contain"
              sizes={index === 0 ? "(min-width: 1024px) 62vw, 94vw" : "(min-width: 1024px) 28vw, 48vw"}
            />
          </figure>
        ))}
      </div>
    );
  }

  if (mode === "single") {
    const visual = visuals[0];
    if (!visual) return null;
    return (
      <div className="work-single-stage">
        <figure className="work-single-frame">
          <Image
            src={visual.publicPath}
            alt={visual.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 46vw, 88vw"
          />
        </figure>
      </div>
    );
  }

  return (
    <div className="work-phone-stage" aria-label={`${projectId} visual preview`}>
      {visuals.slice(0, 3).map((visual, index) => (
        <figure key={visual.sourceId} className={`work-phone-frame work-phone-frame--${index + 1}`}>
          <Image
            src={visual.publicPath}
            alt={visual.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 23vw, 48vw"
          />
        </figure>
      ))}
    </div>
  );
}

function FlagshipProject({ project, index }: { project: ProjectRecord; index: number }) {
  const plan = getProjectVisualPlan(project.id);
  const visuals = plan.work.map(getVisual);
  const mode: "mobile" | "wide" | "single" =
    project.id === "hiltech" ? "wide" : project.id === "balcona-bar" ? "single" : "mobile";
  const dark = index % 2 === 0;
  const surface = dark ? "bg-[#11110f] text-[#f4f0e7]" : "bg-[#f1eee6] text-[#11110f]";
  const muted = dark ? "text-[#aaa59a]" : "text-[#6f6a60]";
  const rule = dark ? "border-white/15" : "border-black/15";

  return (
    <section className={surface}>
      <div className="home-editorial-shell py-20 sm:py-24 lg:py-32">
        <ScrollReveal>
          <div className={`grid gap-6 border-t pt-5 lg:grid-cols-[0.68fr_1.32fr] ${rule}`}>
            <div className={muted}>
              <p className="home-meta">0{index + 1} / Flagship</p>
              <p className="home-meta mt-3">{project.stack.slice(0, 3).join(" · ")}</p>
            </div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <h2 className="text-[clamp(3.8rem,8.2vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
                  {project.shortTitle}
                </h2>
                <p className={`home-meta mt-2 flex items-center gap-2 ${muted}`}>
                  <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
                  {project.status.label}
                </p>
              </div>
              <p className={`mt-7 max-w-4xl text-xl leading-snug sm:text-2xl lg:text-3xl ${muted}`}>
                {project.summary}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-12 lg:mt-16">
          <VisualSet projectId={project.id} visuals={visuals} mode={mode} />
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-9">
          <div className={`grid gap-6 border-t pt-5 lg:grid-cols-[0.68fr_1.32fr] ${rule}`}>
            <p className={`home-meta max-w-sm ${muted}`}>{project.role}</p>
            <div className="flex flex-wrap items-end justify-between gap-7">
              <div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
                {project.proof.map((item) => (
                  <span key={item} className={`text-sm ${muted}`}>{item}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                {project.actions.slice(0, 3).map((action) => (
                  <ProjectActionLink key={`${action.kind}-${action.href}`} action={action} inverted={dark} />
                ))}
              </div>
            </div>
          </div>
          {project.caveat ? <p className={`mt-4 max-w-3xl text-xs leading-relaxed ${muted}`}>{project.caveat}</p> : null}
        </ScrollReveal>
      </div>
    </section>
  );
}

function ClientVisualProject({ project, index }: { project: ProjectRecord; index: number }) {
  const plan = projectVisuals[project.id];
  const visuals = plan ? plan.work.slice(0, 3).map(getVisual) : [];

  return (
    <ScrollReveal delay={index * 45}>
      <article className="work-client-feature border-t border-black/15 py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <p className="home-meta text-[#686259]">0{index + 1} / Client</p>
            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{project.shortTitle}</h3>
            <p className="mt-5 max-w-md leading-relaxed text-[#6f6a60]">{project.summary}</p>
            <p className="home-meta mt-7 text-[#686259]">{project.status.label}</p>
            <div className="mt-6 flex flex-wrap gap-5">
              {project.actions.slice(0, 2).map((action) => (
                <ProjectActionLink key={`${action.kind}-${action.href}`} action={action} />
              ))}
            </div>
          </div>

          {visuals.length ? (
            <div className="work-client-visuals">
              {visuals.map((visual, visualIndex) => (
                <figure key={visual.sourceId} className={`work-client-phone work-client-phone--${visualIndex + 1}`}>
                  <Image
                    src={visual.publicPath}
                    alt={visual.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 18vw, 40vw"
                  />
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </ScrollReveal>
  );
}

function EditorialProjectRow({
  project,
  index,
  inverted = false,
  warm = false
}: {
  project: ProjectRecord;
  index: number;
  inverted?: boolean;
  warm?: boolean;
}) {
  const muted = inverted ? "text-white/90" : warm ? "text-black/75" : "text-[#686259]";
  const summary = inverted ? "text-white/90" : warm ? "text-black/80" : "text-[#5f5a51]";
  const rule = inverted ? "border-white/15" : "border-black/15";

  return (
    <ScrollReveal delay={index * 40}>
      <article className={`grid gap-5 border-t py-7 sm:grid-cols-[64px_0.9fr_1.1fr_auto] sm:items-start ${rule}`}>
        <p className={`home-meta ${muted}`}>{String(index + 1).padStart(2, "0")}</p>
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{project.shortTitle}</h3>
          <p className={`home-meta mt-3 ${muted}`}>{project.status.label}</p>
        </div>
        <div>
          <p className={`max-w-2xl leading-relaxed ${summary}`}>{project.summary}</p>
          <p className={`mt-4 text-sm ${muted}`}>{project.proof.join(" · ")}</p>
          {project.caveat ? <p className={`mt-3 text-xs leading-relaxed ${muted}`}>{project.caveat}</p> : null}
        </div>
        <div className="flex flex-wrap gap-4 sm:justify-end">
          {project.actions.slice(0, 2).map((action) => (
            <ProjectActionLink key={`${action.kind}-${action.href}`} action={action} inverted={inverted} />
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function WorkPage() {
  const flagships = flagshipOrder.map(getProject);
  const clientProjects = getProjectsByLane("client");
  const visualClients = clientProjects.filter((project) => clientVisualIds.has(project.id));
  const textClients = clientProjects.filter((project) => !clientVisualIds.has(project.id));
  const creativeProjects = getProjectsByLane("creative");
  const independentProjects = getProjectsByLane("independent");

  return (
    <main className="overflow-clip bg-[var(--paper)] text-[var(--ink)]">
      <section className="work-index-hero border-b border-black/15">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="grid gap-5 border-t border-black/20 pt-4 sm:grid-cols-2">
              <p className="home-meta">Selected work / complete index</p>
              <p className="home-meta text-[#686259] sm:text-right">Products · systems · client · visual · independent</p>
            </div>

            <h1 className="mt-12 select-none text-[clamp(5rem,15vw,14rem)] font-semibold uppercase leading-[0.69] tracking-[-0.085em]">
              <span className="block">Selected</span>
              <span className="home-display-serif block font-normal italic normal-case tracking-[-0.07em]">work.</span>
            </h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <p className="home-meta max-w-[17rem] leading-relaxed text-[#686259]">
                Strongest proof first. Supporting work keeps its own weight instead of competing with the flagships.
              </p>
              <p className="max-w-4xl text-[clamp(1.55rem,3vw,3.3rem)] leading-[1.05] tracking-[-0.04em]">
                This is not a repository dump. Each lane answers a different question about what I can own, build, deliver, or direct.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-16 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Flagship", "Product + engineering depth", "#flagship"],
                ["02", "Client", "Business delivery", "#client"],
                ["03", "Creative", "Visual direction + evolution", "#creative"],
                ["04", "Independent", "Self-directed work", "#independent"]
              ].map(([number, title, text, href], index) => (
                <a
                  key={title}
                  href={href}
                  className={`group py-6 sm:px-5 ${index > 0 ? "sm:border-l sm:border-black/15" : ""}`}
                >
                  <p className="home-meta text-[#686259]">{number}</p>
                  <p className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{title}</p>
                  <p className="mt-2 text-sm text-[#686259]">{text}</p>
                  <span aria-hidden="true" className="mt-5 inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="flagship" className="scroll-mt-20 bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-20 sm:py-24 lg:py-32">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#aaa59a]">01 / Flagship products & systems</p>
              <div>
                <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  The work that carries the technical story.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#aaa59a]">
                  Product ownership, native/mobile depth, backend systems, business workflows, release operations, and live product evidence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {flagships.map((project, index) => (
        <FlagshipProject key={project.id} project={project} index={index} />
      ))}

      <section id="client" className="scroll-mt-20 bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">02 / Client & business work</p>
              <div>
                <h2 className="text-[clamp(3.3rem,6.6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Real constraints. Real conversion paths.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">
                  These projects prove translation from a business need into a shipped interface, Arabic-first journey, or customer-facing workflow.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16">
            {visualClients.map((project, index) => (
              <ClientVisualProject key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 border-b border-black/15">
            {textClients.map((project, index) => (
              <EditorialProjectRow key={project.id} project={project} index={index + visualClients.length} />
            ))}
          </div>
        </div>
      </section>

      <section id="creative" className="scroll-mt-20 bg-[#ff5a2f] text-[#11110f]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-black/70">03 / Creative · brand · visual</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                  Visual judgment is part of the build.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-black/72">
                  Brand composition, Arabic-first visual direction, progression, and motion-led work sit here without pretending to be engineering flagships.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-black/20">
            {creativeProjects.map((project, index) => (
              <EditorialProjectRow key={project.id} project={project} index={index} warm />
            ))}
          </div>
        </div>
      </section>

      <section id="independent" className="scroll-mt-20 bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">04 / Independent · editorial</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                  Work that starts from a question, not a brief.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">
                  Self-directed projects stay only when they prove a dimension that commercial work does not.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-white/15">
            {independentProjects.map((project, index) => (
              <EditorialProjectRow key={project.id} project={project} index={index} inverted />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 border-t border-black/15 pt-7 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Next / go deeper</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  The index is the map. The case studies carry the decisions.
                </h2>
                <div className="mt-8 flex flex-wrap gap-7">
                  <Link href="/" className="home-text-link">Back home ↗</Link>
                  <Link href="/about" className="home-text-link">About & capabilities ↗</Link>
                  <Link href="/contact" className="home-text-link">Start a project ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
