import Image from "next/image";

import ProjectInquiryForm from "@/components/ProjectInquiryForm";

type HomeWorkItem = {
  title: string;
  label: string;
  description: string;
  proofPoints: string[];
  status: string;
  url: string;
  screenshot: string;
  caseStudy: string;
  featured?: boolean;
};

const workItems: HomeWorkItem[] = [
  {
    title: "HILTECH — Network Infrastructure Website & RFQ System",
    label: "Featured system project",
    description:
      "A company website that evolved into practical sales operations support.",
    proofPoints: [
      "Product catalog",
      "RFQ basket",
      "Admin RFQ dashboard",
      "Quotation Builder",
      "Customer tracking"
    ],
    status: "B2B Website + Business System",
    featured: true,
    caseStudy: "/work/hiltech",
    url: "https://hiltech-eg-website.vercel.app/",
    screenshot: "/project-screenshots/hiltech-homepage.png"
  },
  {
    title: "Tuscanini — Arabic Fast-Food Ordering Experience",
    label: "Arabic ordering system",
    description: "An Arabic-first customer journey for menu browsing, checkout, and order follow-up.",
    proofPoints: [
      "Arabic RTL interface",
      "Menu/category browsing",
      "Cart and checkout flow",
      "Supabase order saving",
      "Customer order tracking"
    ],
    status: "Ordering Experience",
    caseStudy: "/work/tuscanini",
    url: "https://tuscanini-ordering-system.vercel.app/",
    screenshot: "/project-screenshots/tuscanini-order-flow.png"
  },
  {
    title: "Farrag Coffee — RTL Coffee Brand & Ordering Experience",
    label: "Coffee brand experience",
    description: "A premium RTL coffee experience built for discovery and WhatsApp-driven ordering.",
    proofPoints: [
      "RTL coffee brand experience",
      "Product catalog",
      "Coffee Finder recommendations",
      "Grind selection",
      "WhatsApp ordering flow"
    ],
    status: "Brand + Ordering",
    url: "https://farrag-coffee-v2.vercel.app/",
    caseStudy: "/work/farrag-coffee",
    screenshot: "/project-screenshots/ben-farag-hero.png"
  }
];

const process = [
  ["Understand the business", "Define goals, users, and the operational context."],
  [
    "Shape the right scope",
    "Map the right starting point: website, ordering flow, catalog, RFQ system, dashboard, or business system."
  ],
  ["Build the experience", "Design and develop a clean, mobile-first flow with real working features."],
  ["Launch, test, and improve", "Deploy, validate, and iterate based on real use."]
];

const packages = [
  {
    title: "Starter Website",
    subtitle: "For small businesses or personal brands that need a clean online presence.",
    includes: [
      "One-page or compact multi-section website",
      "Mobile-first responsive layout",
      "Clear call-to-action",
      "Basic SEO setup",
      "Fast Vercel deployment"
    ],
    bestFor: "Personal brands, small services, simple shops, landing pages.",
    cta: "Start with this",
    pricing: "Starting from 15,000 EGP"
  },
  {
    title: "Business Website",
    subtitle: "For brands that need stronger presentation, clearer pages, and better customer trust.",
    includes: [
      "Home, About, Services / Products, Contact",
      "Brand-aligned visual direction",
      "Responsive layout",
      "WhatsApp/contact flow",
      "Basic SEO and metadata",
      "Launch support"
    ],
    bestFor: "Service businesses, cafés, restaurants, local companies, product brands.",
    cta: "Discuss this package",
    pricing: "Starting from 30,000 EGP"
  },
  {
    title: "Brand + Ordering Experience",
    subtitle:
      "For food, coffee, retail, or product brands that need customers to browse and move toward ordering.",
    includes: [
      "Brand landing experience",
      "Menu or product browsing",
      "Offers / featured items section",
      "Cart or order review flow where needed",
      "WhatsApp ordering path",
      "Mobile-first customer journey"
    ],
    bestFor: "Restaurants, cafés, food brands, coffee brands, retail/catalog brands.",
    cta: "Build an ordering experience",
    pricing: "Starting from 45,000 EGP",
    proofLinks: [
      { label: "View Tuscanini", href: "/work/tuscanini" },
      { label: "View Farrag Coffee", href: "/work/farrag-coffee" }
    ]
  },
  {
    title: "Product Catalog / RFQ System",
    subtitle:
      "For suppliers and B2B companies that need structured product requests instead of scattered messages.",
    includes: [
      "Product catalog",
      "Product categories",
      "RFQ basket or request flow",
      "Structured customer request details",
      "Admin visibility for incoming requests",
      "Customer tracking or follow-up flow where needed"
    ],
    bestFor: "Suppliers, infrastructure companies, B2B product businesses, project-based companies.",
    cta: "Build an RFQ system",
    pricing: "Starting from 60,000 EGP",
    proofLinks: [{ label: "View HILTECH", href: "/work/hiltech" }],
    featured: true
  },
  {
    title: "Website + Business System",
    subtitle: "For businesses that need a website with real internal workflows behind it.",
    includes: [
      "Public website",
      "Database-backed flows",
      "Admin dashboard",
      "Customer tracking",
      "Quotation/order workflow",
      "Notifications or analytics events where needed",
      "Launch and iteration support"
    ],
    bestFor: "Companies that need dashboards, operations, tracking, quotations, or internal tools.",
    cta: "Plan a business system",
    pricing: "Custom scope",
    proofLinks: [
      { label: "View HILTECH", href: "/work/hiltech" },
      { label: "View All Work", href: "/work" }
    ]
  }
];

const valuePoints = [
  "Business-first thinking",
  "Systems mindset",
  "Clean execution",
  "Clear communication",
  "Mobile-first delivery",
  "Real working features"
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
        <div className="section-wrap flex min-h-16 items-center justify-between gap-3 py-3 md:py-0">
          <div className="flex shrink-0 items-center gap-2.5" aria-label="Omar Khair">
            <Image src="/logo-mark.svg" alt="Omar Khair" width={34} height={34} className="h-8 w-8 rounded-lg" priority />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Omar Khair</p>
              <p className="hidden text-[10px] uppercase tracking-[0.12em] text-stone-500 sm:block">Websites &amp; Digital Systems</p>
            </div>
          </div>
          <nav className="hidden flex-1 justify-center gap-5 text-sm text-stone-600 lg:flex">
            <a href="#work">Work</a>
            <a href="#systems">Systems</a>
            <a href="#packages">Packages</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="shrink-0 rounded-full bg-stone-900 px-4 py-2 text-sm text-white">
            Start a project
          </a>
        </div>
      </header>

      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Websites & Digital Systems</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          I build websites that work like business tools.
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-stone-600 md:text-lg">
          Business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and customer-facing flows
          — designed to look clean and support real operations.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a href="#work" className="rounded-full bg-stone-900 px-6 py-3 text-white">
            View Work
          </a>
          <a href="#contact" className="rounded-full border border-stone-300 px-6 py-3">
            Start a Project
          </a>
        </div>
        <p className="mt-6 text-sm text-stone-500">Built around real projects: HILTECH, Tuscanini, and Farrag Coffee.</p>
      </section>

      <section id="work" className="section-wrap py-16 md:py-18">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
          <a href="/work" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900">
            View all work
          </a>
        </div>
        <div className="mt-8 space-y-5">
          {workItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 shadow-sm ${
                item.featured ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-900"
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    item.featured ? "text-stone-300" : "text-stone-500"
                  }`}
                >
                  {item.label}
                </p>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    item.featured ? "border-white/40 bg-white/10 text-white" : "border-accent/20 bg-accent/10 text-accent"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className={`mt-2 text-sm ${item.featured ? "text-stone-200" : "text-stone-600"}`}>{item.description}</p>

              <div className={`mt-4 grid gap-4 ${item.featured ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"}`}>
                <div className={`overflow-hidden rounded-xl border p-2 ${item.featured ? "border-white/20 bg-white" : "border-stone-200 bg-stone-50"}`}>
                  <Image
                    src={item.screenshot}
                    alt={`${item.title} interface preview`}
                    width={1200}
                    height={700}
                    className="h-40 w-full rounded-lg object-cover md:h-44"
                  />
                </div>
                <ul className={`grid gap-2 text-sm ${item.featured ? "text-stone-100" : "text-stone-700"}`}>
                  {item.proofPoints.map((point) => (
                    <li key={point} className="rounded-lg border border-current/15 px-3 py-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={item.caseStudy} className={`text-sm font-semibold underline-offset-4 hover:underline ${item.featured ? "text-stone-100" : "text-stone-700"}`}>
                  View case study
                </a>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    item.featured ? "border-white bg-white text-stone-900 hover:bg-stone-100" : "border-stone-300 bg-stone-900 text-white hover:bg-stone-800"
                  }`}
                >
                  Visit project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="systems" className="section-wrap py-16 md:py-18">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Websites that can grow into business systems.</h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
            A strong website can do more than present the business. It can collect structured requests, support
            customer actions, and improve operations visibility.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Website Foundation",
              points: ["Brand presentation", "Service/product pages", "Contact / WhatsApp flow", "SEO basics"]
            },
            {
              title: "Customer Actions",
              points: ["Catalog browsing", "Ordering or RFQ flow", "Structured inquiry capture", "Customer tracking"]
            },
            {
              title: "Business Operations",
              points: ["Admin visibility", "Dashboard workflows", "Quotation support", "Internal notifications"]
            }
          ].map((layer, i) => (
            <article key={layer.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Layer 0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-stone-900">{layer.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {layer.points.map((point) => (
                  <li key={point} className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {[
            "Business websites",
            "Ordering experiences",
            "Product catalogs",
            "RFQ systems",
            "Admin dashboards",
            "Customer tracking",
            "Internal tools"
          ].map((chip) => (
            <li key={chip} className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700">
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">HILTECH is the proof.</h3>
          <p className="mt-3 max-w-3xl text-stone-200">
            A company website that grew into a product catalog, RFQ flow, admin visibility, quotation workflow, and
            customer follow-up.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/work/hiltech" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">
              View HILTECH Case Study
            </a>
            <a
              href="https://hiltech-eg-website.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white"
            >
              Visit Live Project
            </a>
          </div>
        </div>
      </section>

      <section id="packages" className="section-wrap py-16 md:py-18">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Project Starting Points</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Choose the starting point that fits your business.</h2>
        <p className="mt-4 max-w-4xl text-stone-600">
          Start simple with a clean website, or build toward a product catalog, ordering flow, RFQ system, dashboard,
          or full business system.
        </p>
        <p className="mt-2 text-sm text-stone-500">
          Final scope depends on content, features, integrations, and launch requirements.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`flex h-full flex-col rounded-2xl border p-5 shadow-sm ${
                pkg.featured ? "border-stone-900 bg-stone-900 text-white shadow-md" : "border-stone-200 bg-white text-stone-900"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.12em] ${pkg.featured ? "text-stone-200" : "text-stone-500"}`}>{pkg.pricing}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{pkg.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${pkg.featured ? "text-stone-200" : "text-stone-600"}`}>{pkg.subtitle}</p>
              <p className={`mt-3 text-sm ${pkg.featured ? "text-stone-200" : "text-stone-600"}`}>
                <span className={`font-semibold ${pkg.featured ? "text-white" : "text-stone-800"}`}>Best for:</span> {pkg.bestFor}
              </p>
              <ul className={`mt-4 grid gap-2 text-sm ${pkg.featured ? "text-stone-100" : "text-stone-700"}`}>
                {pkg.includes.map((item) => (
                  <li key={item} className="rounded-lg border border-current/15 px-3 py-2">{item}</li>
                ))}
              </ul>
              {pkg.proofLinks ? (
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {pkg.proofLinks.map((link) => (
                    <a key={link.href} href={link.href} className={`font-semibold underline-offset-4 hover:underline ${pkg.featured ? "text-stone-100" : "text-stone-600"}`}>
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              <a
                href="#contact"
                className={`mt-5 inline-flex w-fit rounded-full border px-4 py-2 text-sm font-medium transition ${
                  pkg.featured ? "border-white bg-white text-stone-900 hover:bg-stone-100" : "border-stone-300 bg-stone-900 text-white hover:bg-stone-800"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap py-16 md:py-18">
        <h2 className="text-3xl font-semibold tracking-tight">Process</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {process.map(([title, description], i) => (
            <div key={title} className="card">
              <p className="text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-stone-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 md:py-18">
        <h2 className="text-3xl font-semibold tracking-tight">Why work with me</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((point) => (
            <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-400">Value</p>
              <p className="mt-3 text-base font-medium text-stone-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-wrap py-20 md:py-24">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Start a Project</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          Tell me what you need — I’ll help shape the right website or system.
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-stone-600 md:text-lg">
          Choose the project type, add a few details, and send a structured WhatsApp brief so we can start with
          context.
        </p>

        <ProjectInquiryForm />
      </section>

      <footer className="border-t border-stone-200 py-7">
        <div className="section-wrap flex flex-col justify-between gap-2 text-sm text-stone-500 md:flex-row md:items-center">
          <p>Omar Khair — Websites & Digital Systems</p>
          <p>Built with clarity, speed, and purpose.</p>
        </div>
      </footer>
    </main>
  );
}
