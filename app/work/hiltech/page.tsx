import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HILTECH Case Study — Omar Khair",
  description: "Network infrastructure website and RFQ system case study by Omar Khair."
};

const tags = ["B2B website", "RFQ system", "Product catalog", "Admin visibility", "Quotation workflow"];
const challengePoints = [
  "Present a technical infrastructure company clearly to business buyers.",
  "Organize products into a structured catalog that supports discovery.",
  "Replace scattered request messages with a clearer RFQ flow.",
  "Store RFQs and request context safely for follow-up.",
  "Give admins a way to review requests and manage status updates."
];
const buildItems = [
  "Company website and service presentation",
  "Category-based product catalog",
  "RFQ basket and submission flow",
  "Quotation Builder for structured responses",
  "Customer RFQ tracking pages",
  "Admin dashboard with request visibility",
  "Inventory context and product operations support",
  "Internal notification and analytics event hooks"
];
const opsPoints = [
  "RFQ submissions are saved with customer and product context.",
  "Admins can review, update, and follow request status.",
  "Quotation steps are structured for cleaner communication.",
  "Customer tracking pages support transparent follow-up."
];
const businessValue = [
  "Clearer product and service presentation for technical buyers.",
  "More structured RFQ intake compared with scattered chats.",
  "Better visibility across requests, quotes, and follow-up status.",
  "A website foundation designed to support ongoing operations."
];
const buildNotes = ["Next.js", "TypeScript + React", "Tailwind CSS", "Supabase", "Admin dashboard", "Vercel"];

export default function HiltechCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p>
        <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          HILTECH — Network Infrastructure Website &amp; RFQ System
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">
          A business-focused website and RFQ workflow built around product discovery, structured request collection,
          admin visibility, and customer follow-up.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">{tag}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="https://hiltech-eg-website.vercel.app/" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">View Live Project</a>
          <Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900">Back to Work</Link>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Overview</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">HILTECH needed more than a brochure site. The project was built as a practical digital layer that supports product browsing, RFQ intake, quotation communication, and sales-side workflow visibility.</p></div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{challengePoints.map((point) => <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-stone-700">{point}</p></div>)}</div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">What I Built</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{buildItems.map((item) => <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-stone-800">{item}</p></div>)}</div></section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Visual Proof / Screenshots</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm lg:row-span-2"><Image src="/project-screenshots/hiltech-homepage.png" alt="HILTECH homepage and service positioning" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Homepage and service positioning</figcaption></figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/hiltech-rfq-basket.png" alt="HILTECH RFQ basket and structured request flow" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">RFQ basket and structured request flow</figcaption></figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/hiltech-products-catalog.png" alt="HILTECH product catalog and technical category browsing" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Product catalog and category browsing</figcaption></figure>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">System / Customer Journey</h2><div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"><p className="text-base leading-relaxed text-stone-700">Customer discovers products → builds an RFQ basket → submits project details → request is saved → admin reviews and updates status → customer tracks request updates.</p></div></section>
      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Operational or Business Side</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{opsPoints.map((point) => <li key={point} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">{point}</li>)}</ul></div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Business Value</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{businessValue.map((point) => <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">{point}</li>)}</ul></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Build Notes</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{buildNotes.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">{item}</li>)}</ul></section>

      <section className="section-wrap pt-10"><div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9"><h2 className="text-3xl font-semibold tracking-tight">Need a website that works like a business system?</h2><p className="mt-4 max-w-3xl text-stone-300">I build websites that can connect product discovery, RFQ flows, dashboards, customer tracking, and internal workflows.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-stone-900">Start a Project</Link><Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-center text-sm font-medium text-white">View All Work</Link></div></div></section>
      <section className="section-wrap pt-8"><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm font-semibold text-stone-700">Explore more work</p><div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/work/tuscanini" className="text-sm text-stone-600 transition hover:text-stone-900">Tuscanini Case Study</Link><Link href="/work/farrag-coffee" className="text-sm text-stone-600 transition hover:text-stone-900">Farrag Coffee Case Study</Link></div></div></section>
    </main>
  );
}
