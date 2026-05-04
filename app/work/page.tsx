import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work — Omar Khair",
  description:
    "Business websites, ordering experiences, RFQ systems, product catalogs, dashboards, and digital systems built by Omar Khair."
};

const projects = [
  {
    title: "HILTECH — Network Infrastructure Website & RFQ System",
    category: "B2B Website + Business System",
    description:
      "A B2B website and RFQ operations system for a network infrastructure company — combining company presentation, product discovery, request collection, admin visibility, quotation workflow, and customer follow-up.",
    proofPoints: [
      "Product catalog",
      "RFQ basket",
      "Admin RFQ dashboard",
      "RFQ Command Center",
      "Quotation Builder",
      "Customer tracking",
      "Inventory context",
      "Analytics events"
    ],
    screenshots: [
      { src: "/project-screenshots/hiltech-homepage.png", alt: "HILTECH homepage and company presentation" },
      { src: "/project-screenshots/hiltech-rfq-basket.png", alt: "HILTECH RFQ basket flow" },
      { src: "/project-screenshots/hiltech-products-catalog.png", alt: "HILTECH products catalog" }
    ],
    links: [
      { label: "View case study", href: "/work/hiltech", internal: true },
      { label: "Visit live project", href: "https://hiltech-eg-website.vercel.app/", internal: false }
    ],
    featured: true
  },
  {
    title: "Tuscanini — Arabic Fast-Food Ordering Experience",
    category: "Arabic RTL Ordering System",
    description:
      "An Arabic-first fast-food ordering experience built around menu browsing, offers, cart flow, order submission, customer tracking, admin order management, and mobile-first usability.",
    proofPoints: [
      "Arabic RTL interface",
      "Menu/category browsing",
      "Offers preview",
      "Food Finder flow",
      "Cart and checkout flow",
      "Supabase order saving",
      "WhatsApp order continuation",
      "Customer order tracking",
      "Admin order management"
    ],
    screenshots: [
      { src: "/project-screenshots/tuscanini-order-flow.png", alt: "Tuscanini ordering flow interface" },
      { src: "/project-screenshots/tuscanini-menu.png", alt: "Tuscanini menu and category browsing" },
      { src: "/project-screenshots/tuscanini-offers.png", alt: "Tuscanini offers preview section" }
    ],
    links: [{ label: "Visit live project", href: "https://tuscanini-ordering-system.vercel.app/", internal: false }],
    note: "Case study coming soon"
  },
  {
    title: "Farrag Coffee — RTL Coffee Brand & Ordering Experience",
    category: "Coffee Brand + Ordering Experience",
    description:
      "A premium RTL coffee brand experience for بن فراج with brand storytelling, product discovery, Coffee Finder recommendations, grind selection, cart flow, Supabase product loading, and WhatsApp ordering.",
    proofPoints: [
      "RTL Arabic landing experience",
      "Premium coffee brand presentation",
      "Coffee ritual / guide sections",
      "Product catalog",
      "Product filtering/search",
      "Coffee Finder recommendations",
      "Grind selection",
      "Cart experience",
      "Supabase product loading",
      "WhatsApp ordering flow"
    ],
    screenshots: [
      { src: "/project-screenshots/ben-farag-hero.png", alt: "Farrag Coffee RTL brand hero section" },
      { src: "/project-screenshots/ben-farag-coffee-finder.png", alt: "Farrag Coffee Finder recommendations" },
      { src: "/project-screenshots/ben-farag-process-reviews.png", alt: "Farrag Coffee product and journey sections" }
    ],
    links: [
      { label: "View case study", href: "/work/farrag-coffee", internal: true },
      { label: "Visit live project", href: "https://farrag-coffee-v2.vercel.app/", internal: false }
    ]
  }
];

const capabilityPoints = [
  "Websites can become request systems.",
  "Menus can become ordering flows.",
  "Product lists can become catalogs with customer actions.",
  "Simple contact can become structured follow-up.",
  "Admin dashboards can turn website activity into business visibility."
];

export default function WorkPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Selected Work</p>
        <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          Websites and digital systems built for real business workflows.
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">
          A focused collection of business websites, ordering experiences, product catalogs, RFQ systems, dashboards,
          and customer-facing tools.
        </p>
        <p className="mt-5 text-base font-semibold text-stone-900">From clean brand websites to working business systems.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#contact" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">
            Start a Project
          </Link>
          <Link href="/" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900">
            Back to Home
          </Link>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-2xl border p-6 shadow-sm ${
                project.featured ? "border-stone-900 bg-stone-900 text-white shadow-md" : "border-stone-200 bg-white"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="max-w-3xl text-2xl font-semibold tracking-tight">{project.title}</h2>
                <p
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    project.featured
                      ? "border-white/50 bg-white/10 text-white"
                      : "border-accent/20 bg-accent/10 text-accent"
                  }`}
                >
                  {project.category}
                </p>
              </div>
              <p className={`mt-4 ${project.featured ? "text-stone-200" : "text-stone-600"}`}>{project.description}</p>

              <div className={`mt-5 rounded-2xl border p-3 ${project.featured ? "border-white/20 bg-white/5" : "border-stone-200 bg-stone-50"}`}>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.screenshots.map((shot) => (
                    <div key={shot.src} className="rounded-xl border border-stone-200 bg-white p-2">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={1200}
                        height={700}
                        className="h-auto w-full rounded-lg object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <ul className={`mt-5 grid gap-2 text-sm md:grid-cols-2 ${project.featured ? "text-stone-100" : "text-stone-700"}`}>
                {project.proofPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.links.map((link) =>
                  link.internal ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${
                        project.featured ? "border-white bg-white text-stone-900" : "border-stone-300 bg-stone-900 text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${
                        project.featured ? "border-white/70 text-white" : "border-stone-300 text-stone-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                )}
                {project.note ? (
                  <p className={`text-xs font-semibold ${project.featured ? "text-stone-300" : "text-stone-500"}`}>
                    {project.note}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">What these projects prove</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityPoints.map((point) => (
              <li key={point} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9">
          <h2 className="text-3xl font-semibold tracking-tight">Have a project that needs more than a basic website?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">
            I build websites that can start simple and grow into product catalogs, ordering flows, RFQ systems,
            dashboards, customer tracking, and internal tools.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">
              Start a Project
            </Link>
            <Link href="/work/hiltech" className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white">
              View HILTECH Case Study
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
