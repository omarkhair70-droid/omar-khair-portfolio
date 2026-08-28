import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import FlagshipVisualStory from "@/components/FlagshipVisualStory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Balcona Bar Case Study — Omar Khair",
  description:
    "Balcona Bar is a cafe operating-system build spanning QR/table ordering, cashier, KDS, service, billing, owner operations, roles, realtime foundations, and AI waiter workflows.",
  alternates: { canonical: "/work/balcona" }
};

const journey = [
  ["01", "QR / table", "Start or resume a table-scoped customer session."],
  ["02", "Menu", "Browse branch menu, variants, modifiers, availability, and item detail."],
  ["03", "Cart / order", "Build the cart, validate it, and submit the customer order."],
  ["04", "Cashier", "Accept or reject intake, manage order lifecycle, shifts, bills, and payment state."],
  ["05", "Kitchen / barista", "Create preparation tasks, station tickets, and KDS / print-queue state."],
  ["06", "Waiter / service", "Handle ready orders, table attention, waiter calls, and bill requests."],
  ["07", "Bill", "Present stable billing state and record supported settlement / receipt state."],
  ["08", "Owner", "Read branch pulse, sales, shifts, item performance, readiness, and operational attention."]
];

const systemProof = [
  ["Roles & scope", "Owner, manager, cashier, waiter, kitchen, barista, and menu administration are constrained by server-side role and branch/company scope."],
  ["Realtime foundation", "Stored realtime events and SSE streams keep branch and table-session surfaces refreshable without pretending multi-instance fanout is already solved."],
  ["Menu / admin", "Branch menu management, tables/QR, availability, onboarding/readiness, and operational configuration belong to the same system."],
  ["Analytics", "Owner views derive from order, bill, payment, shift, and operations records instead of decorative dashboard numbers."],
  ["AI waiter", "The assistant is menu-grounded and table-aware, while deterministic services retain control of sensitive actions and final submission remains customer-confirmed."],
  ["Reliability", "Staging bootstrap/reset/smoke tooling and a documented flagship journey make the hosted operating demo reproducible rather than hand-waved."]
];

export default function BalconaCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/72 transition hover:text-white">← Work index</Link>
              <p className="home-meta text-white/72">Case 05 / Operations system</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-white/68">Cafe / multi-role / realtime</p>
                <p className="case-number mt-7 text-[#e7e2d7]">05</p>
              </div>
              <div>
                <h1 className="text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.075em]">
                  Balcona
                  <span className="home-display-serif block font-normal italic">Bar.</span>
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.1rem)] leading-[1.06] tracking-[-0.04em] text-white/80">
                  A cafe operating system that follows one table from customer entry through order, preparation, service, billing, and owner operations.
                </p>
              </div>
            </div>

            <EditorialCaseStudyMeta projectId="balcona-bar" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Operating spine</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  The important thing is not the menu. It is what happens after the customer taps order.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  Balcona connects customer state to cashier intake, preparation, floor service, billing, roles, and owner visibility. The value is the connected lifecycle and the permissions around it, not a polished restaurant landing page.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="case-editorial-list mt-16">
            {journey.map(([number, title, text], index) => (
              <ScrollReveal key={title} delay={index * 28}>
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

      <FlagshipVisualStory
        projectId="balcona-bar"
        eyebrow="Visual evidence / deliberately restrained"
        title="One approved public image. No invented proof."
        intro="The public curation currently approves only the customer table-entry state. Error-state staging evidence and internal/demo launcher screens were rejected, so the portfolio keeps the visual treatment honest instead of manufacturing a fake multi-screen story."
        showMissingNote
      />

      <section className="bg-[#152039] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/72">System depth</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Multiple roles, one operational truth.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                  Every surface sees a different slice of the cafe, but the underlying order, table, preparation, service, and billing lifecycle must remain consistent.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-white/15">
            {systemProof.map(([title, text], index) => (
              <ScrollReveal key={title} delay={index * 35}>
                <article className="grid gap-5 border-t border-white/15 py-7 sm:grid-cols-[64px_0.8fr_1.2fr]">
                  <p className="home-meta text-white/72">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-white/72">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e7e2d7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Current state</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.4rem,6.7vw,7.1rem)] font-semibold leading-[0.89] tracking-[-0.065em]">
                  Live / online.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#666057]">
                  The hosted operating demo is reachable today. It remains a staging-oriented product environment, but it is a real hosted system rather than an offline resurrection target.
                </p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <a href="https://balcona-bar-staging-web.vercel.app" target="_blank" rel="noreferrer" className="home-text-link">Open live demo ↗</a>
                  <Link href="/work/teswa" className="home-text-link">Back to Teswa ↗</Link>
                  <Link href="/contact" className="home-text-link">Discuss an operations system ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
