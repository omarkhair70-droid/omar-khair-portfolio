# Launch checklist

## Build and content

- [x] Run TypeScript validation.
- [x] Run the production build.
- [x] Verify Home, Work, About, Services, Contact, local offer, WaveZero Privacy and representative case studies at desktop and mobile widths.
- [x] Confirm responsive layouts have no horizontal overflow.
- [x] Confirm the PixiJS signal field loads and reduced-motion CSS has a static fallback.
- [x] Confirm internal navigation and route transitions work.
- [x] Confirm all project facts, statuses and public links come from the governing project records.
- [x] Integrate the final 55-image curation and remove obsolete low-resolution and duplicate captures.
- [x] Run the final lint command immediately before commit.

## Production setup

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
- [ ] Connect the final domain and confirm HTTPS.
- [ ] Confirm `/sitemap.xml` contains Home, Work, About, Services, Contact, local offer, WaveZero Privacy and all case-study routes.
- [ ] Confirm `/robots.txt` references the production sitemap.
- [ ] Confirm the favicon, Open Graph image and Twitter preview render from the production origin.
- [ ] Re-test every public external project link from production.
- [ ] Test the email, WhatsApp, GitHub and LinkedIn links from production.
- [ ] Submit only after a final real-device pass on iOS Safari and Android Chrome.

## Manual award-submission gate

- [ ] Select the target award platform and category.
- [ ] Prepare the final project description, credits and production URL.
- [ ] Capture the required desktop/mobile submission images or video after the production domain is live.
