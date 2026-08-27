import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Farrag Coffee Case Study — Omar Khair",
  description: "Premium Arabic RTL coffee brand and ordering experience with guided discovery, Coffee Finder, grind selection, cart, Supabase product loading, and WhatsApp ordering.",
  alternates: { canonical: "/work/farrag-coffee" }
};

const journey = [
  ["01", "Brand", "Establish a premium Arabic coffee identity before the visitor sees a product grid."],
  ["02", "Discover", "Catalog browsing and filtering make the range easier to understand."],
  ["03", "Guide", "Coffee Finder helps customers move from preference to a suitable recommendation."],
  ["04", "Prepare", "Grind and quantity choices capture important order context before checkout."],
  ["05", "Review", "Cart state gives the customer a final structured review point."],
  ["06", "Continue", "WhatsApp remains the familiar order continuation path after the digital experience has done the hard work."]
];

export default function FarragCoffeeCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#3b2417] text-[#f4ede4]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/72">← Work index</Link>
              <p className="home-meta text-white/62">Client case / brand + ordering</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-white/68">Arabic / RTL / coffee finder</p><p className="case-number mt-7 text-[#d3a36e]">05</p></div>
              <div>
                <h1 className="text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.075em]">Farrag Coffee</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.4rem,2.9vw,3rem)] leading-[1.06] tracking-[-0.04em] text-white/80">A premium Arabic coffee experience that combines brand storytelling with guided product choice and ordering.</p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="farrag-coffee-v2" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Brand / UX lens</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.1rem,6.1vw,6.6rem)] font-semibold leading-[0.91] tracking-[-0.06em]">Help the customer understand the coffee before asking them to order it.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">Farrag V2 connects premium Arabic presentation, product discovery, recommendation, grind selection, cart review, Supabase-backed product loading, and WhatsApp continuation in one flow.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {journey.map(([number,title,text],index)=>(
              <ScrollReveal key={title} delay={index*32}>
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

      <EvidencePlaceholder projectId="farrag-coffee-v2" title="Fresh Farrag V2 evidence to capture" />

      <section className="bg-[#ff5a2f] text-[#11110f]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-black/70">Portfolio role</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Brand direction + guided commerce.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-black/72">The old screenshots are intentionally not promoted into the new curation. The page stays strong typographically until current V2 captures are deliberately added.</p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/abdel-aal-coffee" className="home-text-link">Next: Abdel Aal Coffee ↗</Link>
                  <Link href="/contact" className="home-text-link">Discuss a brand experience ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
