import Image from "next/image";

type HomeWorkItem = {
  title: string;
  label: string;
  description: string;
  built: string[];
  status: string;
  url: string;
  screenshots: string[];
  featured?: boolean;
  positioning?: string;
  caseStudy?: string;
};

const workItems: HomeWorkItem[] = [
  {
    title: "HILTECH — Network Infrastructure Website & RFQ System",
    label: "Featured system project",
    description:
      "A B2B website and RFQ operations system for a network infrastructure company — combining company presentation, product discovery, request collection, admin visibility, quotation workflow, and customer follow-up.",
    built: [
      "Company website",
      "Product catalog",
      "RFQ basket",
      "Supabase RFQ saving",
      "Admin RFQ dashboard",
      "RFQ Command Center",
      "Quotation Builder",
      "Product inventory context",
      "CSV import/export",
      "Customer RFQ tracking",
      "Customer quote response flow",
      "Internal email notifications",
      "Safe analytics events"
    ],
    status: "B2B Website + Business System",
    positioning: "A network infrastructure company website that evolved into sales operations support.",
    featured: true,
    caseStudy: "/work/hiltech",
    url: "https://hiltech-eg-website.vercel.app/",
    screenshots: [
      "/project-screenshots/hiltech-homepage.png",
      "/project-screenshots/hiltech-rfq-basket.png",
      "/project-screenshots/hiltech-products-catalog.png"
    ]
  },
  {
    title: "Tuscanini — Arabic Fast-Food Ordering Experience",
    label: "Arabic ordering system",
    description:
      "An Arabic-first fast-food ordering experience built around menu browsing, offers, cart flow, order submission, customer tracking, and mobile-first usability.",
    built: [
      "Arabic RTL interface",
      "Menu/category browsing",
      "Offers preview",
      "Food Finder flow",
      "Cart and checkout flow",
      "Supabase order saving",
      "WhatsApp fallback/order continuation",
      "Customer order tracking",
      "Admin order management",
      "Mobile-first layout"
    ],
    status: "Arabic RTL Ordering System",
    caseStudy: "/work/tuscanini",
    url: "https://tuscanini-ordering-system.vercel.app/",
    screenshots: [
      "/project-screenshots/tuscanini-order-flow.png",
      "/project-screenshots/tuscanini-menu.png",
      "/project-screenshots/tuscanini-offers.png"
    ]
  },
  {
    title: "Farrag Coffee — RTL Coffee Brand & Ordering Experience",
    label: "Coffee brand experience",
    description:
      "A premium RTL coffee brand and ordering experience for بن فراج with product discovery, Coffee Finder recommendations, grind selection, cart flow, Supabase product loading, and WhatsApp ordering.",
    built: [
      "RTL coffee brand experience",
      "Brand storytelling",
      "Coffee ritual / guide sections",
      "Product catalog",
      "Product filtering/search",
      "Coffee Finder recommendations",
      "Grind selection",
      "Cart experience",
      "Supabase product loading",
      "WhatsApp ordering flow",
      "Reviews/contact sections"
    ],
    status: "Coffee Brand + Ordering Experience",
    url: "https://farrag-coffee-v2.vercel.app/",
    caseStudy: "/work/farrag-coffee",
    screenshots: [
      "/project-screenshots/ben-farag-hero.png",
      "/project-screenshots/ben-farag-coffee-finder.png",
      "/project-screenshots/ben-farag-process-reviews.png"
    ]
  }
];

const services = [
  "Business websites",
  "Landing pages",
  "Product catalogs",
  "RFQ / quotation systems",
  "Admin dashboards",
  "Customer tracking pages",
  "Inventory and product workflows",
  "Internal business tools"
];

const process = [
  ["Understand the business", "Define goals, users, and what the website must do operationally."],
  ["Structure the website", "Map pages, key flows, and content in a practical architecture."],
  ["Build the experience", "Design and develop a fast, responsive interface with working features."],
  ["Launch, test, and improve", "Deploy, validate usability, and iterate based on real use."]
];

const packages = [
  {
    title: "Starter Website",
    subtitle: "For small businesses that need a clean online presence.",
    includes: [
      "One-page or compact multi-section website",
      "Mobile-first responsive layout",
      "Contact CTA",
      "Basic SEO setup",
      "Fast Vercel deployment"
    ],
    bestFor: "Personal brands, cafés, small shops, simple service pages.",
    cta: "Start with this",
    pricing: "Starting from 15,000 EGP"
  },
  {
    title: "Business Website",
    subtitle: "For brands that need clear pages, stronger presentation, and better conversion.",
    includes: [
      "Home, About, Services, Contact",
      "Brand-aligned visual direction",
      "Responsive design",
      "Contact and WhatsApp flow",
      "SEO basics",
      "Launch support"
    ],
    bestFor: "Restaurants, cafés, service businesses, local companies.",
    cta: "Discuss this package",
    pricing: "Starting from 30,000 EGP"
  },
  {
    title: "Website + System",
    subtitle: "For companies that need a website with real working features.",
    includes: [
      "Product catalog",
      "RFQ / quotation flow",
      "Database connection",
      "Admin dashboard",
      "Customer tracking page",
      "Email notifications",
      "Technical launch support"
    ],
    bestFor: "Companies, suppliers, B2B businesses, product/service operations.",
    cta: "Build a system",
    pricing: "Starting from 60,000 EGP",
    featured: true
  }
];

const valuePoints = [
  "Fast execution",
  "Clear communication",
  "Business-first thinking",
  "Clean design",
  "Systems mindset",
  "Real working features, not just pages"
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
        <div className="section-wrap flex min-h-16 items-center justify-between gap-3 py-3 md:py-0">
          <p className="shrink-0 font-semibold tracking-tight">Omar Khair</p>
          <nav className="hidden flex-1 justify-center gap-5 text-sm text-stone-600 lg:flex">
            <a href="#work">Work</a>
            <a href="#systems">Systems</a>
            <a href="#services">Services</a>
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
          I build websites that turn business ideas into working digital experiences.
        </h1>
        <p className="mt-4 text-base font-medium text-stone-700 md:text-lg">
          Websites, RFQ systems, dashboards, and digital experiences.
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
          From brand websites to product catalogs, RFQ flows, dashboards, and client-facing systems — I design and
          build websites that are clear, useful, and ready to operate.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a href="#work" className="rounded-full bg-stone-900 px-6 py-3 text-white">
            View Work
          </a>
          <a href="#contact" className="rounded-full border border-stone-300 px-6 py-3">
            Start a Project
          </a>
        </div>
        <p className="mt-8 text-sm text-stone-500">
          Currently building real projects across business websites, ordering experiences, product catalogs, RFQ systems, dashboards, customer flows, and internal tools.
        </p>
      </section>

      <section id="work" className="section-wrap py-16 md:py-18">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
          <a href="/work" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900">
            View all work
          </a>
        </div>
        <div className="mt-8 space-y-6">
          {workItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-6 shadow-sm ${
                item.featured
                  ? "border-stone-900 bg-stone-900 text-white shadow-md"
                  : "border-stone-200 bg-white text-stone-900"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                    item.featured ? "text-stone-300" : "text-stone-500"
                  }`}>
                    {item.label}
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    item.featured
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-accent/20 bg-accent/10 text-accent"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className={item.featured ? "text-stone-200" : "text-stone-600"}>{item.description}</p>
              <div
                className={`mt-5 rounded-2xl border p-3 ${
                  item.featured ? "border-white/20 bg-white/5" : "border-stone-200 bg-stone-50"
                }`}
              >
                {item.featured ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-white/20 bg-white p-2">
                      <Image
                        src={item.screenshots[0]}
                        alt="HILTECH homepage and company presentation layout"
                        width={1200}
                        height={700}
                        className="h-auto w-full rounded-lg object-contain"
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-xl border border-white/20 bg-white p-2">
                        <Image
                          src={item.screenshots[1]}
                          alt="HILTECH RFQ basket interface for collecting sales requests"
                          width={1200}
                          height={700}
                          className="h-auto w-full rounded-lg object-contain"
                        />
                      </div>
                      <div className="rounded-xl border border-white/20 bg-white p-2">
                        <Image
                          src={item.screenshots[2]}
                          alt="HILTECH product catalog with networking products"
                          width={1200}
                          height={700}
                          className="h-auto w-full rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-3">
                    {item.screenshots.map((shot, index) => (
                      <div key={shot} className="rounded-xl border border-stone-200 bg-white p-2">
                        <Image
                          src={shot}
                          alt={`${item.title} interface preview ${index + 1}`}
                          width={1200}
                          height={700}
                          className="h-auto w-full rounded-lg object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <ul className={`mt-4 grid gap-2 text-sm md:grid-cols-2 ${item.featured ? "text-stone-100" : "text-stone-700"}`}>
                {item.built.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              {item.positioning ? (
                <p className={`mt-5 text-base font-semibold ${item.featured ? "text-white" : "text-stone-800"}`}>
                  {item.positioning}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    item.featured
                      ? "border-white bg-white text-stone-900 hover:bg-stone-100"
                      : "border-stone-300 bg-stone-900 text-white hover:bg-stone-800"
                  }`}
                >
                  Visit project
                </a>
                {item.caseStudy ? (
                  <a
                    href={item.caseStudy}
                    className={`text-xs font-semibold underline-offset-4 hover:underline ${
                      item.featured ? "text-stone-200" : "text-stone-600"
                    }`}
                  >
                    View case study
                  </a>
                ) : (
                  <p className="text-xs font-medium text-stone-500">Case study coming soon — available on request</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>


      <section id="systems" className="section-wrap py-16 md:py-18">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Websites that can grow into business systems.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
            A strong website should not only present the business. It can also collect requests, organize products,
            support sales, and give the team better visibility.
          </p>
          <p className="mt-4 text-base font-semibold text-stone-900 md:text-lg">
            Not just pages. Practical systems for real business workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              label: "Layer 01",
              title: "Website Foundation",
              points: ["Brand presentation", "Service pages", "Contact / WhatsApp flow", "SEO basics", "Fast responsive launch"]
            },
            {
              label: "Layer 02",
              title: "Customer Actions",
              points: ["Product catalog", "RFQ basket", "Inquiry forms", "Customer tracking pages", "Quote approval / change requests"]
            },
            {
              label: "Layer 03",
              title: "Business Operations",
              points: ["Admin dashboards", "Inventory context", "Quotation builder", "CSV import/export", "Analytics events", "Internal notifications"]
            }
          ].map((layer) => (
            <article key={layer.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{layer.label}</p>
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

        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold tracking-tight">What this means for a business</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Better request structure",
              "Less scattered communication",
              "Clearer product/service presentation",
              "Faster follow-up context",
              "Better internal visibility",
              "A website that can grow over time"
            ].map((point) => (
              <li key={point} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-300">Featured proof project</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">HILTECH is the proof.</h3>
          <p className="mt-4 max-w-3xl text-stone-200">
            A network infrastructure company website that grew into a product catalog, RFQ basket, admin visibility,
            customer tracking, quotation workflow, and operational support for sales requests.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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

        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold tracking-tight">Need a website that works like a business system?</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white">
              Start a Project
            </a>
            <a href="/work/hiltech" className="rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-900">
              View HILTECH Case Study
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section-wrap py-16 md:py-18">
        <h2 className="text-3xl font-semibold tracking-tight">What I Build</h2>
        <p className="mt-4 max-w-3xl text-stone-600">
          I focus on websites that are easy to understand, easy to use, and useful for the business behind them.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="flex min-h-[122px] items-center rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="section-wrap py-16 md:py-18">
        <h2 className="text-3xl font-semibold tracking-tight">Project Packages</h2>
        <p className="mt-4 max-w-3xl text-stone-600">
          Clear starting points for business websites, brand websites, and working digital systems.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm ${
                pkg.featured
                  ? "border-stone-900 bg-stone-900 text-white shadow-md ring-1 ring-stone-700/40"
                  : "border-stone-200 bg-white text-stone-900"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.12em] ${pkg.featured ? "text-stone-200" : "text-stone-500"}`}>
                {pkg.pricing}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{pkg.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${pkg.featured ? "text-stone-200" : "text-stone-600"}`}>{pkg.subtitle}</p>
              <div className={`mt-5 rounded-xl border p-4 ${pkg.featured ? "border-white/20 bg-white/5" : "border-stone-200 bg-stone-50"}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${pkg.featured ? "text-stone-300" : "text-stone-500"}`}>
                  Includes
                </p>
                <ul className={`mt-3 space-y-2 text-sm ${pkg.featured ? "text-stone-100" : "text-stone-700"}`}>
                  {pkg.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <p className={`mt-5 text-sm ${pkg.featured ? "text-stone-200" : "text-stone-600"}`}>
                <span className={`font-semibold ${pkg.featured ? "text-white" : "text-stone-800"}`}>Best for:</span> {pkg.bestFor}
              </p>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-fit rounded-full border px-4 py-2 text-sm font-medium transition ${
                  pkg.featured
                    ? "border-white bg-white text-stone-900 hover:bg-stone-100"
                    : "border-stone-300 bg-stone-900 text-white hover:bg-stone-800"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm text-stone-600">
          Final pricing depends on scope, content, features, and launch requirements.
        </p>
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
        <p className="mt-4 max-w-3xl text-stone-600">
          I build with speed, clarity, and operational thinking so every page works for the business, not just the
          screen.
        </p>
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
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 shadow-sm text-white md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Have a project in mind?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">
            Send me what you’re building, what you need the website to do, and your deadline. I’ll help turn it into a
            clear digital experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/201151891310"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
            >
              WhatsApp me
            </a>
            <a
              href="https://www.instagram.com/omarkhair0?igsh=MWc1MnhtbDZwYXF3OQ=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href="mailto:omar.khair70@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Email
            </a>
            <a
              href="https://www.facebook.com/share/18Vs3ic2QK/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Facebook
            </a>
          </div>
        </div>
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
