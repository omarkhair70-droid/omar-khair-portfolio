import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sultan Al-Burhan — Independent Editorial Project | Omar Khair",
  description: "An independent Arabic editorial/product project spanning a public landing experience, structured document reader, and separate launch/presentation layer.",
  alternates: { canonical: "/work/sultan-al-burhan" }
};

const structure = [
  ["01", "Landing", "A public entry point frames the concept before the reader enters the full document."],
  ["02", "Reader", "A dedicated document path and structured parts keep long-form work readable instead of forcing it into one marketing page."],
  ["03", "Architecture", "Site and document share a deliberate static-web architecture and release workflow."],
  ["04", "Launch", "Video and presentation material stay as a separate evidence layer until deliberately selected."]
];

export default function SultanAlBurhanCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/72">← Work index</Link>
              <p className="home-meta text-white/72">Independent / editorial</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-white/78">Concept / document / publishing</p><p className="case-number mt-7 text-[#f1eee6]">01</p></div>
              <div>
                <h1 className="max-w-5xl text-[clamp(3.7rem,8.4vw,9rem)] font-semibold leading-[0.81] tracking-[-0.07em]">Sultan Al-Burhan</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.4rem,2.9vw,3rem)] leading-[1.06] tracking-[-0.04em] text-white/78">An independent editorial product shaped around a long-form document, a reading architecture, and its own launch layer.</p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="sultan-al-burhan" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Editorial product</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">Independent work can still demonstrate product judgment.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">The value here is choosing how a concept enters, how a long document is structured, how it is published, and how launch material remains distinct from the reading experience.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {structure.map(([number,title,text],index)=>(
              <ScrollReveal key={title} delay={index*40}>
                <article className="case-editorial-row">
                  <p className="home-meta text-[#686259]">{number}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <EvidencePlaceholder projectId="sultan-al-burhan" title="Editorial and launch visuals to add only after deliberate selection" />

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Independent lane</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">A self-directed question can become a real digital object without pretending to be client work.</h2>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work" className="home-text-link home-text-link--light">Back to work index ↗</Link>
                  <Link href="/about" className="home-text-link home-text-link--light">About the broader practice ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
