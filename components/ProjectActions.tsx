import Link from "next/link";

import type { ProjectAction, ProjectRecord } from "@/data/projects";

type Props = {
  project: ProjectRecord;
  compact?: boolean;
  hideCaseStudy?: boolean;
};

function ActionLink({ action, compact }: { action: ProjectAction; compact: boolean }) {
  const className = compact
    ? "inline-flex rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition hover:border-stone-500"
    : "inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-500";

  if (!action.external) {
    return <Link href={action.href} className={className}>{action.label}</Link>;
  }

  return (
    <a href={action.href} target="_blank" rel="noreferrer" className={className}>
      {action.label}
    </a>
  );
}

export default function ProjectActions({ project, compact = false, hideCaseStudy = false }: Props) {
  const actions = hideCaseStudy
    ? project.actions.filter((action) => action.kind !== "case-study")
    : project.actions;

  if (!actions.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <ActionLink key={`${action.kind}-${action.href}`} action={action} compact={compact} />
      ))}
    </div>
  );
}
