import type { Metadata } from "next";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import { contactLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Omar Khair about products, business systems, websites, mobile work and creative direction.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <p className="eyebrow">Contact / start here</p>
          <h1>Start with the <em>problem.</em></h1>
          <p className="page-hero__copy">
            Use the structured brief if the project is clear. If it is still rough, send the unfinished thought and we can shape the smallest useful scope.
          </p>
        </div>
      </header>

      <section className="shell contact-layout section-pad">
        <div className="contact-methods" data-reveal>
          <p className="eyebrow">Direct lines</p>
          {contactLinks.map((item, index) => (
            <a
              className="contact-method"
              href={item.href}
              key={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>0{index + 1}</span>
              <strong>{item.label}</strong>
              <span>{item.value}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="contact-brief" data-reveal>
          <p className="eyebrow">Project brief</p>
          <h2>Enough context to make the first decision useful.</h2>
          <p>The form builds a WhatsApp brief locally in your browser. Nothing is sent to a portfolio backend.</p>
          <ProjectInquiryForm />
        </div>
      </section>
    </main>
  );
}
