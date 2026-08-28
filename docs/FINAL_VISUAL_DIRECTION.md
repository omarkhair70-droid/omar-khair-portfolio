# Final Visual Direction — Creative Front-End Pass

Status: Site-wide visual direction locked on `portfolio/final-implementation`. Home, Work, flagship case studies, supporting/creative case studies, About, Services, and Contact now inherit this direction. Final gates are responsive/motion/visual QA and performance.

This document is subordinate to the project registry, professional profile, and final implementation architecture. It does not reopen project scope, release status, or screenshot curation. The existing project facts and approved 55-image visual set remain canonical.

## 1. Benchmark findings

The visual pass is informed by principles observed across a deliberately mixed benchmark set:

- Niccolò Miranda — https://www.niccolomiranda.com/
  - strong typographic authorship
  - editorial project pacing
  - motion and creative code used to support story
- Keita Yamada — https://p5aholic.me/
  - minimal interface with a distinct visual presence
  - restrained chrome around immersive work
  - creative technology kept subordinate to composition
- Dennis Snellenberg — https://dennissnellenberg.com/
  - immediate positioning
  - oversized type
  - strong recent-work sequencing and micro-interaction discipline
- Brittany Chiang — https://brittanychiang.com/
  - recruiter-friendly clarity
  - evidence and navigation remain legible
  - visual polish does not hide content
- Adham Dannaway — https://www.adhamdannaway.com/
  - hybrid identity communicated immediately
  - design and engineering are presented as one professional profile
- Bruno Simon — https://bruno-simon.com/
  - portfolio itself can be product evidence
  - immersive technology is useful only when it creates a coherent experience
- Sindre Sorhus — https://sindresorhus.com/
  - extreme content clarity
  - products can carry the page without decorative overload
- Awwwards portfolio references — https://www.awwwards.com/websites/portfolio/
  - current creative-web benchmark for typography, transitions, scrolling, project pages, responsive execution, and interaction quality

### Decision

Omar's portfolio should not imitate a single reference. The target is:

**Editorial precision × product evidence × controlled creative motion.**

The site must feel authored before it feels decorated.

## 2. What changes

The existing information architecture remains:
Home / Work / About / Services / Contact / case studies.

The visual shell changes from a repeated card/grid grammar toward:
- oversized editorial typography
- full-width project chapters
- strong contrast between quiet and immersive sections
- asymmetrical image composition
- visible project metadata
- fewer containers
- more deliberate negative space
- project screenshots as the primary visual material
- motion used as pacing, not spectacle

## 3. What does not change

Do not:
- rewrite canonical project facts without evidence
- replace or re-curate the approved 55 images
- remove Google Play / live / testing truth
- reopen product engineering work
- introduce 3D/WebGL only for novelty
- make every element animate
- turn mobile into a compressed desktop layout
- hide navigation or basic usability behind effects

## 4. Design tokens

### Color

Base:
- Paper: `#f1eee6`
- Paper elevated: `#faf8f2`
- Ink: `#11110f`
- Muted ink: `#6f6b61`
- Hairline: `rgba(17,17,15,.16)`

Signal:
- Cobalt: `#3157ff`
- Signal orange: `#ff5a2f`

Project sections may use one project-led field color, but the global identity remains paper / ink / signal.

### Typography

No external font dependency is required for the first prototype.

- UI / body: system grotesk stack
- Editorial display: Iowan Old Style / Baskerville / Times New Roman fallback
- Hero scale desktop: approximately `clamp(5rem, 12vw, 12rem)`
- Section display: `clamp(3rem, 7vw, 7rem)`
- Body measure: 55–70 characters
- Metadata: uppercase, tight size, expanded tracking

Typography is allowed to carry composition. Not every heading needs a card/container.

### Grid

- global editorial max width: 1480px
- 12-column mental model on desktop
- asymmetry is encouraged when reading order remains obvious
- mobile collapses to a deliberate single-column composition
- image systems may intentionally exceed normal text measure

### Space

Use larger section spacing than the current baseline.
- mobile section rhythm: 72–104px
- desktop section rhythm: 120–180px
- project chapters should feel like separate scenes

### Corners

- interface controls: pill / small radius
- project media: moderate radius only
- avoid applying large rounded cards to every content block

## 5. Home prototype structure

1. Hero
   - OMAR / KHAIR as the dominant visual object
   - role, location, selected-work year, and capability line as small editorial metadata
   - concise value statement and direct Work / Contact paths
2. Capability ticker / manifesto
   - Product / Engineering / Visual Direction / Launch
3. Flagship project chapters
   - Teswa
   - Nova
   - HILTECH
   - WaveZero
   - each chapter uses real curated imagery and a different composition
4. Capability statement
   - four dimensions presented as one system, not four cards
5. Client proof
   - quiet editorial list, not competing visually with flagships
6. Commercial entry
   - starting ranges + separate local offer
7. Working approach
   - compact sequence
8. Contact
   - decisive closing field

## 6. Motion rules

Prototype motion is dependency-free.

Three motion levels only:
1. micro interaction — link underline, image hover, button movement
2. reveal — viewport-entry opacity/translate
3. ambient editorial motion — slow ticker / subtle media drift

Rules:
- respect `prefers-reduced-motion`
- no scroll hijacking
- no fake loading screen
- no cursor replacement in the first pass
- no motion that blocks reading or navigation
- motion duration generally 450–900ms; ambient loops much slower

GSAP / Lenis / WebGL remain optional later. They are not added until a concrete interaction requires them.

## 7. Image treatment

The approved 55 WebPs are the only canonical mapped visual set for these projects.

Home:
- show a small curated subset only
- mobile product screens can overlap or stagger
- HILTECH is treated as a wide product/system surface
- preserve readability and avoid tiny collages

Work and case studies inherit this direction after the Home visual gate passed. Each route keeps project-specific composition rather than collapsing into one template.

## 8. Responsive behavior

Mobile is designed independently:
- hero type wraps intentionally
- metadata becomes a compact top/bottom frame
- project images stack rather than shrink into unreadable collages
- no horizontal overflow required for core navigation
- motion distances are reduced

## 9. Accessibility and performance

Must retain:
- visible keyboard focus
- semantic landmarks
- meaningful image alt text
- reduced-motion behavior
- responsive image sizing
- no dependency increase in the first prototype
- no layout shift caused by decorative effects

## 10. Rollout gate — passed

The Home prototype gate passed and the visual system has been propagated across Work, flagship/supporting case studies, About, Services, and Contact.

Before Final PR:
- production build and lint must pass after the complete visual rollout
- all curated image paths must resolve
- desktop/mobile composition must be reviewed without horizontal overflow
- reduced-motion behavior must remain supported
- project facts, links, release states, and the WaveZero privacy route must not regress
- performance must remain reasonable
- visual QA must cover representative routes across every site lane


## 11. Final polish pass — locked

This pass is not a redesign. It exists to remove the remaining gap between a strong authored portfolio and a truly distinctive one.

### Benchmark focus

The final polish is narrowed to:
- Niccolò Miranda — typography as art direction, bold but functional editorial hierarchy, project-specific visual systems.
- Keita Yamada — minimal chrome, strong identity, and experimental detail without sacrificing clarity.
- Dennis Snellenberg — immediate positioning, mature micro-interactions, and navigation/transition polish.
- Brittany Chiang — recruiter/client clarity, accessibility, and proof hierarchy.
- Adham Dannaway — designer/developer duality communicated directly.

The goal remains principle transfer, not visual imitation.

### Typography fingerprint — locked

Use a two-face system:
- Primary/UI/display sans: **Manrope Variable**
  - default site face
  - large product headings, navigation, body, labels, pricing, system information
  - weights 450–750 depending on hierarchy
- Editorial contrast: **Instrument Serif**
  - italic or restrained display moments only
  - name signature, selected hero words, project/section contrast
  - never used for long body copy

Implementation:
- load through `next/font/google` with `display: swap`
- expose as CSS variables
- do not add a font package dependency
- body copy keeps comfortable measure and normal tracking
- metadata minimum target rises from the prototype's 0.68rem toward a more legible 0.72–0.76rem
- oversized headings keep tight negative tracking, but never at the cost of mobile readability

### Header identity — locked

The rounded black `OK` app-like mark is removed from the visible site header.

Replace it with an authored typographic wordmark:
- **OMAR / Khair**
- sans + editorial-serif contrast
- no surrounding badge or rounded square
- compact enough to remain useful on mobile
- product role stays secondary, not part of the primary mark

Navigation:
- keep the global routes obvious
- show the current route state without heavy pills
- preserve a direct Start a project path
- mobile control uses explicit `Menu / Close` language instead of an app-style circular hamburger button

The existing logo asset may remain for favicon/metadata compatibility; this decision concerns the visible header identity.

### Gate

Typography/Header polish passes only if:
- Home and Work feel more authored, not merely different
- navigation remains instantly understandable
- mobile header does not crowd or wrap awkwardly
- no layout shift or runtime font dependency is introduced
- build/lint remain green
- the change improves identity without reopening the rest of the visual system


## 12. Case-study rhythm pass — locked

This pass follows a fresh reference review focused only on project-page pacing.

### Reference findings

- Niccolò Miranda project pages repeatedly change visual grammar inside a single case: editorial story text, large gallery moments, project-specific interaction/3D, awards/proof, and next-project handoff. The transferable lesson is **rhythm variation tied to the project**, not WebGL itself.
  - https://www.niccolomiranda.com/work/om-swami
  - https://www.niccolomiranda.com/work/argor-heraeus
  - https://www.niccolomiranda.com/work/loftgarten
- Awwwards project-page references repeatedly mix project hero, typography, scroll-led composition, responsive screen groupings, and interaction instead of repeating one screenshot container.
  - https://www.awwwards.com/inspiration/case-study-examples-drexler-3
  - https://www.awwwards.com/inspiration/process-navigation-side-scrolling-z1-digital-studio
  - https://www.awwwards.com/inspiration/mobile-screens-dumemearts
- Horizontal/side scrolling appears often in references, but it is **not adopted as a default** here because the portfolio already has strong vertical reading clarity and should not introduce scroll hijacking only to look experimental.

### Decision

The flagship visual stories must stop reading as:
`phone → caption → phone → caption`.

Use a bounded five-part grammar:
1. **Lead state** — one dominant screen and a large chapter word.
2. **Paired state** — two related screens read together.
3. **Focus state** — one important screen gets disproportionate scale and editorial annotation.
4. **Offset / triptych state** — related workflow screens overlap or stagger as one sequence.
5. **Finale state** — the closing proof cluster reads as a destination, not another gallery item.

Rules:
- grouping follows product meaning, not arbitrary image order
- screenshots remain readable evidence
- captions become secondary annotations, not repeated cards
- no horizontal scroll requirement
- no new animation dependency in this pass
- CSS composition should be sufficient; signature motion is a separate gate
- mobile collapses groups intentionally rather than shrinking desktop layouts
- Balcona keeps its single-image honesty and does not manufacture rhythm from missing evidence

### Project rhythm map

- **Nova:** Home → Orbit + Tonight → Reel focus → Create + Post → Messaging + Profile finale.
- **Teswa:** Discovery lead → Home + Marketplace → Item + Offer focus → Exchange Chat + Create → Profile + Trust + Movement finale.
- **HILTECH:** Corporate lead → Field + Services → Catalog + Product → RFQ Basket + Details + Procurement finale.
- **WaveZero:** Brand lead → Listening + Library → Device Music focus → Search + Now Playing → Settings finale.
- **Balcona:** single approved public state only; no artificial multi-screen treatment.

### Gate

The pass succeeds only if:
- a flagship page has visible pacing changes before the viewer reads captions
- each visual group communicates a product relationship
- no screen becomes too small to serve as evidence
- mobile retains deliberate hierarchy
- lint/build and browser visual smoke stay green
- the visual-story component remains data-driven enough to preserve the canonical curated asset map


## 13. Signature motion pass — locked

This pass follows a focused motion review of the reference set plus performance/accessibility guidance.

### Reference findings

- Niccolò Miranda describes his practice around motion, typography, and creative coding, and his portfolio makes navigation/exploration itself part of the authored experience.
  - https://www.niccolomiranda.com/
- Keita Yamada explicitly treats the web as an experimental medium and lists GSAP for animation plus three.js/WebGL for visual effects.
  - https://p5aholic.me/
- The transferable principle is not "add GSAP/WebGL". It is: **give the site one memorable interaction language and repeat it with restraint**.
- web.dev recommends keeping animations on compositor-friendly `transform` and `opacity` where possible rather than animating layout/paint-heavy properties.
  - https://web.dev/articles/animations-guide
- `prefers-reduced-motion` must remove non-essential motion for users who request it.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility

### Signature motion — locked

Use **two authored motion behaviors only**:

1. **Editorial shutter transition**
   - internal route changes receive a short full-viewport paper/ink shutter
   - the shutter carries the destination label and Omar/Khair identity
   - cover is fast, reveal is faster; it should feel like turning a designed page, not waiting for an app loader
   - external links, modifier-clicks, downloads, anchors, and same-route clicks are not intercepted
   - browser navigation remains functional
   - no spinner, progress percentage, or fake loading state

2. **Case-study chapter cadence**
   - large chapter words and media groups reveal on different timing curves
   - chapter words tighten into place while media arrives slightly later
   - this uses the existing IntersectionObserver-based reveal system
   - no continuous scroll hijacking and no mandatory parallax

### Technical constraints

- **No GSAP dependency in this pass.**
- **No Lenis, Three.js, or WebGL.**
- Animate only `transform` and `opacity` for the signature layer.
- Keep transition durations under roughly 700ms per phase.
- Never delay an external action.
- `prefers-reduced-motion: reduce` bypasses the route shutter and removes chapter motion.
- The site remains usable if JavaScript is unavailable; motion is progressive enhancement.
- Navigation must not cause a full document reload.

### Gate

The motion pass succeeds only if:
- internal navigation feels authored rather than app-like
- transitions do not become repetitive or slow
- case-study rhythm becomes easier to feel, not harder to read
- modifier-click / target=_blank / external links still behave normally
- reduced-motion bypass is verified
- lint/build remain green
- browser QA verifies Home → Work and Work → flagship navigation
- First Load JS increase stays small and no animation library is added


## 14. Mobile / accessibility / final QA pass — locked

This is the last polish gate before final closure. It does not reopen art direction.

### Standards used

- WCAG text contrast minimum: **4.5:1** for normal text and **3:1** for large text.
  - https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- WCAG 2.2 target-size minimum is **24 × 24 CSS px** for pointer targets, with exceptions; the portfolio uses a more comfortable ~44px interaction height where practical.
  - https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Keyboard focus must remain visible and obvious.
  - https://web.dev/learn/accessibility/focus/
- Mobile is treated as its own composition, not a shrunken desktop canvas.
  - https://web.dev/learn/design/

### Contrast decisions

- On cobalt `#3157ff`, normal white copy must use near-opaque white; low-alpha `white/45–70` is not acceptable for normal text.
- On deep navy / near-black surfaces, muted white can remain softer because contrast stays high.
- On orange/coral project fields, muted copy uses sufficiently opaque black instead of translucent white.
- Small metadata remains visually secondary through size/weight/spacing, **not** by dropping below readable contrast.

### Mobile art-direction decisions

- Keep display typography expressive, but never crop essential words.
- Mobile gutters remain at least 20px.
- Case-study pairs/finales stack deliberately with readable screenshot widths.
- Very large chapter words may wrap, but must not create horizontal overflow.
- Sticky header, mobile menu, form controls, and primary text links keep comfortable touch areas.
- Captions and metadata target at least ~12px rendered size with adequate line-height.
- Avoid dense side-by-side content below tablet width.

### Focus / interaction

- Replace the generic Tailwind ring with a clear current-color focus outline so focus remains visible on light, dark, cobalt, and project-color surfaces.
- Do not remove native semantics.
- External links, forms, mobile navigation, and route transitions remain keyboard usable.
- Reduced-motion continues to bypass non-essential motion.

### Final QA gate

The branch is not Final-PR-ready until all of these pass:
- `npm ci`
- lint
- production build
- canonical 55 visual binaries present
- WaveZero privacy route present and unchanged
- desktop: Home / Work / representative flagship / supporting / About / Services / Contact
- mobile: the same representative route set
- no horizontal overflow
- no broken images
- mobile-menu and form interaction smoke
- keyboard focus smoke
- automated accessibility scan on representative routes with no serious/critical violations
- reduced-motion route transition check
- First Load JS / route bundle review
- final visual screenshots manually inspected
