# Omar Khair — Master Project Registry v1

Last updated: 2026-08-27

This file is the source of truth for portfolio inclusion, project links, visual assets, case-study status, release status, and next actions.  
Do not rebuild portfolio structure from memory; update this registry first.

## Status legend

- **READY** — can be presented publicly now.
- **NEAR READY** — strong enough to include, but one or two important pieces are missing.
- **POLISH FIRST** — include only after a known visual/product issue is fixed.
- **REVIEW** — exists and may be useful, but needs a deliberate portfolio decision.
- **HOLD** — internal/private/unclear; do not present yet.
- **EXCLUDE** — duplicate, empty, infrastructure-only, or not portfolio material.

## Portfolio lanes

1. **Flagship Products & Systems** — strongest product/engineering proof.
2. **Client & Business Work** — real business/client-facing delivery.
3. **Creative / Brand / Visual Work** — visual direction, brand expression, early work, creative range.
4. **Independent / Editorial / Experimental** — self-directed products, experiments, editorial work.
5. **Internal Tools / Supporting Systems** — useful proof only if packaged intentionally.
6. **Cleanup / Exclude** — do not surface publicly.

## Master Registry

| Project | Lane | Portfolio tier | My role / proof | Public status | Live / Demo | GitHub | Store / Release | Screenshots | Case study | Video / Promo | Readiness | Current portfolio representation | Next action | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **HILTECH** | Flagship Products & Systems | Flagship | Product direction, UI, full-stack business workflow, RFQ/product/admin system | Live production business system | [hiltech-eg.com](https://hiltech-eg.com) | [repo](https://github.com/omarkhair70-droid/hiltech-eg-website) | N/A | Strong set available; 7 selected from source pack, 3 already in portfolio repo | Existing: `/work/hiltech` | Not inventoried yet | **READY** | Featured with image + case study, but current live button still uses old Vercel URL | Expand gallery; switch live CTA to custom domain; add repo CTA where appropriate | **INCLUDE — top flagship** |
| **Teswa** | Flagship Products & Systems | Flagship | Product direction, React Native/Expo mobile build, Supabase, release operations | Public app / post-launch | [web](https://teswa-eg.vercel.app) | [repo](https://github.com/omarkhair70-droid/teswa.eg) | [Google Play](https://play.google.com/store/apps/details?id=com.teswa.mobile) | Very strong source pack; 45 source screenshots, 7 selected | Existing: `/work/teswa` | Not inventoried yet | **READY** | Featured + case study, but Google Play and web CTAs are not fully represented | Build full 6–8 screen visual story; add Play Store, web, repo buttons | **INCLUDE — top flagship** |
| **Nova** | Flagship Products & Systems | Flagship | Product direction, native Kotlin Android, Django/backend, WebSockets, architecture/release work | Available on Google Play; currently distributed via closed testing | No separate public marketing site locked | [repo](https://github.com/omarkhair-labs/nova) | [Google Play](https://play.google.com/store/apps/details?id=com.omarkhair70.nova) · [Tester group](https://groups.google.com/g/nova-closed-testers) | Strong final curated set; 8 approved | Existing: `/work/nova` | Not inventoried yet | **READY** | Dedicated flagship case study + Play/test actions | Remove the temporary closed-testing note when production rollout becomes public | **INCLUDE — top flagship** |
| **WaveZero** | Flagship Products & Systems | Flagship | Product direction, Flutter UI, Kotlin/Media3 native playback bridge, offline/download/media systems | Available on Google Play; currently distributed via closed testing | Google Play distribution | [repo](https://github.com/omarkhair70-droid/wavezero) | [Google Play](https://play.google.com/store/apps/details?id=com.omarkhair.wavezero) · [Tester group](https://groups.google.com/g/nova-closed-testers) | Strong final curated set; 7 approved | Existing: `/work/wavezero` | Not inventoried yet | **READY** | Dedicated flagship case study + Play/test actions + privacy policy | Remove the temporary closed-testing note when production rollout becomes public | **INCLUDE — top flagship** |
| **Balcona Bar** | Flagship Products & Systems | Flagship / advanced system | Product/system architecture, Next.js + NestJS, Prisma/Postgres/Redis, operations workflows | Live / online | [live demo](https://balcona-bar-staging-web.vercel.app) | [repo](https://github.com/omarkhair70-droid/balcona-bar) | N/A | Final curation intentionally has 1 approved shot; stronger operational captures remain optional evidence work | Existing: `/work/balcona` | Not inventoried yet | **READY with restrained visuals** | Dedicated system case study + verified live demo CTA | Add stronger operational captures later without changing current live status | **INCLUDE — flagship** |
| **Senior Pharmacist Portfolio** | Client & Business Work | Strong supporting / client proof | Client delivery, information architecture, responsive web build, career presentation | Delivered live client project | [live](https://pharmacist-portfolio.vercel.app) | [repo](https://github.com/omarkhair70-droid/pharmacist-portfolio) | N/A | No dedicated source pack inventoried; live site can be captured cleanly | Existing: `/work/pharmacist-portfolio` | Not inventoried | **READY** | Dedicated case study exists | Capture polished hero + 3–4 sections; add repo CTA if useful | **INCLUDE — key client proof** |
| **Tuscanini Ordering System** | Client & Business Work | Strong supporting | Product/UX direction, Arabic ordering experience, cart/offers/PWA direction | Live staged product | [live](https://tuscanini-ordering-system.vercel.app) | Private repo — do not expose | N/A | Good pack; 11 source screenshots, 5 selected; 3 current captures already in portfolio | Existing: `/work/tuscanini` | Not inventoried | **READY** | Case study exists | Upgrade gallery using selected source screenshots; keep repo private | **INCLUDE** |
| **Habba** | Client & Business Work + Creative | Strong supporting | Visual direction, RTL storefront, product discovery, WhatsApp conversion | Live | [live](https://habba-store.vercel.app) | [repo](https://github.com/omarkhair70-droid/habba-store) | N/A | Good pack; 17 source screenshots, 6 selected | Existing: `/work/habba` | Not inventoried | **READY / light polish** | Currently merged with Bahja in Work list; own case study exists | Separate it visually from Bahja; add gallery; emphasize creative/product strength | **INCLUDE** |
| **Bahja Store** | Client & Business Work + Creative | Supporting | Visual/RTL storefront direction, PWA-style shopping, WhatsApp handoff | Live but known layout issue | [live](https://bahja-store.vercel.app) | [repo](https://github.com/omarkhair70-droid/bahja-store) | N/A | Good pack; 14 source screenshots, 6 selected | Existing: `/work/bahja-store` | Not inventoried | **POLISH FIRST** | Currently grouped with Habba on Work page | Fix header/product-page clipping and scroll/layout issue; re-capture after fix; then promote separately | **INCLUDE after polish** |
| **Farrag Coffee V2** | Creative / Brand / Visual Work + Business | Strong supporting / evolution proof | Brand/UX direction, RTL coffee experience, discovery, ordering flow, Supabase-backed product work | Live | [live](https://farrag-coffee-v2.vercel.app) | [repo](https://github.com/omarkhair70-droid/farrag-coffee-v2) | N/A | 3 current portfolio captures exist; source pack not yet inventoried | Existing: `/work/farrag-coffee` and it points to V2 | Not inventoried | **READY** | Dedicated case study already represents V2 | Keep V2 as canonical Farrag project; optionally add evolution section from original version | **INCLUDE** |
| **Farrag Coffee — original** | Creative / Brand / Visual Work | Early / evolution | Early self-directed brand/web work; useful as progression evidence | Live | [live](https://farrag-coffee.vercel.app) | [repo](https://github.com/omarkhair70-droid/farrag-coffee) | N/A | Not separately inventoried | No separate case study | Not inventoried | **REVIEW** | Not separate in current portfolio | Use inside an “evolution / early work” narrative rather than as another full project card | **GROUP, do not headline** |
| **Abdel Aal Coffee** | Creative / Brand / Visual Work | Early / high creative value | Concept, visual design, site creation from scratch, and embedded/video direction | Live | [live](https://abdel-aal-coffee.vercel.app) | [repo](https://github.com/omarkhair70-droid/abdel-aal-coffee) | N/A | No dedicated screenshot pack inventoried yet | **Missing** | **Yes — project includes user-created visual/video work** | **NEAR READY** | Absent from current portfolio | Capture full visual set; package design + video as creative proof; create grouped or dedicated creative case study | **INCLUDE — creative proof, not technical flagship** |
| **Athr Studio Website** | Creative / Brand / Visual Work | Early / origin candidate | Self-directed web/visual work | Live | [live](https://athr-studio-website.vercel.app) | [repo](https://github.com/omarkhair70-droid/athr-studio-website) | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Review visual quality and story; decide whether it belongs in “Origins / Early Work” | **REVIEW FOR GROUPED SECTION** |
| **Unique Piece Gallery** | Creative / Brand / Visual Work | Experimental creative candidate | Visual/gallery web experiment | Live | [live](https://unique-piece-gallery.vercel.app) | [repo](https://github.com/omarkhair70-droid/unique-piece-gallery) | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Review visual quality and distinctiveness | **REVIEW** |
| **Fine Arts NUB** | Independent / Editorial / Experimental | Creative/education-related candidate | Independent web/creative experiment | Live | [live](https://fine-arts-nub.vercel.app) | [repo](https://github.com/omarkhair70-droid/fine.arts.nub) | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Review context and visual value; include only if it strengthens the creative identity | **REVIEW** |
| **OpsFlow Client Portal** | Flagship Products & Systems / Supporting Systems | Technical candidate | Business/client portal system candidate | Live deployment | [live](https://opsflow-client-portal.vercel.app) | [repo](https://github.com/omarkhair70-droid/opsflow-client-portal) | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Deep technical/product audit before deciding tier; capture screens if retained | **REVIEW — possible systems proof** |
| **Sultan Al-Burhan** | Independent / Editorial / Experimental | Independent flagship candidate | Independent concept/product/editorial site; separate creative/research identity | Live | [live](https://sultan-al-burhan.vercel.app) | [repo](https://github.com/omarkhair70-droid/sultan-al-burhan) | N/A | Not inventoried | Missing | Launch video workflow planned/ongoing separately | **NEAR READY** | Absent | Decide final lane and story; capture visual pack; add as independent/editorial work if it fits identity | **LIKELY INCLUDE** |
| **VIRAL** | Independent / Experimental | Unclassified candidate | Product/experiment repository | No Vercel project found in current account inventory | — | [repo](https://github.com/omarkhair70-droid/VIRAL) | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Audit current code/product state before any portfolio claim | **REVIEW** |
| **Doomsday Button** | Independent / Experimental | Small experiment | Experimental deployed project | Live deployment | [live](https://doomsday-button.vercel.app) | Repo not linked in Vercel inventory | N/A | Not inventoried | Missing | Not inventoried | **REVIEW** | Absent | Inspect product and source ownership; include only if creatively distinctive | **REVIEW / probably grouped** |
| **app** | Internal / Unclassified | Hold | Private repository / deployed app with unclear portfolio role | Live deployment | [live](https://app-wine-gamma-42.vercel.app) | Private repo | N/A | Not inventoried | Missing | Not inventoried | **HOLD** | Absent | Identify what this project actually is before any public use | **HOLD** |
| **Omar Film OS** | Internal Tools / Supporting Systems | Internal creative tooling | Internal FastAPI/CEP/Premiere workflow tooling | Private/internal | — | Private repo | N/A | N/A | Missing | Directly related to AI-assisted Premiere workflow | **HOLD** | Absent | Decide later whether to package as an internal-tool case study or only mention capability | **HOLD / supporting evidence** |
| **Omar Khair Portfolio** | Meta / Infrastructure | Portfolio itself | Personal professional system | Live production | [live](https://omar-khair-portfolio.vercel.app) | [repo](https://github.com/omarkhair70-droid/omar-khair-portfolio) | N/A | Portfolio assets live here | N/A | N/A | Active | This is the container, not a normal work item | Keep as meta-project; do not count it as flagship client/product proof | **DO NOT FEATURE AS NORMAL PROJECT** |

## Infrastructure / deployment records that are NOT portfolio projects

| Item | Reason | Decision |
|---|---|---|
| `sultan-burhan-data-01` | Data/infrastructure deployment | **EXCLUDE from public work** |
| `sultan-burhan-data-02` | Data/infrastructure deployment | **EXCLUDE from public work** |
| `sultan-burhan-data-03` | Data/infrastructure deployment | **EXCLUDE from public work** |

## GitHub cleanup queue — duplicates / empty / scratch

| Repository | Current signal | Decision |
|---|---|---|
| `farrag-coffeee` | Empty duplicate | **Archive/delete later after explicit cleanup decision** |
| `al-mawhoob-academy` | Empty | **Archive/delete later after review** |
| `pharmacist-portfolio-mohamed` | Empty duplicate | **Archive/delete later** |
| `no.fair` | Empty | **Archive/delete later** |
| `NOT` | Private scratch | **Keep private or remove after review; never portfolio** |

## Current portfolio gaps identified from the live codebase

1. **HILTECH**
   - Case study exists.
   - Current CTA still points to the older Vercel URL instead of the custom domain.
   - Needs the full selected screenshot set, not only the current 3 captures.

2. **Teswa**
   - Case study exists.
   - Needs full gallery from the source screenshot pack.
   - Needs Google Play, web, and GitHub CTAs presented as one clean package.

3. **Nova**
   - Dedicated case study exists.
   - Normal Google Play listing + closed-test group are represented.
   - Keep only the removable closed-testing distribution note until production rollout is public.

4. **WaveZero**
   - Dedicated case study exists.
   - Normal Google Play listing + closed-test group are represented.
   - Published WaveZero privacy policy remains part of the release package.

5. **Balcona Bar**
   - Dedicated system case study exists.
   - Hosted demo is live at `https://balcona-bar-staging-web.vercel.app`.
   - Visual evidence remains intentionally restrained until stronger operational captures are added.

6. **Habba / Bahja**
   - They are currently collapsed into one Work card even though both have their own case-study routes.
   - Habba is ready to separate.
   - Bahja should be fixed first, then re-captured.

7. **Creative / visual identity**
   - Abdel Aal, Athr, Unique Piece, Fine Arts, and the Farrag evolution are absent from the current Work structure.
   - A dedicated Creative / Brand / Visual lane is needed so these projects prove artistic range rather than compete with technical flagships.

8. **Independent work**
   - Sultan Al-Burhan is absent and needs intentional packaging.
   - Experimental projects must be reviewed, not dumped into the portfolio.

9. **Media / launch capability**
   - Premiere + Codex / AI-assisted promo workflow is not represented yet.
   - This should be a capability/package, supported by real finished promo assets as they are completed.

## Visual asset inventory already established

| Project | Source screenshots | Current selected set | Current action |
|---|---:|---:|---|
| HILTECH | ~19 in uploaded sequence | 7 | Build full web/system gallery |
| Nova | 18 | 7 | Create app visual story + case study |
| Teswa | 45 | 7 | Create app visual story + strengthen case study |
| WaveZero | 10 | 6 | Create app visual story + case study |
| Tuscanini | 11 | 5 | Upgrade current case study gallery |
| Habba | 17 | 6 | Add visual gallery |
| Bahja | 14 | 6 | Fix product/header layout first, then re-capture |
| Balcona Bar | Small/weak current set | 1 usable | Capture a proper new set |

## Link presentation standard

Each public project package should use only the links that actually exist:

- **Case Study**
- **Live Website / Demo**
- **GitHub** — only when the repo is public and worth showing
- **Google Play** — use the normal store listing when it exists
- **Join Closed Test** — show alongside the store listing while distribution is closed testing
- **Temporary distribution note** — keep it small and removable when production rollout becomes public

The portfolio should not use raw URLs as the visual language. Use consistent buttons/badges with platform identity and a clear status.

## Portfolio identity rule

The site must not present Omar as “just a programmer.”

The finished portfolio should demonstrate the combination of:

- Product building
- Full-stack web systems
- Mobile product development
- Native Android / architecture work
- Business workflow design
- Visual direction and brand work
- Arabic / RTL product design
- Client delivery
- Independent creative/editorial work
- AI-assisted launch and promotional media workflows

Technical flagships prove engineering depth.  
Creative projects prove visual range.  
Client projects prove delivery.  
Independent projects prove initiative and original direction.

## Execution order from this registry

### Sprint 1 — Visual systems
1. Teswa
2. Nova
3. WaveZero
4. HILTECH
5. Balcona Bar
6. Tuscanini
7. Habba
8. Bahja after bug fix

### Sprint 2 — Link/package completeness
- Add/correct live, GitHub, Play Store, tester, and status links.
- Build consistent project link components.

### Sprint 3 — Missing case studies
- Nova
- WaveZero
- Balcona Bar
- Abdel Aal / creative grouping
- Sultan Al-Burhan if approved

### Sprint 4 — Creative identity
- Abdel Aal
- Farrag evolution
- Athr / Unique Piece / Fine Arts after review
- Media / promo capability

### Sprint 5 — GitHub profile and repository cleanup
- Pin strongest repositories
- Standardize flagship READMEs
- Add screenshots, live links, status, architecture notes
- Archive empty/duplicate repositories after explicit confirmation

### Sprint 6 — Final professional identity
- About / education / experience / capabilities
- CV alignment
- Contact and service packages
- Final cross-device QA
