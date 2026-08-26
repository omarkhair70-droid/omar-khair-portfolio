import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Business Website Offer — Omar Khair",
  description: "A limited launch offer for compact professional websites for clinics, professionals, cafés, and local businesses.",
  alternates: { canonical: "/local-business" }
};

const whatsappUrl = "https://wa.me/201151891310?text=" + encodeURIComponent(
  "Hello Omar, I’m interested in the Local Business Website offer.\n\nBusiness / profession:\nCurrent Facebook or Instagram page:\nWhat I want on the website:\n"
);

const included = [
  "One polished page with multiple business sections",
  "Mobile-first responsive design",
  "Services / products / profile presentation",
  "WhatsApp and direct contact actions",
  "Location and social links",
  "Basic SEO metadata",
  "Production deployment",
  "One revision round after the first version"
];

const idealFor = ["Doctors & clinics", "Pharmacists & professionals", "Cafés & restaurants", "Local shops & brands", "Coaches & personal brands", "Small service businesses"];

export default function LocalBusinessOfferPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="section-wrap py-14 md:py-20">
        <Link href="/" className="text-sm font-medium text-stone-600">← Back to portfolio</Link>
        <div className="mt-10 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Limited local launch offer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-7xl">A professional website for a local business — without paying for a full business system.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600 md:text-xl">For professionals and small businesses that mainly need one clean link to present who they are, what they offer, where they are, and how customers can contact them.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Launch price</p>
            <div className="mt-3 flex flex-wrap items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight">1,000 EGP</p>
              <p className="pb-1 text-sm text-stone-500">for the compact scope below</p>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600">This is a limited small-business offer, not the price of custom dashboards, ordering systems, mobile apps, or database-backed business software. Domain fees, paid third-party services, and large custom functionality are separate if needed.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">Ask about the offer on WhatsApp</a>
          </div>

          <div className="rounded-3xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Payment structure</p>
            <p className="mt-3 text-2xl font-semibold">500 EGP to start · 500 EGP on launch</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">Scope is agreed before work starts. If the project needs custom backend logic, e-commerce, complex booking, dashboards, or ongoing content management, I’ll quote that separately instead of quietly expanding the 1,000 EGP scope.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">What’s included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">✓ {item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Best fit</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {idealFor.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm">{item}</span>)}
              </div>
              <div className="mt-8 rounded-2xl border border-stone-200 p-5">
                <p className="font-semibold">You provide</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Business name, logo if available, photos, services/products, phone/WhatsApp, address, social links, and the text you already use on your page. I organize it into the site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 md:py-18">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Relevant proof</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">This offer is smaller than the systems I normally build.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="/work/pharmacist-portfolio" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Professional website</p>
            <h3 className="mt-2 text-lg font-semibold">Senior Pharmacist Portfolio</h3>
            <p className="mt-2 text-sm text-stone-600">Personal professional presentation, experience, education, CV download, and contact flow.</p>
          </a>
          <a href="/work/farrag-coffee" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Brand + ordering</p>
            <h3 className="mt-2 text-lg font-semibold">Farrag Coffee</h3>
            <p className="mt-2 text-sm text-stone-600">RTL brand experience with product discovery and WhatsApp ordering.</p>
          </a>
          <a href="/work/hiltech" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Larger system proof</p>
            <h3 className="mt-2 text-lg font-semibold">HILTECH</h3>
            <p className="mt-2 text-sm text-stone-600">Shows the path from a business website into real RFQ and admin operations.</p>
          </a>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-950 text-white">
        <div className="section-wrap py-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Want me to look at your current page first?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-300">Send me your Facebook or Instagram page. I can tell you what a compact website should contain before we start.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900">Send your page on WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
