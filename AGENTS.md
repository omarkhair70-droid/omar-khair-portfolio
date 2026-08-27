# AGENTS.md — Omar Khair Portfolio

This repository is a professional identity/product portfolio, not a generic developer template.

## Governing documents

Before changing portfolio UI or content, read these completely:

1. `docs/MASTER_PROJECT_REGISTRY.md` — source of truth for projects, links, status, inclusion decisions, and asset readiness.
2. `docs/PROFESSIONAL_PROFILE_SOURCE.md` — verified professional identity, capabilities, education wording, contact information, and positioning.
3. `docs/CODEX_PORTFOLIO_MASTER_TASK.md` — complete end-to-end implementation assignment and Definition of Done.

If current implementation conflicts with a governing document, the governing document wins unless repository facts prove it stale.

## Asset source

The complete curated screenshot input pack is:

`portfolio-input/portfolio_selected_assets_webp.zip`

It contains selected visual assets for HILTECH, Teswa, Nova, WaveZero, Tuscanini, Habba, Bahja, and Balcona, including a selection manifest. Extract it to a temporary directory during implementation, copy only final chosen images into a clean public asset structure, and remove temporary extraction files. Do not expose the ZIP as a public download.

Some older/partial assets already exist in `public/project-screenshots/`, `public/project-showcases/`, and `public/portfolio-assets/`. Normalize these rather than layering more duplicate systems on top.

## Operating rules

- Work end-to-end toward the finished portfolio. Do not stop after one project or one page.
- Make one coherent implementation, not a chain of half-finished mini-redesigns.
- Preserve factual accuracy. Never invent clients, revenue, users, employment, education credentials, release status, metrics, or production status.
- Use public repository links only when the registry says the repo is public and worth showing.
- Never expose a private repository URL as a portfolio CTA.
- Nova is available through its normal Google Play listing and is currently distributed via closed testing. Keep one removable closed-testing note until production rollout is public.
- WaveZero is available through its normal Google Play listing and is currently distributed via closed testing. Preserve the Play CTA and one removable closed-testing note.
- Bahja has a known product-site layout issue. Do not claim it is polished production proof; present conservatively until that external project is fixed.
- Do not modify external project repositories in this task. This task changes only `omar-khair-portfolio`.
- Avoid dependency bloat. Reuse Next.js/Tailwind patterns already present unless a new dependency is clearly justified.
- Do not render tiny collage screenshots. Product screens must be readable.
- Prefer strong visual hierarchy, real screenshots, restrained motion, and editorial case-study composition over generic card grids.
- Mobile and desktop are both first-class.
- Avoid repeated noisy testing. Inspect first, implement coherently, then run one final lint/type/build pass. Rerun only if something fails.
- Keep command output concise.
- Finish with a concise implementation summary, key design decisions, files changed, validation results, and any truly blocked items.

## Git workflow

Implement on a dedicated branch and produce one reviewable PR for the complete portfolio overhaul. Do not merge to production automatically unless explicitly instructed by the user.
