# Omar Khair — Systems with a pulse

An editorial portfolio for product builder and creative developer Omar Khair. The experience is organised around proof: flagship systems, client delivery, creative commerce and independent work, with motion used to connect chapters rather than decorate them.

## Experience stack

- Next.js App Router, React and TypeScript
- GSAP + ScrollTrigger for chapter reveals and spatial pacing
- Lenis for controlled smooth scrolling
- PixiJS for the interactive hero signal field
- `next/font` for Manrope and Instrument Serif
- `next/image` and curated local WebP evidence

Three.js is intentionally not included in this version. The portfolio's visual thesis is two-dimensional systems, signals and real interface evidence; a second 3D runtime would add weight without improving that story.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content architecture

- `data/projects.ts` is the single source for project names, categories, statuses, links, narratives and galleries.
- `app/page.tsx` is the authored home sequence.
- `app/work/page.tsx` is the complete project index.
- `app/work/[slug]/page.tsx` generates the case-study system.
- `app/about/page.tsx` presents Omar's cross-disciplinary practice.
- `app/local-business/page.tsx` keeps the limited commercial offer separate from the award-facing portfolio narrative.
- `components/RouteExperience.tsx` owns GSAP, ScrollTrigger and Lenis lifecycle.
- `components/SignalCanvas.tsx` owns the PixiJS hero field.
- `docs/FINAL_VISUAL_DIRECTION.md` records the visual and motion decisions.

## Assets

The final 55-image curated evidence set lives under `public/work/<project>/`. Farrag Coffee's existing wide web captures remain under `public/project-screenshots/`. Obsolete low-resolution and duplicate captures were removed once they were no longer referenced.

## Public routes

- `/`
- `/work`
- `/work/<project-slug>`
- `/about`
- `/services`
- `/contact`
- `/local-business`
- `/privacy/wavezero`

`app/sitemap.ts`, `app/robots.ts`, Open Graph metadata and social images cover the public surface. Set `NEXT_PUBLIC_SITE_URL` to the final production origin before launch.

## Contact

- Email: `omar.khair70@gmail.com`
- WhatsApp: `+20 115 189 1310`
- GitHub: `https://github.com/omarkhair70-droid`
- LinkedIn: `https://linkedin.com/in/omar-khair-70`
