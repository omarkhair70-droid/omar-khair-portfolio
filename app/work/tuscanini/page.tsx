import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import ScrollReveal from "@/components/ScrollReveal";
import SupportingVisualStory from "@/components/SupportingVisualStory";

export const metadata: Metadata = {
  title: "Tuscanini Case Study — Omar Khair",
  description: "Arabic-first fast-food ordering experience spanning discovery, guided choice, customization, cart, checkout, tracking, and WhatsApp continuation.",
  alternates: { canonical: "/work/tuscanini" }
};

const journey = [
  ["01", "Browse", "Arabic-first categories and menu structure keep discovery fast on mobile."],
  ["02", "Guide", "Food Finder gives uncertain customers a path to a recommendation instead of forcing endless browsing."],
  ["03", "Customize", "Item-level options and add-ons happen before the user commits to the cart."],
  ["04", "Review", "Cart state makes quantities, line items, and total intent explicit before submission."],
  ["05", "Submit", "Checkout captures delivery details and turns the session into a structured order."],
  ["06", "Continue", "WhatsApp and active-order visibility preserve a familiar handoff after the digital flow."]
];

export default function TuscaniniCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#f3c54b] text-[#17130b]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-black/15 pt-4">
              <Link href="/work" className="home-meta text-black/70 transition hover:text-black">← Work index</Link>
              <p className="home-meta text-black/72">Client case / ordering</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-black/72">Arabic / RTL / conversion</p>
                <p className="case-number mt-7">01</p>
              </div>
              <div>
                <h1 className="text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.075em]">Tuscanini</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.05rem)] leading-[1.06] tracking-[-0.04em] text-black/72">
                  A mobile-first Arabic ordering journey that helps people browse, choose, customize, review, and convert without friction.
                </p>
              </div>
            </div>
            <EditorialCaseStudyMeta projectId="tuscanini" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Product / UX lens</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  The proof is the ordering flow, not a flashy restaurant homepage.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  Tuscanini is supporting product/UX evidence: Arabic-first navigation, guided food choice, customization, cart clarity, checkout, and order continuation are designed as one mobile conversion path.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="case-editorial-list mt-16">
            {journey.map(([number,title,text],index)=>(
              <ScrollReveal key={title} delay={index*32}>
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
        projectId="tuscanini"
        eyebrow="Visual story / 8 approved states"
        title="From menu discovery to a confirmed order."
        intro="The sequence covers category discovery, menu, guided recommendation, customization, cart, checkout, and order summary. The screens stay large enough to read as evidence instead of becoming decorative phone thumbnails."
      />

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/60">Business value</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Make ordering feel obvious before the customer reaches WhatsApp.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">The experience improves Arabic menu discovery, gives customers a guided choice path, structures order details, and creates a cleaner handoff for follow-up.</p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/habba" className="home-text-link home-text-link--light">Next: Habba ↗</Link>
                  <Link href="/contact" className="home-text-link home-text-link--light">Discuss an ordering experience ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
