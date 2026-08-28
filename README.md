# Omar Khair Professional Portfolio

A Next.js App Router portfolio organized around the professional positioning:

**Product + Engineering + Visual Direction + Launch**

## Governing sources
Read before portfolio changes:
- `AGENTS.md`
- `docs/MASTER_PROJECT_REGISTRY.md`
- `docs/PROFESSIONAL_PROFILE_SOURCE.md`
- `docs/CODEX_PORTFOLIO_MASTER_TASK.md`
- `docs/FINAL_IMPLEMENTATION_ARCHITECTURE.md`
- `portfolio-input/final-visual-curation/ASSET_MANIFEST.md`

## Architecture
- `data/projects.ts` — canonical public project lanes, status, links, proof, and release state.
- `data/project-visuals.ts` — curated visual source IDs and final intended public paths.
- `data/site.ts` — identity, navigation, capabilities, contact, pricing, education, and working approach.
- `components/ProjectActions.tsx` / `ProjectStatusBadge.tsx` — reusable project release/link primitives.
- `components/SiteHeader.tsx` / `SiteFooter.tsx` — shared responsive shell.

## Primary routes
- `/` — curated identity and flagship evidence
- `/work` — four portfolio lanes
- `/about` — professional narrative and capabilities
- `/services` — standard commercial ranges + separate limited local offer
- `/contact` — direct contact and structured project brief
- `/local-business` — dedicated 1,000 EGP Local Launch Offer

## Visual curation
PR #34 is merged into the implementation branch history, not into `main` as a standalone production change.

The final attached bundle contains 55 approved WebP assets. Phase 1 records their exact semantic destination and human-approved display ordering. Binary ingestion is tracked separately and must not be claimed until the files are actually committed.

## Local development
```bash
npm install
npm run dev
npm run lint
npm run build
```
