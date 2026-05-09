import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Habba Case Study — Omar Khair",
  description:
    "Arabic-first handmade accessories storefront with guided product discovery and WhatsApp ordering flow.",
  alternates: {
    canonical: "/work/habba"
  }
};

const highlights = [
  "Arabic-first storefront for handmade accessories.",
  "Habba Match style product finder for guided discovery.",
  "Collection and product-detail flows for giftable accessories.",
  "WhatsApp ordering path with product-aware inquiry messaging."
];

const built = [
  "RTL storefront structure and Arabic-first navigation",
  "Featured products and collection browsing",
  "Guided finder flow for faster matching",
  "Bundle/drop style presentation blocks",
  "Product-level WhatsApp inquiry handoff"
];

export default function HabbaCaseStudyPage() { return <main className="bg-stone-50 pb-20"><section className="section-wrap py-16 md:py-22"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p><h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">Habba</h1><p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">A colorful Arabic storefront for handmade bead accessories, designed around guided product discovery, featured product flows, and WhatsApp ordering.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="https://habba-store.vercel.app/" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">Visit Live Site</a><Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900">Back to Work</Link></div></section><section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Context</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">The goal was to build a boutique storefront that keeps discovery simple for Arabic-speaking shoppers while still supporting fast product inquiry and order intent capture through WhatsApp.</p></div></section><section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">What was built</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{built.map((item) => (<li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">{item}</li>))}</ul></section><section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Proof / System Highlights</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{highlights.map((point) => (<li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">{point}</li>))}</ul></section><section className="section-wrap pt-10"><div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9"><h2 className="text-3xl font-semibold tracking-tight">Need an Arabic storefront with clean ordering flow?</h2><p className="mt-4 max-w-3xl text-stone-300">I build brand storefronts that support product discovery and structured inquiry paths.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-stone-900">Start a Project</Link><Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-center text-sm font-medium text-white">View All Work</Link></div></div></section><section className="section-wrap pt-8"><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm font-semibold text-stone-700">Related work</p><div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/work/bahja-store" className="text-sm text-stone-600 transition hover:text-stone-900">Bahja Store</Link><Link href="/work/hiltech" className="text-sm text-stone-600 transition hover:text-stone-900">HILTECH Case Study</Link></div></div></section></main>; }
