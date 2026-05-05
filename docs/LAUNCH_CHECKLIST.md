# Launch Checklist

- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Confirm favicon/app icon shows the OK mark.
- Confirm OpenGraph and Twitter preview images render correctly.
- Confirm `sitemap.xml` is available and includes all public pages.
- Confirm `robots.txt` is available and references the sitemap URL.
- Test `/`, `/work`, `/work/hiltech`, `/work/tuscanini`, and `/work/farrag-coffee`.
- Test the contact inquiry flow at `/#contact` and WhatsApp CTA.
- Test all live project links:
  - `https://hiltech-eg-website.vercel.app/`
  - `https://tuscanini-ordering-system.vercel.app/`
  - `https://farrag-coffee-v2.vercel.app/`
- Test mobile layout and key CTA buttons.
- Run `npm run lint`.
- Run `npm run build`.
- Connect custom domain (if available).
- Re-test social previews after domain connection.
