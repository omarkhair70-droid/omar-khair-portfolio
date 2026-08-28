import type { ProjectStatus } from "@/data/projects";

const toneClasses: Record<ProjectStatus["tone"], string> = {
  live: "border-emerald-200 bg-emerald-50 text-emerald-800",
  testing: "border-amber-200 bg-amber-50 text-amber-800",
  staging: "border-sky-200 bg-sky-50 text-sky-800",
  "coming-soon": "border-violet-200 bg-violet-50 text-violet-800",
  delivered: "border-stone-300 bg-white text-stone-800",
  caveat: "border-orange-200 bg-orange-50 text-orange-800",
  active: "border-stone-300 bg-stone-100 text-stone-700"
};

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[status.tone]}`}>
      {status.label}
    </span>
  );
}
