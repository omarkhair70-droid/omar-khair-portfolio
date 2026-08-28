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

## Final implementation status

The final portfolio implementation was merged through PR #36 on August 28, 2026.

- 55 curated WebP assets are committed under `public/work/`.
- Flagship, client, creative, and independent project lanes are implemented.
- Final desktop/mobile route QA passed before merge.
- No broken images or horizontal overflow were found in the closure pass.
- Keyboard focus, mobile navigation, reduced motion, and accessibility checks were included.
- `/privacy/wavezero` is preserved as the production WaveZero V1 privacy-policy route.

## Visual curation

The final visual source of truth is `portfolio-input/final-visual-curation/ASSET_MANIFEST.md`.

The committed `public/work/` assets are the approved portfolio evidence set and are also reused by public GitHub READMEs so the portfolio and repositories present the same product proof.

## Local development
```bash
npm install
npm run dev
npm run lint
npm run build
```
