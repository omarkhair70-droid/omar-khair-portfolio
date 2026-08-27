export const siteIdentity = {
  name: "Omar Khair",
  title: "Product Builder | Full-Stack Web & Mobile Developer",
  location: "Egypt",
  positioning: "Product + Engineering + Visual Direction + Launch",
  summary:
    "I build digital products end-to-end across web, mobile, business systems, visual direction, and launch presentation."
};

export const siteNavigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export const contactLinks = {
  email: { label: "Email", href: "mailto:omar.khair70@gmail.com", value: "omar.khair70@gmail.com" },
  phone: { label: "Phone", href: "tel:+201151891310", value: "011 5189 1310" },
  whatsapp: { label: "WhatsApp", href: "https://wa.me/201151891310", value: "011 5189 1310" },
  linkedin: { label: "LinkedIn", href: "https://linkedin.com/in/omar-khair-70", value: "linkedin.com/in/omar-khair-70" },
  github: { label: "GitHub", href: "https://github.com/omarkhair70-droid", value: "github.com/omarkhair70-droid" }
};

export const capabilityPillars = [
  {
    title: "Product",
    text: "Scope, user journeys, system behavior, business workflows, release decisions, and end-to-end product ownership.",
    proof: ["Product direction", "Business workflows", "Arabic-first UX", "Release operations"]
  },
  {
    title: "Engineering",
    text: "Full-stack web, mobile, native Android, APIs, real-time systems, architecture consolidation, and deployment.",
    proof: ["Next.js / TypeScript", "Kotlin Android", "React Native / Expo", "Django / NestJS"]
  },
  {
    title: "Visual Direction",
    text: "Interface composition, RTL product experience, brand-led web work, and visual systems that support the product rather than decorate it.",
    proof: ["RTL composition", "Brand systems", "Consumer UI", "Editorial presentation"]
  },
  {
    title: "Launch",
    text: "Deployment, Google Play release operations, product launch visuals, and AI-assisted promo/editing workflows.",
    proof: ["Google Play", "Vercel", "Adobe Premiere Pro", "Codex + Premiere MCP"]
  }
];

export const serviceRanges = [
  {
    name: "Starter Website",
    price: "15,000 EGP+",
    text: "A custom professional or business website with clear information architecture, responsive implementation, and deployment."
  },
  {
    name: "Business Website",
    price: "30,000 EGP+",
    text: "A larger multi-page business presence with stronger product/service presentation, lead flows, integrations, and admin-ready foundations."
  },
  {
    name: "Brand / Ordering Experience",
    price: "45,000 EGP+",
    text: "Product discovery, catalog, ordering, conversion flows, Arabic/RTL experience, and custom customer journeys."
  },
  {
    name: "RFQ / Business System",
    price: "60,000 EGP+",
    text: "Database-backed workflows, dashboards, RFQ/quotation operations, customer tracking, and internal system logic."
  },
  {
    name: "Larger Products / Mobile / Systems",
    price: "Custom",
    text: "Mobile apps, native Android work, larger platforms, or unusual operational scope after the product requirements are clear."
  }
];

export const localLaunchOffer = {
  name: "Local Launch Offer",
  price: "1,000 EGP",
  upfront: "500 EGP upfront",
  completion: "500 EGP on launch",
  summary: "A deliberately limited compact one-page launch package for local professionals and small businesses.",
  included: [
    "Polished multi-section one-page site",
    "Mobile responsive",
    "Profile, services, or products as relevant",
    "WhatsApp/contact and social/location links",
    "Basic SEO metadata",
    "Deployment",
    "One revision"
  ],
  excluded: "Domain, paid third-party services, custom backend, and expanded scope are separate."
};

export const education = [
  "Computer Science coursework — Nahda University, Beni Suef, Egypt",
  "Visual arts / Fine Arts preparation and design background"
];

export const workingApproach = [
  { step: "01", title: "Understand", text: "Clarify the real product, business, or communication problem before choosing features." },
  { step: "02", title: "Shape", text: "Define the smallest coherent scope, user journey, visual direction, and technical path." },
  { step: "03", title: "Build", text: "Implement the working experience across UI, data, system behavior, and integrations." },
  { step: "04", title: "Launch", text: "Verify the release path, deployment, store workflow, and presentation needed to put the work in front of people." }
];


export const waveZeroPrivacyPage = {
  canonicalPath: "/privacy/wavezero",
  isFinalPolicy: true,
  title: "WaveZero Privacy Policy",
  lastUpdated: "27 August 2026",
  publisher: "Omar Khair",
  applicationId: "com.omarkhair.wavezero",
  contactEmail: contactLinks.email.value,
  contactPage: "/contact",
  introduction:
    "WaveZero is an Android music player published by Omar Khair. This Privacy Policy describes the data behavior of the WaveZero V1 Android application.",
  sections: [
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
      paragraphs: [
        "The WaveZero V1 production application does not include:"
      ],
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
        "For privacy questions about WaveZero, contact Omar Khair using the public support email or contact page listed below."
      ]
    }
  ]
};
