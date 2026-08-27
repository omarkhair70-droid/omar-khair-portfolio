import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Abdel Aal Coffee — Creative Case Study | Omar Khair",
  description: "A creative brand/web study combining concept, visual composition, web execution, and motion/video direction.",
  alternates: { canonical: "/work/abdel-aal-coffee" }
};

const lenses = [
  ["01", "Composition", "Typography, product imagery, layout, and sequencing carry a coffee identity without defaulting to a generic template."],
  ["02", "Execution", "The visual idea was translated into a working website rather than left as a static concept board."],
  ["03", "Motion", "Video material belongs to the creative proof layer once a deliberate poster/frame and short excerpt are selected."],
  ["04", "Role", "The project proves visual authorship and creative range; it does not compete with the engineering flagships."]
];

export default function AbdelAalCoffeeCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#11110f] text-[#f4f0e7]">
      <section>
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/72">← Work index</Link>
              <p className="home-meta text-white/72">Creative / brand / motion</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-white/78">Concept / web / motion</p><p className="case-number mt-7 text-[#ff5a2f]">01</p></div>
              <div>
                <h1 className="max-w-5xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.075em]">Abdel Aal <span className="home-display-serif block font-normal italic">Coffee.</span></h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.4rem,2.9vw,3rem)] leading-[1.06] tracking-[-0.04em] text-white/78">Brand direction carried from visual composition into a working web experience and motion material.</p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="abdel-aal-coffee" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6] text-[#11110f]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Creative proof</p>
              <h2 className="max-w-5xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">The point is authorship, not technical scale.</h2>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {lenses.map(([number,title,text],index)=>(
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

      <EvidencePlaceholder projectId="abdel-aal-coffee" title="Stills + motion evidence to add deliberately" />

      <section className="bg-[#ff5a2f] text-[#11110f]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-black/70">Creative lane</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">A concept is stronger when the visual language survives the jump into a real website.</h2>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/athr" className="home-text-link">Next: Athr ↗</Link>
                  <Link href="/contact" className="home-text-link">Discuss brand / web work ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
