import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuscanini Case Study — Omar Khair",
  description:
    "Arabic fast-food ordering experience case study by Omar Khair, covering RTL menu browsing, cart flow, order saving, customer tracking, and admin order management."
};

const tags = ["Arabic-first", "RTL interface", "Ordering flow", "Mobile-first", "Supabase-backed orders"];
const challengePoints = ["Make fast-food browsing easy on mobile.", "Build a clear Arabic RTL customer journey.", "Organize menu categories and offers.", "Support cart review before order submission.", "Keep WhatsApp as a familiar continuation path.", "Give customers visibility into active order status.", "Give admins a way to review/manage incoming orders."];
const buildItems = ["Arabic RTL interface", "Mobile-first public layout", "Menu/category browsing", "Offers preview", "Food Finder CTA/flow", "Cart and checkout flow", "Supabase-backed order saving", "WhatsApp fallback/order continuation", "Customer active order tracking", "Admin order management", "Runtime ordering open/closed handling", "Trust/feedback/contact flows"];
const opsPoints = ["Supabase order saving", "Admin order review/management", "Customer status tracking", "Ordering open/closed handling", "WhatsApp continuation path"];
const businessValue = ["Clearer Arabic ordering journey", "Easier menu and offer discovery", "Better mobile usability", "More structured order review before sending", "Customer visibility after submission", "Admin visibility into incoming orders", "A stronger digital presence for a fast-food brand"];
const techNotes = ["Next.js App Router", "TypeScript + React", "Tailwind CSS", "RTL Arabic interface", "Supabase-backed order flow", "Customer tracking endpoint", "Admin order management", "Vercel deployment"];

export default function TuscaniniCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">Tuscanini — Arabic Fast-Food Ordering Experience</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">A mobile-first fast-food ordering experience built for Arabic users, combining menu browsing, offers, cart flow, order saving, customer tracking, and admin order visibility.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://tuscanini-ordering-system.vercel.app/" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">View Live Project</a>
          <Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900">Back to Work</Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">{tag}</li>)}</ul>
      </section>

      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Overview</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">Tuscanini needed more than a static menu page. The experience had to make it easy for Arabic-speaking customers to browse food categories, explore offers, build an order, continue through WhatsApp when needed, and track active order status.</p></div></section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{challengePoints.map((point) => <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-stone-700">{point}</p></div>)}</div></section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">What I Built</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{buildItems.map((item) => <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-stone-800">{item}</p></div>)}</div></section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Visual Proof / Screenshots</h2><div className="mt-6 grid gap-4 lg:grid-cols-2"><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm lg:row-span-2"><Image src="/project-screenshots/tuscanini-order-flow.png" alt="Tuscanini Arabic fast-food ordering flow and cart journey" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Ordering flow and cart journey</figcaption></figure><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/tuscanini-menu.png" alt="Tuscanini Arabic fast-food ordering menu and category browsing" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Menu/category browsing experience</figcaption></figure><figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"><Image src="/project-screenshots/tuscanini-offers.png" alt="Tuscanini Arabic fast-food ordering offers and promotional visibility" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" /><figcaption className="mt-3 text-sm text-stone-600">Offers and promotional visibility</figcaption></figure></div></section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Customer Journey</h2><div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"><p className="text-base leading-relaxed text-stone-700">Customer lands on Tuscanini → browses menu/categories → checks offers → adds items to cart → reviews order details → submits order → continues through WhatsApp if needed → tracks active order status</p></div></section>

      <section className="section-wrap py-8 md:py-12"><div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-semibold tracking-tight">Behind the customer experience</h2><p className="mt-4 max-w-4xl leading-relaxed text-stone-600">The experience is designed to support more than browsing. Orders can be saved, admins can review incoming orders, and customers can see active order status after submission.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{opsPoints.map((point) => <li key={point} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">{point}</li>)}</ul></div></section>

      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Business Value</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{businessValue.map((point) => <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">{point}</li>)}</ul></section>
      <section className="section-wrap py-8 md:py-12"><h2 className="text-2xl font-semibold tracking-tight">Build Notes</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{techNotes.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">{item}</li>)}</ul></section>

      <section className="section-wrap pt-10"><div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9"><h2 className="text-3xl font-semibold tracking-tight">Need a food ordering experience that feels clear, fast, and easy to use?</h2><p className="mt-4 max-w-3xl text-stone-300">I build customer-facing ordering experiences that can connect menus, carts, customer actions, admin visibility, and WhatsApp workflows.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">Start a Project</Link><Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white">View All Work</Link></div></div></section>
    </main>
  );
}
