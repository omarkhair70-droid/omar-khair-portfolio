import Link from "next/link";

import type { ProjectRecord } from "@/data/projects";
import ProjectActions from "@/components/ProjectActions";
import ProjectStatusBadge from "@/components/ProjectStatusBadge";

type Props = {
  project: ProjectRecord;
  prominent?: boolean;
};

export default function ProjectCard({ project, prominent = false }: Props) {
  return (
    <article
      className={
        prominent
          ? "rounded-3xl border border-stone-900 bg-stone-900 p-6 text-white shadow-sm md:p-8"
          : "rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-7"
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${prominent ? "text-stone-400" : "text-stone-500"}`}>
            {project.role}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.shortTitle}</h3>
        </div>
        <ProjectStatusBadge status={project.status} />
      </div>

      <p className={`mt-4 max-w-3xl leading-relaxed ${prominent ? "text-stone-300" : "text-stone-600"}`}>
        {project.summary}
      </p>

      {project.caveat ? (
        <p className={`mt-4 text-sm leading-relaxed ${prominent ? "text-stone-400" : "text-stone-500"}`}>{project.caveat}</p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.proof.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-1 text-xs ${prominent ? "border-white/20 text-stone-200" : "border-stone-200 bg-stone-50 text-stone-700"}`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <ProjectActions project={project} compact />
      </div>

      {project.caseStudyPath ? (
        <Link href={project.caseStudyPath} className={`mt-5 inline-flex text-sm font-medium underline-offset-4 hover:underline ${prominent ? "text-white" : "text-stone-900"}`}>
          Read the case study
        </Link>
      ) : null}
    </article>
  );
}
