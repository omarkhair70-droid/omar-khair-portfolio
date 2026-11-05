# Omar Khair — Systems with a pulse

An editorial portfolio for product builder Omar Khair, bringing together engineering, creative direction and ongoing business development and strategic partnership work. The experience is organised around proven product systems, client delivery and independent work, with motion used to connect chapters rather than decorate them.

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
- `components/RouteExperience.tsx` owns GSAP, ScrollTrigger and Lenis lifecycle.
- `components/SignalCanvas.tsx` owns the PixiJS hero field.
- `docs/FINAL_VISUAL_DIRECTION.md` records the visual and motion decisions.

## Assets

The curated project evidence is stored under `public/work/<project>/`. Excluded work and obsolete screenshots are not included in the public exhibition.

## Public routes

- `/`
- `/work`
- `/work/<project-slug>`
- `/about`
- `/services`
- `/contact`
- `/privacy/wavezero`

`app/sitemap.ts`, `app/robots.ts`, Open Graph metadata and social images cover the public surface. Set `NEXT_PUBLIC_SITE_URL` to the final production origin before launch.

## Contact

- Email: `omar.khair70@gmail.com`
- WhatsApp: `+20 115 189 1310`
- GitHub: `https://github.com/omarkhair70-droid`
- LinkedIn: `https://www.linkedin.com/in/omar-khair-product-builder`
