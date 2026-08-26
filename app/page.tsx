import type { Metadata } from "next";
import Image from "next/image";

import ProjectInquiryForm from "@/components/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "Omar Khair — Product Builder | Web & Mobile",
  description:
    "Websites, mobile products, ordering experiences, dashboards, RFQ systems, and business software built by Omar Khair.",
  alternates: { canonical: "/" }
};

type WorkItem = {
  title: string;
  label: string;
  description: string;
  proof: string[];
  status: string;
  href: string;
  live?: string;
  screenshot: string;
  dark?: boolean;
};

const flagshipWork: WorkItem[] = [
  {
    title: "HILTECH — B2B Website & RFQ Operations System",
    label: "Business system",
    description:
      "A corporate website that grew into product discovery, structured RFQ intake, quotation workflows, customer tracking, and admin operations.",
    proof: ["Product catalog + RFQ basket", "Supabase-backed workflows", "Admin command center", "Quotation + follow-up flow"],
    status: "Live business system",
    href: "/work/hiltech",
    live: "https://hiltech-eg-website.vercel.app/",
    screenshot: "/project-screenshots/hiltech-homepage.png",
    dark: true
  },
  {
    title: "Teswa — Arabic-First Social Swap Marketplace",
    label: "Mobile product",
    description:
      "A native Arabic-first marketplace and social exchange product covering discovery, stories, messaging, notifications, offline memory, and device security.",
    proof: ["Expo / React Native", "Supabase auth + data", "Offline memory", "Google Play release operations"],
    status: "Live / post-launch on Google Play",
    href: "/work/teswa",
    screenshot: "/project-showcases/teswa.webp"
  }
];

const visualProof = [
  {
    title: "Nova",
    label: "Native Android social platform",
    text: "Kotlin Android product with backend APIs, WebSockets, messaging, calls, stories/reels, security, CI, and architecture consolidation.",
    image: "/project-showcases/nova.webp",
    chips: ["Kotlin", "Django", "WebSockets", "CI / release engineering"]
  },
  {
    title: "WaveZero",
    label: "Music product + native playback",
    text: "Flutter consumer experience connected to native Kotlin Media3 / ExoPlayer playback, local music, queues, downloads, and offline behavior.",
    image: "/project-showcases/wavezero.webp",
    chips: ["Flutter", "Kotlin / Media3", "MethodChannel", "Rust"]
  }
];

const services = [
  ["Business websites", "Clean, responsive websites for professionals, clinics, cafés, brands, and service businesses."],
  ["Ordering & catalog experiences", "Menus, product discovery, WhatsApp ordering, carts, request flows, and customer journeys."],
  ["Business systems", "Dashboards, admin tools, RFQ / quotation workflows, internal operations, and database-backed flows."],
  ["Mobile products", "Arabic-first consumer apps, marketplace flows, social features, media, notifications, and release operations."],
  ["Product & UX direction", "Scope definition, user journeys, design systems, and turning vague ideas into buildable product phases."],
  ["Architecture & hardening", "Refactors, feature ownership, CI gates, security boundaries, deployment readiness, and codebase cleanup."]
];

const pricing = [
  {
    name: "Starter Website",
    price: "15,000 EGP+",
    text: "A custom business or professional website with stronger visual direction, content structure, responsive implementation, and deployment."
  },
  {
    name: "Business Website",
    price: "30,000 EGP+",
    text: "A larger multi-page business presence with richer product/service presentation, lead flows, integrations, and admin-ready foundations."
  },
  {
    name: "Brand / Ordering Experience",
    price: "45,000 EGP+",
    text: "Catalog, ordering, product discovery, conversion flows, customer journeys, and custom operational logic."
  },
  {
    name: "RFQ / Business System",
    price: "60,000 EGP+",
    text: "Database-backed workflows, dashboards, quotation/RFQ flows, internal operations, customer tracking, and system integrations."
  }
];

const process = [
  ["01", "Understand", "What the business or product actually needs — not just a list of screens."],
  ["02", "Shape", "Choose the smallest useful scope and the right technical path."],
  ["03", "Build", "Design and implement the real working experience, mobile-first."],
  ["04", "Launch", "Deploy, verify, fix the real-world gaps, and leave a maintainable foundation."]
];

export default function Home() {
  return (
    <main className="bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
        <div className="section-wrap flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Omar Khair home">
            <Image src="/logo-mark.svg" alt="Omar Khair" width={34} height={34} className="h-9 w-9 rounded-lg" priority />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Omar Khair</p>
              <p className="text-[10px] uppercase tracking-[0.12em] text-stone-500">Product Builder · Web & Mobile</p>
            </div>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-stone-600 lg:flex">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="/local-business">Local Launch Offer</a>
          </nav>
          <a href="#contact" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white">Start a project</a>
        </div>
      </header>

      <section id="top" className="section-wrap py-16 md:py-24">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Product Builder · Full-Stack Web & Mobile</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-7xl">I turn ideas and business workflows into real digital products.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600 md:text-xl">Websites, mobile apps, ordering experiences, RFQ systems, dashboards, social products, and operational tools — from product direction to working deployment.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">See selected work</a>
            <a href="#pricing" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium">See project ranges</a>
            <a href="/local-business" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium">1,000 EGP local offer</a>
          </div>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Live business systems", "Google Play product work", "Web + mobile + backend", "From scope to deployment"].map((item) => (
            <div key={item} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-medium shadow-sm">{item}</div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="section-wrap grid gap-5 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Limited local launch offer</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">A compact business website for 1,000 EGP.</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600">500 EGP to start + 500 EGP on launch. This is a deliberately limited small-business offer — not the price of custom apps, dashboards, ordering systems, or larger websites.</p>
          </div>
          <a href="/local-business" className="rounded-full bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white">See what is included</a>
        </div>
      </section>

      <section id="work" className="section-wrap py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">The screenshots now show the product, not just the stack.</h2>
          </div>
          <a href="/work" className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium">View all work</a>
        </div>

        <div className="mt-9 space-y-5">
          {flagshipWork.map((item) => (
            <article key={item.title} className={`rounded-3xl border p-6 shadow-sm md:p-8 ${item.dark ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white"}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${item.dark ? "text-stone-300" : "text-stone-500"}`}>{item.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{item.title}</h3>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${item.dark ? "border-white/30 bg-white/10" : "border-stone-200 bg-stone-50"}`}>{item.status}</span>
              </div>
              <p className={`mt-4 max-w-4xl leading-relaxed ${item.dark ? "text-stone-300" : "text-stone-600"}`}>{item.description}</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                <div className={`overflow-hidden rounded-2xl border p-2 ${item.dark ? "border-white/15 bg-white" : "border-stone-200 bg-stone-50"}`}>
                  <Image src={item.screenshot} alt={`${item.title} product preview`} width={1200} height={750} className="h-auto w-full rounded-xl" />
                </div>
                <div className="grid content-start gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {item.proof.map((point) => (
                    <div key={point} className={`rounded-xl border px-4 py-3 text-sm ${item.dark ? "border-white/15 text-stone-100" : "border-stone-200 bg-stone-50 text-stone-700"}`}>{point}</div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={item.href} className={`rounded-full px-4 py-2 text-sm font-medium ${item.dark ? "bg-white text-stone-900" : "bg-stone-900 text-white"}`}>View case study</a>
                {item.live ? <a href={item.live} target="_blank" rel="noreferrer" className={`rounded-full border px-4 py-2 text-sm font-medium ${item.dark ? "border-white/40" : "border-stone-300"}`}>Visit live project</a> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {visualProof.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="border-b border-stone-200 bg-stone-100 p-2">
                <Image src={item.image} alt={`${item.title} selected product screens`} width={1000} height={625} className="h-auto w-full rounded-2xl" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{item.label}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.chips.map((chip) => <span key={chip} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-700">{chip}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">What I can build</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">Start small, or build the system behind the business.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, text]) => <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="pricing" className="section-wrap py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Typical project ranges</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">The 1,000 EGP offer is a small local launch package. Custom work is scoped separately.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">These are starting ranges, not fixed quotes. Final scope depends on content, integrations, admin needs, backend logic, and delivery requirements.</p>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pricing.map((item) => (
            <article key={item.name} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">{item.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white md:flex md:items-center md:justify-between md:gap-6">
          <div><p className="font-semibold">Mobile apps, larger platforms, and unusual system scope</p><p className="mt-1 text-sm text-stone-300">Custom scope and pricing after the product requirements are clear.</p></div>
          <a href="#contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-stone-900 md:mt-0">Discuss the scope</a>
        </div>
      </section>

      <section id="process" className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">How I work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Product thinking before feature dumping.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <div key={number} className="rounded-2xl border border-stone-200 bg-stone-50 p-5"><p className="text-xs font-semibold text-stone-400">{number}</p><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-stone-100">
        <div className="section-wrap py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Start a project</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">Tell me what you need. I’ll help shape the right scope.</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">For a small local website, use the local launch offer. For products, business systems, mobile apps, or larger websites, use the project brief below.</p>
          <ProjectInquiryForm />
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-950 text-stone-300">
        <div className="section-wrap flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-semibold text-white">Omar Khair</p><p className="mt-1 text-stone-400">Product Builder · Full-Stack Web & Mobile</p></div>
          <div className="flex flex-wrap gap-4"><a href="https://github.com/omarkhair70-droid" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:omar.khair70@gmail.com">Email</a><a href="https://wa.me/201151891310" target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
      </footer>
    </main>
  );
}
