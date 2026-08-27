import Image from "next/image";

import {
  freshCaptureRequirements,
  getProjectVisualPlan,
  getVisual
} from "@/data/project-visuals";

type Props = {
  projectId: string;
  title?: string;
  intro?: string;
  showMissing?: boolean;
};

export default function CuratedVisualGallery({
  projectId,
  title = "Approved visual sequence",
  intro,
  showMissing = true
}: Props) {
  const plan = getProjectVisualPlan(projectId);
  const visuals = plan.caseStudy.map(getVisual);
  const missing = freshCaptureRequirements[projectId] ?? [];

  return (
    <section className="section-wrap py-10 md:py-14">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Visual evidence</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {intro ? <p className="mt-4 leading-relaxed text-stone-600">{intro}</p> : null}
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        {visuals.map((visual, index) => (
          <figure
            key={visual.sourceId}
            className={`overflow-hidden rounded-3xl border border-stone-200 bg-white p-3 shadow-sm ${index === 0 ? "lg:col-span-2" : ""}`}
          >
            <Image
              src={visual.publicPath}
              alt={visual.alt}
              width={738}
              height={1599}
              className="h-auto w-full rounded-2xl object-contain"
              sizes={index === 0 ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 1024px) 440px, 100vw"}
              priority={index === 0}
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3 text-sm text-stone-600">
              <span>{visual.alt}</span>
              <span className="font-mono text-xs text-stone-400">{visual.sourceId}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {showMissing && missing.length ? (
        <div className="mt-6 rounded-3xl border border-stone-200 bg-stone-100 p-5 md:p-6">
          <p className="text-sm font-semibold text-stone-900">Fresh evidence still requested</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {missing.map((item) => (
              <li key={item} className="rounded-xl bg-white px-3 py-2 text-sm text-stone-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
