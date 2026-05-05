import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farrag Coffee Case Study — Omar Khair",
  description:
    "RTL coffee brand and ordering experience case study by Omar Khair."
};

const tags = [
  "RTL Arabic experience",
  "Coffee brand",
  "Product catalog",
  "Coffee Finder",
  "WhatsApp ordering",
  "Supabase products"
];

const challengePoints = [
  "Present an Arabic coffee brand with a premium feel",
  "Make coffee products easier to understand",
  "Help customers choose the right coffee type",
  "Support grind selection before ordering",
  "Make product browsing and filtering simple",
  "Keep WhatsApp as a familiar ordering path",
  "Support product loading from Supabase",
  "Keep the experience smooth and mobile-friendly"
];

const buildItems = [
  "RTL Arabic landing experience",
  "Premium coffee brand presentation",
  "Brand storytelling sections",
  "Coffee ritual / guide sections",
  "Product catalog",
  "Product filtering/search",
  "Coffee Finder recommendation flow",
  "Grind selection",
  "Add-to-cart experience",
  "Cart review flow",
  "Supabase product loading",
  "Supabase order save attempt",
  "WhatsApp ordering flow",
  "Reviews/contact sections",
  "Responsive layout"
];

const businessValue = [
  "Stronger Arabic brand presentation",
  "Easier product discovery",
  "Guided coffee selection",
  "Clearer order preparation through grind and quantity choices",
  "Familiar WhatsApp continuation path",
  "More structured catalog experience",
  "Better mobile customer journey"
];

const buildNotes = [
  "Next.js",
  "React",
  "RTL Arabic interface",
  "Supabase product loading",
  "Cart experience",
  "WhatsApp order flow",
  "Vercel deployment"
];

const customerJourney = [
  "Customer lands on Farrag Coffee",
  "Understands the brand and coffee ritual",
  "Explores product catalog",
  "Uses Coffee Finder if unsure",
  "Selects coffee and grind",
  "Adds items to cart",
  "Reviews order",
  "Continues through WhatsApp"
];

export default function FarragCoffeeCaseStudyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="section-wrap py-16 md:py-22">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Case Study</p>
        <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          Farrag Coffee — RTL Coffee Brand &amp; Ordering Experience
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-stone-600">
          A premium Arabic coffee brand experience built around storytelling, product discovery, Coffee Finder
          recommendations, grind selection, cart flow, and WhatsApp ordering.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://farrag-coffee-v2.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
          >
            View Live Project
          </a>
          <Link href="/work" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900">
            Back to Work
          </Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-stone-700">
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            Farrag Coffee needed more than a simple coffee landing page. The experience had to present بن فراج with a
            premium Arabic feel, help customers understand coffee options, guide them toward a suitable blend, and
            make ordering easier through catalog, cart, grind selection, and WhatsApp flow.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {challengePoints.map((point) => (
            <div key={point} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-stone-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What I Built</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildItems.map((item) => (
            <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-stone-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Visual Proof / Screenshots</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm lg:row-span-2">
            <Image src="/project-screenshots/ben-farag-hero.png" alt="Farrag Coffee premium RTL Arabic coffee brand presentation" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-sm text-stone-600">Premium Arabic coffee brand presentation</figcaption>
          </figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
            <Image src="/project-screenshots/ben-farag-coffee-finder.png" alt="Farrag Coffee Finder recommendation experience in the RTL Arabic coffee journey" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-sm text-stone-600">Coffee Finder recommendation experience</figcaption>
          </figure>
          <figure className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
            <Image src="/project-screenshots/ben-farag-process-reviews.png" alt="Farrag Coffee ordering experience with process, reviews, and customer-facing sections" width={1400} height={900} className="h-auto w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-sm text-stone-600">Brand trust, process, and customer-facing sections</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">System / Customer Journey</h2>
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-stone-700">
            {customerJourney.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1">{step}</span>
                {index < customerJourney.length - 1 ? <span className="text-stone-400">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Operational or Business Side</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            The experience is designed to support real ordering actions, not only storytelling. Product loading, recommendation assistance, cart steps, and order continuation are connected to help customers move from choice to action.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Coffee Finder recommendation support",
              "Guided product choice based on preferences",
              "Supabase-backed product loading",
              "Cart review before order continuation",
              "WhatsApp ordering continuation path"
            ].map((item) => (
              <li key={item} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">From product discovery to order action.</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
            The experience connects product browsing, grind selection, cart review, Supabase-backed product loading,
            and WhatsApp ordering into one practical customer journey.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Product catalog loaded from Supabase when available",
              "Fallback product handling",
              "Quantity and grind selection",
              "Cart review before sending",
              "Supabase order save attempt",
              "WhatsApp order continuation"
            ].map((item) => (
              <li key={item} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Business Value</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {businessValue.map((point) => (
            <li key={point} className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap py-8 md:py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Build Notes</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {buildNotes.map((item) => (
            <li key={item} className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-800 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap pt-10">
        <div className="rounded-2xl border border-stone-900 bg-stone-900 p-7 text-white shadow-sm md:p-9">
          <h2 className="text-3xl font-semibold tracking-tight">Need a brand website that helps customers choose and order?</h2>
          <p className="mt-4 max-w-3xl text-stone-300">
            I build brand experiences that can connect storytelling, product discovery, recommendation flows, carts,
            and WhatsApp ordering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">
              Start a Project
            </Link>
            <Link href="/work" className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white">
              View All Work
            </Link>
          </div>
        </div>
      </section>
      <section className="section-wrap pt-8"><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-sm font-semibold text-stone-700">Explore more work</p><div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/work/hiltech" className="text-sm text-stone-600 transition hover:text-stone-900">HILTECH Case Study</Link><Link href="/work/tuscanini" className="text-sm text-stone-600 transition hover:text-stone-900">Tuscanini Case Study</Link></div></div></section>
    </main>
  );
}

