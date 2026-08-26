import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Portfolio Website Case Study — Omar Khair",
  description: "A professional portfolio website delivered for a senior pharmacist, covering experience, education, downloadable CV, and direct contact flows.",
  alternates: { canonical: "/work/pharmacist-portfolio" }
};

const scope = [
  "Professional hero and positioning",
  "21+ years of experience presentation",
  "Career timeline and role summaries",
  "Education and courses",
  "Skills and languages",
  "Downloadable CV",
  "Phone, WhatsApp, email, and location contact paths",
  "Responsive production deployment"
];

export default function PharmacistPortfolioCaseStudy() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="section-wrap py-14 md:py-20">
        <Link href="/work" className="text-sm font-medium text-stone-600">← Back to work</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Client delivery · Professional portfolio</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-7xl">A complete online professional presence for a senior pharmacist.</h1>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">The goal was simple: turn a long healthcare career into one clear, credible link that can be shared with employers, colleagues, and professional contacts.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://pharmacist-portfolio.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">Visit live project</a>
          <Link href="/local-business" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium">View local website offer</Link>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Problem</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">A CV contains information. A portfolio needs to make the career readable.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {scope.map((item) => <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 md:py-18">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">01 · Structure</p>
            <h3 className="mt-3 text-xl font-semibold">Translate the career</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Organize years of pharmacy, management, preventive medicine, and healthcare experience into a clear hierarchy instead of copying a CV onto a webpage.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">02 · Experience</p>
            <h3 className="mt-3 text-xl font-semibold">Make credibility visible</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Use experience blocks, statistics, education, courses, and competencies so the visitor understands the profile without downloading anything first.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">03 · Action</p>
            <h3 className="mt-3 text-xl font-semibold">Make contact effortless</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">Add direct phone, WhatsApp, email, location, and CV download paths so the page works as a professional tool, not just a visual profile.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-950 text-white">
        <div className="section-wrap py-14 md:py-16">
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">The useful lesson: a small website can still solve a very real business or career problem.</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-stone-300">This project is the closest proof for doctors, pharmacists, consultants, coaches, and other professionals who need a clean personal or practice website rather than a large software system.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/local-business" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">See the local offer</Link>
            <Link href="/work/hiltech" className="rounded-full border border-white/40 px-5 py-2 text-sm font-medium">See a larger business system</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
