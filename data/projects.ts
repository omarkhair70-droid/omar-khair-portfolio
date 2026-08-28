export type ProjectLane = "flagship" | "client" | "creative" | "independent";
export type ProjectTier = "flagship" | "supporting" | "grouped";
export type ProjectStatusTone = "live" | "testing" | "staging" | "coming-soon" | "delivered" | "caveat" | "active";
export type ProjectActionKind =
  | "case-study"
  | "live"
  | "github"
  | "google-play"
  | "closed-test-group"
  | "testing-listing";

export type ProjectAction = {
  kind: ProjectActionKind;
  label: string;
  href: string;
  external: boolean;
};

export type ProjectStatus = {
  label: string;
  tone: ProjectStatusTone;
  releaseChannel?: "web" | "google-play" | "closed-test" | "staging";
};

export type ProjectRecord = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  lane: ProjectLane;
  tier: ProjectTier;
  featured: boolean;
  public: boolean;
  summary: string;
  role: string;
  proof: string[];
  stack: string[];
  status: ProjectStatus;
  caseStudyPath?: string;
  actions: ProjectAction[];
  caveat?: string;
};

const action = (
  kind: ProjectActionKind,
  label: string,
  href: string,
  external = true
): ProjectAction => ({ kind, label, href, external });

export const projects: ProjectRecord[] = [
  {
    id: "hiltech",
    slug: "hiltech",
    title: "HILTECH — B2B Website & RFQ Operations System",
    shortTitle: "HILTECH",
    lane: "flagship",
    tier: "flagship",
    featured: true,
    public: true,
    summary:
      "A live B2B system connecting corporate presentation, product discovery, RFQ intake, quotation workflows, customer follow-up, and admin operations.",
    role: "Product direction, UI, full-stack business workflow, RFQ/product/admin system",
    proof: ["B2B product catalog", "RFQ workflow", "Quotation and follow-up", "Operational/admin depth"],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: { label: "Live business system", tone: "live", releaseChannel: "web" },
    caseStudyPath: "/work/hiltech",
    actions: [
      action("case-study", "Case study", "/work/hiltech", false),
      action("live", "Live website", "https://hiltech-eg.com"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/hiltech-eg-website")
    ]
  },
  {
    id: "teswa",
    slug: "teswa",
    title: "Teswa — Arabic-First Social Swap Marketplace",
    shortTitle: "Teswa",
    lane: "flagship",
    tier: "flagship",
    featured: true,
    public: true,
    summary:
      "An Arabic-first mobile product spanning discovery, exchange, social interaction, messaging, trust, native device capabilities, and release operations.",
    role: "Product direction, React Native/Expo mobile build, Supabase, release operations",
    proof: ["Arabic-first product", "Exchange + social systems", "Offline/native capabilities", "Google Play release"],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "SQLite"],
    status: { label: "Live / post-launch on Google Play", tone: "live", releaseChannel: "google-play" },
    caseStudyPath: "/work/teswa",
    actions: [
      action("case-study", "Case study", "/work/teswa", false),
      action("google-play", "Google Play", "https://play.google.com/store/apps/details?id=com.teswa.mobile"),
      action("live", "Web", "https://teswa-eg.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/teswa.eg")
    ]
  },
  {
    id: "nova",
    slug: "nova",
    title: "Nova — Native Android Social Product",
    shortTitle: "Nova",
    lane: "flagship",
    tier: "flagship",
    featured: true,
    public: true,
    summary:
      "A native Kotlin Android social product with feed/media, relationship surfaces, messaging, calls, backend APIs, WebSockets, and governed architecture work.",
    role: "Product direction, native Kotlin Android, Django/backend, WebSockets, architecture and release work",
    proof: ["Kotlin Android", "Django + WebSockets", "Messaging/calls", "Architecture + release gates"],
    stack: ["Kotlin", "Android", "Django", "Python", "WebSockets"],
    status: { label: "Available on Google Play", tone: "testing", releaseChannel: "closed-test" },
    caseStudyPath: "/work/nova",
    actions: [
      action("case-study", "Case study", "/work/nova", false),
      action("google-play", "Google Play", "https://play.google.com/store/apps/details?id=com.omarkhair70.nova"),
      action("closed-test-group", "Join closed test", "https://groups.google.com/g/nova-closed-testers"),
      action("github", "GitHub", "https://github.com/omarkhair-labs/nova")
    ],
    caveat: "Currently distributed through Google Play closed testing. Remove this note when the production rollout is public."
  },
  {
    id: "wavezero",
    slug: "wavezero",
    title: "WaveZero — Music Product & Native Playback",
    shortTitle: "WaveZero",
    lane: "flagship",
    tier: "flagship",
    featured: true,
    public: true,
    summary:
      "A Flutter music experience connected to native Kotlin Media3 playback, local/device music, queues, downloads, and offline-oriented behavior.",
    role: "Product direction, Flutter UI, Kotlin/Media3 native playback bridge, offline/download/media systems",
    proof: ["Flutter product UI", "Kotlin + Media3", "MethodChannel bridge", "Offline/local media"],
    stack: ["Flutter", "Dart", "Kotlin", "AndroidX Media3", "MethodChannel"],
    status: { label: "Available on Google Play", tone: "testing", releaseChannel: "closed-test" },
    caseStudyPath: "/work/wavezero",
    actions: [
      action("case-study", "Case study", "/work/wavezero", false),
      action("google-play", "Google Play", "https://play.google.com/store/apps/details?id=com.omarkhair.wavezero"),
      action("closed-test-group", "Join closed test", "https://groups.google.com/g/nova-closed-testers"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/wavezero")
    ],
    caveat: "Currently distributed through Google Play closed testing. Remove this note when the production rollout is public."
  },
  {
    id: "balcona-bar",
    slug: "balcona",
    title: "Balcona Bar — Cafe Operating System",
    shortTitle: "Balcona Bar",
    lane: "flagship",
    tier: "flagship",
    featured: true,
    public: true,
    summary:
      "A large cafe operating-system build covering customer ordering, cashier, kitchen/barista, service operations, owner workflows, and multi-role system architecture.",
    role: "Product/system architecture, full-stack operations workflows",
    proof: ["Customer ordering", "Cashier/POS direction", "KDS/operations", "Owner/system workflows"],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis"],
    status: { label: "Live / online", tone: "live", releaseChannel: "web" },
    caseStudyPath: "/work/balcona",
    actions: [
      action("case-study", "Case study", "/work/balcona", false),
      action("live", "Live demo", "https://balcona-bar-staging-web.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/balcona-bar")
    ]
  },
  {
    id: "pharmacist-portfolio",
    slug: "pharmacist-portfolio",
    title: "Senior Pharmacist Portfolio",
    shortTitle: "Senior Pharmacist Portfolio",
    lane: "client",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "A delivered professional website that turns a long healthcare career into a clear, responsive, shareable professional presence.",
    role: "Client delivery, information architecture, responsive web build, career presentation",
    proof: ["Client delivery", "Career information architecture", "Responsive build", "Direct contact + CV"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: { label: "Delivered live client project", tone: "delivered", releaseChannel: "web" },
    caseStudyPath: "/work/pharmacist-portfolio",
    actions: [
      action("case-study", "Case study", "/work/pharmacist-portfolio", false),
      action("live", "Live website", "https://pharmacist-portfolio.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/pharmacist-portfolio")
    ]
  },
  {
    id: "tuscanini",
    slug: "tuscanini",
    title: "Tuscanini Ordering System",
    shortTitle: "Tuscanini",
    lane: "client",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "A mobile-first Arabic ordering experience covering menu discovery, guided choice, customization, cart, checkout, and order conversion.",
    role: "Product/UX direction, Arabic ordering experience, cart/offers/PWA direction",
    proof: ["Arabic / RTL UX", "Food Finder", "Cart + checkout", "Order conversion"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    status: { label: "Live staged product", tone: "live", releaseChannel: "web" },
    caseStudyPath: "/work/tuscanini",
    actions: [
      action("case-study", "Case study", "/work/tuscanini", false),
      action("live", "Live website", "https://tuscanini-ordering-system.vercel.app")
    ]
  },
  {
    id: "habba",
    slug: "habba",
    title: "Habba",
    shortTitle: "Habba",
    lane: "client",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "An Arabic-first handmade-accessories storefront with strong visual direction, guided discovery, product flows, and WhatsApp conversion.",
    role: "Visual direction, RTL storefront, product discovery, WhatsApp conversion",
    proof: ["Arabic-first storefront", "Guided commerce", "Visual direction", "WhatsApp conversion"],
    stack: ["Next.js", "TypeScript", "RTL", "PWA-oriented web"],
    status: { label: "Live storefront", tone: "live", releaseChannel: "web" },
    caseStudyPath: "/work/habba",
    actions: [
      action("case-study", "Case study", "/work/habba", false),
      action("live", "Live website", "https://habba-store.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/habba-store")
    ]
  },
  {
    id: "bahja",
    slug: "bahja-store",
    title: "Bahja Store",
    shortTitle: "Bahja",
    lane: "client",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "An Arabic handmade-storefront direction with product discovery, cart-style selection, custom orders, and WhatsApp handoff.",
    role: "Visual/RTL storefront direction, PWA-style shopping, WhatsApp handoff",
    proof: ["Arabic / RTL storefront", "Product discovery", "Cart/checkout", "WhatsApp handoff"],
    stack: ["Next.js", "TypeScript", "RTL", "PWA"],
    status: { label: "Live · visual issue under refresh", tone: "caveat", releaseChannel: "web" },
    caseStudyPath: "/work/bahja-store",
    actions: [
      action("case-study", "Case study", "/work/bahja-store", false),
      action("live", "Live website", "https://bahja-store.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/bahja-store")
    ],
    caveat: "Presented conservatively until the known header/product clipping issue is fixed and fresh captures are available."
  },
  {
    id: "farrag-coffee-v2",
    slug: "farrag-coffee",
    title: "Farrag Coffee V2",
    shortTitle: "Farrag Coffee",
    lane: "client",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "A premium Arabic RTL coffee experience combining brand storytelling, guided product choice, catalog discovery, cart flow, and WhatsApp ordering.",
    role: "Brand/UX direction, RTL coffee experience, discovery and ordering flow",
    proof: ["RTL brand direction", "Coffee Finder", "Product discovery", "Ordering flow"],
    stack: ["Next.js", "React", "Supabase", "RTL"],
    status: { label: "Live web experience", tone: "live", releaseChannel: "web" },
    caseStudyPath: "/work/farrag-coffee",
    actions: [
      action("case-study", "Case study", "/work/farrag-coffee", false),
      action("live", "Live website", "https://farrag-coffee-v2.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/farrag-coffee-v2")
    ]
  },
  {
    id: "abdel-aal-coffee",
    slug: "abdel-aal-coffee",
    title: "Abdel Aal Coffee",
    shortTitle: "Abdel Aal Coffee",
    lane: "creative",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "A self-directed coffee concept combining website creation, visual composition, brand direction, and motion/video material.",
    role: "Concept, visual design, site creation, motion/video direction",
    proof: ["Creative direction", "Brand composition", "Web execution", "Motion material"],
    stack: ["Web", "Visual direction", "Motion"],
    status: { label: "Live creative project · fresh portfolio captures pending", tone: "active", releaseChannel: "web" },
    caseStudyPath: "/work/abdel-aal-coffee",
    actions: [
      action("case-study", "Creative case study", "/work/abdel-aal-coffee", false),
      action("live", "Live website", "https://abdel-aal-coffee.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/abdel-aal-coffee")
    ]
  },
  {
    id: "athr",
    slug: "athr",
    title: "Athr Studio — Origins / Creative Direction",
    shortTitle: "Athr Studio",
    lane: "creative",
    tier: "grouped",
    featured: false,
    public: true,
    summary:
      "An early self-directed studio website kept as origins/evolution evidence for visual direction, before/after studies, and motion-led presentation.",
    role: "Early self-directed web/visual direction, design studies, motion evidence",
    proof: ["Origins / progression", "Before/after studies", "Visual direction", "Motion evidence slot"],
    stack: ["Web", "Visual direction", "Motion"],
    status: { label: "Live creative origin · final visual review pending", tone: "active", releaseChannel: "web" },
    caseStudyPath: "/work/athr",
    actions: [
      action("case-study", "Creative evidence", "/work/athr", false),
      action("live", "Live website", "https://athr-studio-website.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/athr-studio-website")
    ],
    caveat: "Kept in the grouped creative/origins layer until the strongest stills and motion excerpt are deliberately selected."
  },
  {
    id: "farrag-evolution",
    slug: "farrag-evolution",
    title: "Farrag Coffee — Evolution / Early Work",
    shortTitle: "Farrag Evolution",
    lane: "creative",
    tier: "grouped",
    featured: false,
    public: true,
    summary:
      "Early-to-current coffee-brand work used as progression evidence rather than as a second flagship project.",
    role: "Visual and product evolution",
    proof: ["Early web direction", "Brand progression", "RTL evolution"],
    stack: ["Web", "Visual direction"],
    status: { label: "Grouped evolution proof", tone: "active" },
    actions: [
      action("case-study", "Current V2 case study", "/work/farrag-coffee", false),
      action("live", "Original live site", "https://farrag-coffee.vercel.app"),
      action("github", "Original GitHub", "https://github.com/omarkhair70-droid/farrag-coffee")
    ]
  },
  {
    id: "sultan-al-burhan",
    slug: "sultan-al-burhan",
    title: "Sultan Al-Burhan",
    shortTitle: "Sultan Al-Burhan",
    lane: "independent",
    tier: "supporting",
    featured: false,
    public: true,
    summary:
      "An independent editorial/product project presented as evidence of self-directed concept, information structure, and digital execution.",
    role: "Independent concept, editorial/product direction, web execution",
    proof: ["Independent direction", "Editorial structure", "Web execution"],
    stack: ["Web", "Editorial product"],
    status: { label: "Live independent project · visual package pending", tone: "active", releaseChannel: "web" },
    caseStudyPath: "/work/sultan-al-burhan",
    actions: [
      action("case-study", "Editorial case study", "/work/sultan-al-burhan", false),
      action("live", "Live website", "https://sultan-al-burhan.vercel.app"),
      action("github", "GitHub", "https://github.com/omarkhair70-droid/sultan-al-burhan")
    ]
  }
];

export const workLanes: Array<{ id: ProjectLane; title: string; description: string }> = [
  {
    id: "flagship",
    title: "Flagship Products & Systems",
    description: "The strongest proof of product ownership, engineering depth, mobile/native work, and operational systems."
  },
  {
    id: "client",
    title: "Client & Business Work",
    description: "Delivered or business-facing work that proves translation from real needs into usable digital experiences."
  },
  {
    id: "creative",
    title: "Creative / Brand / Visual",
    description: "Work selected to prove visual direction, Arabic-first composition, brand expression, and creative progression."
  },
  {
    id: "independent",
    title: "Independent / Editorial / Experimental",
    description: "Self-directed work included only when it demonstrates a distinct capability beyond the commercial portfolio."
  }
];

export function getProject(id: string): ProjectRecord {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Unknown portfolio project: ${id}`);
  return project;
}

export function getProjectsByLane(lane: ProjectLane): ProjectRecord[] {
  return projects.filter((project) => project.public && project.lane === lane);
}

export function getFeaturedProjects(): ProjectRecord[] {
  return projects.filter((project) => project.public && project.featured);
}

export function getPublicCaseStudyProjects(): ProjectRecord[] {
  return projects.filter((project) => project.public && Boolean(project.caseStudyPath));
}
