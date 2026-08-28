import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import FlagshipVisualStory from "@/components/FlagshipVisualStory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "HILTECH Case Study — Omar Khair",
  description:
    "HILTECH is a live B2B website and RFQ operations system connecting product discovery, structured requests, quotation workflows, customer follow-up, and admin visibility.",
  alternates: { canonical: "/work/hiltech" }
};

const journey = [
  ["01", "Present", "Technical services and infrastructure capability have to read clearly to a business buyer before any request begins."],
  ["02", "Discover", "A structured catalog turns a broad product inventory into something a buyer can actually navigate and compare."],
  ["03", "Collect", "The RFQ basket gathers product intent before project details are submitted, replacing scattered request messages with a deliberate flow."],
  ["04", "Review", "RFQs persist with customer and product context so the sales side can review the real request instead of reconstructing it manually."],
  ["05", "Quote", "Quotation workflow and follow-up queues create continuity between the incoming request and the business response."],
  ["06", "Track", "Customer-facing status pages keep follow-up transparent while admin operations retain control of the workflow."]
];

const operations = [
  ["RFQ management", "Urgent and high-value request attention, status updates, follow-up continuity, and stored context."],
  ["Quotation workflow", "Structured response flow with cleaner request-to-quote communication."],
  ["Product operations", "Catalog administration, inventory attention, stock-state filters, and CSV import/export support."],
  ["Analytics", "Sales, website, and product-interest visibility tied to real buyer behavior and request activity."],
  ["Command visibility", "Operational views surface requests, follow-up needs, and day-to-day business attention."],
  ["Customer continuity", "Tracking pages and request history reduce the gap between a public website and the sales workflow behind it."]
];

export default function HiltechCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#152039] text-white">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/72 transition hover:text-white">← Work index</Link>
              <p className="home-meta text-white/72">Case 03 / B2B system</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-white/68">Catalog / RFQ / operations</p>
                <p className="case-number mt-7 text-white/85">03</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.4rem,9.5vw,10rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
                  HILTECH
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.1rem)] leading-[1.06] tracking-[-0.04em] text-white/80">
                  A B2B website that keeps going after the product page — into RFQ intake, quotation, tracking, and business operations.
                </p>
              </div>
            </div>

            <EditorialCaseStudyMeta projectId="hiltech" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">The business problem</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  A brochure site would stop exactly where the useful workflow starts.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">
                  HILTECH needed corporate credibility and product discovery, but the valuable handoff is the request itself. The system therefore treats browsing, RFQ intake, sales-side review, quotation, and follow-up as one connected business journey.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="case-editorial-list mt-16">
            {journey.map(([number, title, text], index) => (
              <ScrollReveal key={title} delay={index * 32}>
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

      <FlagshipVisualStory
        projectId="hiltech"
        eyebrow="Visual story / approved B2B sequence"
        title="Credibility first. Procurement flow second."
        intro="The visual sequence moves from corporate and field context into services, catalog, product detail, RFQ basket, project details, and the procurement flow. It shows the public-facing system and the conversion path as one story."
      />

      <section className="bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Operational side</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.2vw,6.6rem)] font-semibold leading-[0.91] tracking-[-0.06em]">
                  The system is built for follow-through, not just lead capture.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#6f6a60]">
                  The public website creates the request. The operations layer keeps the request useful after submission by preserving context, making attention visible, and supporting a cleaner quote-and-follow-up workflow.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-black/15">
            {operations.map(([title, text], index) => (
              <ScrollReveal key={title} delay={index * 35}>
                <article className="grid gap-5 border-t border-black/15 py-7 sm:grid-cols-[64px_0.8fr_1.2fr]">
                  <p className="home-meta text-[#686259]">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/72">Build / business value</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  The website becomes a usable layer in the sales operation.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                  Next.js, TypeScript, Supabase, product administration, RFQ workflows, and deployment are tied to one outcome: clearer buying context and less fragmented request handling.
                </p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <a href="https://hiltech-eg.com" target="_blank" rel="noreferrer" className="home-text-link home-text-link--light">Open HILTECH ↗</a>
                  <Link href="/work/wavezero" className="home-text-link home-text-link--light">Next: WaveZero ↗</Link>
                  <Link href="/contact" className="home-text-link home-text-link--light">Discuss a business system ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
