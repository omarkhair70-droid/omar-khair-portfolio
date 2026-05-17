import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuscanini Case Study — Omar Khair",
  description:
    "Arabic fast-food ordering experience case study by Omar Khair.",
  alternates: {
    canonical: "/work/tuscanini"
  }
};

const tags = ["Arabic-first", "RTL interface", "Food ordering flow", "Installable PWA", "WhatsApp continuation"];
const challengePoints = ["Make fast-food browsing feel fast and clear on mobile.", "Build an intuitive Arabic RTL ordering journey.", "Organize categories and offers without clutter.", "Support cart review before order submission.", "Give customers and admins better order visibility."];
const buildItems = ["Arabic RTL interface", "Menu/category browsing", "Installable PWA ordering experience", "Cart and checkout flow", "Supabase-backed order saving", "Customer active order tracking", "Admin order management", "WhatsApp order continuation"];
const opsPoints = ["Orders can be saved with customer details for follow-up.", "Admin side supports reviewing and managing incoming orders.", "Customers can track active order status after submission.", "Runtime open/closed status helps set clear ordering expectations."];
const businessValue = ["Improves clarity across browsing, cart, and submission steps.", "Makes menu and offer discovery easier for Arabic users.", "Supports more structured order communication.", "Gives better visibility to customers and admins."];
const buildNotes = ["Next.js App Router", "TypeScript + React", "Tailwind CSS", "RTL Arabic interface", "Supabase order flow", "Vercel"];

export default function TuscaniniCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p>
        <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">Tuscanini — Arabic Fast-Food Ordering Experience</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">A mobile-first ordering experience designed for Arabic users, connecting menu browsing, offers, carts, order submission, tracking, and admin visibility.</p>
        <ul className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">{tag}</li>)}</ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="https://tuscanini-ordering-system.vercel.app/" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">View Live Project</a><Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-900">Back to Work</Link></div>
      </section>
      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Overview</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">Tuscanini needed more than a static menu page. The experience was built to help Arabic-speaking customers browse quickly, choose confidently, submit structured orders, and continue through WhatsApp when needed.</p></div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{challengePoints.map((point) => <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-stone-700">{point}</p></div>)}</div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">What I Built</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{buildItems.map((item) => <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-stone-800">{item}</p></div>)}</div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Visual Proof / Screenshots</h2><div className="mt-6 grid gap-4 lg:grid-cols-2"><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm lg:row-span-2"><Image src="/project-screenshots/tuscanini-order-flow.png" alt="Tuscanini ordering flow and cart journey" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Ordering flow and cart journey</figcaption></figure><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/tuscanini-menu.png" alt="Tuscanini menu and category browsing in Arabic" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Menu and category browsing</figcaption></figure><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/tuscanini-offers.png" alt="Tuscanini offers and promotions visibility" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Offers and promotions visibility</figcaption></figure></div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">System / Customer Journey</h2><div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"><p className="text-base leading-relaxed text-stone-700">Customer opens Tuscanini → browses menu and offers → adds items to cart → reviews order details → submits order → continues on WhatsApp if needed → tracks active order status.</p></div></section>
      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Operational or Business Side</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{opsPoints.map((point) => <li key={point} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">{point}</li>)}</ul></div></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Business Value</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{businessValue.map((point) => <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">{point}</li>)}</ul></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Build Notes</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{buildNotes.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">{item}</li>)}</ul></section>
      <section className="section-wrap pt-10"><div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9"><h2 className="text-3xl font-semibold tracking-tight">Need a food ordering experience that feels clear, fast, and easy to use?</h2><p className="mt-4 max-w-3xl text-stone-300">I build ordering experiences that connect menus, carts, customer actions, admin visibility, and WhatsApp workflows.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-stone-900">Start a Project</Link><Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-center text-sm font-medium text-white">View All Work</Link></div></div></section>
      <section className="section-wrap pt-8"><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm font-semibold text-stone-700">Explore more work</p><div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/work/hiltech" className="text-sm text-stone-600 transition hover:text-stone-900">HILTECH Case Study</Link><Link href="/work/farrag-coffee" className="text-sm text-stone-600 transition hover:text-stone-900">Farrag Coffee Case Study</Link></div></div></section>
    </main>
  );
}
