import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import FlagshipVisualStory from "@/components/FlagshipVisualStory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Teswa Case Study — Omar Khair",
  description:
    "Teswa / تِسوى is an Arabic-first social swap marketplace spanning discovery, exchange, messaging, trust, native capabilities, offline memory, and Google Play release.",
  alternates: { canonical: "/work/teswa" }
};

const systems = [
  ["01", "Discovery", "Item discovery is not isolated from people, place, profile, or social activity. The product opens with a world to explore, not a static catalog."],
  ["02", "Exchange", "Item detail, offers, deal state, and accepted exchange move the user from interest to a concrete swap journey."],
  ["03", "Conversation", "Deal-scoped chat, voice, call behavior, and notification-aware communication keep the exchange human once it starts."],
  ["04", "Trust", "Profiles, reputation, identity, and activity provide context before a stranger becomes an exchange partner."],
  ["05", "Creation", "Listing creation and social/movement surfaces keep supply and community activity inside the same product loop."],
  ["06", "Release", "Expo/EAS, native capabilities, offline memory, push delivery, and Google Play operations turn the interface into a shippable mobile product."]
];

const stack = ["React Native", "Expo", "TypeScript", "Supabase", "SQLite", "Reanimated", "Skia", "Notifications", "Camera / media", "Google Play"];

export default function TeswaCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/92 transition hover:text-white">← Work index</Link>
              <p className="home-meta text-white/90">Case 01 / Mobile product</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-white/90">Arabic-first / exchange / social</p>
                <p className="case-number mt-7 text-[#d8ff65]">01</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.5rem,10vw,11rem)] font-semibold leading-[0.77] tracking-[-0.075em]">
                  Teswa
                  <span className="home-display-serif block font-normal italic">تِسوى</span>
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.5rem,3vw,3.2rem)] leading-[1.06] tracking-[-0.04em] text-white/92">
                  A swap marketplace designed as a social exchange world — discovery, trust, negotiation, conversation, and movement in one product.
                </p>
              </div>
            </div>

            <EditorialCaseStudyMeta projectId="teswa" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Product thesis</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  The exchange is the core. The social layer makes it alive.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">
                  Teswa deliberately avoids feeling like a plain classifieds feed. The product connects item discovery to identity, trust, communication, and ongoing local activity so a swap can move from curiosity to a real relationship between people.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="case-editorial-list mt-16">
            {systems.map(([number, title, text], index) => (
              <ScrollReveal key={title} delay={index * 35}>
                <article className="case-editorial-row">
                  <p className="home-meta text-[#686259]">{number}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FlagshipVisualStory
        projectId="teswa"
        eyebrow="Visual story / 10 approved states"
        title="From discovery to a completed social exchange."
        intro="The sequence is long because each screen proves a different part of the product loop: discovery, marketplace, item context, offer state, conversation, creation, profile, trust, and social movement."
      />

      <section className="bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Under the interface</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  A mobile surface backed by local memory, native capabilities, and release work.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#6f6a60]">
                  Product scope spans the React Native interface, Supabase-backed data, SQLite warm-state behavior, notifications, camera/media, secure/native integrations, and the practical Google Play release path.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-y border-black/15 py-6">
              {stack.map((item) => <span key={item} className="home-meta text-[#686259]">{item}</span>)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <p className="home-meta text-white/90">Why it matters</p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta max-w-xs leading-relaxed text-white/90">Mobile product / native capabilities / release operations</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                  It proves product ownership beyond screen implementation.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/92">
                  Teswa connects product direction, Arabic-first UX, native mobile behavior, data, offline thinking, communication, and launch operations in one working product.
                </p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <Link href="/work/nova" className="home-text-link home-text-link--light">Next: Nova ↗</Link>
                  <Link href="/work" className="home-text-link home-text-link--light">All work ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
