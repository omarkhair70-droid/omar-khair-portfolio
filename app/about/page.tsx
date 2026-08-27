import type { Metadata } from "next";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import { capabilityPillars, contactLinks, education, siteIdentity, workingApproach } from "@/data/site";

export const metadata: Metadata = {
  title: "About & Capabilities — Omar Khair",
  description: "Omar Khair's professional positioning across product, engineering, visual direction, and launch.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="about-hero border-b border-black/15">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="grid gap-5 border-t border-black/20 pt-4 sm:grid-cols-2">
              <p className="home-meta">About / practice</p>
              <p className="home-meta text-[#686259] sm:text-right">{siteIdentity.location}</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-[#686259]">Product / engineering / visual / launch</p>
                <p className="case-number mt-7 text-[#3157ff]">OK</p>
              </div>
              <div>
                <h1 className="max-w-6xl text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.79] tracking-[-0.075em]">
                  I like the part where disciplines stop being separate.
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.1rem)] leading-[1.06] tracking-[-0.04em] text-[#686259]">
                  {siteIdentity.summary}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Capabilities / one through-line</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Breadth only matters when the handoffs stay coherent.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">
                  Product direction, implementation, visual composition, and launch are presented together because the seams between them are where a lot of real work fails.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-white/15">
            {capabilityPillars.map((pillar,index)=>(
              <ScrollReveal key={pillar.title} delay={index*40}>
                <article className="grid gap-5 border-t border-white/15 py-7 sm:grid-cols-[64px_0.8fr_1.2fr]">
                  <p className="home-meta text-white/90">0{index+1}</p>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">{pillar.title}</h3>
                  <div>
                    <p className="max-w-2xl leading-relaxed text-white/90">{pillar.text}</p>
                    <p className="mt-4 text-sm text-white/90">{pillar.proof.join(" · ")}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Working approach</p>
              <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                End-to-end ownership, without turning every project into an oversized process.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {workingApproach.map((item,index)=>(
              <ScrollReveal key={item.step} delay={index*45} className="h-full">
                <article className="h-full border-black/15 px-0 py-7 sm:px-5 lg:border-l lg:first:border-l-0">
                  <p className="home-meta text-[#686259]">{item.step}</p>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-[#6f6a60]">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="border-t border-white/20 pt-5">
                <p className="home-meta text-white/90">Background</p>
                <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em]">Technical and visual training both belong in the story.</h2>
                <div className="mt-9 border-b border-white/20">
                  {education.map((item,index)=>(
                    <div key={item} className="grid grid-cols-[44px_1fr] gap-4 border-t border-white/20 py-5 first:border-t-0">
                      <span className="home-meta text-white/90">0{index+1}</span>
                      <span className="text-lg leading-relaxed text-white/92">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border-t border-white/20 pt-5">
                <p className="home-meta text-white/90">Direct links</p>
                <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em]">If the work makes sense, the next step should be simple.</h2>
                <div className="mt-9 border-b border-white/20">
                  {[contactLinks.linkedin, contactLinks.github, contactLinks.email, contactLinks.whatsapp].map((item,index)=>(
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group grid grid-cols-[44px_1fr_auto] gap-4 border-t border-white/20 py-5 first:border-t-0"
                    >
                      <span className="home-meta text-white/90">0{index+1}</span>
                      <span>
                        <span className="block text-lg font-semibold">{item.label}</span>
                        <span className="mt-1 block break-all text-sm text-white/90">{item.value}</span>
                      </span>
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <div className="border-t border-white/20 pt-7">
              <Link href="/work" className="home-text-link home-text-link--light">See selected work ↗</Link>
              <Link href="/contact" className="home-text-link home-text-link--light ml-7">Start a conversation ↗</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
