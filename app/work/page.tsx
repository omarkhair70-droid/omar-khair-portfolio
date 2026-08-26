import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work — Omar Khair",
  description:
    "Selected work by Omar Khair across business systems, mobile products, Android social platforms, ordering experiences, and professional websites.",
  alternates: { canonical: "/work" }
};

type Project = {
  title: string;
  category: string;
  description: string;
  proof: string[];
  status: string;
  caseStudy?: string;
  live?: string;
  repo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "HILTECH — Network Infrastructure Website & RFQ System",
    category: "B2B Website + Business System",
    description:
      "A production business platform combining corporate presentation, product discovery, RFQ capture, customer tracking, quotation workflows, and internal admin operations.",
    proof: ["Next.js + TypeScript", "Supabase-backed RFQ data", "Product catalog + request basket", "Admin dashboards + reporting", "Quotation and follow-up workflow"],
    status: "Live system",
    caseStudy: "/work/hiltech",
    live: "https://hiltech-eg-website.vercel.app/",
    featured: true
  },
  {
    title: "Teswa — Arabic-First Social Swap Marketplace",
    category: "Mobile Product",
    description:
      "Arabic-first mobile marketplace and social exchange product spanning item discovery, stories, video-led discovery, offers, messaging, voice, notifications, offline memory, and native security.",
    proof: ["Expo / React Native + TypeScript", "Supabase auth/data/storage", "Push delivery + notifications", "SQLite offline memory", "Media, location, biometrics, Google Sign-In", "Google Play release operations"],
    status: "Live / post-launch on Google Play",
    caseStudy: "/work/teswa",
    repo: "https://github.com/omarkhair70-droid/teswa.eg",
    featured: true
  },
  {
    title: "Nova — Native Android Social Platform",
    category: "Android + Backend Architecture",
    description:
      "A Kotlin Android social product with messaging, calls, stories/reels, notifications, privacy/security, REST APIs, WebSockets, and a deeply governed architecture consolidation.",
    proof: ["Kotlin Android", "Django backend", "REST + WebSockets", "Messaging + calls + social media domains", "CI / Android release gates", "Feature ownership and architecture enforcement"],
    status: "Active product / architecture hardened",
    repo: "https://github.com/omarkhair-labs/nova"
  },
  {
    title: "Balcona Bar — Cafe Operating System",
    category: "Full-Stack SaaS / Operations",
    description:
      "A cafe operating system covering customer ordering, AI waiter, cashier, kitchen/barista, waiter operations, owner analytics, billing/payments, inventory, tenant onboarding, and deployment foundations.",
    proof: ["Next.js + NestJS", "Prisma + PostgreSQL + Redis", "Docker + CI", "Role/branch access", "Owner analytics + operations", "AWS/Terraform foundations"],
    status: "Advanced product build",
    repo: "https://github.com/omarkhair70-droid/balcona-bar"
  },
  {
    title: "WaveZero — Music Experience & Native Playback",
    category: "Flutter + Native Android",
    description:
      "A Flutter music product connected to native Kotlin Media3 / ExoPlayer playback with queue persistence, MediaSession controls, local device music, downloads, offline playback, and Rust foundations.",
    proof: ["Flutter consumer UI", "Kotlin + AndroidX Media3", "MethodChannel bridge", "Offline/download behavior", "MediaSession + notification controls", "Rust core/API foundations"],
    status: "Working Android product foundation",
    repo: "https://github.com/omarkhair70-droid/wavezero"
  },
  {
    title: "Senior Pharmacist Portfolio",
    category: "Professional Website / Client Delivery",
    description:
      "A production professional portfolio translating a long healthcare career into one shareable website with experience, education, downloadable CV, and direct contact flows.",
    proof: ["Next.js responsive website", "Career/experience information architecture", "CV download", "Phone + WhatsApp + email", "Production Vercel deployment"],
    status: "Delivered",
    caseStudy: "/work/pharmacist-portfolio",
    live: "https://pharmacist-portfolio.vercel.app/"
  },
  {
    title: "Farrag Coffee",
    category: "RTL Brand + Ordering Experience",
    description:
      "Arabic RTL coffee experience with product discovery, guided recommendations, cart-style flow, WhatsApp ordering, and protected product administration.",
    proof: ["Next.js + TypeScript", "Supabase products", "RLS", "Server-side admin writes", "HttpOnly signed admin session"],
    status: "Live web experience",
    caseStudy: "/work/farrag-coffee",
    live: "https://farrag-coffee-v2.vercel.app/"
  },
  {
    title: "Habba & Bahja",
    category: "Arabic Storefronts",
    description:
      "Two Arabic-first handmade product storefront directions covering discovery, guided matching, product presentation, PWA-style behavior, and WhatsApp conversion paths.",
    proof: ["Arabic / RTL product experience", "Responsive storefronts", "Product discovery", "WhatsApp conversion", "Next.js deployment"],
    status: "Live portfolio proof",
    caseStudy: "/work/habba"
  },
  {
    title: "Tuscanini",
    category: "Arabic Ordering Experience",
    description:
      "Mobile-first Arabic restaurant ordering direction with menu/category discovery, offers, cart flow, PWA behavior, order-oriented UX, and admin foundations.",
    proof: ["Next.js + TypeScript", "Arabic / RTL UX", "PWA direction", "Menu + cart flows", "Admin route foundation"],
    status: "Product prototype / staged build",
    caseStudy: "/work/tuscanini",
    live: "https://tuscanini-ordering-system.vercel.app/"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="section-wrap py-14 md:py-20">
        <Link href="/" className="text-sm font-medium text-stone-600">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Selected work</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-7xl">Not one stack. Different products, different constraints.</h1>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">The strongest proof across business systems, native Android, mobile products, operational software, consumer experiences, and smaller client websites.</p>
      </section>

      <section className="section-wrap pb-16 md:pb-20">
        <div className="space-y-5">
          {projects.map((project) => (
            <article key={project.title} className={`rounded-3xl border p-6 shadow-sm md:p-8 ${project.featured ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white"}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-4xl">
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${project.featured ? "text-stone-300" : "text-stone-500"}`}>{project.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h2>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${project.featured ? "border-white/30 bg-white/10" : "border-stone-200 bg-stone-50"}`}>{project.status}</span>
              </div>
              <p className={`mt-4 max-w-5xl leading-relaxed ${project.featured ? "text-stone-300" : "text-stone-600"}`}>{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.proof.map((point) => (
                  <span key={point} className={`rounded-full border px-3 py-1.5 text-xs ${project.featured ? "border-white/20 text-stone-100" : "border-stone-200 bg-stone-50 text-stone-700"}`}>{point}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.caseStudy ? <Link href={project.caseStudy} className={`rounded-full px-4 py-2 text-sm font-medium ${project.featured ? "bg-white text-stone-900" : "bg-stone-900 text-white"}`}>View case study</Link> : null}
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className={`rounded-full border px-4 py-2 text-sm font-medium ${project.featured ? "border-white/40" : "border-stone-300"}`}>Visit live project</a> : null}
                {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" className={`rounded-full border px-4 py-2 text-sm font-medium ${project.featured ? "border-white/40" : "border-stone-300"}`}>GitHub proof</a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="section-wrap py-14 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Need something smaller?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">A local clinic or business website does not need the scope of Nova or HILTECH.</h2>
              <p className="mt-3 max-w-3xl text-stone-600">That’s why I keep a separate compact launch offer instead of pretending every project needs a full software-system budget.</p>
            </div>
            <Link href="/local-business" className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white">View local launch offer</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
