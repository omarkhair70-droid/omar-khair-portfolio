type Props = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, text }: Props) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">{text}</p> : null}
    </div>
  );
}
