import Link from "next/link";

import { getProject } from "@/data/projects";

export default function EditorialCaseStudyMeta({ projectId, inverted = false }: { projectId: string; inverted?: boolean }) {
  const project = getProject(projectId);
  const muted = inverted ? "text-white/90" : "text-black/72";
  const rule = inverted ? "border-white/15" : "border-black/15";
  const link = inverted
    ? "border-white/30 text-white hover:border-white"
    : "border-black/25 text-[#11110f] hover:border-black";

  return (
    <div className={`mt-10 border-y py-5 ${rule}`}>
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className={`home-meta ${muted}`}>Role / ownership</p>
          <p className={`mt-3 max-w-md text-sm leading-relaxed ${muted}`}>{project.role}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className={`home-meta ${muted}`}>Current state</p>
            <p className="mt-3 text-sm font-semibold">{project.status.label}</p>
            {project.caveat ? <p className={`mt-2 max-w-md text-xs leading-relaxed ${muted}`}>{project.caveat}</p> : null}
          </div>
          <div>
            <p className={`home-meta ${muted}`}>Open / inspect</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
              {project.actions
                .filter((action) => action.kind !== "case-study")
                .slice(0, 3)
                .map((action) => {
                  const label = (
                    <>
                      {action.label} <span aria-hidden="true">↗</span>
                    </>
                  );

                  if (!action.external) {
                    return (
                      <Link
                        key={`${action.kind}-${action.href}`}
                        href={action.href}
                        className={`border-b pb-1 text-xs font-semibold uppercase tracking-[0.1em] transition ${link}`}
                      >
                        {label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={`${action.kind}-${action.href}`}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`border-b pb-1 text-xs font-semibold uppercase tracking-[0.1em] transition ${link}`}
                    >
                      {label}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
