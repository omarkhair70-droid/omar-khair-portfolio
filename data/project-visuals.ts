export type CuratedVisual = {
  sourceId: string;
  assetPath: string;
  publicPath: string;
  alt: string;
};

export type ProjectVisualPlan = {
  hero: string;
  home: string[];
  work: string[];
  caseStudy: string[];
  capturePriority: "P0" | "P1" | "P2" | "P3" | "none-blocking";
  note?: string;
};

export const curatedVisualBinariesReady = true;

const asset = (project: string, sourceId: string, file: string, alt: string): CuratedVisual => ({
  sourceId,
  assetPath: `public/work/${project}/${file}`,
  publicPath: `/work/${project}/${file}`,
  alt
});

export const curatedVisualAssets: Record<string, CuratedVisual> = {
  P003: asset("balcona-bar", "P003", "01-customer-entry.webp", "Balcona Bar customer table-entry start experience"),

  P013: asset("tuscanini", "P013", "01-category-grid.webp", "Tuscanini category discovery"),
  P011: asset("tuscanini", "P011", "02-menu.webp", "Tuscanini branded Arabic menu and product discovery"),
  P008: asset("tuscanini", "P008", "03-food-finder.webp", "Tuscanini Food Finder guided workflow"),
  P004: asset("tuscanini", "P004", "04-recommendation.webp", "Tuscanini personalized recommendation"),
  P009: asset("tuscanini", "P009", "05-customization.webp", "Tuscanini item customization and add-ons"),
  P006: asset("tuscanini", "P006", "06-cart.webp", "Tuscanini cart with quantities and line items"),
  P005: asset("tuscanini", "P005", "07-checkout.webp", "Tuscanini delivery and checkout form"),
  P007: asset("tuscanini", "P007", "08-order-summary.webp", "Tuscanini order summary and conversion state"),

  P031: asset("habba", "P031", "01-brand-home.webp", "Habba brand-led Arabic home experience"),
  P030: asset("habba", "P030", "02-featured-products.webp", "Habba featured product discovery"),
  P017: asset("habba", "P017", "03-product-detail.webp", "Habba jewelry product detail"),
  P028: asset("habba", "P028", "04-choose-your-way.webp", "Habba guided choose-your-way commerce experience"),
  P022: asset("habba", "P022", "05-drop-builder.webp", "Habba Drop builder"),
  P021: asset("habba", "P021", "06-drop-result.webp", "Habba Drop recommendation result"),
  P015: asset("habba", "P015", "07-cart-upsell.webp", "Habba cart and cross-sell state"),
  P026: asset("habba", "P026", "08-whatsapp-conversion.webp", "Habba WhatsApp conversion handoff"),

  P035: asset("bahja", "P035", "01-home-sections.webp", "Bahja home and collection sections"),
  P037: asset("bahja", "P037", "02-bag-collections.webp", "Bahja warm bag collection direction"),
  P041: asset("bahja", "P041", "03-product-detail.webp", "Bahja Arabic product detail"),
  P034: asset("bahja", "P034", "04-cart-checkout.webp", "Bahja cart and checkout workflow"),
  P033: asset("bahja", "P033", "05-checkout-form.webp", "Bahja checkout details form"),

  P064: asset("hiltech", "P064", "01-home-hero.webp", "HILTECH corporate infrastructure hero"),
  P061: asset("hiltech", "P061", "02-field-work.webp", "HILTECH real delivery and field context"),
  P051: asset("hiltech", "P051", "03-core-services.webp", "HILTECH core network services"),
  P056: asset("hiltech", "P056", "04-catalog.webp", "HILTECH product catalog and category discovery"),
  P053: asset("hiltech", "P053", "05-product-detail.webp", "HILTECH detailed product specification view"),
  P045: asset("hiltech", "P045", "06-rfq-basket.webp", "HILTECH RFQ basket workflow"),
  P046: asset("hiltech", "P046", "07-rfq-details.webp", "HILTECH RFQ project-details form"),
  P059: asset("hiltech", "P059", "08-procurement-flow.webp", "HILTECH structured procurement journey"),

  P082: asset("nova", "P082", "01-home-dashboard.webp", "Nova branded native social home dashboard"),
  P073: asset("nova", "P073", "02-orbit.webp", "Nova Orbit relationship surface"),
  P068: asset("nova", "P068", "03-tonight.webp", "Nova Tonight ephemeral social mode"),
  P069: asset("nova", "P069", "04-reel.webp", "Nova full-screen native reel"),
  P075: asset("nova", "P075", "05-create-hub.webp", "Nova multi-format creation hub"),
  P079: asset("nova", "P079", "06-post-detail.webp", "Nova post interaction detail"),
  P076: asset("nova", "P076", "07-messaging-calls.webp", "Nova messaging with voice video and call history"),
  P072: asset("nova", "P072", "08-profile.webp", "Nova profile and identity surface"),

  P123: asset("teswa", "P123", "01-discovery-hub.webp", "Teswa distinctive discovery model"),
  P127: asset("teswa", "P127", "02-home-dashboard.webp", "Teswa active home dashboard"),
  P109: asset("teswa", "P109", "03-marketplace-feed.webp", "Teswa marketplace item discovery"),
  P084: asset("teswa", "P084", "04-item-detail.webp", "Teswa item detail with exchange prompt"),
  P100: asset("teswa", "P100", "05-offer-state.webp", "Teswa offer and exchange state"),
  P104: asset("teswa", "P104", "06-exchange-chat.webp", "Teswa accepted exchange chat with voice and call behavior"),
  P108: asset("teswa", "P108", "07-create-listing.webp", "Teswa create-listing workflow"),
  P099: asset("teswa", "P099", "08-profile.webp", "Teswa profile and listings"),
  P111: asset("teswa", "P111", "09-trust.webp", "Teswa trust and reputation layer"),
  P122: asset("teswa", "P122", "10-movement.webp", "Teswa movement and social-story layer"),

  P135: asset("wavezero", "P135", "01-brand-home.webp", "WaveZero editorial consumer music home"),
  P136: asset("wavezero", "P136", "02-listening-home.webp", "WaveZero continue listening and recently played"),
  P131: asset("wavezero", "P131", "03-library.webp", "WaveZero music library"),
  P128: asset("wavezero", "P128", "04-device-music.webp", "WaveZero local device music"),
  P132: asset("wavezero", "P132", "05-search.webp", "WaveZero search and collection discovery"),
  P133: asset("wavezero", "P133", "06-now-playing.webp", "WaveZero Now Playing experience"),
  P130: asset("wavezero", "P130", "07-settings-downloads.webp", "WaveZero audio downloads and storage settings")
};

export const projectVisuals: Record<string, ProjectVisualPlan> = {
  "balcona-bar": {
    hero: "P003",
    home: [],
    work: ["P003"],
    caseStudy: ["P003"],
    capturePriority: "P0",
    note: "Visually under-covered. Keep to one restrained visual until the required operational captures exist."
  },
  tuscanini: {
    hero: "P011",
    home: ["P011"],
    work: ["P011", "P009", "P007"],
    caseStudy: ["P013", "P011", "P008", "P004", "P009", "P006", "P005", "P007"],
    capturePriority: "P3"
  },
  habba: {
    hero: "P031",
    home: ["P031"],
    work: ["P031", "P022", "P017"],
    caseStudy: ["P031", "P030", "P017", "P028", "P022", "P021", "P015", "P026"],
    capturePriority: "P3"
  },
  bahja: {
    hero: "P037",
    home: ["P037"],
    work: ["P037", "P041", "P034"],
    caseStudy: ["P035", "P037", "P041", "P034", "P033"],
    capturePriority: "P0",
    note: "Use conservatively until the known external layout issue is fixed and recaptured."
  },
  hiltech: {
    hero: "P064",
    home: ["P064", "P061", "P056"],
    work: ["P064", "P056", "P045"],
    caseStudy: ["P064", "P061", "P051", "P056", "P053", "P045", "P046", "P059"],
    capturePriority: "P1"
  },
  nova: {
    hero: "P082",
    home: ["P082", "P073", "P068"],
    work: ["P082", "P073", "P069"],
    caseStudy: ["P082", "P073", "P068", "P069", "P075", "P079", "P076", "P072"],
    capturePriority: "P3"
  },
  teswa: {
    hero: "P123",
    home: ["P123", "P127", "P084", "P104"],
    work: ["P123", "P084", "P104"],
    caseStudy: ["P123", "P127", "P109", "P084", "P100", "P104", "P108", "P099", "P111", "P122"],
    capturePriority: "none-blocking"
  },
  wavezero: {
    hero: "P135",
    home: ["P135", "P133", "P128"],
    work: ["P135", "P133", "P128"],
    caseStudy: ["P135", "P136", "P131", "P128", "P132", "P133", "P130"],
    capturePriority: "P1",
    note: "P135 is valid current evidence but should be replaced by the same state with a non-demo track when captured."
  }
};

export type SupportingEvidencePlan = {
  status: "fresh-capture-required" | "motion-and-stills-required" | "deliberate-inclusion-required";
  stills: string[];
  motion?: string[];
  note: string;
};

export const freshCaptureRequirements: Record<string, string[]> = {
  "balcona-bar": [
    "Customer menu/category",
    "Product detail",
    "Cart/order flow",
    "Live order/service state",
    "Cashier/POS",
    "Kitchen/barista KDS",
    "Owner/admin operations"
  ],
  bahja: [
    "Clean home hero after the clipping/header fix",
    "Category view after the fix",
    "Arabic product detail after the fix",
    "Cart/checkout after the fix",
    "Desktop capture after the fix",
    "Mobile capture after the fix"
  ],
  hiltech: [
    "Desktop hero",
    "Desktop catalog",
    "Desktop RFQ flow",
    "Safe admin/RFQ inbox, quote-tracking, or equivalent operational view"
  ],
  nova: [
    "Optional story viewer/composer",
    "Optional polished call UI",
    "Optional better-seeded Reel capture"
  ],
  wavezero: [
    "Android media notification / MediaSession",
    "Lock-screen playback controls",
    "Actual offline/download state",
    "Expanded Queue / Up Next",
    "Replacement brand-home hero using a real/non-demo track"
  ],
  "abdel-aal-coffee": [
    "Current site hero",
    "Product composition",
    "Store/brand section",
    "Logo lockup if present"
  ],
  athr: [
    "Visually validated cover",
    "Strongest before/after pair(s)",
    "One or two design studies"
  ],
  "farrag-coffee-v2": [
    "Current V2 hero",
    "Coffee Finder interaction",
    "Product/menu discovery",
    "Cart/conversion",
    "Optional safe admin view"
  ],
  "pharmacist-portfolio": [
    "Clean live hero",
    "Three to four representative sections",
    "Desktop width",
    "Mobile width"
  ],
  "sultan-al-burhan": [
    "Deliberately selected landing-page capture",
    "Document-reader/editorial capture",
    "Any later launch/motion evidence only after deliberate inclusion"
  ]
};

export const supportingEvidencePlans: Record<string, SupportingEvidencePlan> = {
  "abdel-aal-coffee": {
    status: "motion-and-stills-required",
    stills: freshCaptureRequirements["abdel-aal-coffee"],
    motion: ["Deliberate poster/frame from the existing video loop", "Short motion excerpt / loop"],
    note: "Treat as creative, brand, and motion proof — not as a technical flagship."
  },
  athr: {
    status: "motion-and-stills-required",
    stills: freshCaptureRequirements.athr,
    motion: ["Motion poster/excerpt from the existing project video"],
    note: "Use as Origins / Creative Direction evidence after visual validation; do not promote it as an engineering flagship."
  },
  "farrag-coffee-v2": {
    status: "fresh-capture-required",
    stills: freshCaptureRequirements["farrag-coffee-v2"],
    note: "The three legacy portfolio screenshots were not part of the final 136-image curation pack, so Phase 2 does not promote them into the new source of truth."
  },
  "pharmacist-portfolio": {
    status: "fresh-capture-required",
    stills: freshCaptureRequirements["pharmacist-portfolio"],
    note: "Capture the current live delivery cleanly; no screenshot from the 136-image pack belongs to this project."
  },
  "sultan-al-burhan": {
    status: "deliberate-inclusion-required",
    stills: freshCaptureRequirements["sultan-al-burhan"],
    motion: ["Launch-video evidence can be added later only when deliberately selected"],
    note: "The final curation pack contains no Sultan Al-Burhan screenshots. Keep the editorial/product story structural until a deliberate visual pack exists."
  }
};

export function getProjectVisualPlan(projectId: string): ProjectVisualPlan {
  const plan = projectVisuals[projectId];
  if (!plan) throw new Error(`No curated visual plan for project: ${projectId}`);
  return plan;
}

export function getSupportingEvidencePlan(projectId: string): SupportingEvidencePlan {
  const plan = supportingEvidencePlans[projectId];
  if (!plan) throw new Error(`No supporting evidence plan for project: ${projectId}`);
  return plan;
}

export function getVisual(sourceId: string): CuratedVisual {
  const visual = curatedVisualAssets[sourceId];
  if (!visual) throw new Error(`Unknown curated visual source ID: ${sourceId}`);
  return visual;
}
