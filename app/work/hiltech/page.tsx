import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HILTECH Case Study — Omar Khair",
  description: "Case study of a network infrastructure website and RFQ system built by Omar Khair."
};

const challengePoints = [
  "Present a technical infrastructure company clearly.",
  "Organize products into a browsable catalog.",
  "Let customers build RFQ requests instead of sending vague WhatsApp messages.",
  "Store RFQ data safely.",
  "Give admins a way to review and manage requests.",
  "Support customer tracking and internal email notifications."
];

const buildItems = [
  "Company website and service presentation",
  "Product catalog with category structure",
  "RFQ Command Center",
  "Quotation Builder for structured responses",
  "Product inventory management context",
  "CSV product import/export",
  "Customer RFQ tracking pages",
  "Customer quote approval / rejection / change request flow",
  "Admin dashboard visibility",
  "Safe analytics events for product and RFQ actions",
  "Internal email notifications",
  "SEO technical setup"
];

const businessValue = [
  "Clearer product and service presentation for technical buyers.",
  "Better request structure compared with scattered chats.",
  "RFQ and quotation steps with cleaner follow-up context.",
  "Better internal visibility across products, requests, and status updates.",
  "A practical website foundation that can expand with operations."
];

const techNotes = [
  "Next.js",
  "Vercel",
  "Supabase",
  "Server-side RFQ handling",
  "Admin dashboard",
  "Email notification integration",
  "SEO basics"
];

export default function HiltechCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Featured System Project</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          HILTECH — Network Infrastructure Website & RFQ System
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
          A full business website and RFQ workflow for a network infrastructure company — built to present services,
          organize product requests, and support sales operations. Not just a website — a simple operating system for
          product requests, RFQs, inventory context, quotations, and customer follow-up.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://hiltech-eg-website.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
          >
            Visit Live Project
          </a>
          <Link href="/#contact" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900">
            Start a similar project
          </Link>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            HILTECH needed more than a standard company website. The project required a clear company presence,
            structured product catalog, RFQ request flow, admin visibility, customer tracking, quotation handling, and
            operational support for sales requests.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {challengePoints.map((point) => (
            <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-stone-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildItems.map((item) => (
            <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-stone-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Screenshots / Visual Proof</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm lg:row-span-2">
            <Image
              src="/project-screenshots/hiltech-homepage.png"
              alt="HILTECH homepage and company positioning"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-sm text-stone-600">Homepage / company positioning</figcaption>
          </figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
            <Image
              src="/project-screenshots/hiltech-rfq-basket.png"
              alt="HILTECH RFQ basket and request flow"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-sm text-stone-600">RFQ basket / request flow</figcaption>
          </figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
            <Image
              src="/project-screenshots/hiltech-products-catalog.png"
              alt="HILTECH product catalog and browsing experience"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-sm text-stone-600">Product catalog / product browsing</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">System Flow</h2>
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-relaxed text-stone-700">
            Customer browses products → Adds items to RFQ basket → Submits project details → Request is saved to
            database → Admin reviews and updates status → Customer can track request → Internal email notification
            supports follow-up
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Business Value</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {businessValue.map((point) => (
            <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Tech / Build Notes</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techNotes.map((item) => (
            <li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap pt-10">
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9">
          <h2 className="text-3xl font-semibold tracking-tight">Need a website that does more than look good?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">
            I build websites that help businesses present, collect, manage, and follow up on real customer requests.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">
              Start a project
            </Link>
            <Link href="/" className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white">
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
