import type { Metadata } from "next";

const canonicalPath = "/privacy/wavezero";
const contactEmail = "omar.khair70@gmail.com";
const applicationId = "com.omarkhair.wavezero";

export const metadata: Metadata = {
  title: "WaveZero Privacy Policy",
  description:
    "Privacy Policy for WaveZero V1, the Android local-first music player published by Omar Khair.",
  applicationName: "WaveZero",
  authors: [{ name: "Omar Khair" }],
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    title: "WaveZero Privacy Policy",
    description:
      "Privacy Policy for WaveZero V1, the Android local-first music player published by Omar Khair.",
    url: canonicalPath,
    type: "article"
  }
};

const sections = [
  {
    id: "device-music",
    title: "1. Device Music access",
    paragraphs: [
      "WaveZero can access audio files and audio metadata in your Android media library only after you choose to grant the Android audio-library permission.",
      "The app uses this access to display and play music on your device. Metadata used by the app can include information such as track title, artist, album, duration, media identifier, media content URI, file size, codec/format information, and album artwork references exposed by Android MediaStore.",
      "WaveZero V1 does not upload your Device Music or its library contents to the developer."
    ]
  },
  {
    id: "local-data",
    title: "2. Data stored locally",
    paragraphs: [
      "WaveZero stores product state on the device so the app can work across sessions. This can include:"
    ],
    bullets: [
      "playback and queue state;",
      "user settings;",
      "collections and liked tracks;",
      "recent searches;",
      "listening history and saved playback position;",
      "download/cache metadata and audio files downloaded by WaveZero;",
      "local permission/request state."
    ],
    closing:
      "This information is stored locally in app storage and is not used for advertising or cross-app tracking."
  },
  {
    id: "collection-sharing",
    title: "3. Data collection and sharing",
    paragraphs: ["The WaveZero V1 production application does not include:"],
    bullets: [
      "advertising SDKs;",
      "analytics or telemetry SDKs;",
      "user accounts;",
      "cloud sync;",
      "Device Music upload;",
      "contact, location, camera, microphone, or advertising-ID collection."
    ],
    closing:
      "For the V1 production configuration described by this release, the developer does not collect or share Google Play Data Safety user-data categories through the app. If a later release adds analytics, accounts, a hosted catalog that collects user information, cloud sync, advertising, uploads, or other remote data handling, this Privacy Policy and the Google Play Data Safety declaration will be reviewed and updated before that release."
  },
  {
    id: "network",
    title: "4. Network access",
    paragraphs: [
      "The Android application declares Internet access because WaveZero contains support for retrieving explicitly configured catalog/audio resources and downloading supported content. The V1 Play release is local-first and must not be distributed with an unreviewed production service or telemetry endpoint.",
      "Release builds disable cleartext HTTP traffic. Any production network service added to a Play build must use secure transport and must be reflected in this policy and in Google Play Data Safety disclosures when applicable."
    ]
  },
  {
    id: "retention-deletion",
    title: "5. Retention and deletion",
    paragraphs: [
      "Device Music remains part of the user's Android media library and is not owned or copied to a developer account.",
      "WaveZero-local settings, queue state, collections, recent searches, and listening history remain on the device until the user clears the relevant state, clears WaveZero app data, or uninstalls the app.",
      "Audio files downloaded into WaveZero's app storage remain until the user removes them, clears downloads/app data, or uninstalls the app.",
      "Because WaveZero V1 has no user account or cloud sync, the developer does not maintain a server-side user profile that requires an account-deletion request."
    ]
  },
  {
    id: "security",
    title: "6. Security",
    paragraphs: [
      "WaveZero V1 keeps its product state in application-local storage, disables Android app-data backup for this release, and disables cleartext network traffic in the release manifest.",
      "No software can guarantee absolute security. WaveZero limits the V1 data surface by avoiding accounts, analytics, advertising, and cloud upload."
    ]
  },
  {
    id: "children",
    title: "7. Children",
    paragraphs: [
      "WaveZero V1 is a general-purpose music player and is not designed specifically for children. Google Play target-audience selections must match the audience the publisher actually intends to serve."
    ]
  },
  {
    id: "changes",
    title: "8. Changes",
    paragraphs: [
      "If WaveZero's data practices materially change, this policy and the corresponding Google Play disclosures will be updated before the changed behavior is distributed."
    ]
  },
  {
    id: "contact",
    title: "9. Contact",
    paragraphs: [
      "For privacy questions about WaveZero, contact Omar Khair using the public support email below."
    ]
  }
];

export default function WaveZeroPrivacyPolicyPage() {
  return (
    <main className="bg-stone-50 pb-20">
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
          WaveZero · V1 Android
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl md:text-7xl">
          WaveZero Privacy Policy
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
          <span>Last updated: 27 August 2026</span>
          <span>Publisher: Omar Khair</span>
          <span>Application ID: {applicationId}</span>
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
          WaveZero is an Android music player published by Omar Khair. This Privacy Policy describes the data
          behavior of the WaveZero V1 Android application.
        </p>
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-600">
          Privacy contact:{" "}
          <a
            className="font-medium text-stone-950 underline underline-offset-4"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 md:py-14">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-stone-950">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-stone-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.closing ? <p>{section.closing}</p> : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
