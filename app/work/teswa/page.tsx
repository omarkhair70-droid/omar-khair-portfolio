import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teswa Case Study — Omar Khair",
  description:
    "Teswa / تِسوى is an Arabic-first mobile swap marketplace product in development, focused on onboarding, marketplace flow, and engagement foundations.",
  alternates: {
    canonical: "/work/teswa"
  }
};

const builtSoFar = [
  "Arabic-first mobile UX direction centered on item-for-item exchange.",
  "Auth and onboarding foundation for account-led product usage.",
  "Marketplace browse/search flow and item detail foundations.",
  "Structured phased roadmap to sequence product delivery.",
  "Native engagement direction with push-notification groundwork."
];

const productThinking = [
  "Clarity-first mobile flow so swapping feels simpler than traditional selling.",
  "Arabic-first content structure to reduce friction for local users.",
  "Phased delivery approach to ship core behavior first, then deepen marketplace loops."
];

const backendDirection = [
  "Notification delivery planning on the backend side to support user engagement loops.",
  "Foundational architecture thinking for scalable marketplace operations over time.",
  "Roadmap-aligned backend sequencing instead of overbuilding before validation."
];

export default function TeswaCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p>
        <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          Teswa — Arabic-First Mobile Swap Marketplace
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">
          Teswa / تِسوى is a mobile marketplace product in development focused on item-for-item exchange,
          built with an Arabic-first product experience and phased execution strategy.
        </p>
        <span className="mt-6 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          Mobile Product — In Development
        </span>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/work" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">
            Back to Work
          </Link>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Product context</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            Teswa is being built as a serious product workflow rather than a landing-page concept. The direction is to
            support mobile-first discovery and exchange behaviors while keeping the scope grounded in real phased delivery.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">What Teswa is</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            Teswa is an Arabic-first mobile swap marketplace built around the idea that unused items still hold value.
            The product concept prioritizes direct item exchange journeys instead of conventional sell-first marketplace flows.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What has been built so far</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {builtSoFar.map((point) => (
            <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Product / mobile thinking</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {productThinking.map((point) => (
            <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Backend and engagement direction</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {backendDirection.map((point) => (
            <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Why this matters / what it proves</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            Teswa shows product-grade mobile execution discipline: Arabic-first UX thinking, roadmap-driven development,
            and engagement foundations linked to backend delivery planning.
          </p>
        </div>
      </section>

      <section className="section-wrap pt-10">
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9">
          <h2 className="text-3xl font-semibold tracking-tight">Need help building a real mobile product direction?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">
            I build product-ready web and mobile foundations with practical delivery phases and business-aligned execution.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-stone-900">
              Start a Project
            </Link>
            <Link href="/work/hiltech" className="rounded-full border border-white/70 px-5 py-2 text-center text-sm font-medium text-white">
              View HILTECH Case Study
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <p className="text-sm font-semibold text-stone-700">Related work</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Link href="/work/hiltech" className="text-sm text-stone-600 transition hover:text-stone-900">
              HILTECH Case Study
            </Link>
            <Link href="/work/tuscanini" className="text-sm text-stone-600 transition hover:text-stone-900">
              Tuscanini Case Study
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
