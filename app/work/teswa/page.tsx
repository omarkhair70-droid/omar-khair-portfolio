import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teswa Case Study — Omar Khair",
  description:
    "Teswa / تِسوى is an Arabic-first social swap marketplace with marketplace, stories, motion/video, messaging, notifications, offline memory, and native security.",
  alternates: { canonical: "/work/teswa" }
};

const systems = [
  ["Marketplace", "Arabic-first item discovery, detail, creator/add-item flows, offers, and deal lifecycle."],
  ["Social layer", "Stories, story replies, voice replies, people discovery, profile activity, and video-led Motion experiences."],
  ["Messaging", "Deal-scoped chat, voice messages, warm inbox/direct flows, and notification-aware communication."],
  ["Offline memory", "SQLite-backed public cache, warm-start behavior, background refresh, and recovery paths."],
  ["Native capabilities", "Camera, media, notifications, location, haptics, sharing, biometrics, secure storage, and Google Sign-In."],
  ["Release operations", "Expo/EAS production builds, OTA updates where compatible, Google Play release operations, and backend push delivery." ]
];

const stack = ["Expo SDK 55", "React Native", "TypeScript", "Expo Router", "Supabase", "SQLite", "Reanimated", "Skia", "Lottie", "Expo Notifications", "Expo Camera / Video / Audio", "Google Sign-In", "Local Authentication"];

export default function TeswaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="section-wrap py-14 md:py-20">
        <Link href="/work" className="text-sm font-medium text-stone-600">← Back to work</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Mobile product case study</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-7xl">Teswa — Arabic-First Social Swap Marketplace</h1>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">Teswa / تِسوى is a native Arabic-first product built around item-for-item exchange, then expanded into a broader social exchange world with stories, video discovery, communication, local activity, and offline memory.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-stone-900 bg-stone-900 px-4 py-2 text-xs font-medium text-white">Live / post-launch on Google Play</span>
          <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-medium">Arabic-first mobile product</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://github.com/omarkhair70-droid/teswa.eg" target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">View GitHub proof</a>
          <Link href="/" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium">Back to portfolio</Link>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="section-wrap py-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">What the product proves</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">Not a landing-page prototype. A real mobile product surface with many connected systems.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {systems.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 md:py-18">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Product direction</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">The exchange is the core. The social layer makes the marketplace feel alive.</h2>
            <p className="mt-4 leading-relaxed text-stone-600">The product direction moved beyond a plain buy/sell-style listing feed. Stories, Motion, city-aware activity, emotional deal milestones, voice, and personal recap surfaces are used to make item exchange feel more human and locally relevant.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Current stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-700">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-950 text-white">
        <div className="section-wrap py-14 md:py-16">
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">Why Teswa matters in this portfolio</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-stone-300">It demonstrates mobile product execution across UI, native capabilities, data, notifications, offline behavior, release operations, and evolving product direction — not just screen implementation.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/work/hiltech" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900">View HILTECH</Link>
            <Link href="/work" className="rounded-full border border-white/40 px-5 py-2 text-sm font-medium">View all work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
