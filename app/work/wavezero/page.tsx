import type { Metadata } from "next";
import Link from "next/link";

import EditorialCaseStudyMeta from "@/components/EditorialCaseStudyMeta";
import FlagshipVisualStory from "@/components/FlagshipVisualStory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "WaveZero Case Study — Omar Khair",
  description:
    "WaveZero is an Android-first local/offline music product with Flutter consumer UI and native Kotlin/AndroidX Media3 playback.",
  alternates: { canonical: "/work/wavezero" }
};

const productLayers = [
  ["01", "Consumer shell", "Flutter owns the calm listening experience across Home, Search, Library, Now Playing, collections, history, settings, downloads, and Device Music."],
  ["02", "Playback bridge", "The UI crosses a deliberate MethodChannel boundary instead of pretending native playback is just another widget tree concern."],
  ["03", "Native engine", "Kotlin and AndroidX Media3 / ExoPlayer own the active Android playback path and the platform behavior around it."],
  ["04", "Session control", "Queue state, repeat, shuffle, sleep timer, prepared-next behavior, and persisted listening position are part of the product model."],
  ["05", "Device Music", "Android MediaStore access gives the V1 product a useful local library without requiring a cloud catalog to make the player coherent."],
  ["06", "Offline / system", "Downloads, cache, MediaSession behavior, notification/lock-screen controls, privacy, and Play release work complete the product beyond the visible screens."]
];

const hardening = [
  "Preserve the working Flutter → MethodChannel → Kotlin/Media3 ownership boundary.",
  "Harden playback lifecycle and MediaSession behavior instead of replacing proven native paths.",
  "Keep Device Music and local/offline behavior useful without inventing an unfinished production catalog dependency.",
  "Validate queue/session persistence and prepared-next / auto-advance behavior as product state.",
  "Keep developer/diagnostic surfaces separate from the consumer experience.",
  "Keep release signing, privacy/Data Safety, Play listing, and actual Android behavior aligned."
];

export default function WaveZeroCaseStudyPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#1c151b] text-[#f5eee8]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="flex items-center justify-between gap-5 border-t border-white/15 pt-4">
              <Link href="/work" className="home-meta text-white/82 transition hover:text-white">← Work index</Link>
              <p className="home-meta text-white/82">Case 04 / Music product</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div>
                <p className="home-meta text-white/68">Flutter / Kotlin / Media3</p>
                <p className="case-number mt-7 text-[#f08b6e]">04</p>
              </div>
              <div>
                <h1 className="text-[clamp(4.2rem,9.5vw,10rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
                  WaveZero
                </h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.1rem)] leading-[1.06] tracking-[-0.04em] text-white/82">
                  A calm Android-first music experience where the consumer shell and native playback engine are designed as one product.
                </p>
              </div>
            </div>

            <EditorialCaseStudyMeta projectId="wavezero" inverted />

            <div className="mt-6">
              <Link href="/privacy/wavezero" className="home-meta border-b border-white/25 pb-1 text-white/82 transition hover:border-white hover:text-white">
                Privacy policy ↗
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Product thesis</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.4vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Local-first is not a limitation if the product treats the device as the real platform.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#5f5a51]">
                  WaveZero V1 is deliberately useful without pretending unfinished cloud foundations already exist. The product leans into local music, native playback, queues, system controls, downloads, and persistence so the shipping experience is coherent on Android today.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="case-editorial-list mt-16">
            {productLayers.map(([number, title, text], index) => (
              <ScrollReveal key={title} delay={index * 32}>
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
        projectId="wavezero"
        eyebrow="Visual story / 7 approved states"
        title="A music product that stays calm while the platform work underneath gets serious."
        intro="The visual sequence covers branded home, listening history, library, Device Music, search, Now Playing, and audio/download/storage settings. The screenshots stay large enough to read rather than collapsing into a decorative phone wall."
        showMissingNote
      />

      <section className="bg-[#fbf9f4]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#5f5a51]">Runtime ownership</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Keep the boundary explicit.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#5f5a51]">
                  The UI can move quickly in Flutter without blurring who owns playback. Native Android behavior remains native, while the bridge gives the consumer layer a clean product-facing API.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <div className="case-system-diagram mt-14 py-4">
              {["Flutter consumer UI", "PlaybackBridge / MethodChannel", "Kotlin playback adapter", "AndroidX Media3 / ExoPlayer"].map((node, index) => (
                <div key={node} className="case-system-node">
                  <span className="home-meta text-[#5f5a51]">0{index + 1}</span>
                  <div>
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{node}</p>
                    {index < 3 ? <p className="home-meta mt-2 text-[#5f5a51]">↓ hands off intentionally</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f08b6e] text-[#1c151b]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-black/70">Hardening / release</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.2vw,6.7rem)] font-semibold leading-[0.91] tracking-[-0.06em]">
                  Consolidate the product that already works.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-black/72">
                  Cleanup work protects runtime ownership, local/offline behavior, queue/session continuity, privacy, release signing, and the Google Play surface instead of restarting the architecture for novelty.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 border-b border-black/20">
            {hardening.map((item, index) => (
              <ScrollReveal key={item} delay={index * 32}>
                <div className="grid gap-5 border-t border-black/20 py-6 sm:grid-cols-[64px_1fr]">
                  <p className="home-meta text-black/70">0{index + 1}</p>
                  <p className="max-w-4xl text-lg leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-white/82">Distribution</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Available on Google Play.
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">
                  WaveZero V1 is currently distributed through Google Play closed testing. The store listing is the product destination; the testing note remains only until production rollout becomes public.
                </p>
                <div className="mt-9 flex flex-wrap gap-7">
                  <a href="https://play.google.com/store/apps/details?id=com.omarkhair.wavezero" target="_blank" rel="noreferrer" className="home-text-link home-text-link--light">Google Play ↗</a>
                  <a href="https://groups.google.com/g/nova-closed-testers" target="_blank" rel="noreferrer" className="home-text-link home-text-link--light">Join closed test ↗</a>
                  <Link href="/work/balcona" className="home-text-link home-text-link--light">Next: Balcona ↗</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
