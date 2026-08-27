import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import ScrollReveal from "@/components/ScrollReveal";
import SupportingVisualStory from "@/components/SupportingVisualStory";

export const metadata: Metadata = {
  title: "Habba Case Study — Omar Khair",
  description: "Arabic-first handmade-accessories storefront with strong visual direction, guided discovery, product flows, and WhatsApp conversion.",
  alternates: { canonical: "/work/habba" }
};

const ideas = [
  ["01", "Brand first", "The storefront opens with a strong Arabic visual identity instead of behaving like a generic ecommerce theme."],
  ["02", "Guide discovery", "Choose-your-way and Drop flows create a playful path for customers who do not know exactly what they want."],
  ["03", "Keep detail useful", "Product detail supports giftable handmade products without overwhelming the customer."],
  ["04", "Add momentum", "Cart and cross-sell states keep the journey moving after the first item is chosen."],
  ["05", "Convert naturally", "WhatsApp becomes a deliberate final handoff with product-aware context, not a floating button bolted onto the page."]
];

export default function HabbaCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#f6b6d5] text-[#24131d]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-black/15 pt-4">
              <Link href="/work" className="home-meta text-black/70 transition hover:text-black">← Work index</Link>
              <p className="home-meta text-black/65">Client case / visual commerce</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-black/65">Arabic / brand / guided commerce</p>
                <p className="case-number mt-7">02</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.8rem,11vw,11rem)] font-semibold leading-[0.76] tracking-[-0.08em]">Habba</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.05rem)] leading-[1.06] tracking-[-0.04em] text-black/72">
                  A handmade-accessories storefront where visual personality and guided discovery do the selling together.
                </p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="habba" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Portfolio lens</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Visual direction and commerce thinking are the proof.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  Habba is not presented as an engineering flagship. It earns its place through Arabic-first art direction, product storytelling, guided discovery, cart momentum, and a conversion path that fits how the business actually sells.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {ideas.map(([number,title,text],index)=>(
              <ScrollReveal key={title} delay={index*35}>
                <article className="case-editorial-row">
                  <p className="home-meta text-[#5f5a51]">{number}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SupportingVisualStory
        projectId="habba"
        eyebrow="Visual story / 8 approved states"
        title="A storefront that keeps changing shape as the shopper gets closer to a choice."
        intro="The sequence moves from brand home and featured products into product detail, guided choice, Drop builder/result, cart/cross-sell, and WhatsApp conversion."
      />

      <section className="bg-[#ff5a2f] text-[#11110f]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-black/72">Why it matters</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Brand personality is useful when it improves the path to purchase.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-black/72">Habba demonstrates that visual identity, Arabic-first composition, discovery mechanics, and a familiar WhatsApp conversion path can work as one commercial experience.</p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/bahja-store" className="home-text-link">Next: Bahja ↗</Link>
                  <Link href="/contact" className="home-text-link">Discuss a storefront ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
