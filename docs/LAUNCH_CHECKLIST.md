# Final Portfolio Closure / Launch Validation Checklist

## Core routes
- /
- /work
- /about
- /services
- /contact
- /local-business
- /privacy/wavezero
- /work/nova
- /work/wavezero
- /work/balcona
- /work/hiltech
- /work/teswa
- /work/pharmacist-portfolio
- /work/tuscanini
- /work/farrag-coffee
- /work/habba
- /work/bahja-store

## Canonical status checks
- HILTECH live destination resolves from `data/projects.ts`.
- Teswa Play, web, and GitHub actions resolve from `data/projects.ts`.
- Nova is available on Google Play; current distribution is through closed testing.
- WaveZero is available on Google Play; current distribution is through closed testing.
- Balcona is live/online at `https://balcona-bar-staging-web.vercel.app`.
- Bahja remains conservatively labeled.
- No private repository CTA is exposed.

## Visual handoff
- PR #34 history is present on `portfolio/final-implementation`.
- `data/project-visuals.ts` follows final human hero/home/work/case-study ordering.
- The final mapping expects 55 curated WebPs; all 55 approved binaries are present at their mapped `public/work/...` paths.
- `curatedVisualBinariesReady = true`; galleries render the committed curated set without legacy substitution.
- Legacy assets may remain only where still referenced or uniquely useful; the approved 55-file set is the canonical visual source for mapped projects.

## Technical validation
- Confirm mobile navigation opens, closes, and reaches all primary routes.
- Confirm keyboard focus states on navigation, forms, and project actions.
- Confirm sitemap includes core routes and canonical public case studies.
- Run `npm run lint`.
- Run `npm run build`.
- Spot-check desktop/mobile layouts.
