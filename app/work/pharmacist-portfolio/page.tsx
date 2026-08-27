import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Professional Portfolio Website Case Study — Omar Khair",
  description: "A delivered professional portfolio website for a senior pharmacist, turning 21+ years of experience into a clear, responsive, shareable professional presence.",
  alternates: { canonical: "/work/pharmacist-portfolio" }
};

const scope = [
  ["01", "Structure", "Translate a long career into a readable hierarchy instead of copying a CV into a webpage."],
  ["02", "Credibility", "Make 21+ years of experience, education, courses, skills, and languages understandable before a visitor downloads anything."],
  ["03", "Action", "Keep phone, WhatsApp, email, location, and CV download paths obvious enough to make the site useful in a real professional context."],
  ["04", "Delivery", "Ship the finished responsive site and make it easy to share as one professional link."]
];

export default function PharmacistPortfolioCaseStudy() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#e7e2d7]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-black/15 pt-4">
              <Link href="/work" className="home-meta text-[#686259]">← Work index</Link>
              <p className="home-meta text-[#686259]">Client delivery / professional presence</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-[#686259]">Information architecture / responsive web</p><p className="case-number mt-7">04</p></div>
              <div>
                <h1 className="max-w-5xl text-[clamp(3.8rem,8.5vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">A career made readable.</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.4rem,2.8vw,2.9rem)] leading-[1.07] tracking-[-0.04em] text-[#656057]">
                  A complete online professional presence for a senior pharmacist, designed to turn experience into one credible link.
                </p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="pharmacist-portfolio" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">The problem</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">A CV stores information. A portfolio has to make the career legible.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">The project turns years of healthcare and management experience into a professional hierarchy that can be understood quickly by employers, colleagues, and contacts.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {scope.map(([number,title,text],index)=>(
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

      <EvidencePlaceholder projectId="pharmacist-portfolio" title="Fresh client-delivery captures to add" />

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Why it matters</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Small scope can still solve a real professional problem.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/92">This is the clearest proof for professionals who need a credible digital presence rather than a large software product.</p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/local-business" className="home-text-link home-text-link--light">Local launch offer ↗</Link>
                  <Link href="/contact" className="home-text-link home-text-link--light">Discuss a professional site ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
