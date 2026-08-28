import ScrollReveal from "@/components/ScrollReveal";
import { getSupportingEvidencePlan } from "@/data/project-visuals";

type Props = {
  projectId: string;
  title?: string;
};

export default function EvidencePlaceholder({ projectId, title = "Supporting evidence plan" }: Props) {
  const plan = getSupportingEvidencePlan(projectId);

  return (
    <section className="bg-[#e7e2d7] text-[#11110f]">
      <div className="home-editorial-shell py-20 sm:py-24 lg:py-28">
        <ScrollReveal>
          <div className="grid gap-8 border-t border-black/15 pt-5 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="home-meta text-[#686259]">Evidence / deliberately pending</p>
              <p className="home-meta mt-3 text-[#686259]">{plan.status.replaceAll("-", " ")}</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-[clamp(2.8rem,5.4vw,5.7rem)] font-semibold leading-[0.93] tracking-[-0.055em]">{title}</h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-[#5f5a51]">{plan.note}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="border-t border-black/15 pt-5">
              <p className="home-meta text-[#686259]">Fresh stills</p>
              <div className="mt-5 border-b border-black/15">
                {plan.stills.map((item, index) => (
                  <div key={item} className="grid grid-cols-[44px_1fr] gap-3 border-t border-black/15 py-4 first:border-t-0">
                    <span className="home-meta text-[#5f5a51]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm leading-relaxed text-[#5f5a51]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {plan.motion?.length ? (
            <ScrollReveal delay={70}>
              <div className="border-t border-black/15 pt-5">
                <p className="home-meta text-[#686259]">Motion / video evidence</p>
                <div className="mt-5 border-b border-black/15">
                  {plan.motion.map((item, index) => (
                    <div key={item} className="grid grid-cols-[44px_1fr] gap-3 border-t border-black/15 py-4 first:border-t-0">
                      <span className="home-meta text-[#5f5a51]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm leading-relaxed text-[#5f5a51]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={70}>
              <div className="border-t border-black/15 pt-5">
                <p className="home-meta text-[#686259]">Why there is no fake gallery</p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5f5a51]">
                  The portfolio keeps the visual slot quiet until current evidence is deliberately selected. Missing proof is treated as a curation decision, not an invitation to fill the page with stale screenshots.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
