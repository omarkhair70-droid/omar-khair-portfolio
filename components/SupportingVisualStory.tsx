import Image from "next/image";

import ScrollReveal from "@/components/ScrollReveal";
import { getProjectVisualPlan, getVisual } from "@/data/project-visuals";

type ProjectId = "tuscanini" | "habba" | "bahja";

const themes: Record<ProjectId, { field: string; text: string; muted: string; rule: string }> = {
  tuscanini: { field: "bg-[#f3c54b]", text: "text-[#17130b]", muted: "text-black/65", rule: "border-black/15" },
  habba: { field: "bg-[#f6b6d5]", text: "text-[#24131d]", muted: "text-black/65", rule: "border-black/15" },
  bahja: { field: "bg-[#d9aa78]", text: "text-[#20160f]", muted: "text-black/65", rule: "border-black/15" }
};

export default function SupportingVisualStory({
  projectId,
  eyebrow,
  title,
  intro,
  note
}: {
  projectId: ProjectId;
  eyebrow: string;
  title: string;
  intro: string;
  note?: string;
}) {
  const plan = getProjectVisualPlan(projectId);
  const visuals = plan.caseStudy.map(getVisual);
  const theme = themes[projectId];

  return (
    <section className={`${theme.field} ${theme.text}`}>
      <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
        <ScrollReveal>
          <div className={`grid gap-8 border-t pt-5 lg:grid-cols-[0.7fr_1.3fr] ${theme.rule}`}>
            <p className={`home-meta ${theme.muted}`}>{eyebrow}</p>
            <div>
              <h2 className="max-w-5xl text-[clamp(3rem,6.3vw,6.7rem)] font-semibold leading-[0.91] tracking-[-0.06em]">{title}</h2>
              <p className={`mt-7 max-w-3xl text-lg leading-relaxed sm:text-xl ${theme.muted}`}>{intro}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {visuals.map((visual, index) => (
            <ScrollReveal key={visual.sourceId} delay={Math.min(index * 35, 140)} className={index === 0 ? "md:col-span-2" : ""}>
              <figure className={`support-story-frame ${index === 0 ? "support-story-frame--lead" : ""}`}>
                <div className="support-story-screen">
                  <Image
                    src={visual.publicPath}
                    alt={visual.alt}
                    width={738}
                    height={1599}
                    className="h-auto w-full"
                    sizes={index === 0 ? "(min-width: 1024px) 31vw, 68vw" : "(min-width: 1024px) 25vw, 66vw"}
                    priority={index === 0}
                  />
                </div>
                <figcaption className={`support-story-caption ${theme.muted}`}>
                  <span className="home-meta">{String(index + 1).padStart(2, "0")}</span>
                  <span className="max-w-md text-sm leading-relaxed">{visual.alt}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {note ? (
          <ScrollReveal className="mt-12">
            <div className={`grid gap-5 border-t pt-5 lg:grid-cols-[0.7fr_1.3fr] ${theme.rule}`}>
              <p className={`home-meta ${theme.muted}`}>Portfolio note</p>
              <p className={`max-w-3xl text-sm leading-relaxed ${theme.muted}`}>{note}</p>
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
