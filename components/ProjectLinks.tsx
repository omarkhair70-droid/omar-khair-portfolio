import Link from "next/link";
import type { ProjectLink } from "@/data/projects";

export default function ProjectLinks({ links, className = "project-links" }: { links: ProjectLink[]; className?: string }) {
  return (
    <div className={className}>
      {links.map((link) => {
        const classes = `project-link${link.kind === "status" ? " project-link--status" : ""}`;
        if (!link.href) {
          return (
            <span key={link.label} className={classes}>
              {link.label}
            </span>
          );
        }

        if (link.href.startsWith("/")) {
          return (
            <Link key={link.label} href={link.href} className={classes}>
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          );
        }

        return (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={classes}>
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        );
      })}
    </div>
  );
}
