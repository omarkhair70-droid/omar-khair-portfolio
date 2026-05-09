import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bahja Store Case Study — Omar Khair",
  description:
    "Arabic boutique storefront for handmade products with category browsing, custom orders, and WhatsApp handoff.",
  alternates: {
    canonical: "/work/bahja-store"
  }
};

const highlights = [
  "RTL boutique storefront with Arabic-first product browsing.",
  "Product categories for handmade bags, accessories, canvas art, and custom orders.",
  "Cart/order-bag flow with WhatsApp handoff for final confirmation.",
  "Brand-safe SEO and social preview setup."
];

const built = [
  "Boutique storefront layout for Arabic-first navigation",
  "Category and product discovery across handmade collections",
  "Custom-order path for customer-specific requests",
  "Cart-style order bag before WhatsApp confirmation",
  "Structured WhatsApp inquiry messaging"
];

export default function BahjaCaseStudyPage() { return <main className="bg-stone-50 pb-20"><section className="section-wrap py-16 md:py-22"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p><h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">Bahja Store</h1><p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">A warm Arabic storefront for a handmade boutique, built around product discovery, custom orders, cart-style selection, and WhatsApp inquiry flow.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="https://bahja-store.vercel.app/" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">Visit Live Site</a><Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900">Back to Work</Link></div></section><section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Context</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">Bahja needed a clean Arabic shopping experience where visitors can browse by collection, request customized pieces, and move into a low-friction WhatsApp ordering conversation.</p></div></section><section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">What was built</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{built.map((item) => (<li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">{item}</li>))}</ul></section><section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Proof / System Highlights</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{highlights.map((point) => (<li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">{point}</li>))}</ul></section><section className="section-wrap pt-10"><div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9"><h2 className="text-3xl font-semibold tracking-tight">Need a storefront that turns browsing into inquiry?</h2><p className="mt-4 max-w-3xl text-stone-300">I build Arabic-ready storefronts that keep brand quality high and ordering flows clear.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-stone-900">Start a Project</Link><Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-center text-sm font-medium text-white">View All Work</Link></div></div></section><section className="section-wrap pt-8"><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm font-semibold text-stone-700">Related work</p><div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/work/habba" className="text-sm text-stone-600 transition hover:text-stone-900">Habba Case Study</Link><Link href="/work/farrag-coffee" className="text-sm text-stone-600 transition hover:text-stone-900">Farrag Coffee Case Study</Link></div></div></section></main>; }
