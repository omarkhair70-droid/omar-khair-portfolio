# Previous Portfolio Implementation Architecture

Status: **SUPERSEDED on 2026-08-29 by `docs/FINAL_VISUAL_DIRECTION.md` and the `Systems with a pulse` implementation.**

This file remains as the audit and migration record for the earlier evidence-led portfolio pass. Current component ownership, motion architecture and public routes are documented in the repository README and final visual direction.

Baseline: main @ d6bd4cbc733541e1e4e10d293c5a659b3800c876 (2026-08-27)

This document records the implementation architecture for the final Omar Khair professional portfolio. It is subordinate to `AGENTS.md`, `docs/MASTER_PROJECT_REGISTRY.md`, `docs/PROFESSIONAL_PROFILE_SOURCE.md`, `docs/CODEX_PORTFOLIO_MASTER_TASK.md`, and the latest explicit user instructions.

## Current campaign override

A dedicated asset-curation workflow is reviewing the full screenshot archive. The implementation owner must not redo that selection work.

The existing `portfolio-input/portfolio_selected_assets_webp.zip` is part of the current repository baseline, but it is not treated as the final campaign asset decision if a newer curated asset manifest/PR lands. Final hero, Home preview, Work preview, and case-study gallery choices must consume the curator's final manifest.

Release status must also remain centralized so Nova, WaveZero, and Balcona can be updated once when their campaign status settles.

## Audit of the current implementation

### What is already worth preserving
- Next.js App Router + TypeScript + Tailwind with very low dependency surface.
- Neutral visual foundation is compatible with the requested evidence-led editorial direction.
- Existing routes for HILTECH, Teswa, Tuscanini, Habba, Bahja, Farrag Coffee, Senior Pharmacist Portfolio, Work, and Local Business Offer.
- Local 1,000 EGP offer is already separated verbally from standard 15k+/30k+/45k+/60k+ work.
- Inquiry flow is functional and intentionally lightweight.
- Metadata, robots, sitemap, OpenGraph/Twitter generation already exist.

### Structural gaps against the master task
1. Project facts are duplicated across Home, Work, and individual case-study files.
2. Work is a flat list instead of the required proof hierarchy/lanes.
3. Home foregrounds Web & Mobile but does not yet express the complete Product + Engineering + Visual Direction + Launch identity.
4. No dedicated About/Capabilities route exists.
5. No dedicated general Services/Work-with-me route exists.
6. Contact is primarily a Home anchor; direct LinkedIn/phone/email/GitHub visibility is inconsistent.
7. No shared site shell/navigation across case studies.
8. Nova, WaveZero, and Balcona lack dedicated case studies.
9. HILTECH still uses the obsolete Vercel live URL in current UI.
10. Teswa is missing the complete Play + web + GitHub + case-study action package.
11. Nova lacks accurate closed-test actions.
12. WaveZero lacks an explicit centralized coming-to-Play state.
13. Balcona lacks its staging CTA/case study/visual proof treatment.
14. Habba and Bahja are collapsed together on Work even though they are separate projects.
15. Creative/brand and independent/editorial work have no proper lane.
16. Launch/media capability is absent.
17. Supporting case studies repeat a card-heavy template and do not share reusable identity/status/link primitives.
18. README and launch checklist are stale relative to the current portfolio.
19. Sitemap does not yet account for the required new routes.
20. Current low-resolution `public/project-showcases/` assets remain a temporary compatibility layer, not the final visual system.

## Final information architecture

### /
Purpose: fast identity + strongest evidence, not a project dump.

Order:
1. Global header
2. Identity hero
   - Omar Khair
   - Product Builder | Full-Stack Web & Mobile Developer
   - supporting line centered on Product + Engineering + Visual Direction + Launch
3. Flagship evidence strip/feature sequence
   - curated subset only
4. Four capability dimensions
   - Product
   - Engineering
   - Visual Direction
   - Launch
5. Selected client/business proof
6. Commercial entry points
   - standard work
   - Local Launch Offer
7. concise working approach
8. contact CTA
9. global footer

### /work
Purpose: evidence library with explicit hierarchy.

Lanes:
1. Flagship Products & Systems
   - HILTECH
   - Teswa
   - Nova
   - WaveZero
   - Balcona Bar
2. Client & Business Work
   - Senior Pharmacist Portfolio
   - Ahmed Khair Portfolio
   - Tuscanini
   - Habba
   - Bahja (restrained until external issue is fixed)
   - Farrag Coffee V2
3. Creative / Brand / Visual
   - Abdel Aal Coffee
   - Farrag evolution
   - only approved inspected additions from Athr / Unique Piece / Fine Arts
4. Independent / Editorial / Experimental
   - Sultan Al-Burhan if retained after evidence inspection
   - only experiments that add a distinct proof dimension

### /about
Purpose: professional narrative + capabilities without exposing private education history.

Sections:
- concise bio
- Product + Engineering + Visual Direction + Launch framework
- capability groups
- end-to-end ownership / working style
- factual education wording
- GitHub / LinkedIn / contact

### /services
Purpose: one durable commercial architecture.

Sections:
- standard scope categories and starting ranges
- larger mobile/product/system custom scope
- Local Launch Offer as a clearly separate limited package
- proof matching by service type
- inquiry CTA

### /local-business
Retain as the dedicated conversion landing page for the 1,000 EGP limited offer.

### /contact
Purpose: frictionless direct contact plus structured inquiry.

Include:
- inquiry form
- WhatsApp
- email
- phone
- LinkedIn
- GitHub

Keep `/#contact` usable during transition if existing inbound links depend on it.

### Case-study routes
Preserve existing slugs where practical:
- /work/hiltech
- /work/teswa
- /work/nova
- /work/wavezero
- /work/balcona
- /work/pharmacist-portfolio
- /work/tuscanini
- /work/habba
- /work/bahja-store
- /work/farrag-coffee

Creative/independent routes are added only after their evidence inspection justifies them.

## Data architecture

### data/projects.ts
Single canonical public project registry used by Home, Work, shared case-study chrome, related-work navigation, metadata helpers, and sitemap selectors.

Suggested model:

```ts
type ProjectLane = "flagship" | "client" | "creative" | "independent";

type ProjectActionKind =
  | "case-study"
  | "live"
  | "github"
  | "google-play"
  | "closed-test-group"
  | "testing-listing";

type ProjectAction = {
  kind: ProjectActionKind;
  label: string;
  href: string;
  external?: boolean;
};

type ProjectStatus = {
  label: string;
  tone: "live" | "testing" | "staging" | "coming-soon" | "delivered" | "caveat";
  releaseChannel?: "web" | "google-play" | "closed-test" | "staging";
};

type ProjectRecord = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  lane: ProjectLane;
  tier: "flagship" | "supporting" | "grouped";
  featured: boolean;
  summary: string;
  role: string;
  proof: string[];
  stack: string[];
  status: ProjectStatus;
  caseStudyPath?: string;
  actions: ProjectAction[];
  visualKey?: string;
  public: boolean;
  caveat?: string;
};
```

Rules:
- private repo URLs never enter public actions.
- Google Play public, closed-test, and coming-soon states are distinct data states.
- no release label is duplicated inside Home/Work route code.
- HILTECH canonical live destination is stored once.
- future Nova/WaveZero/Balcona status changes are one-record edits.

### data/project-visuals.ts
Visual assignments are intentionally separate from release/business metadata.

The file maps stable project IDs to:
- hero
- Home preview(s)
- Work preview(s)
- case-study gallery sequence
- alt text
- optional captions
- visual kind (mobile/web/system)
- optional display hint (full/paired/rail/crop)

This file is populated from the final curator manifest. The implementation owner does not independently choose the archive.

### data/site.ts
Centralize:
- professional identity
- public contact links
- capability pillars
- service ranges
- Local Launch Offer facts
- navigation

### lib/portfolio/
Small pure selectors/helpers:
- getProject(id)
- getProjectsByLane(lane)
- getFeaturedProjects()
- getPublicCaseStudyProjects()
- metadata helpers
- action/link helpers

Do not create a CMS or add a dependency for this portfolio.

## Reusable UI architecture

Shared system pieces:
- SiteHeader
- SiteFooter
- PageIntro / SectionHeading
- ProjectStatusBadge
- ProjectActions
- ProjectPreview
- WorkLane
- VisualStory / VisualRail / PairedScreens
- CaseStudyHero
- RelatedWork
- CapabilityPillars
- ContactMethods

Case studies may share primitives but should retain project-specific narrative/layout so they do not become identical templates.

## Visual integration contract

When the curator PR lands:
1. read its manifest; do not rerun archive curation.
2. map curated outputs into stable project IDs.
3. normalize final public assets under one structure, preferably `public/work/<project>/...`.
4. use semantic filenames where practical.
5. wire Home/Work/case-study roles through `data/project-visuals.ts`.
6. preserve original aspect ratios.
7. only remove old `project-showcases`, `project-screenshots`, or other duplicate assets after all references are replaced.
8. never expose the source ZIP publicly.

## Status integration contract

Current source-of-truth baseline:
- HILTECH: verified public Next.js deployment at `https://hiltech-eg-website.vercel.app`; the similarly named custom domain currently points to a different site
- Teswa: public/post-launch; public Google Play URL is valid
- Nova: available on the normal Google Play listing; currently distributed through closed testing
- WaveZero: available on the normal Google Play listing; currently distributed through closed testing; production privacy policy is published
- Balcona: hosted operating demo is live/online at `https://balcona-bar-staging-web.vercel.app`
- Bahja: live but known external layout issue; restrained presentation

Nova/WaveZero/Balcona release state is centralized in `ProjectRecord`; only the small closed-testing notes remain temporary for the two Android products.

## Safe implementation before statuses/assets settle

Safe now:
- central project/site data foundation
- shared status/action components
- shared site shell
- /about
- /services
- /contact
- Work lane structure
- Home information hierarchy
- HILTECH canonical URL correction
- Teswa public Play/web/GitHub action model
- Nova Google Play + closed-test action model
- WaveZero Google Play + closed-test action model
- Balcona verified live-demo state
- Habba/Bahja separation
- pricing/contact centralization
- sitemap/metadata architecture
- case-study route scaffolding and factual prose based on governing docs/repository evidence
- launch/media capability wording from the professional profile

Gated on curator output:
- hero selection
- Home screenshot selection
- Work preview selection
- final case-study gallery order
- asset cleanup/removal
- final image-led composition tuning

Release/product status gates now closed:
- Nova normal Google Play CTA is present; closed-testing note remains temporary.
- WaveZero normal Google Play CTA is present; closed-testing note remains temporary.
- Balcona live/online wording and verified hosted-demo CTA are present.

Gated on external evidence inspection/fix:
- stronger Bahja promotion
- final Abdel Aal case-study depth
- Athr / Unique Piece / Fine Arts inclusion
- Sultan Al-Burhan final packaging
- any experimental-project inclusion

## Bounded implementation sequence

All work stays on one final implementation branch and produces one reviewable final PR. Commits are bounded internally.

1. Foundation
   - canonical data types/projects/site
   - shared navigation/footer/status/actions
   - minimal route refactor to consume canonical data

2. Information architecture
   - Home hierarchy
   - Work lanes
   - About
   - Services
   - Contact
   - preserve Local Business Offer

3. Flagship case-study system
   - Nova
   - WaveZero
   - Balcona
   - strengthen Teswa/HILTECH structure
   - centralize related links/status

4. Supporting/creative/independent layer
   - separate Habba/Bahja
   - strengthen existing support case studies
   - add approved creative/independent work after evidence review

5. Curated asset integration
   - consume curator manifest
   - normalize public assets
   - wire visual roles
   - remove obsolete assets only when unreferenced

6. Final status closure
   - update Nova/WaveZero/Balcona once from centralized data

7. Documentation/SEO/QA
   - metadata/OG
   - sitemap
   - README
   - launch checklist
   - semantic/accessibility pass
   - one final lint/type/build pass
   - targeted desktop/mobile route review
   - fix actual failures only

## Final PR constraints

- one coherent final PR
- no automatic merge
- no fabricated status/metrics
- no private repo CTA
- no giant archive recuration
- no arbitrary theme pivot
- no repeated testing loops
- no unfinished TODO for work that can be completed from available evidence
