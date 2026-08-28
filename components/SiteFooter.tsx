import Link from "next/link";

import { contactLinks, siteIdentity } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-300">
      <div className="section-wrap grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-lg font-semibold text-white">{siteIdentity.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-400">{siteIdentity.positioning}</p>
          <p className="mt-1 text-sm text-stone-400">{siteIdentity.title}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a href={contactLinks.email.href}>Email</a>
          <a href={contactLinks.whatsapp.href} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={contactLinks.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contactLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
