import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import FlagshipVisualStory from "@/components/FlagshipVisualStory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nova Case Study — Omar Khair",
  description:
    "Nova is a native Kotlin Android social product spanning identity, Orbit, Tonight, media, creation, messaging, calls, backend APIs, realtime behavior, and release work.",
  alternates: { canonical: "/work/nova" }
};

const surfaces = [
  ["01", "Identity", "Profiles carry theme, Orbit context, links, privacy and verification states so identity feels like a product system rather than a static bio screen."],
  ["02", "Discovery", "People discovery, recent searches, filters, follow transitions, connection paging, and profile handoff keep relationship building continuous."],
  ["03", "Orbit", "The constellation remains Nova's differentiated relationship surface, while activity density and media context make it useful instead of decorative."],
  ["04", "Presence", "Live treatment is intentionally tied to a real Pulse signal; ordinary activity does not masquerade as presence."],
  ["05", "Tonight", "Ephemeral activity has its own time window and uses real Pulse media previews while preserving routes into Rooms and profiles."],
  ["06", "Activity", "Follow Requests stay prominent while ordinary notifications use denser rows, accessible unread treatment, clearer feedback, paging, and navigation."],
  ["07", "Media", "Reels, post detail, creation, and interaction stay connected to the same native social graph rather than behaving like separate mini-apps."],
  ["08", "Communication", "Messaging and call entry points extend the social system into direct conversation and history."]
];

const architecture = [
  ["Native client", "Kotlin Android owns the shipping product experience and its social, media, profile, communication, and state surfaces."],
  ["Backend APIs", "Django/Python services carry server-side product behavior and data-facing workflows."],
  ["Realtime", "WebSocket-backed behavior is used where the product needs live communication rather than request/response-only interaction."],
  ["Product state", "Profiles, relationships, Orbit, Tonight, activity, media, messaging, and calls have to reconcile as one coherent state model."],
  ["Release discipline", "The app is hardened through bounded product-polish flows and validation gates rather than treated as a permanent prototype."]
];

export default function NovaCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#3157ff] text-white">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/90 transition hover:text-white">← Work index</Link>
              <p className="home-meta text-white/90">Case 02 / Native social product</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-white/90">Kotlin / realtime / social graph</p>
                <p className="case-number mt-7 text-white/95">02</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.8rem,11vw,12rem)] font-semibold leading-[0.76] tracking-[-0.08em]">
                  Nova
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.5rem,3vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-white/92">
                  A native Android social product where identity, relationships, presence, media, creation, and direct communication share one system.
                </p>
              </div>
            </div>

            <EditorialCaseStudyMeta projectId="nova" inverted />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Product thesis</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Give the social graph more than one mode of expression.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  Nova starts with familiar social primitives, then gives relationship identity, ephemeral activity, media, presence, discovery, and communication their own intentional surfaces. Orbit and Tonight make the product specific; the profile and activity systems make those ideas coherent.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="case-editorial-list mt-16">
            {surfaces.map(([number, title, text], index) => (
              <ScrollReveal key={title} delay={index * 28}>
                <article className="case-editorial-row">
                  <p className="home-meta text-[#5f5a51]">{number}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-[#5f5a51]">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FlagshipVisualStory
        projectId="nova"
        eyebrow="Visual story / 8 approved states"
        title="A social system with more than one rhythm."
        intro="The approved sequence moves from the branded home into Orbit, Tonight, Reel media, creation, post interaction, messaging/calls, and profile identity. It shows the different modes without shrinking them into a collage."
      />

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/90">Architecture / realtime</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  The interface only works if the state model stays coherent underneath it.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">
                  Native Android, backend APIs, realtime communication, relationship state, and media behavior all meet at the same user-facing surfaces. Recent product polish focused on making those boundaries more precise instead of adding decorative features.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-white/15">
            {architecture.map(([title, text], index) => (
              <ScrollReveal key={title} delay={index * 35}>
                <article className="grid gap-5 border-t border-white/15 py-7 sm:grid-cols-[64px_0.8fr_1.2fr]">
                  <p className="home-meta text-white/90">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="max-w-2xl leading-relaxed text-white/90">{text}</p>
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
              <p className="home-meta text-[#5f5a51]">Distribution / proof</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Available on Google Play.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#5f5a51]">
                  Nova is a working Android product currently distributed through Google Play closed testing. The normal store listing is the public product destination; the testing note is temporary until production rollout becomes public.
                </p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <a href="https://play.google.com/store/apps/details?id=com.omarkhair70.nova" target="_blank" rel="noreferrer" className="home-text-link">Google Play ↗</a>
                  <a href="https://groups.google.com/g/nova-closed-testers" target="_blank" rel="noreferrer" className="home-text-link">Join closed test ↗</a>
                  <Link href="/work/hiltech" className="home-text-link">Next: HILTECH ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
