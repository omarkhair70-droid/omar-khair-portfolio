import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import ScrollReveal from "@/components/ScrollReveal";
import SupportingVisualStory from "@/components/SupportingVisualStory";

export const metadata: Metadata = {
  title: "Bahja Store Case Study — Omar Khair",
  description: "Arabic handmade-storefront direction with product discovery, cart-style selection, custom orders, and WhatsApp handoff.",
  alternates: { canonical: "/work/bahja-store" }
};

const ideas = [
  ["01", "Warm identity", "The storefront uses a softer handmade visual language rather than sharing Habba's brighter, playful energy."],
  ["02", "Collection discovery", "Bags, accessories, canvas work, and custom orders need clear collection boundaries in Arabic."],
  ["03", "Product clarity", "Product detail supports handmade context and decision-making without excessive ecommerce chrome."],
  ["04", "Order bag", "Cart-style selection makes the customer's intent explicit before the business conversation begins."],
  ["05", "WhatsApp handoff", "The final confirmation remains familiar and low-friction for the business model."]
];

export default function BahjaCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#d9aa78] text-[#20160f]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-black/15 pt-4">
              <Link href="/work" className="home-meta text-black/72 transition hover:text-black">← Work index</Link>
              <p className="home-meta text-black/70">Client case / boutique commerce</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-black/70">Arabic / handmade / PWA</p>
                <p className="case-number mt-7">03</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.5rem,10vw,10.5rem)] font-semibold leading-[0.77] tracking-[-0.08em]">
                  Bahja
                  <span className="home-display-serif block font-normal italic">Store.</span>
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.05rem)] leading-[1.06] tracking-[-0.04em] text-black/72">
                  A warm Arabic boutique experience built around handmade discovery, selection, and a low-friction order conversation.
                </p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="bahja" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Product / brand lens</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  A boutique storefront should feel personal before it feels transactional.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  Bahja uses Arabic-first product discovery, collection structure, handmade context, cart-style intent, and WhatsApp confirmation to create a lighter commerce experience for a small creative business.
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
        projectId="bahja"
        eyebrow="Visual story / 5 approved states"
        title="A restrained sequence for a supporting commerce project."
        intro="The approved set covers home/collections, bag discovery, product detail, cart/checkout, and checkout form."
        note="Bahja remains deliberately subordinate while the known external clipping/header issue waits for a clean recapture. The current portfolio does not hide that caveat or inflate the project beyond the evidence."
      />

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/60">Current portfolio role</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Useful proof, presented with the right weight.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">The project demonstrates Arabic-first visual commerce, handmade product presentation, cart/checkout thinking, and WhatsApp handoff while keeping the known visual caveat explicit.</p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/farrag-coffee" className="home-text-link home-text-link--light">Next: Farrag Coffee ↗</Link>
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
