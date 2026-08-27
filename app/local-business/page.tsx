import type { Metadata } from "next";
import Link from "next/link";

import { contactLinks, localLaunchOffer } from "@/data/site";

export const metadata: Metadata = {
  title: "Local Business Website Offer — Omar Khair",
  description: "A limited launch offer for compact professional websites for clinics, professionals, cafés, and local businesses.",
  alternates: { canonical: "/local-business" }
};

const whatsappUrl = contactLinks.whatsapp.href + "?text=" + encodeURIComponent(
  "Hello Omar, I’m interested in the Local Business Website offer.\n\nBusiness / profession:\nCurrent Facebook or Instagram page:\nWhat I want on the website:\n"
);

const idealFor = ["Doctors & clinics", "Pharmacists & professionals", "Cafés & restaurants", "Local shops & brands", "Coaches & personal brands", "Small service businesses"];

export default function LocalBusinessOfferPage() {
  return (
    <main>
      <section className="section-wrap py-14 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Limited local launch offer</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-7xl">
          A professional local-business website without buying a full software system.
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">{localLaunchOffer.summary}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Launch price</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight">{localLaunchOffer.price}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600">{localLaunchOffer.excluded}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white">Ask about the offer on WhatsApp</a>
          </div>

          <div className="rounded-3xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Payment structure</p>
            <p className="mt-3 text-2xl font-semibold">{localLaunchOffer.upfront} · {localLaunchOffer.completion}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">The compact scope is agreed before work starts. Larger functionality moves into a separately scoped custom project.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">What’s included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {localLaunchOffer.included.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Best fit</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {idealFor.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm">{item}</span>)}
              </div>
              <div className="mt-8 rounded-2xl border border-stone-200 p-5">
                <p className="font-semibold">Need a custom product instead?</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Apps, dashboards, ordering systems, backend workflows, and larger websites use the standard project ranges.</p>
                <Link href="/services" className="mt-4 inline-flex text-sm font-medium underline-offset-4 hover:underline">See standard work →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
