import Image from "next/image";

import ScrollReveal from "@/components/ScrollReveal";
import { getProjectVisualPlan, getVisual, type CuratedVisual } from "@/data/project-visuals";

type ProjectId = "teswa" | "nova" | "hiltech" | "wavezero" | "balcona-bar";
type ChapterKind = "lead" | "pair" | "feature" | "finale";

type RhythmChapter = {
  word: string;
  subline: string;
  kind: ChapterKind;
  indices: number[];
};

const themes: Record<ProjectId, { field: string; text: string; muted: string; rule: string }> = {
  teswa: { field: "bg-[#d8ff65]", text: "text-[#11110f]", muted: "text-black/72", rule: "border-black/15" },
  nova: { field: "bg-[#3157ff]", text: "text-white", muted: "text-white/90", rule: "border-white/20" },
  hiltech: { field: "bg-[#152039]", text: "text-white", muted: "text-white/75", rule: "border-white/20" },
  wavezero: { field: "bg-[#f08b6e]", text: "text-[#1c151b]", muted: "text-black/72", rule: "border-black/15" },
  "balcona-bar": { field: "bg-[#e7e2d7]", text: "text-[#11110f]", muted: "text-black/72", rule: "border-black/15" }
};

const rhythmMap: Record<ProjectId, RhythmChapter[]> = {
  nova: [
    { word: "HOME", subline: "The branded social surface establishes the product world.", kind: "lead", indices: [0] },
    { word: "ORBIT / TONIGHT", subline: "Relationship identity and ephemeral presence read as a pair.", kind: "pair", indices: [1, 2] },
    { word: "MEDIA", subline: "The Reel gets disproportionate scale because media is its own mode, not another card.", kind: "feature", indices: [3] },
    { word: "MAKE / REACT", subline: "Creation and post interaction belong to the same participation loop.", kind: "pair", indices: [4, 5] },
    { word: "CONNECT", subline: "Messaging and profile identity close the story around people, not content.", kind: "finale", indices: [6, 7] }
  ],
  teswa: [
    { word: "DISCOVER", subline: "Start with a world of people, items, and movement — not a plain catalog.", kind: "lead", indices: [0] },
    { word: "BROWSE", subline: "Home activity and marketplace discovery work together before item intent begins.", kind: "pair", indices: [1, 2] },
    { word: "OFFER", subline: "Item context and exchange state become one decision moment.", kind: "feature", indices: [3, 4] },
    { word: "TALK / CREATE", subline: "Conversation keeps an accepted exchange human while creation feeds the marketplace.", kind: "pair", indices: [5, 6] },
    { word: "TRUST / MOVE", subline: "Profile, reputation, and social movement turn transactions into a community system.", kind: "finale", indices: [7, 8, 9] }
  ],
  hiltech: [
    { word: "CREDIBILITY", subline: "The public story begins with infrastructure context and a serious business surface.", kind: "lead", indices: [0] },
    { word: "FIELD / SERVICE", subline: "Real delivery context and core services establish what the business can actually do.", kind: "pair", indices: [1, 2] },
    { word: "CATALOG", subline: "Product discovery and specification detail form one buying-information layer.", kind: "feature", indices: [3, 4] },
    { word: "RFQ → PROCURE", subline: "Basket, project details, and procurement complete the path beyond the brochure.", kind: "finale", indices: [5, 6, 7] }
  ],
  wavezero: [
    { word: "LISTEN", subline: "A calm branded home sets the consumer tone before platform detail appears.", kind: "lead", indices: [0] },
    { word: "RETURN / LIBRARY", subline: "Listening history and saved music make the local-first product feel continuous.", kind: "pair", indices: [1, 2] },
    { word: "DEVICE", subline: "Local device music gets a dedicated focus because it is a core V1 product decision.", kind: "feature", indices: [3] },
    { word: "FIND / PLAY", subline: "Search and Now Playing connect discovery to the native playback experience.", kind: "pair", indices: [4, 5] },
    { word: "CONTROL", subline: "Audio, downloads, and storage settings close the loop around ownership and offline behavior.", kind: "finale", indices: [6] }
  ],
  "balcona-bar": [
    { word: "ENTRY", subline: "One approved public state is shown honestly; missing operational captures are not invented.", kind: "lead", indices: [0] }
  ]
};

function RhythmFigure({
  visual,
  index,
  chapterKind
}: {
  visual: CuratedVisual;
  index: number;
  chapterKind: ChapterKind;
}) {
  return (
    <figure className={`case-rhythm-figure case-rhythm-figure--${chapterKind}-${index + 1}`}>
      <div className="case-rhythm-screen">
        <Image
          src={visual.publicPath}
          alt={visual.alt}
          width={738}
          height={1599}
          className="h-auto w-full"
          sizes={
            chapterKind === "lead"
              ? "(min-width: 1024px) 34vw, 74vw"
              : chapterKind === "feature"
                ? "(min-width: 1024px) 30vw, 70vw"
                : "(min-width: 1024px) 24vw, 70vw"
          }
        />
      </div>
      <figcaption className="case-rhythm-caption">
        <span className="home-meta">{String(index + 1).padStart(2, "0")}</span>
        <span>{visual.alt}</span>
      </figcaption>
    </figure>
  );
}

export default function FlagshipVisualStory({
  projectId,
  eyebrow,
  title,
  intro,
  showMissingNote = false
}: {
  projectId: ProjectId;
  eyebrow: string;
  title: string;
  intro: string;
  showMissingNote?: boolean;
}) {
  const plan = getProjectVisualPlan(projectId);
  const visuals = plan.caseStudy.map(getVisual);
  const theme = themes[projectId];
  const chapters = rhythmMap[projectId];

  return (
    <section className={`flagship-rhythm ${theme.field} ${theme.text}`}>
      <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
        <ScrollReveal>
          <div className={`grid gap-8 border-t pt-5 lg:grid-cols-[0.72fr_1.28fr] ${theme.rule}`}>
            <p className={`home-meta ${theme.muted}`}>{eyebrow}</p>
            <div>
              <h2 className="max-w-5xl text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                {title}
              </h2>
              <p className={`mt-7 max-w-3xl text-lg leading-relaxed sm:text-xl ${theme.muted}`}>{intro}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="case-rhythm-sequence mt-16 sm:mt-20">
          {chapters.map((chapter, chapterIndex) => {
            const chapterVisuals = chapter.indices
              .map((visualIndex) => visuals[visualIndex])
              .filter((visual): visual is CuratedVisual => Boolean(visual));

            if (!chapterVisuals.length) return null;

            return (
              <ScrollReveal key={chapter.word} delay={Math.min(chapterIndex * 45, 150)}>
                <article
                  className={`case-rhythm-chapter case-rhythm-chapter--${chapter.kind} case-rhythm-chapter--${projectId}`}
                >
                  <div className="case-rhythm-heading">
                    <p className={`home-meta ${theme.muted}`}>
                      {String(chapterIndex + 1).padStart(2, "0")} / {chapter.kind}
                    </p>
                    <h3 className="case-rhythm-word">{chapter.word}</h3>
                    <p className={`case-rhythm-subline ${theme.muted}`}>{chapter.subline}</p>
                  </div>

                  <div className={`case-rhythm-media case-rhythm-media--${chapter.kind}`}>
                    {chapterVisuals.map((visual, index) => (
                      <RhythmFigure
                        key={visual.sourceId}
                        visual={visual}
                        index={index}
                        chapterKind={chapter.kind}
                      />
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {showMissingNote && plan.note ? (
          <ScrollReveal className="mt-14">
            <div className={`grid gap-5 border-t pt-5 lg:grid-cols-[0.72fr_1.28fr] ${theme.rule}`}>
              <p className={`home-meta ${theme.muted}`}>Evidence note</p>
              <p className={`max-w-3xl text-sm leading-relaxed ${theme.muted}`}>{plan.note}</p>
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
