const workItems = [
  {
    title: "HILTECH — Network Infrastructure Website & RFQ System",
    description:
      "A complete company website and RFQ system for a network infrastructure business.",
    built: [
      "Company website",
      "Product catalog",
      "RFQ basket",
      "Supabase database",
      "Admin RFQ dashboard",
      "Product admin",
      "Customer RFQ tracking",
      "Internal email notifications",
      "SEO technical setup",
      "Company profile visuals and reference sections"
    ],
    status: "Live / In production prep",
    positioning: "Not just a website — a simple operating system for sales requests."
  },
  {
    title: "Tuscanini — Food Brand Website Experience",
    description:
      "A brand-focused website experience designed to present a food/café concept clearly and help customers understand the brand quickly.",
    built: [
      "Brand website direction",
      "Menu / offering presentation",
      "Visual style direction",
      "Mobile-first layout",
      "Contact and conversion flow"
    ],
    status: "In progress / Client review"
  },
  {
    title: "Ben Farag — Business Website",
    description:
      "A business website built to present services clearly, improve trust, and make customer contact easier.",
    built: ["Business website", "Service presentation", "Contact flow", "Responsive layout"],
    status: "Completed / In review"
  }
];

const services = [
  "Business websites",
  "Landing pages",
  "Product catalogs",
  "RFQ / quotation systems",
  "Admin dashboards",
  "Client tracking pages",
  "AI-assisted visuals and brand presentation",
  "Portfolio / personal brand sites"
];

const process = [
  ["Understand the business", "Define goals, users, and what the website must do operationally."],
  ["Structure the website", "Map pages, key flows, and content in a practical architecture."],
  ["Build the experience", "Design and develop a fast, responsive interface with working features."],
  ["Launch, test, and improve", "Deploy, validate usability, and iterate based on real use."]
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
        <div className="section-wrap flex h-16 items-center justify-between">
          <p className="font-semibold tracking-tight">Omar Khair</p>
          <nav className="hidden gap-8 text-sm text-stone-600 md:flex">
            <a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-stone-900 px-4 py-2 text-sm text-white">Start a project</a>
        </div>
      </header>

      <section className="section-wrap py-24 md:py-32">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Websites & Digital Systems</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          I build websites that turn business ideas into working digital experiences.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
          From brand websites to product catalogs, RFQ flows, dashboards, and client-facing systems — I design and build websites that are clear, useful, and ready to operate.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="rounded-full bg-stone-900 px-6 py-3 text-white">View Work</a>
          <a href="#contact" className="rounded-full border border-stone-300 px-6 py-3">Start a Project</a>
        </div>
        <p className="mt-8 text-sm text-stone-500">Currently building real projects across business websites, food brands, and infrastructure companies.</p>
      </section>

      <section id="work" className="section-wrap py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
        <div className="mt-8 grid gap-6">
          {workItems.map((item) => (
            <article key={item.title} className="card">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{item.status}</span>
              </div>
              <p className="text-stone-600">{item.description}</p>
              <ul className="mt-4 grid gap-2 text-sm text-stone-700 md:grid-cols-2">
                {item.built.map((point) => <li key={point}>• {point}</li>)}
              </ul>
              {item.positioning ? <p className="mt-5 text-sm font-medium text-stone-800">{item.positioning}</p> : null}
              <p className="mt-4 text-sm text-stone-400">View case study — coming soon</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section-wrap py-20">
        <h2 className="text-3xl font-semibold tracking-tight">What I Build</h2>
        <p className="mt-4 max-w-3xl text-stone-600">I focus on websites that are easy to understand, easy to use, and useful for the business behind them.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <div key={service} className="card text-sm font-medium">{service}</div>)}
        </div>
      </section>

      <section id="process" className="section-wrap py-20">
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

      <section className="section-wrap py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Why work with me</h2>
        <div className="mt-6 grid gap-3 text-stone-700 sm:grid-cols-2">
          {["Fast execution", "Clear communication", "Business-first thinking", "Clean design", "Systems mindset", "Real working features, not just pages"].map((point) => <p key={point} className="card">{point}</p>)}
        </div>
      </section>

      <section id="contact" className="section-wrap py-24">
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">Have a project in mind?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">Send me what you’re building, what you need the website to do, and your deadline. I’ll help turn it into a clear digital experience.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/201151891310" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-200">WhatsApp me</a>
            <a href="https://www.instagram.com/omarkhair0?igsh=MWc1MnhtbDZwYXF3OQ==" className="rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10">Instagram</a>
            <a href="mailto:omar.khair70@gmail.com" className="rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10">Email</a>
            <a href="https://www.facebook.com/share/18Vs3ic2QK/" className="rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10">Facebook</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-8">
        <div className="section-wrap flex flex-col justify-between gap-2 text-sm text-stone-500 md:flex-row">
          <p>Omar Khair — Websites & Digital Systems</p>
          <p>Built with clarity, speed, and purpose.</p>
        </div>
      </footer>
    </main>
  );
}
