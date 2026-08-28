import type { Metadata } from "next";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import { localLaunchOffer, serviceRanges } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Project Ranges — Omar Khair",
  description: "Project scopes for websites, ordering experiences, business systems, mobile products, and a separate limited local launch offer.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="border-b border-black/15">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="grid gap-5 border-t border-black/20 pt-4 sm:grid-cols-2">
              <p className="home-meta">Services / project ranges</p>
              <p className="home-meta text-[#686259] sm:text-right">Scope before labels</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-[#686259]">Web / mobile / systems</p><p className="case-number mt-7 text-[#d9431f]">05+</p></div>
              <div>
                <h1 className="max-w-6xl text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.79] tracking-[-0.075em]">Scope the product first.</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.05rem)] leading-[1.06] tracking-[-0.04em] text-[#686259]">Starting ranges stay visible so the conversation begins with the real work, not a vague package name.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Standard work</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Different scopes should feel different before the quote arrives.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">Content, integrations, backend logic, admin requirements, release needs, and delivery constraints change the real cost. These ranges are starting points, not menu prices for interchangeable work.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-white/15">
            {serviceRanges.map((service,index)=>(
              <ScrollReveal key={service.name} delay={index*35}>
                <article className="grid gap-5 border-t border-white/15 py-7 sm:grid-cols-[64px_0.85fr_1.15fr_auto] sm:items-start">
                  <p className="home-meta text-white/90">0{index+1}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{service.name}</h3>
                  <p className="max-w-2xl leading-relaxed text-white/90">{service.text}</p>
                  <p className="text-2xl font-semibold tracking-[-0.04em]">{service.price}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="home-meta text-white/90">Separate local path</p>
                <p className="home-display-serif mt-6 text-[clamp(4rem,8vw,8rem)] italic leading-none">{localLaunchOffer.price}</p>
              </div>
              <div>
                <h2 className="text-[clamp(3.2rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">{localLaunchOffer.name}</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/92">{localLaunchOffer.summary}</p>
                <p className="home-meta mt-5 text-white/90">{localLaunchOffer.upfront} · {localLaunchOffer.completion}</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <ScrollReveal>
              <div className="border-t border-white/20 pt-5">
                <p className="home-meta text-white/90">Boundary</p>
                <p className="mt-5 max-w-md leading-relaxed text-white/90">{localLaunchOffer.excluded}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={70}>
              <div className="border-b border-white/20">
                {localLaunchOffer.included.map((item,index)=>(
                  <div key={item} className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/20 py-5">
                    <span className="home-meta text-white/90">0{index+1}</span>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/local-business" className="home-text-link home-text-link--light mt-8">Open Local Launch Offer ↗</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 border-t border-black/15 pt-7 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Not sure where it fits?</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.2vw,6.7rem)] font-semibold leading-[0.91] tracking-[-0.06em]">Send the problem as it is.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">I can help shape the smallest coherent build before features, timelines, and pricing get inflated.</p>
                <Link href="/contact" className="home-text-link mt-8">Discuss the project ↗</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
