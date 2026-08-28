# OMAR KHAIR PORTFOLIO — MASTER HANDOFF, VISION, REFERENCES, VISUAL SYSTEM & WORKING METHOD

**Purpose:** This is the single continuity file for the Omar Khair professional portfolio project. It is meant to be uploaded into a new ChatGPT/Codex chat so that the new session can recover the project **as if it had the important context of the long original chat**, without restarting the work.

**Repository:** `omarkhair70-droid/omar-khair-portfolio`  
**Primary implementation branch during final closure:** `portfolio/final-implementation`  
**This file is a handoff/reference, not a new redesign brief.**

---

# 0. HOW TO USE THIS FILE IN A NEW CHAT

Upload this file as the first attachment in the new chat and say:

> Read the attached master handoff completely before doing anything. Treat it as continuity from the previous portfolio chat, not as a new project brief. Then inspect the live repository and GitHub state, verify what has changed since the timestamp recorded in the file, and continue only from the actual unfinished closure point. Do not restart design, curation, architecture, project selection, visual research, or completed QA unless a concrete regression proves it necessary.

The new chat must **verify current GitHub state before acting**, because the exact branch/PR status may have changed after this file was generated.

---

# 1. WHAT THIS FILE PRESERVES

This file consolidates the important working memory of the portfolio project, including:

- the original professional goal;
- the positioning and identity decision;
- project selection and proof hierarchy;
- the research/benchmark path;
- the visual references and what was learned from them;
- the visual direction and design rules;
- typography and header decisions;
- case-study pacing/rhythm;
- motion direction;
- mobile/accessibility rules;
- screenshot/visual-evidence curation method;
- the final 55-image visual system;
- the exact project visual mapping;
- commercial/pricing architecture;
- information architecture;
- project/content data architecture;
- implementation architecture;
- GitHub/branch/PR working model;
- ChatGPT vs Codex working roles;
- QA and final closure workflow;
- major constraints and “do not reopen” rules;
- project-by-project public status and inclusion decisions;
- current near-final repository state;
- the reusable project workflow that came out of this portfolio process.

It is designed to replace dependence on one giant historical chat.

---

# 2. CURRENT VERIFIED REPOSITORY STATE — SNAPSHOT

**Snapshot time:** 2026-08-28, around 05:03 Egypt time.  
Always re-check live GitHub before acting.

## `main`

At this snapshot:

`main` =  
`61ce28d2e14e661712dc499ff293d48f8c84e698`

That commit is:

`Merge pull request #35 ... Publish WaveZero privacy policy for Play`

Important consequence:

**`/privacy/wavezero` is production truth already present on `main` and must never be regressed or removed.**

## Final implementation branch

At this snapshot:

`portfolio/final-implementation` =  
`5c71e0b2b96271cac8b65c70027cc4bab4a87b10`

Latest commit message:

`ci: retry final Vercel preview`

## Final PR

Final PR:

**PR #36 — Final portfolio implementation**

Base: `main`  
Head: `portfolio/final-implementation`

At snapshot:
- state: OPEN
- mergeable: TRUE
- changed files: 106
- additions: 8067
- deletions: 1034

## Final closure QA state

The PR records that the full one-shot closure QA passed.

The PR body records a full PASS on:

`b7ba3f5a2b84dd6f8587461f55176740cb463d5f`

After synchronizing closure work to current `main`, one-shot closure workflows also ran successfully on the later sync state.

The closure verification included:
- `npm ci`
- lint
- production build
- frozen asset/manifest checks
- WaveZero privacy contract check
- desktop + mobile Playwright route validation
- no broken images
- no horizontal overflow
- keyboard focus validation
- mobile menu and contact controls
- reduced-motion shutter bypass
- WCAG axe scan with no serious/critical violations
- all production routes verified

Temporary one-shot QA workflows were removed after PASS.

## Vercel

At current branch head `5c71e0b...`:

Vercel status = **SUCCESS**  
Description = `Deployment has completed`

So, at this snapshot, the portfolio is no longer in the old “mid contrast audit” state. It has advanced to a **final PR / closure state**.

Before any new work, verify whether PR #36 has since been merged or changed.

---

# 3. ORIGINAL GOAL — WHY THIS PORTFOLIO EXISTS

The original goal was not “make a nice developer portfolio.”

The goal was to build a portfolio strong enough to support:
- UX/UI opportunities;
- Product Design opportunities;
- Frontend work;
- full-stack work;
- mobile work;
- technical/product roles;
- client work;
- freelance/commercial outreach.

The important reframing that emerged:

> Do not present many separate skills as a list. Present Omar as someone who can solve and build a **complete product**.

The portfolio should prove that Omar can:
- understand a real problem;
- shape the product and journey;
- design the visual experience;
- build the system;
- handle web/mobile/native details;
- launch/deploy/release it;
- present it professionally.

This became the foundation for the final identity.

---

# 4. LOCKED PROFESSIONAL POSITIONING

## Public identity

**Omar Khair**  
**Product Builder | Full-Stack Web & Mobile Developer**  
Based in Egypt.

Primary positioning:

> Omar builds digital products end-to-end across web, mobile, business systems, visual direction, and launch presentation.

The portfolio must never reduce the identity to:

> “just a programmer”

## The four-part public framework

The final site frames Omar through:

**Product + Engineering + Visual Direction + Launch**

### Product
- scope
- user journeys
- product thinking
- system behavior
- business workflows
- release decisions
- end-to-end ownership

### Engineering
- full-stack web
- mobile
- native Android
- APIs
- real-time systems
- architecture
- deployment

### Visual Direction
- interface composition
- RTL/Arabic-first product experience
- brand-led web work
- visual systems
- creative direction

### Launch
- deployment
- Google Play release operations
- launch visuals
- Adobe Premiere Pro
- AI-assisted promo/editing workflows
- Codex + Premiere MCP

## Public narrative rule

Technical flagships prove engineering depth.  
Creative projects prove visual range.  
Client work proves delivery.  
Independent work proves initiative and original direction.

The confidence should come from **evidence**, not self-hype.

Avoid language such as:
- world-class
- visionary
- ninja
- rockstar

---

# 5. VERIFIED PROFESSIONAL PROFILE FACTS

## Education wording

Public wording is deliberately concise and factual:

- Computer Science coursework — Nahda University, Beni Suef, Egypt
- Visual arts / Fine Arts preparation and design background

Do **not** publish:
- grades;
- transfer history;
- family context;
- private educational details;
- any implication of a completed degree if it is not completed.

## Core web/full-stack capabilities

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Django / Python
- NestJS
- Prisma
- Redis
- REST APIs
- WebSockets
- authentication / sessions
- RLS-aware data flows
- admin dashboards
- business workflows
- Vercel deployment

## Mobile/native

- React Native / Expo
- Expo Router
- EAS build / OTA / release workflows
- Google Play release operations
- Kotlin Android
- Android architecture and release engineering
- Flutter
- Kotlin + AndroidX Media3 / ExoPlayer
- MethodChannel native bridges
- SQLite/offline product behavior
- notifications/media/device integrations
- Rust foundations where applicable

## Engineering workflow

- Git / GitHub
- CI/CD
- architecture consolidation
- refactoring
- repository audits
- release gates
- product/system documentation
- AI-assisted engineering with Codex

## Creative / launch

- product/brand visual direction
- interface composition
- Arabic/RTL visual product work
- launch visuals
- Adobe Premiere Pro
- Codex + Premiere MCP
- short product/app promo workflows

Important limitation:

Do not present Omar as a full-service film studio unless finished work supports it. Media is an **additional product-launch capability**, not the whole identity.

---

# 6. COMMERCIAL / PRICING ARCHITECTURE

One major decision was to keep **two distinct commercial layers** so the low-cost local offer does not destroy the value of standard work.

## Local Launch Offer

**1,000 EGP**

Payment:
- 500 EGP upfront
- 500 EGP on launch

Scope:
- compact polished multi-section one-page site
- mobile responsive
- profile/services/products as relevant
- WhatsApp/contact
- location/social links
- basic SEO metadata
- deployment
- one revision

Separate/extra:
- domain
- paid third-party services
- custom backend
- expanded scope

Rule:

> The 1,000 EGP offer is a limited local launch package. It is NOT the normal price of Omar’s websites/apps.

## Standard project ranges

- Starter Website — **15,000 EGP+**
- Business Website — **30,000 EGP+**
- Brand / Ordering Experience — **45,000 EGP+**
- RFQ / Business System — **60,000 EGP+**
- Larger Products / Mobile / Systems — **custom scope**

This distinction must remain visually and verbally impossible to misunderstand.

---

# 7. PORTFOLIO PROOF HIERARCHY

The project list must be curated. It is not a GitHub dump.

## Lane 1 — Flagship Products & Systems

1. HILTECH
2. Teswa
3. Nova
4. WaveZero
5. Balcona Bar

These are the strongest technical/product/system proof.

## Lane 2 — Client & Business Work

- Senior Pharmacist Portfolio
- Tuscanini
- Habba
- Bahja
- Farrag Coffee V2

## Lane 3 — Creative / Brand / Visual

- Abdel Aal Coffee
- Farrag evolution / early work
- Athr as origins/evolution evidence
- other creative projects only if they strengthen the portfolio

## Lane 4 — Independent / Editorial / Experimental

- Sultan Al-Burhan
- experiments only when they add a distinct capability

## General rule

Do not make weak or early projects visually compete with flagship products.

---

# 8. PROJECT-BY-PROJECT PUBLIC DECISIONS

## HILTECH

Lane: Flagship  
Tier: Flagship  
Public status: Live production business system

Role/proof:
- product direction
- UI
- full-stack business workflow
- RFQ/product/admin system

Canonical live URL:
`https://hiltech-eg.com`

Public GitHub:
`https://github.com/omarkhair70-droid/hiltech-eg-website`

Case study:
`/work/hiltech`

Proof:
- B2B product catalog
- RFQ workflow
- quotation/follow-up
- operations/admin depth

Decision:
**INCLUDE — top flagship**

Important:
- do not regress back to the old Vercel URL as canonical CTA.

## Teswa

Lane: Flagship  
Tier: Flagship  
Status: Public app / post-launch

Role:
- product direction
- React Native / Expo
- Supabase
- release operations

Links:
- Google Play: `https://play.google.com/store/apps/details?id=com.teswa.mobile`
- web: `https://teswa-eg.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/teswa.eg`
- case study: `/work/teswa`

Decision:
**INCLUDE — top flagship**

The final presentation must show Play + web + GitHub + case study as a coherent proof package.

## Nova

Lane: Flagship  
Tier: Flagship

Role:
- product direction
- native Kotlin Android
- Django/backend
- WebSockets
- architecture/release work

Current public state in portfolio source:
- available on normal Google Play listing
- currently distributed through closed testing

Links:
- Google Play: `https://play.google.com/store/apps/details?id=com.omarkhair70.nova`
- tester group: `https://groups.google.com/g/nova-closed-testers`
- GitHub: `https://github.com/omarkhair-labs/nova`
- case study: `/work/nova`

Temporary note:
- keep a small removable closed-testing note
- remove when production rollout is public

Decision:
**INCLUDE — top flagship**

## WaveZero

Lane: Flagship  
Tier: Flagship

Role:
- product direction
- Flutter UI
- Kotlin/Media3 native playback bridge
- MethodChannel
- offline/download/media systems

State:
- available on normal Google Play listing
- currently distributed through closed testing

Links:
- Google Play: `https://play.google.com/store/apps/details?id=com.omarkhair.wavezero`
- tester group: `https://groups.google.com/g/nova-closed-testers`
- GitHub: `https://github.com/omarkhair70-droid/wavezero`
- case study: `/work/wavezero`

Critical:
- `/privacy/wavezero` is production release infrastructure
- never remove/regress it

Decision:
**INCLUDE — top flagship**

## Balcona Bar

Lane: Flagship  
Tier: Flagship / advanced system

Role:
- product/system architecture
- Next.js + NestJS
- Prisma/PostgreSQL/Redis
- operations workflows

Status:
- live / online hosted operating demo

Demo:
`https://balcona-bar-staging-web.vercel.app`

GitHub:
`https://github.com/omarkhair70-droid/balcona-bar`

Case study:
`/work/balcona`

Important visual truth:
The final curated screenshot set intentionally contains **ONE** approved Balcona image.

Do not fake visual depth. The system narrative can be strong, but the public visual proof must remain restrained until stronger operational captures exist.

Decision:
**INCLUDE — flagship with restrained visuals**

## Senior Pharmacist Portfolio

Lane: Client & Business  
Tier: Strong supporting/client proof

Status:
- delivered live client project

Links:
- live: `https://pharmacist-portfolio.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/pharmacist-portfolio`
- case study: `/work/pharmacist-portfolio`

Decision:
**INCLUDE — key client proof**

## Tuscanini

Lane: Client & Business  
Tier: Strong supporting

Role:
- Product/UX direction
- Arabic ordering experience
- cart/offers/PWA direction

Live:
`https://tuscanini-ordering-system.vercel.app`

Repo:
**private — never expose**

Case study:
`/work/tuscanini`

Decision:
**INCLUDE**

## Habba

Lane: Client + Creative  
Tier: Strong supporting

Role:
- visual direction
- RTL storefront
- product discovery
- WhatsApp conversion

Links:
- live: `https://habba-store.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/habba-store`
- case study: `/work/habba`

Decision:
**INCLUDE**

Important historical decision:
Habba and Bahja must not be collapsed into one indistinct project.

## Bahja

Lane: Client + Creative  
Tier: Supporting

Status:
- live
- known external layout/header/product clipping issue

Links:
- live: `https://bahja-store.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/bahja-store`
- case study: `/work/bahja-store`

Decision:
- include conservatively
- do not claim pristine proof
- fresh recapture only after the external project issue is fixed

## Farrag Coffee V2

Lane: Client / Creative  
Tier: Strong supporting

Canonical current project:
- live: `https://farrag-coffee-v2.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/farrag-coffee-v2`
- case study: `/work/farrag-coffee`

Decision:
**INCLUDE**

Original Farrag:
- use only as evolution/early-work context
- do not create a second competing flagship card

## Abdel Aal Coffee

Lane: Creative / Brand / Visual

Role:
- concept
- visual design
- site creation
- motion/video direction

Links:
- live: `https://abdel-aal-coffee.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/abdel-aal-coffee`

Decision:
- creative proof, not technical flagship
- visual package still requires deliberate still/motion capture

## Athr

Lane: Creative  
Tier: grouped/origins

Decision:
- use as progression/origins evidence
- do not promote as engineering flagship
- only strongest stills and motion evidence

## Unique Piece Gallery
Decision:
- REVIEW
- include only if it materially strengthens visual distinctiveness

## Fine Arts NUB
Decision:
- REVIEW
- include only if it adds creative/editorial value

## OpsFlow Client Portal
Decision:
- REVIEW
- possible systems proof only after real technical/product audit

## Sultan Al-Burhan

Lane: Independent / Editorial / Experimental

Links:
- live: `https://sultan-al-burhan.vercel.app`
- GitHub: `https://github.com/omarkhair70-droid/sultan-al-burhan`

Portfolio framing:
- independent concept
- editorial/product direction
- web execution

Do not turn Omar’s professional portfolio into a debate about the subject matter.

Decision:
- intentional independent/editorial inclusion
- visual package can deepen later

## VIRAL
Decision:
- REVIEW
- do not claim product state without audit

## Doomsday Button
Decision:
- REVIEW / probably grouped
- include only if creatively distinctive

## Private/unclassified `app`
Decision:
- HOLD
- do not present until identified

## Omar Film OS
Decision:
- HOLD / supporting evidence
- internal tooling, not automatically public portfolio proof

## Omar Khair Portfolio itself
Meta/infrastructure only.

Decision:
**DO NOT FEATURE AS A NORMAL PROJECT**

---

# 9. INFRASTRUCTURE / NON-PORTFOLIO ITEMS

The following are not public portfolio projects:

- `sultan-burhan-data-01`
- `sultan-burhan-data-02`
- `sultan-burhan-data-03`

They are infrastructure/data deployments.

Do not surface them as work items.

---

# 10. REPOSITORY CLEANUP QUEUE

These are not portfolio proof:

- `farrag-coffeee` — empty duplicate
- `al-mawhoob-academy` — empty
- `pharmacist-portfolio-mohamed` — empty duplicate
- `no.fair` — empty
- `NOT` — private scratch

Archive/delete only after explicit cleanup decision. Never surface them publicly.

---

# 11. INFORMATION ARCHITECTURE — FINAL STRUCTURE

## Home `/`

Purpose:
fast identity + strongest proof.

Order:
1. Global header
2. Identity hero
3. Flagship evidence
4. Product + Engineering + Visual Direction + Launch
5. Selected client/business proof
6. Commercial entry
7. Working approach
8. Contact CTA
9. Footer

Home must **not** show every project.

## Work `/work`

Purpose:
curated evidence library.

Lanes:
- Flagship Products & Systems
- Client & Business Work
- Creative / Brand / Visual
- Independent / Editorial / Experimental

## About `/about`

Contains:
- concise professional narrative
- four-part capability framework
- factual education wording
- working style
- selected proof
- GitHub/LinkedIn/contact

## Services `/services`

Contains:
- standard project ranges
- larger custom scope
- Local Launch Offer as separate package
- proof matching by service type
- inquiry CTA

## Local Business `/local-business`

Dedicated conversion landing page for the 1,000 EGP limited offer.

## Contact `/contact`

Contains:
- inquiry form
- WhatsApp
- email
- phone
- LinkedIn
- GitHub

## Canonical case-study routes

- `/work/nova`
- `/work/wavezero`
- `/work/balcona`
- `/work/hiltech`
- `/work/teswa`
- `/work/pharmacist-portfolio`
- `/work/tuscanini`
- `/work/farrag-coffee`
- `/work/habba`
- `/work/bahja-store`

## Critical release route

- `/privacy/wavezero`

Never remove.

---

# 12. VISUAL RESEARCH / BENCHMARK PATH

A deliberate benchmark set was studied.

## Niccolò Miranda
`https://www.niccolomiranda.com/`

Learned:
- typographic authorship
- editorial pacing
- project-specific rhythm
- motion/creative code supports story

## Keita Yamada
`https://p5aholic.me/`

Learned:
- minimal chrome
- distinct identity
- experimentation subordinate to composition

## Dennis Snellenberg
`https://dennissnellenberg.com/`

Learned:
- immediate positioning
- oversized typography
- micro-interaction discipline
- mature transitions

## Brittany Chiang
`https://brittanychiang.com/`

Learned:
- recruiter clarity
- navigation/evidence remains legible
- accessibility does not have to weaken polish

## Adham Dannaway
`https://www.adhamdannaway.com/`

Learned:
- hybrid design/development identity can be immediately clear

## Bruno Simon
`https://bruno-simon.com/`

Learned:
- portfolio itself can be product evidence
- immersive technology only matters when coherent

## Sindre Sorhus
`https://sindresorhus.com/`

Learned:
- extreme content clarity
- products can carry the page

## Awwwards Portfolio References
`https://www.awwwards.com/websites/portfolio/`

Used for:
- contemporary creative-web benchmark
- typography
- transitions
- scrolling
- project pages
- responsive execution
- interaction quality

## Final principle

Do not imitate one site.

Locked target:

> **Editorial precision × product evidence × controlled creative motion**

The site must feel **authored before decorated**.

---

# 13. VISUAL DIRECTION — LOCKED

The old repeated card/grid grammar was rejected.

The final shell moved toward:
- oversized editorial typography
- full-width project chapters
- quiet vs immersive section contrast
- asymmetrical image composition
- visible project metadata
- fewer containers
- more negative space
- screenshots as the visual material
- motion as pacing, not spectacle

## Global colors

Paper:
`#f1eee6`

Paper elevated:
`#faf8f2`

Ink:
`#11110f`

Muted ink:
`#6f6b61`

Hairline:
`rgba(17,17,15,.16)`

Cobalt:
`#3157ff`

Signal orange:
`#ff5a2f`

Project sections may use project-specific field colors, but the global identity remains:
paper / ink / signal.

## Grid
- editorial max width: ~1480px
- 12-column mental model desktop
- asymmetry encouraged if reading order remains clear
- mobile becomes a deliberate single-column composition

## Space
- mobile section rhythm: roughly 72–104px
- desktop: roughly 120–180px
- project chapters should feel like scenes

## Corners
- interface controls: pill/small radius
- media: moderate radius
- do not wrap every block in a giant rounded card

---

# 14. TYPOGRAPHY FINGERPRINT — LOCKED

The final typography system is:

## Primary
**Manrope Variable**

Used for:
- UI
- large product headings
- navigation
- body
- labels
- pricing
- system information

## Editorial contrast
**Instrument Serif**

Used sparingly for:
- name signature
- selected hero words
- project/section contrast

Never use Instrument Serif for long body copy.

Implementation:
- `next/font/google`
- `display: swap`
- CSS variables
- no font-package dependency

Metadata moved toward a more legible minimum, rather than using tiny low-contrast text.

---

# 15. HEADER IDENTITY — LOCKED

The visible app-like rounded black `OK` mark was rejected.

The final visible header identity:

> **OMAR / Khair**

- sans + serif contrast
- no enclosing badge
- compact on mobile
- role remains secondary
- navigation remains obvious
- current route state should not rely on heavy pills
- direct “Start a project” path retained
- mobile control uses explicit `Menu / Close` language instead of an app-like circle/hamburger

The old logo asset can remain for favicon/metadata compatibility.

---

# 16. CASE-STUDY RHYTHM — LOCKED

The problem:

A repeated pattern like:

`phone → caption → phone → caption`

made project pages feel template-like.

The solution is a bounded 5-part visual grammar:

1. **Lead state**
   - one dominant screen
   - large chapter word

2. **Paired state**
   - two related screens together

3. **Focus state**
   - one important screen gets disproportionate scale
   - editorial annotation

4. **Offset / triptych state**
   - related workflow screens overlap/stagger as one sequence

5. **Finale state**
   - closing proof cluster feels like a destination

Rules:
- grouping by product meaning, not arbitrary order;
- screenshots remain readable;
- captions are annotations, not cards;
- no mandatory horizontal scrolling;
- no new animation dependency;
- mobile intentionally collapses groups;
- Balcona does not fake multi-screen rhythm from one image.

## Project-specific rhythm map

### Nova
Home  
→ Orbit + Tonight  
→ Reel focus  
→ Create + Post  
→ Messaging + Profile finale

### Teswa
Discovery lead  
→ Home + Marketplace  
→ Item + Offer focus  
→ Exchange Chat + Create  
→ Profile + Trust + Movement finale

### HILTECH
Corporate lead  
→ Field + Services  
→ Catalog + Product  
→ RFQ Basket + Details + Procurement finale

### WaveZero
Brand lead  
→ Listening + Library  
→ Device Music focus  
→ Search + Now Playing  
→ Settings finale

### Balcona
One approved public state only.  
No artificial multi-screen treatment.

---

# 17. SIGNATURE MOTION — LOCKED

The site intentionally uses only **two** authored motion behaviors.

## 1. Editorial shutter transition

For internal route changes:
- short full-viewport paper/ink shutter
- destination label
- Omar/Khair identity
- fast cover, faster reveal
- feels like turning a designed page
- not a fake loader

Do not intercept:
- external links
- modifier-click
- downloads
- anchors
- same-route clicks

Browser navigation must keep working.

## 2. Case-study chapter cadence

- chapter words and media reveal with different curves
- words tighten into place
- media arrives slightly later
- existing IntersectionObserver reveal system
- no scroll hijack
- no mandatory parallax

## Technical constraints

No:
- GSAP
- Lenis
- Three.js
- WebGL

for this pass.

Use compositor-friendly:
- transform
- opacity

Reduced motion:
- bypass route shutter
- remove non-essential chapter motion

No fake loading state.

---

# 18. MOBILE ART DIRECTION — LOCKED

Mobile is **not** a shrunken desktop.

Rules:
- hero words wrap intentionally
- metadata becomes compact framing
- screenshots stack instead of becoming tiny collages
- no horizontal overflow required for core navigation
- motion distances reduced
- mobile gutters at least ~20px
- case-study pairs/finales stack deliberately
- giant chapter words may wrap but must not overflow
- touch controls remain comfortable
- captions/metadata target around ≥12px rendered size with adequate line-height
- dense side-by-side content disappears below tablet width

---

# 19. ACCESSIBILITY / CONTRAST — LOCKED

Standards referenced:
- WCAG 2.2 contrast
- WCAG target-size minimum
- visible keyboard focus
- responsive/mobile design guidance

Rules:
- normal text contrast minimum target: 4.5:1
- large text: 3:1
- portfolio uses ~44px practical interaction height where possible
- keyboard focus remains visible
- state should not be communicated by color alone

## Specific contrast decisions

On cobalt `#3157ff`:
- normal white copy must be near-opaque
- low-alpha white 45–70% is not acceptable for normal text

On dark/navy:
- muted white can remain softer because contrast remains high

On orange/coral:
- muted text uses sufficiently opaque black rather than translucent white

Small metadata stays secondary through:
- size
- weight
- spacing

not by becoming unreadable.

## Focus

Generic Tailwind ring was replaced with a current-color focus outline so it remains visible on:
- paper
- dark
- cobalt
- project-color surfaces

---

# 20. VISUAL EVIDENCE / SCREENSHOT CURATION METHOD

This was one of the most important parts of the project.

The screenshot archive was not trusted blindly.

The curation method was:

1. inspect the full archive visually;
2. identify which project each screenshot belongs to;
3. use sequence/grouping when filenames alone are weak;
4. remove:
   - duplicates
   - weak states
   - error/accidental states
   - redundant screens
   - visually weaker alternatives
5. select for each project:
   - strongest hero
   - Home candidate(s)
   - Work preview candidate(s)
   - case-study sequence
6. preserve product truth;
7. never invent missing evidence;
8. if evidence is weak, keep the visual presentation restrained rather than fake depth.

Historical source archive:
approximately **136 screenshots/images** were audited.

Final canonical public curated set:

**55 WebP assets**

The final `data/project-visuals.ts` is the visual source of truth.

Older screenshot folders are not authoritative if they conflict with the final 55 mapping.

---

# 21. FINAL 55-IMAGE VISUAL SET

Final public files under `public/work`.

## Balcona Bar — 1
- `public/work/balcona-bar/01-customer-entry.webp`

Final mapping:
- hero: P003
- Home: none
- Work: P003
- Case study: P003

Rule:
**one restrained visual only**

## Tuscanini — 8
- `01-category-grid.webp`
- `02-menu.webp`
- `03-food-finder.webp`
- `04-recommendation.webp`
- `05-customization.webp`
- `06-cart.webp`
- `07-checkout.webp`
- `08-order-summary.webp`

Visual plan:
- hero: P011
- Home: P011
- Work: P011, P009, P007
- Case study: P013, P011, P008, P004, P009, P006, P005, P007

## Habba — 8
- `01-brand-home.webp`
- `02-featured-products.webp`
- `03-product-detail.webp`
- `04-choose-your-way.webp`
- `05-drop-builder.webp`
- `06-drop-result.webp`
- `07-cart-upsell.webp`
- `08-whatsapp-conversion.webp`

Visual plan:
- hero: P031
- Home: P031
- Work: P031, P022, P017
- Case study: P031, P030, P017, P028, P022, P021, P015, P026

## Bahja — 5
- `01-home-sections.webp`
- `02-bag-collections.webp`
- `03-product-detail.webp`
- `04-cart-checkout.webp`
- `05-checkout-form.webp`

Visual plan:
- hero: P037
- Home: P037
- Work: P037, P041, P034
- Case study: P035, P037, P041, P034, P033

Rule:
use conservatively until known external layout issue is fixed.

## HILTECH — 8
- `01-home-hero.webp`
- `02-field-work.webp`
- `03-core-services.webp`
- `04-catalog.webp`
- `05-product-detail.webp`
- `06-rfq-basket.webp`
- `07-rfq-details.webp`
- `08-procurement-flow.webp`

Visual plan:
- hero: P064
- Home: P064, P061, P056
- Work: P064, P056, P045
- Case study: P064, P061, P051, P056, P053, P045, P046, P059

## Nova — 8
- `01-home-dashboard.webp`
- `02-orbit.webp`
- `03-tonight.webp`
- `04-reel.webp`
- `05-create-hub.webp`
- `06-post-detail.webp`
- `07-messaging-calls.webp`
- `08-profile.webp`

Visual plan:
- hero: P082
- Home: P082, P073, P068
- Work: P082, P073, P069
- Case study: P082, P073, P068, P069, P075, P079, P076, P072

## Teswa — 10
- `01-discovery-hub.webp`
- `02-home-dashboard.webp`
- `03-marketplace-feed.webp`
- `04-item-detail.webp`
- `05-offer-state.webp`
- `06-exchange-chat.webp`
- `07-create-listing.webp`
- `08-profile.webp`
- `09-trust.webp`
- `10-movement.webp`

Visual plan:
- hero: P123
- Home: P123, P127, P084, P104
- Work: P123, P084, P104
- Case study: P123, P127, P109, P084, P100, P104, P108, P099, P111, P122

## WaveZero — 7
- `01-brand-home.webp`
- `02-listening-home.webp`
- `03-library.webp`
- `04-device-music.webp`
- `05-search.webp`
- `06-now-playing.webp`
- `07-settings-downloads.webp`

Visual plan:
- hero: P135
- Home: P135, P133, P128
- Work: P135, P133, P128
- Case study: P135, P136, P131, P128, P132, P133, P130

Note:
P135 is valid evidence but can later be replaced by the same state with a non-demo track.

---

# 22. FRESH-CAPTURE REQUIREMENTS — OPTIONAL FUTURE EVIDENCE

These are evidence upgrades, not reasons to reopen the completed portfolio redesign.

## Balcona
- customer menu/category
- product detail
- cart/order flow
- live order/service state
- cashier/POS
- kitchen/barista KDS
- owner/admin operations

## Bahja
after external fix:
- clean home hero
- category
- Arabic product detail
- cart/checkout
- desktop
- mobile

## HILTECH
- desktop hero
- catalog
- RFQ
- safe admin/RFQ inbox/quote tracking

## Nova
optional:
- story viewer/composer
- polished call UI
- stronger seeded Reel

## WaveZero
- media notification/MediaSession
- lockscreen controls
- actual offline/download state
- expanded queue
- non-demo hero capture

## Abdel Aal
- current hero
- product composition
- brand/store section
- logo lockup
- motion poster/excerpt

## Athr
- validated cover
- strongest before/after
- design studies
- motion excerpt

## Farrag V2
- current hero
- Coffee Finder
- discovery
- cart/conversion
- optional admin

## Pharmacist Portfolio
- hero
- 3–4 sections
- desktop
- mobile

## Sultan Al-Burhan
- selected landing page
- document/editorial view
- launch motion only after deliberate selection

---

# 23. SOURCE-OF-TRUTH DATA ARCHITECTURE

A major improvement was separating facts from presentation.

## `data/projects.ts`

This is the canonical public project registry used by:
- Home
- Work
- shared case-study chrome
- related-work
- metadata
- sitemap selectors

Fields include:
- id
- slug
- title
- shortTitle
- lane
- tier
- featured
- public
- summary
- role
- proof
- stack
- status
- caseStudyPath
- actions
- caveat

Rules:
- private repos never become actions
- Play public vs closed test vs staging are distinct
- release labels are centralized
- HILTECH canonical URL exists once
- Nova/WaveZero/Balcona status changes are one-record edits

## `data/project-visuals.ts`

Separate from project/business metadata.

Owns:
- hero
- Home previews
- Work previews
- case-study order
- alt text
- curation source IDs
- fresh-capture requirements
- supporting evidence plans

This separation is intentional.

## `data/site.ts`

Centralizes:
- identity
- contact
- four capability pillars
- service ranges
- Local Launch Offer
- education wording
- working approach
- WaveZero privacy-policy data

---

# 24. REUSABLE UI / IMPLEMENTATION ARCHITECTURE

The final architecture favors reusable primitives without making every case study identical.

Shared pieces include concepts such as:
- SiteHeader
- SiteFooter
- PageIntro / SectionHeading
- ProjectStatusBadge
- ProjectActions
- ProjectPreview
- WorkLane
- VisualStory
- PairedScreens / visual groups
- CaseStudyHero
- RelatedWork
- CapabilityPillars
- ContactMethods

Rule:
Case studies can share the system but must retain project-specific narrative/layout.

---

# 25. PROJECT LINK SYSTEM

Use a consistent visual action language.

Possible actions:
- Case Study
- Live Website / Demo
- GitHub
- Google Play
- Join Closed Test
- Testing Listing

Rules:
- no raw-URL visual clutter
- no dead buttons
- proper external target/rel
- never expose private repositories
- distinguish testing/staging/public release states
- easy future replacement of temporary closed-test notes

---

# 26. WRITING / CONTENT STANDARD

Flagship case study order:

1. project identity / status / links
2. what it is
3. Omar’s role
4. problem/context
5. product/system solution
6. visual product story
7. technical/system depth
8. workflows/features
9. stack
10. result/value without invented metrics
11. related work / contact CTA

Supporting cases can be shorter.

Do not use one mechanical heading template for every project.

---

# 27. WHAT THE VISUAL DESIGN MUST NEVER BECOME

Do not:
- turn it back into generic developer cards;
- use tiny screenshot collages;
- use giant low-information rounded cards everywhere;
- use meaningless gradients;
- use WebGL only for novelty;
- animate every element;
- hide navigation for aesthetic effect;
- treat mobile as compressed desktop;
- distort screenshots;
- create fake device depth;
- invent metrics;
- invent release status;
- invent project depth;
- expose private repos;
- make the site look like a résumé pasted into a template.

---

# 28. AUTHORITY ORDER — WHEN SOURCES DISAGREE

Use this order:

1. **Latest explicit user instruction**
2. **Current repository and live GitHub facts**
3. `AGENTS.md`
4. `docs/MASTER_PROJECT_REGISTRY.md`
5. `docs/PROFESSIONAL_PROFILE_SOURCE.md`
6. `docs/CODEX_PORTFOLIO_MASTER_TASK.md`
7. `docs/FINAL_IMPLEMENTATION_ARCHITECTURE.md`
8. `docs/FINAL_VISUAL_DIRECTION.md`
9. `data/projects.ts`
10. `data/project-visuals.ts`
11. this handoff for historical context/method
12. old chat memory

Special case:
for the final curated images, the committed **55-image `data/project-visuals.ts` mapping overrides old pre-curation screenshot counts**.

---

# 29. WORKING METHOD THAT EMERGED

This portfolio developed a repeatable workflow.

The real sequence became:

> **Inventory → Audit → Canonical Truth → Positioning → Project Hierarchy → Benchmark Research → Visual Curation → Architecture → Bounded Implementation → Visual Gates → Accessibility/QA → Deployment Verification → Final Closure**

## Stage 1 — Inventory
Collect:
- repositories
- live deployments
- Play listings
- project statuses
- screenshot archive
- old portfolio pages
- pricing
- contact/profile facts

Do not design before knowing what actually exists.

## Stage 2 — Repository audit
Inspect:
- current routes
- data duplication
- stale links
- missing case studies
- old assets
- current component system
- metadata/SEO
- deployment setup

The existing implementation is evidence, not automatic truth.

## Stage 3 — Canonical truth
Create governing sources:
- project registry
- professional profile
- release/status truth
- commercial offer truth

The purpose is to stop different pages from contradicting each other.

## Stage 4 — Positioning
The question is not:
“What skills do I have?”

The question is:
“What professional story explains all of the strongest work?”

Answer:
**Product + Engineering + Visual Direction + Launch**

## Stage 5 — Project hierarchy
Rank proof instead of dumping it.

Flagship / Client / Creative / Independent.

## Stage 6 — Benchmark research
Study mature references for principles.

Do not copy layouts.

For each reference ask:
- what makes it feel authored?
- how does it pace projects?
- how much UI chrome exists?
- how is identity communicated?
- how does motion support the story?
- what can transfer without cloning?

## Stage 7 — Visual curation
Audit all source imagery.

Choose:
- hero
- Home
- Work
- case-study order

Reject:
- weak
- duplicate
- error
- redundant
- low-value states

Do not “fill” missing proof with fake images.

## Stage 8 — Architecture
Separate:
- project facts
- visual assignments
- site/profile/commercial facts

Create reusable selectors/components.

## Stage 9 — Implementation
Implement one coherent system.

Avoid:
- many unrelated mini redesigns
- restarting foundations after each idea
- duplicate content models

Use logical checkpoints/commits.

## Stage 10 — Visual gates
Instead of endless taste iteration, lock gates:
- Home visual direction
- typography/header
- case-study rhythm
- signature motion
- mobile/accessibility

Each gate changes one coherent layer.

## Stage 11 — Accessibility and QA
Do not treat accessibility as a final cosmetic checkbox.

Audit:
- contrast
- focus
- touch target
- overflow
- mobile layout
- reduced motion
- image integrity
- route behavior

## Stage 12 — Closure
Only after visual system is locked:
- lint
- build
- Playwright
- axe
- bundle/performance review
- screenshots
- Vercel
- main comparison
- privacy preservation
- final PR

---

# 30. CHATGPT / CODEX DIVISION OF LABOR

The working pattern that proved effective:

## ChatGPT / product-review side

Owns:
- strategy
- repository/project audit
- research
- positioning
- project selection
- visual direction
- screenshot curation
- architecture decisions
- GitHub/PR state review
- QA interpretation
- deciding whether a failure is real vs stale gate
- scope control
- final closure judgment

## Codex / implementation side

Owns:
- code implementation
- bounded refactors
- page/component/data updates
- logical commits
- focused local validation
- branch push / PR preparation when instructed

## GitHub CI

Owns:
- mechanical full validation
- repeatable final checks
- avoiding wasteful repeated local full-suite runs

## Important operational rule

Do not spend Codex quota repeatedly:
- polling CI;
- rerunning full suites after tiny edits;
- waiting on long builds;
- generating long reports.

Use:

> inspect → implement → focused check if needed → diff/status → commit/push → hosted CI → review actual failure only

---

# 31. TEST / COMPUTE POLICY

Quality required. Waste not required.

During implementation:
- inspect code first;
- run smallest useful check;
- batch visual edits;
- do not repeatedly run expensive tests.

Final closure can run the full relevant set once.

This principle became important because repeated low-value testing consumed time/compute without improving the product.

---

# 32. FINAL QA WORKFLOW — THE CLOSURE PLAYBOOK

The high-end portfolio workflow’s final closure pattern was:

## A. Remaining visual audit
- search remaining low-opacity text
- especially cobalt/dark/project-color surfaces
- fix contrast only where actually needed

## B. One-shot technical QA
- `npm ci`
- lint
- build

## C. Browser QA
Desktop and mobile:
- force lazy images to render
- verify routes
- no broken images
- no horizontal overflow
- menu
- form
- keyboard focus
- reduced motion

## D. Accessibility
- axe scan
- no serious/critical violations

## E. Performance
- First Load JS / route bundle review
- avoid dependency bloat

## F. Visual proof
- final screenshots
- manual inspection

## G. Cleanup
- remove temporary one-shot workflow after PASS

## H. Deployment
- Vercel preview
- verify deployment

## I. Main sync
- compare final branch vs current main
- preserve `/privacy/wavezero`
- do not regress production privacy work

## J. Curation cleanup
- close old visual-curation PR when fully superseded

## K. Final PR
Only then open:

`portfolio/final-implementation → main`

This is exactly what PR #36 represents.

---

# 33. KEY FINAL QA ROUTES

Core routes:

- `/`
- `/work`
- `/about`
- `/services`
- `/contact`
- `/local-business`
- `/privacy/wavezero`
- `/work/nova`
- `/work/wavezero`
- `/work/balcona`
- `/work/hiltech`
- `/work/teswa`
- `/work/pharmacist-portfolio`
- `/work/tuscanini`
- `/work/farrag-coffee`
- `/work/habba`
- `/work/bahja-store`

---

# 34. WHAT WAS ALREADY COMPLETED BEFORE THE OLD CHAT HIT MAX LENGTH

At the old chat checkpoint, these were already locked:

- Typography ✅
- Header ✅
- Case-study rhythm ✅
- Signature motion ✅
- Mobile polish partially complete ✅
- Contrast already corrected across:
  - Home
  - Work
  - About
  - Services
  - Contact
  - Nova
  - FlagshipVisualStory
  - SupportingVisualStory

The old chat then hit maximum length while finishing:
- remaining case-study contrast
- final accessibility
- final browser QA
- screenshots
- performance review
- Final PR

After that checkpoint, the repository progressed further.

Current repo truth now shows:
- final one-shot closure QA passed;
- Vercel deployment succeeded;
- final PR #36 exists and was mergeable at the snapshot.

Therefore:

**Do not resume from the old mid-contrast checkpoint. Resume from the current live PR state.**

---

# 35. HISTORICAL MISTAKES / LESSONS

## Mistake: generic portfolio framing
Early portfolio versions leaned toward a clean one-page developer portfolio.

Lesson:
clean is not enough. The work required stronger authorship and product evidence.

## Mistake: flat project list
All projects competing equally weakened the strongest work.

Lesson:
proof hierarchy matters.

## Mistake: skills as separate identities
UX/UI/frontend/mobile/full-stack as separate badges can look unfocused.

Lesson:
unify them through end-to-end product ownership.

## Mistake: card-heavy design
Repeated rounded cards made the portfolio feel template-like.

Lesson:
use typography, spacing, project imagery, and editorial composition.

## Mistake: screenshot quantity over evidence quality
More screenshots do not automatically make a case study stronger.

Lesson:
curate roles: hero / Home / Work / story.

## Mistake: fake visual depth
A project with one real good screenshot should not be stretched into a fake 8-screen gallery.

Lesson:
Balcona’s one-image honesty is stronger than fabricated completeness.

## Mistake: broad experimental motion
It would have been easy to add GSAP/Lenis/WebGL simply because benchmark sites used them.

Lesson:
transfer principles, not tools.

## Mistake: low-opacity metadata
Visual “subtlety” created contrast failures.

Lesson:
make metadata secondary via hierarchy, not unreadability.

## Mistake: mobile afterthought
Desktop compositions do not shrink cleanly.

Lesson:
mobile art direction is its own composition.

## Mistake: repeated QA loops
Repeated full QA during active visual iteration wastes time.

Lesson:
lock gates, then run closure once.

---

# 36. HARD CONSTRAINTS FOR ANY FUTURE CHAT

Do not:

- redesign the portfolio again without a new explicit reason;
- restart visual curation;
- replace the canonical 55 images casually;
- rewrite factual project status from memory;
- expose private repos;
- invent clients, users, revenue, metrics, employment, education, or release claims;
- remove `/privacy/wavezero`;
- merge to production automatically unless explicitly instructed;
- modify external project repos as part of portfolio closure;
- over-promote Bahja until its external issue is fixed;
- make Balcona visually deeper than its real evidence;
- collapse Habba/Bahja together again;
- change the two-layer pricing architecture;
- hide Nova/WaveZero closed-testing truth;
- turn launch/media capability into fake agency claims;
- create a new design system when the current one works;
- add animation libraries without concrete need;
- reopen finished architecture just because a new chat lacks context;
- repeat research already settled unless current facts changed.

---

# 37. CURRENT GOVERNING REPOSITORY FILES

Any continuation should read these first:

1. `AGENTS.md`
2. `docs/MASTER_PROJECT_REGISTRY.md`
3. `docs/PROFESSIONAL_PROFILE_SOURCE.md`
4. `docs/CODEX_PORTFOLIO_MASTER_TASK.md`
5. `docs/FINAL_IMPLEMENTATION_ARCHITECTURE.md`
6. `docs/FINAL_VISUAL_DIRECTION.md`
7. `docs/LAUNCH_CHECKLIST.md`
8. `data/projects.ts`
9. `data/project-visuals.ts`
10. `data/site.ts`
11. `app/globals.css`

Use the live current versions, not historical copies.

---

# 38. REFERENCE LINKS USED FOR THE FINAL VISUAL SYSTEM

## Portfolio references
- Niccolò Miranda — `https://www.niccolomiranda.com/`
- Keita Yamada — `https://p5aholic.me/`
- Dennis Snellenberg — `https://dennissnellenberg.com/`
- Brittany Chiang — `https://brittanychiang.com/`
- Adham Dannaway — `https://www.adhamdannaway.com/`
- Bruno Simon — `https://bruno-simon.com/`
- Sindre Sorhus — `https://sindresorhus.com/`
- Awwwards portfolios — `https://www.awwwards.com/websites/portfolio/`

## Case-study rhythm references
- `https://www.niccolomiranda.com/work/om-swami`
- `https://www.niccolomiranda.com/work/argor-heraeus`
- `https://www.niccolomiranda.com/work/loftgarten`
- `https://www.awwwards.com/inspiration/case-study-examples-drexler-3`
- `https://www.awwwards.com/inspiration/process-navigation-side-scrolling-z1-digital-studio`
- `https://www.awwwards.com/inspiration/mobile-screens-dumemearts`

## Motion/performance
- `https://web.dev/articles/animations-guide`
- `https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility`

## Accessibility
- `https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html`
- `https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html`
- `https://web.dev/learn/accessibility/focus/`
- `https://web.dev/learn/design/`

---

# 39. REUSABLE MASTER WORKFLOW FOR FUTURE PROJECTS

This is the method worth preserving beyond the portfolio.

## Phase A — Truth before design
1. inventory all assets/repos/deployments
2. inspect actual product state
3. create one canonical registry
4. separate facts from assumptions
5. identify what is safe to claim publicly

## Phase B — Positioning
6. define the professional/product story
7. define proof hierarchy
8. decide what is flagship/supporting/experimental
9. remove weak clutter

## Phase C — Reference research
10. benchmark strong references
11. extract principles
12. explicitly state what will NOT be copied
13. lock a visual/product direction

## Phase D — Evidence
14. audit screenshots/media
15. choose hero / preview / story
16. reject duplicates/weak/error states
17. record missing evidence honestly

## Phase E — Architecture
18. centralize canonical data
19. separate content truth from visual mapping
20. create reusable primitives
21. preserve project-specific storytelling

## Phase F — Implementation
22. one coherent branch
23. bounded checkpoints/commits
24. no endless mini-redesigns
25. focused tests only while building

## Phase G — Quality gates
26. typography/identity gate
27. layout/rhythm gate
28. motion gate
29. mobile/accessibility gate

## Phase H — Closure
30. full final QA once
31. deployment verification
32. compare production branch
33. protect existing production contracts
34. final PR
35. merge only when explicitly approved

---

# 40. NEW-CHAT RECOVERY INSTRUCTION — READY TO PASTE

Use this with this file:

```text
Continue the Omar Khair professional portfolio project from the attached MASTER HANDOFF.

This is a continuity session, not a new portfolio project.

Repository:
omarkhair70-droid/omar-khair-portfolio

First:
1. Read the attached handoff completely.
2. Inspect live GitHub and current repository state.
3. Read the governing repo files listed in the handoff.
4. Verify current main, portfolio/final-implementation, PR #36, CI/checks, and Vercel.
5. Compare current state against the snapshot in the handoff.

Do NOT:
- restart design
- restart screenshot curation
- reopen project selection
- create a new architecture phase
- replace the canonical 55-image mapping
- regress /privacy/wavezero
- redo finished visual research
- rerun expensive QA without a concrete reason

The portfolio direction is locked:
Editorial precision × product evidence × controlled creative motion.

The professional positioning is locked:
Product + Engineering + Visual Direction + Launch.

If PR #36 is still the current final PR and all closure evidence remains green, continue only with the true remaining final-closure action(s).
If it has been merged, verify post-merge production and stop.
If a check fails, diagnose only that concrete failure.

Before changing anything, return:
- current main SHA
- current final branch SHA
- PR #36 state
- current CI/check state
- Vercel state
- exact remaining action
```

---

# 41. FINAL MENTAL MODEL

This portfolio is not a site containing projects.

It is a **professional evidence system**.

Its job is to make one coherent claim:

> Omar can take a digital product from idea and product structure, through visual direction and implementation, into a working release and professional launch presentation.

Every design choice, project choice, screenshot, case study, price, link, and motion decision should support that claim.

When a future decision is unclear, ask:

1. Is it true?
2. Does it strengthen the proof hierarchy?
3. Does it make the work easier to understand?
4. Does it preserve visual authorship?
5. Does it avoid fake depth?
6. Does it preserve production/release truth?
7. Does it move the portfolio toward closure rather than another redesign cycle?

If yes, it belongs.

If not, leave it out.
