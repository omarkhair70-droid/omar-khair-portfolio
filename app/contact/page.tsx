import type { Metadata } from "next";

import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import ScrollReveal from "@/components/ScrollReveal";
import { contactLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Omar Khair",
  description: "Contact Omar Khair about websites, mobile products, business systems, product direction, and launch work.",
  alternates: { canonical: "/contact" }
};

const methods = [contactLinks.whatsapp, contactLinks.email, contactLinks.phone, contactLinks.linkedin, contactLinks.github];

export default function ContactPage() {
  return (
    <main className="overflow-clip bg-[#f1eee6] text-[#11110f]">
      <section className="bg-[#11110f] text-[#f4f0e7]">
        <div className="home-editorial-shell py-10 sm:py-14 lg:py-20">
          <ScrollReveal>
            <div className="grid gap-5 border-t border-white/15 pt-4 sm:grid-cols-2">
              <p className="home-meta text-white/72">Contact / start here</p>
              <p className="home-meta text-white/65 sm:text-right">Direct / structured / no ceremony</p>
            </div>
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="home-meta text-white/70">Project / business / product</p><p className="case-number mt-7 text-[#d8ff65]">↗</p></div>
              <div>
                <h1 className="max-w-6xl text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.79] tracking-[-0.075em]">Start with the problem.</h1>
                <p className="mt-9 max-w-4xl text-[clamp(1.45rem,3vw,3.05rem)] leading-[1.06] tracking-[-0.04em] text-white/78">Use the structured brief if the project is clear, or contact me directly if it is still rough.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-16 border-b border-white/15">
              {methods.map((item,index)=>(
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group grid gap-3 border-t border-white/15 py-5 sm:grid-cols-[64px_0.8fr_1.2fr_auto] sm:items-center"
                >
                  <span className="home-meta text-white/65">0{index+1}</span>
                  <span className="text-xl font-semibold tracking-[-0.035em]">{item.label}</span>
                  <span className="break-all text-sm text-white/70">{item.value}</span>
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f1eee6]">
        <div className="home-editorial-shell py-24 sm:py-28 lg:py-36">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="home-meta text-[#686259]">Project brief</p>
              <div>
                <h2 className="max-w-5xl text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Give me enough context to shape the smallest useful scope.</h2>
                <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#6f6a60]">The form builds a WhatsApp brief locally in your browser. It does not send project data to a portfolio backend.</p>
              </div>
            </div>
          </ScrollReveal>

          <ProjectInquiryForm />
        </div>
      </section>
    </main>
  );
}
