# Omar Khair Portfolio Website

A one-page, premium portfolio website for **Omar Khair** to present website and digital system services with a clean, practical, business-first tone.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build for Production
```bash
npm run build
npm run start
```

## Edit Portfolio Content
Main content is in:
- `app/page.tsx`

Update these sections there:
- Header navigation and CTA
- Hero copy
- Selected work cards
- Services list
- Process steps
- Why work with me points
- Contact CTA and footer

## Update Contact Links
In `app/page.tsx`, update the `href` values in the contact section:
- WhatsApp button
- Instagram button
- Email button

Search for this code comment:
```tsx
{/* Update contact links below with real values when available. */}
```

## SEO Metadata
Edit metadata in:
- `app/layout.tsx`

Includes title, description, and basic Open Graph tags.
