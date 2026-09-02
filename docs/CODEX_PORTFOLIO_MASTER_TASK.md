# CODEX MASTER TASK — Complete Omar Khair Portfolio Overhaul

## Mission

Take over the current `omar-khair-portfolio` repository and finish the portfolio end-to-end in one coherent implementation.

This is not a request for another partial refresh. The goal is to leave the repository in a state where the portfolio is a durable professional system that can be used for client outreach, job opportunities, technical credibility, creative credibility, and future project additions without needing another rebuild every few days.

Read `AGENTS.md`, `docs/MASTER_PROJECT_REGISTRY.md`, and `docs/PROFESSIONAL_PROFILE_SOURCE.md` completely before implementation.

Inspect the current repository and preserve useful existing work, but do not be constrained by the current page composition if a stronger information architecture is warranted.

## Non-negotiable outcome

The finished portfolio must communicate that Omar is not merely a programmer. It must show a credible combination of:

- product builder
- full-stack web engineer
- mobile developer
- native Android / architecture engineer
- business-system builder
- Arabic/RTL product designer
- visual / brand-minded creator
- client-delivery professional
- independent creator
- product-launch / promo workflow capability

The result should feel deliberate, mature, visual, evidence-driven, and commercially usable — not like a generic developer template, not like a grid of cards, and not like a résumé pasted into a website.

---

# 1. Source-of-truth inputs

## Project registry
Use:
`docs/MASTER_PROJECT_REGISTRY.md`

It contains project tiers, statuses, live links, repositories, Play Store state, screenshot readiness, case-study gaps, and inclusion decisions.

## Professional identity
Use:
`docs/PROFESSIONAL_PROFILE_SOURCE.md`

Do not invent facts beyond it or evidence in the repositories.

## Curated screenshot pack
Use:
`portfolio-input/portfolio_selected_assets_webp.zip`

The pack contains selected real product screenshots for:
- HILTECH
- Teswa
- Nova
- WaveZero
- Tuscanini
- Habba
- Bahja
- Balcona Bar

It also contains a selection manifest.

Extract to a temporary working directory, inspect the images, and build a clean final asset structure under `public/`. Do not simply dump all images onto pages. Curate each project into a visual story.

Older screenshots in `public/project-screenshots/`, low-resolution `public/project-showcases/`, and any partially prepared `public/portfolio-assets/` should be consolidated. Remove obsolete duplicate/low-quality assets after the new presentation no longer references them.

---

# 2. Information architecture

Create a durable structure. You may refine route names, but preserve working URLs where reasonable and add redirects only if necessary.

At minimum the portfolio must provide:

## Home
The home page should immediately establish:
- Omar Khair
- Product Builder | Full-Stack Web & Mobile Developer
- concise value proposition
- visual evidence from flagship work
- multiple capability dimensions without turning into a skill dump
- clear routes to Work, About/Capabilities, commercial offer, and Contact
- strongest proof above the fold or immediately after it

The home page must not show every project. Curate.

## Work
Rebuild the Work experience around meaningful lanes rather than one undifferentiated list.

Recommended lanes:

### Flagship Products & Systems
HILTECH, Teswa, Nova, WaveZero, Balcona Bar

### Client & Business Work
Senior Pharmacist Portfolio, Ahmed Khair Portfolio, Tuscanini, Habba, Bahja, Farrag Coffee V2

### Creative / Brand / Visual Work
Abdel Aal Coffee, Farrag evolution, and only the strongest of Athr / Unique Piece / Fine Arts after inspection

### Independent / Editorial / Experimental
Sultan Al-Burhan and only experiments that materially strengthen the identity

Do not make weak projects compete visually with flagships.

## About / Capabilities
Add or rebuild a professional About/Capabilities experience that includes:
- concise professional narrative
- verified education wording
- engineering capabilities
- product/business capability
- creative/visual capability
- launch/media capability
- working style / end-to-end ownership
- link to GitHub / LinkedIn / contact

Do not expose private educational history.

## Services / Work with me
Keep the offer architecture clear:
- Local Launch Offer — 1,000 EGP, clearly limited scope
- Starter Website — 15,000 EGP+
- Business Website — 30,000 EGP+
- Brand / Ordering Experience — 45,000 EGP+
- RFQ / Business System — 60,000 EGP+
- Larger products / mobile / systems — custom

The 1,000 EGP offer must never read as if Omar normally sells all websites/apps for 1,000 EGP.

## Contact
Make contact frictionless:
- email
- phone / WhatsApp where current site supports it
- LinkedIn
- GitHub
- inquiry form
- clear project-type choices

---

# 3. Flagship visual system

This is one of the most important parts of the task.

## Global visual rules
- Never use tiny screenshot collages.
- Mobile screenshots must remain readable.
- Use full device screenshots, editorial crops, staggered grids, horizontal rails, paired screens, or restrained device framing as appropriate.
- Do not distort screenshots.
- Avoid giant empty white areas around phone screenshots.
- Preserve screenshot aspect ratio unless an intentional crop still communicates the screen.
- Use `next/image` correctly with meaningful alt text and responsive sizes.
- Optimize final image use for performance.
- Home uses a small number of strong hero/preview images.
- Work cards/sections use enough visual proof to understand each product.
- Case studies use complete galleries and a deliberate narrative sequence.

## Teswa
Use the curated Teswa set to build:
- one strong Hero
- 2–3 preview screens in Work
- a 6–8 screen case-study narrative

The visual story should cover the strongest available combination of:
marketplace/discovery → detail/exchange → messaging/social interaction → notifications/profile/settings as supported by the actual selected screenshots.

Add a professional link group:
- Google Play: https://play.google.com/store/apps/details?id=com.teswa.mobile
- web: https://teswa-eg.vercel.app
- GitHub: https://github.com/omarkhair70-droid/teswa.eg
- Case Study

Teswa is public/post-launch. Do not hide the Play Store link.

## Nova
Create a dedicated Nova case study route.

Use:
- Hero
- 2–3 Work previews
- 6–8 case-study screens

Tell the product story using the strongest selected screens across its social experience such as Orbit/feed, reels/media, messages, comments/interactions, profile, stories/sharing, or other actual surfaces visible in the supplied images.

Links/status:
- GitHub: https://github.com/omarkhair-labs/nova
- Tester group: https://groups.google.com/g/nova-closed-testers
- Google Play closed test: https://play.google.com/apps/testing/com.omarkhair70.nova

Current closure status:
Nova is **available on Google Play** at the normal store listing and is currently distributed through closed testing. Show the Google Play CTA plus the closed-test group, with one small removable distribution note until production rollout is public.

## WaveZero
Create a dedicated WaveZero case study route.

Use:
- Hero
- 2–3 Work previews
- 5–6 case-study screens

Communicate the product plus the native engineering underneath it:
Flutter interface + Kotlin Media3/ExoPlayer native playback + MethodChannel + MediaSession/offline/local music/download/queue behavior + Rust foundations where factually supported.

Link:
- GitHub: https://github.com/omarkhair70-droid/wavezero

Google Play status:
**Available on Google Play.** Use https://play.google.com/store/apps/details?id=com.omarkhair.wavezero and keep the small temporary closed-testing distribution note.

## HILTECH
Strengthen the existing HILTECH case study with the curated asset pack.

Use a web/system-oriented visual composition instead of phone framing.

Links:
- verified Next.js deployment: https://hiltech-eg-website.vercel.app
- GitHub: https://github.com/omarkhair-labs/hiltech-eg-website
- Case Study

Use the verified Next.js deployment for portfolio proof. The similarly named custom domain currently points to a different site and must not be used for this repository.

The case study should visually prove:
corporate/product presentation, product catalog, RFQ flow, business/admin/operational depth where supported by assets and repository evidence.

## Balcona Bar
Create a dedicated Balcona case study if the available evidence supports a strong page.

Current curated screenshot coverage is limited, so do not fake a large visual gallery. Use the available real visual plus strong architecture/product narrative from repository evidence.

Links:
- staging: https://balcona-bar-staging-web.vercel.app
- GitHub: https://github.com/omarkhair70-droid/balcona-bar

Current closure status is **LIVE / ONLINE** for the hosted operating demo at https://balcona-bar-staging-web.vercel.app. Keep the staging/demo nature clear without implying the environment is offline.

---

# 4. Supporting project treatment

## Senior Pharmacist Portfolio
Keep as important client-delivery proof.
Links:
- live: https://pharmacist-portfolio.vercel.app
- GitHub: https://github.com/omarkhair70-droid/pharmacist-portfolio
- existing case study

If needed, capture/use existing repo assets rather than inventing visuals.

## Tuscanini
Use curated screenshots and strengthen the existing case study.
- live: https://tuscanini-ordering-system.vercel.app
- repository is private; do not expose a GitHub CTA

## Habba
Treat as a distinct project, not merely half of a combined “Habba & Bahja” card.
- live: https://habba-store.vercel.app
- GitHub: https://github.com/omarkhair70-droid/habba-store
- use curated screenshots
- emphasize Arabic-first visual/product and commerce experience

## Bahja
Treat as distinct from Habba, but conservatively.
- live: https://bahja-store.vercel.app
- GitHub: https://github.com/omarkhair70-droid/bahja-store

There is a known external site header/product-page clipping issue. Do not modify the Bahja repository in this task. Do not over-promote it as pristine proof. It can appear in supporting work with a restrained presentation.

## Farrag Coffee
Use V2 as the canonical current project:
- live: https://farrag-coffee-v2.vercel.app
- GitHub: https://github.com/omarkhair70-droid/farrag-coffee-v2
- existing case study

The original Farrag site:
- live: https://farrag-coffee.vercel.app
- GitHub: https://github.com/omarkhair70-droid/farrag-coffee

Should be used, if useful, as “evolution / early work” context, not a competing full flagship card.

## Abdel Aal Coffee
Add it to the creative/brand layer because it proves visual creation from scratch, not because it is a technical flagship.
- live: https://abdel-aal-coffee.vercel.app
- GitHub: https://github.com/omarkhair70-droid/abdel-aal-coffee

Inspect the actual site/repo before writing claims. If the visual/video work is strong enough, create a compact creative case study or a high-quality expanded project section.

## Athr / Unique Piece / Fine Arts
Inspect before inclusion:
- https://athr-studio-website.vercel.app
- https://unique-piece-gallery.vercel.app
- https://fine-arts-nub.vercel.app

Repositories are listed in the registry.

Only include them if they strengthen the creative identity. The goal is curation, not completeness for its own sake.

---

# 5. Independent work

## Sultan Al-Burhan
Inspect:
- live: https://sultan-al-burhan.vercel.app
- GitHub: https://github.com/omarkhair70-droid/sultan-al-burhan

Package it as independent/editorial/creative work if it strengthens the portfolio. Keep its subject matter separate from client/business claims. Focus the portfolio description on the product/editorial/design execution rather than turning Omar's professional portfolio into a debate about the content itself.

## Other experimental projects
OpsFlow, VIRAL, Doomsday Button, and private/unclassified projects are in the registry.

Inspect them. Include only if a project proves a capability not already demonstrated better elsewhere.

Never surface empty/duplicate repos.

---

# 6. Media / launch capability

Create a tasteful capability section showing that Omar can extend product work into launch/presentation workflows.

Accurate capability language may include:
- product launch visuals
- app/product promo structure
- Adobe Premiere Pro
- AI-assisted editing workflows
- Codex + Premiere MCP workflow

Do not claim a catalogue of finished commercial video work that does not exist in the repository. The section should communicate additional launch capability, not reposition the entire site as a video agency.

Design the content model so actual promo videos can be added later per project without redesigning the site.

---

# 7. Project link system

Build one reusable, consistent project-link component/data model.

Possible destinations:
- Case Study
- Live Website / Demo
- GitHub
- Google Play
- Join Closed Test
- Testing Listing
- Coming soon status

Requirements:
- no raw URL clutter
- no dead buttons
- correct `target` / `rel` for external links
- private repositories never exposed
- store/testing status visually distinguishable
- easy future replacement of Nova closed test with public Play listing
- easy future addition of WaveZero Play link

---

# 8. Content architecture / data model

Avoid hardcoding project information independently across Home, Work, and case-study navigation.

Create a maintainable project data/config source containing:
- id / slug
- title
- category/lane
- tier
- short description
- status
- tech/proof tags
- hero asset
- gallery assets
- case-study route
- live link
- repo link
- store/test links
- release label
- featured flag

Use it wherever practical so future updates do not require editing the same URL/status in multiple components.

Do not force long case-study prose into the data file if route-local content is clearer; use judgment.

---

# 9. Design direction

The desired level is an editorial product portfolio, not a template marketplace aesthetic.

Aim for:
- strong typography
- generous but purposeful spacing
- visual rhythm
- screenshot-led proof
- restrained neutral foundation with project imagery supplying color
- clear hierarchy between flagship, supporting, creative, and experimental work
- subtle interaction/motion only where it improves perceived quality
- excellent mobile behavior
- no horizontal overflow
- no image distortion
- no giant low-information cards
- no excessive rounded-card nesting
- no meaningless gradient decoration
- no “world-class / visionary / ninja / rockstar” self-hype
- concise factual writing

The work should feel confident because of evidence, not adjectives.

---

# 10. Case-study standard

A flagship case study should communicate, in a visually strong order:

1. project identity / status / links
2. what it is
3. Omar's role
4. problem/context
5. product/system solution
6. visual product story
7. technical/system depth
8. key workflows/features
9. relevant stack
10. result/value without invented metrics
11. next related work / contact CTA

Supporting case studies can be shorter.

Do not copy the exact same layout and headings mechanically onto every project. Maintain system consistency while allowing each project's nature to shape the composition.

---

# 11. Professional profile / About

Use the profile source.

The page/section should communicate breadth without looking unfocused.

A good framing is:
**Product + Engineering + Visual Direction + Launch**

Include:
- concise bio
- education wording
- capability groups
- approach to building
- selected proof links
- GitHub / LinkedIn

Do not publish grades, transfer history, family context, or unrelated personal material.

---

# 12. Commercial presentation

Preserve the two-layer pricing strategy.

## Local Launch Offer
1,000 EGP limited offer:
- compact one-page scope
- 500 upfront + 500 on launch
- one revision
- basic SEO/deployment/contact
- explicit scope boundaries

## Standard work
- 15k+
- 30k+
- 45k+
- 60k+
- custom

Make the distinction visually and verbally impossible to misunderstand.

---

# 13. Technical quality

Required:
- Next.js conventions respected
- TypeScript clean
- semantic HTML
- keyboard/focus usability
- alt text
- responsive images
- no broken routes
- no console-obvious mistakes
- no dead internal navigation
- metadata for key pages
- sitemap reflects final public routes
- robots remains sane
- Open Graph / Twitter identity remains aligned
- reasonable performance
- no unnecessary client components
- no unnecessary dependencies
- no secrets
- no external project credentials

If a reusable gallery, link bar, project card, lane section, or metadata structure reduces duplication, build it cleanly.

---

# 14. Validation strategy

Do not burn time/credits on repetitive testing loops.

Workflow:
1. inspect repository and governing docs
2. create an implementation plan internally
3. implement the complete coherent redesign
4. run targeted checks only when a concrete error requires it
5. at the end run:
   - lint/type validation as configured by the repo
   - production build
6. if available, spot-check key routes at desktop and mobile widths:
   - /
   - /work
   - /work/teswa
   - /work/nova
   - /work/wavezero
   - /work/hiltech
   - /work/balcona (or chosen slug)
   - /local-business
   - About/Capabilities route if created
7. fix only actual failures and rerun the necessary final check

Keep logs concise.

---

# 15. Definition of Done

The task is NOT complete until all of the following are true:

- Home presents Omar as a multidimensional product builder, not just a coder.
- Work has clear hierarchy/lanes.
- HILTECH, Teswa, Nova, WaveZero, and Balcona have deliberate flagship treatment.
- Teswa has Google Play + web + GitHub + case-study links.
- Nova has a dedicated case study, Google Play CTA, and accurate closed-testing distribution note.
- WaveZero has a dedicated case study, Google Play CTA, closed-testing distribution note, and intact privacy policy.
- HILTECH uses the verified Next.js deployment and does not link to the unrelated custom-domain site.
- supporting projects are properly separated and curated.
- Habba and Bahja are no longer collapsed into one indistinct project.
- creative/brand work has a legitimate place in the portfolio.
- Abdel Aal is represented if inspection confirms the creative proof described in the registry.
- Sultan Al-Burhan is intentionally included or intentionally omitted after inspection, not forgotten.
- launch/media capability is represented accurately.
- standard pricing and 1,000 EGP local offer coexist without contradiction.
- real screenshots are readable and not tiny collages.
- selected visual assets are organized cleanly.
- old broken/low-resolution showcase treatment is removed.
- project links are centralized and accurate.
- private repos are not exposed.
- site works on mobile and desktop.
- key metadata/sitemap reflect final routes.
- production build passes.
- no fabricated claims or metrics remain.
- no TODO placeholder is left for an item Codex could complete from the available repository/input.
- final implementation is one coherent PR ready for human visual review.

## Final response format

When finished, report:
- branch / PR
- major architecture/design changes
- projects included by lane
- new case-study routes
- link/status corrections
- asset/gallery changes
- validation results
- any items intentionally deferred because their external project itself must be fixed or released first

Do not stop halfway to ask whether to continue unless a truly blocking missing credential or inaccessible private source prevents completion.
