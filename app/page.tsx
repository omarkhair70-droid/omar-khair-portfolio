import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import { getProject, type ProjectAction, type ProjectRecord } from "@/data/projects";
import { getProjectVisualPlan, getVisual, type CuratedVisual } from "@/data/project-visuals";
import {
  capabilityPillars,
  contactLinks,
  localLaunchOffer,
  serviceRanges,
  siteIdentity,
  workingApproach
} from "@/data/site";

export const metadata: Metadata = {
  title: "Omar Khair — Product Builder | Web & Mobile",
  description:
    "Product, engineering, visual direction, and launch work across mobile products, business systems, Arabic-first experiences, and client delivery.",
  alternates: { canonical: "/" }
};

type FeatureConfig = {
  id: "teswa" | "nova" | "hiltech" | "wavezero";
  index: string;
  kicker: string;
  statement: string;
  sectionClass: string;
  textClass: string;
  mutedClass: string;
  ruleClass: string;
  mediaClass: string;
  layout: "phones" | "wide";
  visualCount: number;
};

const featureConfigs: FeatureConfig[] = [
  {
    id: "teswa",
    index: "01",
    kicker: "Marketplace / social exchange",
    statement: "A product where discovery, trust, negotiation, and conversation become one continuous exchange.",
    sectionClass: "bg-[#11110f]",
    textClass: "text-[#f4f0e7]",
    mutedClass: "text-[#aaa59a]",
    ruleClass: "border-white/15",
    mediaClass: "bg-[#d8ff65]",
    layout: "phones",
    visualCount: 2
  },
  {
    id: "nova",
    index: "02",
    kicker: "Native social product",
    statement: "Social surfaces shaped as a coherent product system — from Orbit and Tonight to media, messaging, and identity.",
    sectionClass: "bg-[#3157ff]",
    textClass: "text-white",
    mutedClass: "text-white/90",
    ruleClass: "border-white/20",
    mediaClass: "bg-[#ebe8df]",
    layout: "phones",
    visualCount: 3
  },
  {
    id: "hiltech",
    index: "03",
    kicker: "Business system / infrastructure",
    statement: "A technical business presence that connects field credibility, product discovery, RFQ workflows, and procurement.",
    sectionClass: "bg-[#ebe7dc]",
    textClass: "text-[#11110f]",
    mutedClass: "text-[#676259]",
    ruleClass: "border-black/15",
    mediaClass: "bg-[#141b2d]",
    layout: "wide",
    visualCount: 2
  },
  {
    id: "wavezero",
    index: "04",
    kicker: "Music / native playback",
    statement: "A calm local-first music experience carried by Flutter UI and native Kotlin Media3 playback underneath.",
    sectionClass: "bg-[#1c151b]",
    textClass: "text-[#f5eee8]",
    mutedClass: "text-[#b9aeb5]",
    ruleClass: "border-white/15",
    mediaClass: "bg-[#f08b6e]",
    layout: "phones",
    visualCount: 2
  }
];

const clientProofIds = ["pharmacist-portfolio", "tuscanini", "habba"];

function projectVisuals(projectId: string, count: number): CuratedVisual[] {
  const plan = getProjectVisualPlan(projectId);
  return plan.home.slice(0, count).map(getVisual);
}

function Action({ action, inverted = false }: { action: ProjectAction; inverted?: boolean }) {
  const className = [
    "group inline-flex items-center gap-2 border-b pb-1 text-sm font-medium transition",
    inverted
      ? "border-white/35 text-white hover:border-white"
      : "border-black/30 text-[#11110f] hover:border-black"
  ].join(" ");

  const label = (
    <>
      <span>{action.label}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </>
  );

  if (!action.external) {
    return (
      <Link href={action.href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={action.href} target="_blank" rel="noreferrer" className={className}>
      {label}
    </a>
  );
}

function ProjectFeature({ config }: { config: FeatureConfig }) {
  const project = getProject(config.id);
  const visuals = projectVisuals(config.id, config.visualCount);
  const inverted = config.textClass.includes("white") || config.textClass.includes("f4f0e7") || config.textClass.includes("f5eee8");

  return (
    <section className={`home-project-scene ${config.sectionClass} ${config.textClass}`}>
      <div className="home-editorial-shell py-20 sm:py-24 lg:py-32">
        <ScrollReveal>
          <div className={`grid gap-6 border-t pt-5 lg:grid-cols-[0.7fr_1.3fr] ${config.ruleClass}`}>
            <div className={`flex items-start justify-between gap-6 lg:block ${config.mutedClass}`}>
              <p className="home-meta">{config.index} / FLAGSHIP</p>
              <p className="home-meta lg:mt-3">{config.kicker}</p>
            </div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
                  {project.shortTitle}
                </h2>
                <p className={`home-meta mt-2 flex items-center gap-2 ${config.mutedClass}`}>
                  <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
                  {project.status.label}
                </p>
              </div>
              <p className={`mt-8 max-w-3xl text-xl leading-snug sm:text-2xl lg:text-3xl ${config.mutedClass}`}>
                {config.statement}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={90} className="mt-12 lg:mt-16">
          <div
            className={
              config.layout === "wide"
                ? `home-wide-composition ${config.mediaClass}`
                : `home-phone-composition ${config.mediaClass}`
            }
          >
            {visuals.map((visual, index) => (
              <figure
                key={visual.sourceId}
                className={
                  config.layout === "wide"
                    ? `home-wide-shot home-wide-shot--${index + 1}`
                    : `home-phone-shot home-phone-shot--${index + 1}`
                }
              >
                <Image
                  src={visual.publicPath}
                  alt={visual.alt}
                  fill
                  className="object-contain"
                  sizes={
                    config.layout === "wide"
                      ? "(min-width: 1024px) 72vw, 94vw"
                      : "(min-width: 1024px) 28vw, 54vw"
                  }
                  priority={config.index === "01" && index === 0}
                />
              </figure>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140} className="mt-10">
          <div className={`grid gap-6 border-t pt-5 lg:grid-cols-[0.7fr_1.3fr] ${config.ruleClass}`}>
            <p className={`home-meta ${config.mutedClass}`}>{project.role}</p>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
                {project.proof.map((item) => (
                  <span key={item} className={`text-sm ${config.mutedClass}`}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                {project.actions.slice(0, 3).map((action) => (
                  <Action key={`${action.kind}-${action.href}`} action={action} inverted={inverted} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ClientProofRow({ project, index }: { project: ProjectRecord; index: number }) {
  return (
    <Link
      href={project.caseStudyPath ?? "/work"}
      className="group grid gap-4 border-t border-black/15 py-6 transition-colors hover:bg-black/[0.035] sm:grid-cols-[64px_1fr_auto] sm:items-center sm:px-3"
    >
      <span className="home-meta text-[#686259]">{String(index + 1).padStart(2, "0")}</span>
      <span>
        <span className="block text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{project.shortTitle}</span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-[#6f6a60]">{project.summary}</span>
      </span>
      <span className="flex items-center justify-between gap-5 sm:justify-end">
        <span className="home-meta text-[#686259]">{project.status.label}</span>
        <span aria-hidden="true" className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

export default function Home() {
  const clientProof = clientProofIds.map(getProject);

  return (
    <main className="overflow-clip bg-[var(--paper)] text-[var(--ink)]">
      <section className="home-hero min-h-[calc(100svh-4rem)] border-b border-black/15">
        <div className="home-editorial-shell flex min-h-[calc(100svh-4rem)] flex-col py-7 sm:py-9">
          <div className="grid gap-5 border-t border-black/20 pt-4 sm:grid-cols-2">
            <p className="home-meta">{siteIdentity.title}</p>
            <div className="grid grid-cols-2 gap-4 sm:justify-self-end sm:text-right">
              <p className="home-meta">{siteIdentity.location}</p>
              <p className="home-meta">Selected work · 2026</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center py-12 sm:py-16">
            <ScrollReveal>
              <h1 className="select-none text-[clamp(5.3rem,17vw,15rem)] font-semibold uppercase leading-[0.67] tracking-[-0.085em]">
                <span className="block">Omar</span>
                <span className="home-display-serif block font-normal italic tracking-[-0.07em]">Khair</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="mt-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                <div className="hidden lg:block">
                  <p className="home-meta max-w-[16rem] leading-relaxed text-[#686259]">
                    Product / Engineering / Visual Direction / Launch
                  </p>
                </div>
                <div>
                  <p className="max-w-4xl text-[clamp(1.65rem,3.3vw,3.8rem)] leading-[1.03] tracking-[-0.045em]">
                    I build digital products end-to-end — from direction and system behavior to the interface people touch and the release they can actually use.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-6">
                    <Link href="#selected-work" className="home-text-link">
                      Selected work <span aria-hidden="true">↓</span>
                    </Link>
                    <Link href="/contact" className="home-text-link">
                      Start a project <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 border-t border-black/20 pt-4 sm:grid-cols-2">
            <p className="home-meta text-[#686259]">Scroll to enter the work</p>
            <p className="home-meta text-[#686259] sm:text-right">Web · Mobile · Systems · Creative</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-black/15 bg-[#11110f] py-5 text-[#f4f0e7]" aria-label="Core capabilities">
        <p className="sr-only">Product, Engineering, Visual Direction, Launch</p>
        <div className="home-ticker" aria-hidden="true">
          <div className="home-ticker-track">
            <span>PRODUCT</span><i>✦</i><span>ENGINEERING</span><i>✦</i><span>VISUAL DIRECTION</span><i>✦</i><span>LAUNCH</span><i>✦</i>
            <span>PRODUCT</span><i>✦</i><span>ENGINEERING</span><i>✦</i><span>VISUAL DIRECTION</span><i>✦</i><span>LAUNCH</span><i>✦</i>
          </div>
        </div>
      </section>

      <div id="selected-work">
        {featureConfigs.map((config) => (
          <ProjectFeature key={config.id} config={config} />
        ))}
      </div>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-40">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="home-meta text-[#686259]">Capabilities / 04 dimensions</p>
              </div>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  One product story, carried across disciplines.
                </h2>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#6f6a60] sm:text-2xl">
                  {siteIdentity.summary} The range matters because the handoff points between product, interface, engineering, and release are where work usually breaks.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-black/15">
            {capabilityPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 45}>
                <div className="grid gap-5 border-t border-black/15 py-7 sm:grid-cols-[64px_0.75fr_1.25fr] sm:items-start">
                  <p className="home-meta text-[#686259]">0{index + 1}</p>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{pillar.title}</h3>
                  <div>
                    <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{pillar.text}</p>
                    <p className="mt-4 text-sm text-[#686259]">{pillar.proof.join(" · ")}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <p className="home-meta text-[#686259]">Client & business proof</p>
              <div>
                <h2 className="text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Different constraints. Same ownership.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#6f6a60]">
                  Client work sits quieter than the flagships, but it proves something different: translating a real business need into a usable, shipped experience.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-14 border-b border-black/15">
            {clientProof.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 55}>
                <ClientProofRow project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <Link href="/work" className="home-text-link">
              Explore the complete work index <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <p className="home-meta text-white/90">Work with me</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  Scope the real work before pricing the label.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/90">
                  A compact launch page and a product system are not the same offer. The starting ranges stay visible so the conversation begins with scope, not guesswork.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-b border-white/25">
              {serviceRanges.slice(0, 4).map((service, index) => (
                <ScrollReveal key={service.name} delay={index * 45}>
                  <div className="grid gap-3 border-t border-white/25 py-6 sm:grid-cols-[56px_1fr_auto] sm:items-center">
                    <span className="home-meta text-white/90">0{index + 1}</span>
                    <span className="text-xl font-medium sm:text-2xl">{service.name}</span>
                    <span className="text-xl font-semibold sm:text-2xl">{service.price}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={120}>
              <div className="border-t border-white/25 pt-6">
                <p className="home-meta text-white/90">Separate local path</p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em]">{localLaunchOffer.name}</h3>
                <p className="mt-3 home-display-serif text-6xl italic">{localLaunchOffer.price}</p>
                <p className="mt-5 max-w-md leading-relaxed text-white/90">{localLaunchOffer.summary}</p>
                <Link href="/local-business" className="mt-7 inline-flex border-b border-white/40 pb-1 text-sm font-medium hover:border-white">
                  See the limited scope ↗
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <p className="home-meta text-[#686259]">Working approach</p>
              <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                From unclear problem to something people can use.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {workingApproach.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 50} className="h-full">
                <article className="h-full border-black/15 px-0 py-7 sm:px-5 lg:border-l lg:first:border-l-0">
                  <p className="home-meta text-[#686259]">{item.step}</p>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-[#6f6a60]">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-40">
          <ScrollReveal>
            <p className="home-meta text-[#aaa59a]">Contact / next project</p>
            <h2 className="mt-8 max-w-6xl text-[clamp(4rem,10vw,11rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]">
              Let&apos;s build
              <span className="home-display-serif block font-normal italic normal-case">something useful.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-14 grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-[0.72fr_1.28fr]">
              <p className="home-meta text-[#aaa59a]">Direct / structured / no ceremony</p>
              <div>
                <p className="max-w-3xl text-xl leading-relaxed text-[#c6c0b6] sm:text-2xl">
                  Send the product, business workflow, or launch problem as it is. We can shape the smallest coherent scope before implementation starts.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                  <Link href="/contact" className="home-text-link home-text-link--light">Open contact page ↗</Link>
                  <a href={contactLinks.email.href} className="home-text-link home-text-link--light">Email ↗</a>
                  <a href={contactLinks.linkedin.href} target="_blank" rel="noreferrer" className="home-text-link home-text-link--light">LinkedIn ↗</a>
                  <a href={contactLinks.whatsapp.href} target="_blank" rel="noreferrer" className="home-text-link home-text-link--light">WhatsApp ↗</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
