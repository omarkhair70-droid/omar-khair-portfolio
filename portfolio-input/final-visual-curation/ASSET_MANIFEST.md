# Final Visual Evidence Curation Manifest

**Portfolio:** `omarkhair70-droid/omar-khair-portfolio`
**Audit date:** 2026-08-27
**Input audited:** full uploaded `memo(1).zip`
**Scope:** visual evidence curation only. No portfolio redesign, layout implementation, or product-repository modification.

## Audit result

The new pack contains **136** 738×1599 screenshots. The full sequence was visually reviewed and segmented as follows:

| Project | Source IDs | Source count | Approved |
|---|---|---:|---:|
| Balcona Bar | P001–P003 | 3 | 1 |
| Tuscanini | P004–P014 | 11 | 8 |
| Habba | P015–P031 | 17 | 8 |
| Bahja | P032–P044 | 13 | 5 |
| HILTECH | P045–P064 | 20 | 8 |
| Nova | P065–P082 | 18 | 8 |
| Teswa | P083–P127 | 45 | 10 |
| WaveZero | P128–P136 | 9 | 7 |
| **Total** | | **136** | **55** |

The new visual audit supersedes earlier screenshot-count assumptions where the source pack differs. The previous curated ZIP/showcase thumbnails were treated as prior work, not selection truth.

The 55 approved source screenshots were separately converted into clean full-frame WebP handoff assets with stable semantic filenames. `manifest.json` records the deterministic source-ID → asset-name mapping.

> Repository write note: this connected GitHub writer can commit UTF-8 repository content but cannot stream the locally generated binary WebP bytes into repository paths directly. This PR therefore stores the complete curation contract and deterministic mapping without pretending binary files were committed. The full generated 55-asset handoff bundle is retained as a separate artifact from this audit.

---

## Balcona Bar

**Hero:** P003 — `customer-entry.webp`
**Home:** none recommended until fresh captures exist.
**Work preview:** P003.
**Case-study sequence:** P003 only.

### Reject
- P001 — explicit staging/API error state.
- P002 — internal/demo token launcher; useful testing evidence, weak public product proof.

### Missing — REQUIRED
Capture real customer menu/category, product detail, cart/order flow, live order/service state, cashier/POS, KDS, and owner/admin operations. Do not fake a large visual gallery from the current three shots.

---

## Tuscanini

**Hero:** P011 — `menu.webp`
**Home:** P011
**Work:** P011, P009, P007

**Case-study order:**
P013 category discovery → P011 branded menu → P008 Food Finder → P004 recommendation → P009 customization → P006 cart → P005 checkout → P007 order summary.

### Reject
- P010 — partial/redundant recommendation result.
- P012 — low-signal text/offer state.
- P014 — informational screen; weaker than real workflow evidence.

### Missing
No blocking gap. Optional clean browser-free captures / one responsive desktop-tablet view.

---

## Habba

**Hero:** P031 — `brand-home.webp`
**Home:** P031
**Work:** P031, P022, P017

**Case-study order:**
P031 brand home → P030 featured products → P017 product detail → P028 guided “choose your way” → P022 Drop builder → P021 Drop result → P015 cart/cross-sell → P026 WhatsApp conversion.

### Reject
- P016, P018, P020, P025, P027, P029 — redundant grid/partial states.
- P019, P024 — attractive alternatives but redundant with stronger selected detail/result screens.
- P023 — near-duplicate of P022 with more clutter.

### Missing
No blocking gap. Optional browser-free recapture only.

---

## Bahja

**Decision:** conservative treatment until the known external layout issue is fixed.

**Hero:** P037 — `bag-collections.webp`
**Home:** P037 only, and only as supporting work.
**Work:** P037, P041, P034

**Case-study order:**
P035 home/collection sections → P037 bag collections → P041 Arabic product detail → P034 cart/checkout → P033 checkout form.

### Reject
- P032 — lower checkout/footer fragment.
- P036, P039, P040, P042 — partial/redundant continuations.
- P038 — English detail state weakens the stronger Arabic-first story.
- P043 — visually attractive, but starts mid-section and reads as accidental crop.
- P044 — broken/clipped layout state; reject completely.

### Missing — REQUIRED AFTER PRODUCT FIX
Clean home hero, category, Arabic product detail, cart/checkout, and desktop + mobile captures after the clipping/header issue is fixed.

---

## HILTECH

**Hero:** P064 — `home-hero.webp`
**Home:** P064, P061, P056
**Work:** P064, P056, P045

**Case-study order:**
P064 corporate hero → P061 real field/delivery context → P051 core services → P056 catalog → P053 product/spec detail → P045 RFQ basket → P046 RFQ details → P059 procurement flow.

### Reject
- P047, P048 — company/contact information; less useful than system workflow.
- P049, P050 — field variants superseded by P061.
- P052 — weaker/partial product detail than P053.
- P054, P055 — catalog variants superseded by P056.
- P057 — navigation drawer only.
- P058 — overlaps stronger field proof.
- P060 — useful concept panel but overlaps hero/procurement evidence.
- P062 — text-heavy solution list.
- P063 — high-level journey overlaps P059 + P061.

### Missing — RECOMMENDED
Desktop hero/catalog/RFQ plus a safe admin/RFQ inbox/quote-tracking or other operational view. Current mobile pack proves the front-facing system well but under-proves the B2B admin/operations layer.

---

## Nova

**Hero:** P082 — `home-dashboard.webp`
**Home:** P082, P073, P068
**Work:** P082, P073, P069

**Case-study order:**
P082 branded native social home → P073 Orbit → P068 Tonight → P069 Reel → P075 creation hub → P079 post interaction → P076 messaging/calls → P072 profile.

### Reject
- P065, P066 — generic profile/people discovery.
- P067 — valid notification evidence but visually generic.
- P070, P071 — profile/settings variants.
- P074, P080, P081 — alternate home/feed surfaces superseded by stronger selections.
- P077 — inbox redundant once P076 proves deeper messaging.
- P078 — keyboard-open transient state.

### Missing
Current set is sufficient. Optional story viewer/composer, polished call UI, or better seeded Reel capture. Release copy must remain “closed testing” until public Play release.

---

## Teswa

**Decision:** strongest and most complete visual product set in the pack. Ten screens are intentional because they prove different product layers, not because of a fixed gallery quota.

**Hero:** P123 — `discovery-hub.webp`
**Home:** P123, P127, P084, P104
**Work:** P123, P084, P104

**Case-study order:**
P123 discovery/product thesis → P127 active home → P109 marketplace → P084 item/exchange detail → P100 offer state → P104 accepted-exchange chat/calls → P108 create listing → P099 profile → P111 trust/reputation → P122 movement/social layer.

### Reject
- P083, P085, P086, P124, P125 — alternate/partial item states redundant with P084 + P109.
- P087–P089 — sync/internal/navigation surfaces.
- P090–P098 — repeated edit-profile/settings/notification/privacy states; QA evidence rather than strong portfolio evidence.
- P101–P103 — weaker offer/list/bottom-sheet variants.
- P105, P106 — communication variants superseded by P104.
- P107 — weaker create-listing step than P108.
- P110 — near-empty message screen.
- P112, P113 — reputation/profile variants superseded by P111 + P099.
- P114–P116 — generic people discovery.
- P117 — alternate listings feed.
- P118–P121 — movement/story variants superseded by P122.
- P126 — alternate home/feed state; P123 + P127 are more distinctive.

### Missing
No blocking gap. Future polish may use browser-free exports and a deliberate release/Play visual. Do not reduce Teswa to a generic marketplace gallery; its discovery, exchange, trust, communication, creation and social/movement layers are the point.

---

## WaveZero

**Hero:** P135 — `brand-home.webp`
**Home:** P135, P133, P128
**Work:** P135, P133, P128

P135 is the strongest consumer/editorial composition, but visibly contains the Apple BipBop HLS demo track. It is valid current evidence, not the ideal permanent hero.

**Case-study order:**
P135 editorial home → P136 listening history → P131 library → P128 local/device music → P132 search → P133 Now Playing → P130 audio/download/storage settings.

### Reject
- P129 — narrow liked-track search result; redundant.
- P134 — near-duplicate Now Playing frame.

### Missing — HIGH VALUE
Android media notification/MediaSession, lock-screen controls if available, actual offline/download state, expanded queue/Up Next, and a replacement brand-home capture using a real/non-demo track. These are more useful than extra generic library screens because they connect the elegant Flutter UI to native playback engineering.

---

# Projects absent from this uploaded pack

The 136-image ZIP does **not** contain Farrag Coffee, Abdel Aal Coffee, Athr Studio, Senior Pharmacist Portfolio, Sultan Al-Burhan, or the other registry projects. No screenshot from this pack should be silently assigned to them.

## Farrag Coffee V2
Current portfolio repo has legacy captures `ben-farag-hero.png`, `ben-farag-coffee-finder.png`, and `ben-farag-process-reviews.png`. The V2 project also contains Hero, Coffee Finder, product/catalog/cart/admin surfaces.

**Status:** not promoted into the new final pack by this audit because those legacy captures were not part of the uploaded full visual review.
**Capture request:** current hero, Coffee Finder interaction, product/menu discovery, cart/conversion, and optionally one safe admin view. Use V2 as canonical; original Farrag only as evolution/origin context.

## Abdel Aal Coffee
Repository inventory confirms `hero.jpeg`, `product.jpeg`, `store.jpeg`, and `videosloop.mp4` (~1.3 MB).

**Status:** do not choose a hero blindly from filenames alone.
**Capture request:** current site hero, product composition, store/brand section, logo lockup if present, and a deliberate poster/frame + short loop from the existing video. Treat as creative/brand/motion proof, not a technical flagship.

## Athr Studio Website
Repository inventory confirms `design-1.jpeg`–`design-3.jpeg`, before/after pairs for Boulevard, Cavello and La Roche, `cover-collage.jpeg`, `founder.jpeg`, and a root MP4 (~6 MB).

**Status:** strong Origins / Creative Direction candidate, but no blind hero choice.
**Capture request:** visually validate the cover, strongest before/after pair(s), 1–2 design studies, and motion poster/excerpt. Use it to prove visual direction/progression.

## Senior Pharmacist Portfolio
No screenshot pack in this ZIP. Capture clean live hero + 3–4 representative sections at desktop/mobile widths.

## Sultan Al-Burhan / experiments
Not in this pack. Capture only after deliberate inclusion in the independent/editorial lane.

---

# Global homepage visual shortlist

1. **Teswa P123** — strongest product-thinking visual.
2. **Nova P082 / P073** — strong native social identity and differentiated Orbit surface.
3. **HILTECH P064** — credible B2B/system contrast.
4. **WaveZero P135** — strongest consumer visual direction; replace after clean non-demo recapture.
5. **Habba P031** — selective creative/brand-range proof.

Balcona and Bahja should not take premium homepage visual space until their fresh/fixed captures exist.

# Capture priority

- **P0:** Balcona Bar; Bahja after product fix.
- **P1:** WaveZero native playback evidence; HILTECH desktop/admin operational evidence.
- **P2:** Abdel Aal motion/stills; Athr before/after + motion; Farrag V2; Senior Pharmacist.
- **P3:** optional browser-free polish for Teswa, Nova, Habba, Tuscanini.

# Implementation handoff rules

- Use the 55 approved IDs only for this source pack.
- Do not resurrect rejected screens merely to fill gallery slots.
- Do not force equal screenshot counts.
- Hero/Home/Work/Case labels are approved candidate roles, not a requirement to reuse every image everywhere.
- Missing proof should trigger a fresh capture, not an error/debug/clipped/redundant substitution.
- Old tiny `public/project-showcases/{nova,teswa,wavezero}.webp` should be superseded when the implementation has the new approved assets.
- Do not expose any source ZIP as a public website download.
