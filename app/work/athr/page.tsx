import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Athr Studio — Origins / Creative Direction | Omar Khair",
  description: "An early self-directed studio website presented as grouped origins and creative-direction evidence.",
  alternates: { canonical: "/work/athr" }
};

const role = [
  ["01", "Origins", "Keep the early visual language visible as progression context rather than rewriting history."],
  ["02", "Studies", "Before/after work and independent design exploration show how composition judgment developed."],
  ["03", "Web", "The project turns visual studies into a browsable web presentation."],
  ["04", "Motion", "Motion evidence is reserved for the strongest deliberate excerpt instead of filling the page with arbitrary footage."],
  ["05", "Hierarchy", "Athr remains subordinate to the current flagship products and is not presented as engineering proof."]
];

export default function AthrCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/90">← Work index</Link>
              <p className="home-meta text-white/90">Origins / creative direction</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-white/90">Progression / visual studies</p><p className="case-number mt-7 text-white/95">02</p></div>
              <div>
                <h1 className="text-[clamp(4.8rem,11vw,11.5rem)] font-semibold leading-[0.76] tracking-[-0.08em]">Athr</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.4rem,2.9vw,3rem)] leading-[1.06] tracking-[-0.04em] text-white/92">Early visual direction kept because progression is evidence too — when it is framed honestly.</p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="athr" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">What it proves</p>
              <h2 className="max-w-5xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">Not everything needs to be a flagship to be useful evidence.</h2>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {role.map(([number,title,text],index)=>(
              <ScrollReveal key={title} delay={index*36}>
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

      <EvidencePlaceholder projectId="athr" title="Origins evidence waiting on deliberate selection" />

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Progression</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">The work gets stronger when the earlier work is not pretending to be something else.</h2>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/sultan-al-burhan" className="home-text-link home-text-link--light">Next: Sultan Al-Burhan ↗</Link>
                  <Link href="/work" className="home-text-link home-text-link--light">All work ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
