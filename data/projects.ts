export type ProjectLane = "flagship" | "client" | "creative" | "independent";

export type ProjectLink = {
  label: string;
  href?: string;
  kind: "case-study" | "live" | "repo" | "store" | "testing" | "status";
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  compactTitle: string;
  lane: ProjectLane;
  category: string;
  status: string;
  year: string;
  role: string;
  lead: string;
  challenge: string;
  approach: string;
  value: string;
  stack: string[];
  capabilities: string[];
  cover?: string;
  gallery: string[];
  galleryAlt: string[];
  tone: "ember" | "violet" | "porcelain" | "sand" | "signal" | "ink";
  visualMode: "web" | "mobile" | "mixed" | "text";
  featured: boolean;
  caseStudy: boolean;
  links: ProjectLink[];
};

const curatedGallery = (project: string, files: string[]) =>
  files.map((file) => `/work/${project}/${file}`);

export const projects: Project[] = [
  {
    slug: "hiltech",
    index: "01",
    title: "HILTECH — Infrastructure to operations",
    compactTitle: "HILTECH",
    lane: "flagship",
    category: "B2B product & business system",
    status: "Live production business system",
    year: "2026",
    role: "Product direction, interface design and full-stack delivery",
    lead:
      "A corporate infrastructure site expanded into a working path from product discovery to RFQ, quotation and operational follow-up.",
    challenge:
      "Technical procurement is dense. The product needed to feel credible to infrastructure buyers without burying the real catalogue and request workflow.",
    approach:
      "The experience connects a direct corporate narrative to searchable products, a multi-item RFQ basket and the internal work required to respond, quote and follow up.",
    value:
      "One public-facing system now carries brand presentation, product discovery and structured commercial intent instead of splitting them across disconnected tools.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Operational workflows"],
    capabilities: ["Product catalogue", "RFQ basket", "Quotation flow", "Admin operations"],
    cover: "/work/hiltech/01-home-hero.webp",
    gallery: curatedGallery("hiltech", ["01-home-hero.webp", "02-field-work.webp", "03-core-services.webp", "04-catalog.webp", "05-product-detail.webp", "06-rfq-basket.webp", "07-rfq-details.webp", "08-procurement-flow.webp"]),
    galleryAlt: [
      "HILTECH infrastructure homepage on mobile",
      "HILTECH product catalogue interface",
      "HILTECH product and procurement detail",
      "HILTECH RFQ request workflow",
      "HILTECH operational system screen",
      "HILTECH field and service evidence",
      "HILTECH business workflow screen",
      "HILTECH procurement flow"
    ],
    tone: "ember",
    visualMode: "mixed",
    featured: true,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/hiltech", kind: "case-study" },
      { label: "Live website", href: "https://hiltech-eg.com", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/hiltech-eg-website", kind: "repo" }
    ]
  },
  {
    slug: "teswa",
    index: "02",
    title: "Teswa — Exchange with a human memory",
    compactTitle: "Teswa",
    lane: "flagship",
    category: "Arabic-first mobile product",
    status: "Public · post-launch on Google Play",
    year: "2026",
    role: "Product direction, mobile build and release operations",
    lead:
      "An Arabic-first social marketplace where objects carry stories and exchange feels closer to a community than a classified listing.",
    challenge:
      "A swap product has to establish trust, context and conversation while remaining quick enough for everyday discovery on mobile.",
    approach:
      "Teswa combines discovery, item stories, social signals, messaging, notifications and offline memory inside one native-feeling product journey.",
    value:
      "The result is a released product package spanning visual direction, React Native implementation, data, device behaviour and Play operations.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "SQLite"],
    capabilities: ["Arabic / RTL", "Discovery", "Messaging", "Offline memory"],
    cover: "/work/teswa/01-discovery-hub.webp",
    gallery: curatedGallery("teswa", ["01-discovery-hub.webp", "02-home-dashboard.webp", "03-marketplace-feed.webp", "04-item-detail.webp", "05-offer-state.webp", "06-exchange-chat.webp", "07-create-listing.webp", "08-profile.webp", "09-trust.webp", "10-movement.webp"]),
    galleryAlt: [
      "Teswa Arabic discovery feed",
      "Teswa item detail and exchange context",
      "Teswa social marketplace interface",
      "Teswa messaging experience",
      "Teswa notification and product state",
      "Teswa profile and account experience",
      "Teswa discovery hub",
      "Teswa profile screen",
      "Teswa trust and exchange state",
      "Teswa product movement screen"
    ],
    tone: "sand",
    visualMode: "mobile",
    featured: true,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/teswa", kind: "case-study" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.teswa.mobile", kind: "store" },
      { label: "Web", href: "https://teswa-eg.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/teswa.eg", kind: "repo" }
    ]
  },
  {
    slug: "nova",
    index: "03",
    title: "Nova — A social world in orbit",
    compactTitle: "Nova",
    lane: "flagship",
    category: "Native Android social product",
    status: "Available on Google Play · closed testing",
    year: "2026",
    role: "Product direction, native Android, backend and release architecture",
    lead:
      "A native social platform organised around closeness, live presence and an Orbit that makes relationships spatial rather than merely chronological.",
    challenge:
      "Social products accumulate surfaces quickly. The work was to give feeds, media, creation, messaging and profiles one governed product identity and architecture.",
    approach:
      "A Kotlin Android client, Django services, WebSockets and strict ownership boundaries support a visual system that moves from Home to Orbit, media, creation and conversation.",
    value:
      "Nova demonstrates product design and deep engineering as one discipline: interface, state, realtime behaviour, security, CI and release gates are treated as a single system.",
    stack: ["Kotlin", "Jetpack Compose", "Django", "WebSockets", "CI / release engineering"],
    capabilities: ["Native Android", "Realtime", "Messaging", "Architecture governance"],
    cover: "/work/nova/01-home-dashboard.webp",
    gallery: curatedGallery("nova", ["01-home-dashboard.webp", "02-orbit.webp", "03-tonight.webp", "04-reel.webp", "05-create-hub.webp", "06-post-detail.webp", "07-messaging-calls.webp", "08-profile.webp"]),
    galleryAlt: [
      "Nova Orbit social interface",
      "Nova home experience",
      "Nova media and reel experience",
      "Nova creation flow",
      "Nova conversation surface",
      "Nova profile experience",
      "Nova social interaction screen",
      "Nova profile screen"
    ],
    tone: "violet",
    visualMode: "mobile",
    featured: true,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/nova", kind: "case-study" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.omarkhair70.nova", kind: "store" },
      { label: "GitHub", href: "https://github.com/omarkhair-labs/nova", kind: "repo" },
      { label: "Join closed test", href: "https://groups.google.com/g/nova-closed-testers", kind: "testing" }
    ]
  },
  {
    slug: "wavezero",
    index: "04",
    title: "WaveZero — Quiet interface, native depth",
    compactTitle: "WaveZero",
    lane: "flagship",
    category: "Music product & native playback",
    status: "Available on Google Play · closed testing",
    year: "2026",
    role: "Product direction, Flutter interface and native playback engineering",
    lead:
      "A calm local-first music experience whose soft consumer surface is backed by a native Kotlin Media3 playback system.",
    challenge:
      "Music interfaces should disappear into listening, while Android playback must remain reliable across the queue, background, lock screen, downloads and interruptions.",
    approach:
      "Flutter owns the product experience; Kotlin, Media3, MediaSession and a MethodChannel bridge own native playback continuity and device behaviour.",
    value:
      "WaveZero makes hidden engineering legible without turning the product into a technical demo: the interface stays quiet while the native system does the hard work.",
    stack: ["Flutter", "Kotlin", "Media3 / ExoPlayer", "MethodChannel", "Rust foundations"],
    capabilities: ["Local music", "Background playback", "Queue persistence", "Offline behaviour"],
    cover: "/work/wavezero/01-brand-home.webp",
    gallery: curatedGallery("wavezero", ["01-brand-home.webp", "02-listening-home.webp", "03-library.webp", "04-device-music.webp", "05-search.webp", "06-now-playing.webp", "07-settings-downloads.webp"]),
    galleryAlt: [
      "WaveZero Now Playing interface",
      "WaveZero music home",
      "WaveZero local library",
      "WaveZero queue and playback state",
      "WaveZero search and discovery",
      "WaveZero collection interface",
      "WaveZero settings and downloads"
    ],
    tone: "porcelain",
    visualMode: "mobile",
    featured: true,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/wavezero", kind: "case-study" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.omarkhair.wavezero", kind: "store" },
      { label: "Join closed test", href: "https://groups.google.com/g/nova-closed-testers", kind: "testing" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/wavezero", kind: "repo" },
      { label: "Privacy", href: "/privacy/wavezero", kind: "live" }
    ]
  },
  {
    slug: "balcona",
    index: "05",
    title: "Balcona Bar — One venue, six operating worlds",
    compactTitle: "Balcona Bar",
    lane: "flagship",
    category: "Cafe operating system",
    status: "Live / online",
    year: "2026",
    role: "System architecture, product direction and full-stack delivery",
    lead:
      "A cafe operating system connecting the guest table to service, kitchen, office, setup and platform operations.",
    challenge:
      "Hospitality software serves radically different people under time pressure. One repeated dashboard language cannot serve a guest, barista, cashier and owner equally well.",
    approach:
      "Balcona uses one product DNA with surface-specific behaviour for Guest, Service, Kitchen, Office, Setup and Platform, connected by shared order and venue state.",
    value:
      "The live system proves end-to-end thinking across customer experience, realtime operations, roles, analytics and deployment foundations.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis"],
    capabilities: ["QR ordering", "Realtime operations", "Kitchen / service", "Owner analytics"],
    cover: "/work/balcona-bar/01-customer-entry.webp",
    gallery: curatedGallery("balcona-bar", ["01-customer-entry.webp"]),
    galleryAlt: ["Balcona guest table experience"],
    tone: "ink",
    visualMode: "mixed",
    featured: true,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/balcona", kind: "case-study" },
      { label: "Live demo", href: "https://balcona-bar-staging-web.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/balcona-bar", kind: "repo" }
    ]
  },
  {
    slug: "tuscanini",
    index: "06",
    title: "Tuscanini — Arabic ordering without friction",
    compactTitle: "Tuscanini",
    lane: "client",
    category: "Ordering experience",
    status: "Live staged product",
    year: "2026",
    role: "Product direction, Arabic UX and responsive implementation",
    lead: "A mobile-first Arabic restaurant journey from menu discovery to customisation, offers and cart.",
    challenge: "Ordering needed to stay direct and readable in Arabic on the smallest screens.",
    approach: "The experience prioritises category movement, confident calls to action and a short path to a complete order.",
    value: "A focused conversion product that communicates the offer without adding operational complexity to the customer surface.",
    stack: ["Next.js", "TypeScript", "Arabic / RTL", "PWA direction"],
    capabilities: ["Menu", "Offers", "Cart", "Mobile conversion"],
    cover: "/work/tuscanini/01-category-grid.webp",
    gallery: curatedGallery("tuscanini", ["01-category-grid.webp", "02-menu.webp", "03-food-finder.webp", "04-recommendation.webp", "05-customization.webp", "06-cart.webp", "07-checkout.webp", "08-order-summary.webp"]),
    galleryAlt: ["Tuscanini Arabic category grid", "Tuscanini menu", "Tuscanini food finder", "Tuscanini recommendation", "Tuscanini item customization", "Tuscanini cart experience", "Tuscanini checkout", "Tuscanini order summary"],
    tone: "signal",
    visualMode: "mobile",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/tuscanini", kind: "case-study" },
      { label: "Live website", href: "https://tuscanini-ordering-system.vercel.app", kind: "live" }
    ]
  },
  {
    slug: "habba",
    index: "07",
    title: "Habba — Small objects, warm stories",
    compactTitle: "Habba",
    lane: "creative",
    category: "Arabic brand & storefront",
    status: "Live",
    year: "2026",
    role: "Visual direction, RTL storefront and product journey",
    lead: "A soft Arabic-first storefront for small handmade objects and direct WhatsApp conversion.",
    challenge: "The brand needed warmth and product clarity without looking like a generic marketplace.",
    approach: "Quiet typography, close product imagery and bilingual detail make each object feel personal and easy to order.",
    value: "Habba shows visual direction and commerce thinking working together at a deliberately intimate scale.",
    stack: ["Next.js", "TypeScript", "RTL", "WhatsApp conversion"],
    capabilities: ["Brand tone", "Product detail", "Arabic layout", "Commerce"],
    cover: "/work/habba/01-brand-home.webp",
    gallery: curatedGallery("habba", ["01-brand-home.webp", "02-featured-products.webp", "03-product-detail.webp", "04-choose-your-way.webp", "05-drop-builder.webp", "06-drop-result.webp", "07-cart-upsell.webp", "08-whatsapp-conversion.webp"]),
    galleryAlt: ["Habba Arabic brand home", "Habba featured products", "Habba product detail", "Habba shopping path choice", "Habba drop builder", "Habba custom drop result", "Habba cart upsell", "Habba WhatsApp conversion"],
    tone: "sand",
    visualMode: "mobile",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/habba", kind: "case-study" },
      { label: "Live website", href: "https://habba-store.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/habba-store", kind: "repo" }
    ]
  },
  {
    slug: "bahja-store",
    index: "08",
    title: "Bahja — Handmade product theatre",
    compactTitle: "Bahja",
    lane: "creative",
    category: "Brand, craft & Arabic commerce",
    status: "Live · presented conservatively",
    year: "2026",
    role: "Visual direction, RTL commerce and product storytelling",
    lead: "A handmade bag and accessories brand built around texture, warmth and custom pieces.",
    challenge: "The work has strong objects and imagery, while the external product site still has a known layout issue that prevents over-claiming polish.",
    approach: "The portfolio presents the craft, collection and product atmosphere while keeping the current product status explicit.",
    value: "Bahja expands the body of work beyond systems into tactile art direction and Arabic product storytelling.",
    stack: ["Next.js", "TypeScript", "Arabic / RTL", "PWA-style commerce"],
    capabilities: ["Art direction", "Handmade story", "Merchandising", "Custom order"],
    cover: "/work/bahja/01-home-sections.webp",
    gallery: curatedGallery("bahja", ["01-home-sections.webp", "02-bag-collections.webp", "03-product-detail.webp", "04-cart-checkout.webp", "05-checkout-form.webp"]),
    galleryAlt: ["Bahja Arabic brand home", "Bahja handmade bag collections", "Bahja product detail", "Bahja cart and checkout", "Bahja checkout form"],
    tone: "sand",
    visualMode: "mobile",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/bahja-store", kind: "case-study" },
      { label: "Live website", href: "https://bahja-store.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/bahja-store", kind: "repo" }
    ]
  },
  {
    slug: "farrag-coffee",
    index: "09",
    title: "Farrag Coffee — Brand to ordering evolution",
    compactTitle: "Farrag Coffee",
    lane: "creative",
    category: "RTL brand & ordering",
    status: "Live",
    year: "2026",
    role: "Brand direction, product UX and full-stack implementation",
    lead: "An Arabic coffee experience connecting brand atmosphere, guided discovery and direct ordering.",
    challenge: "A strong coffee identity still has to move a customer from mood to a confident product choice.",
    approach: "The second version turns the early visual experiment into a clearer product and ordering system.",
    value: "The project is useful as evolution proof: taste, product logic and technical foundations matured together.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "RTL"],
    capabilities: ["Brand evolution", "Coffee finder", "Ordering", "Admin"],
    cover: "/project-screenshots/ben-farag-hero.png",
    gallery: ["/project-screenshots/ben-farag-hero.png", "/project-screenshots/ben-farag-coffee-finder.png", "/project-screenshots/ben-farag-process-reviews.png"],
    galleryAlt: ["Farrag Coffee brand homepage", "Farrag Coffee guided finder", "Farrag Coffee ordering process"],
    tone: "ember",
    visualMode: "web",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/farrag-coffee", kind: "case-study" },
      { label: "Live website", href: "https://farrag-coffee-v2.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/farrag-coffee-v2", kind: "repo" }
    ]
  },
  {
    slug: "pharmacist-portfolio",
    index: "10",
    title: "Senior Pharmacist — A career made legible",
    compactTitle: "Senior Pharmacist",
    lane: "client",
    category: "Professional website",
    status: "Delivered live client project",
    year: "2026",
    role: "Information architecture, responsive build and client delivery",
    lead: "A long healthcare career translated into one clear, credible and shareable professional presence.",
    challenge: "Years of experience, education and proof needed hierarchy rather than a résumé pasted into a browser.",
    approach: "The site organises the narrative around experience, education, downloadable proof and direct contact.",
    value: "A real client delivery proving that a smaller website can still be deliberate, useful and complete.",
    stack: ["Next.js", "TypeScript", "Responsive web", "Vercel"],
    capabilities: ["Information architecture", "Career narrative", "CV delivery", "Contact"],
    gallery: [],
    galleryAlt: [],
    tone: "porcelain",
    visualMode: "text",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/pharmacist-portfolio", kind: "case-study" },
      { label: "Live website", href: "https://pharmacist-portfolio.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/pharmacist-portfolio", kind: "repo" }
    ]
  },
  {
    slug: "abdel-aal-coffee",
    index: "11",
    title: "Abdel Aal Coffee — Visual origin work",
    compactTitle: "Abdel Aal Coffee",
    lane: "creative",
    category: "Independent brand & motion direction",
    status: "Live creative project",
    year: "Earlier work",
    role: "Concept, visual design, site creation and video direction",
    lead: "An early self-directed coffee world that proves visual authorship beyond product engineering.",
    challenge: "Represented as creative origin work, not inflated into a technical flagship.",
    approach: "The project combines brand imagery, a web composition and authored moving-image material.",
    value: "It earns a place because it explains where the visual side of the current practice began.",
    stack: ["Creative direction", "Web design", "Video"],
    capabilities: ["Concept", "Art direction", "Motion", "Origins"],
    gallery: [],
    galleryAlt: [],
    tone: "ember",
    visualMode: "text",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/abdel-aal-coffee", kind: "case-study" },
      { label: "Live project", href: "https://abdel-aal-coffee.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/abdel-aal-coffee", kind: "repo" }
    ]
  },
  {
    slug: "athr",
    index: "12",
    title: "Athr Studio — Origins in motion",
    compactTitle: "Athr Studio",
    lane: "creative",
    category: "Origins / creative direction",
    status: "Live origin work · visual review pending",
    year: "Earlier work",
    role: "Self-directed web, visual studies and motion-led presentation",
    lead: "An early studio identity kept as honest progression evidence for the visual practice behind the current systems.",
    challenge: "Origin work is useful only when it explains growth instead of pretending to be a current flagship.",
    approach: "Athr is presented as a compact creative chapter around composition, before-and-after studies and motion evidence.",
    value: "It makes the progression legible while keeping the strongest current product systems at the front of the portfolio.",
    stack: ["Web", "Visual direction", "Motion"],
    capabilities: ["Origins", "Composition", "Visual studies", "Motion"],
    gallery: [],
    galleryAlt: [],
    tone: "signal",
    visualMode: "text",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/athr", kind: "case-study" },
      { label: "Live project", href: "https://athr-studio-website.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/athr-studio-website", kind: "repo" }
    ]
  },
  {
    slug: "sultan-al-burhan",
    index: "13",
    title: "Sultan Al-Burhan — Independent editorial system",
    compactTitle: "Sultan Al-Burhan",
    lane: "independent",
    category: "Independent editorial product",
    status: "Live independent work",
    year: "2026",
    role: "Independent concept, product and editorial execution",
    lead: "A separate editorial identity exploring long-form structure, evidence and launch presentation.",
    challenge: "The portfolio keeps the subject matter separate from client claims and focuses on the product and editorial execution.",
    approach: "A self-directed system connects research, publishing structure and a vertical launch-film workflow.",
    value: "It proves initiative and the ability to author a complete independent world rather than waiting for a client brief.",
    stack: ["Editorial product", "Web", "Research structure", "Launch film"],
    capabilities: ["Independent direction", "Editorial", "Research", "Launch"],
    gallery: [],
    galleryAlt: [],
    tone: "ink",
    visualMode: "text",
    featured: false,
    caseStudy: true,
    links: [
      { label: "Case study", href: "/work/sultan-al-burhan", kind: "case-study" },
      { label: "Live project", href: "https://sultan-al-burhan.vercel.app", kind: "live" },
      { label: "GitHub", href: "https://github.com/omarkhair70-droid/sultan-al-burhan", kind: "repo" }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const laneLabels: Record<ProjectLane, { index: string; title: string; description: string }> = {
  flagship: {
    index: "I",
    title: "Flagship systems",
    description: "Products where interface, architecture and real operational behaviour have to agree."
  },
  client: {
    index: "II",
    title: "Client & business work",
    description: "Focused deliveries that make a business, service or professional story easier to use."
  },
  creative: {
    index: "III",
    title: "Creative direction",
    description: "Brand, Arabic composition, product theatre and the visual origins behind the systems."
  },
  independent: {
    index: "IV",
    title: "Independent work",
    description: "Self-directed editorial and experimental projects built without waiting for a brief."
  }
};
