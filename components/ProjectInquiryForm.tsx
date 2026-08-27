"use client";

import { useMemo, useState } from "react";

import { contactLinks } from "@/data/site";

const whatsappBaseUrl = contactLinks.whatsapp.href;

const projectTypeOptions = [
  "Local business / professional website",
  "Business website",
  "Product catalog",
  "Ordering experience",
  "RFQ / quotation system",
  "Admin dashboard",
  "Website + business system",
  "Mobile product",
  "Case study / portfolio website",
  "Not sure yet"
];

const businessTypeOptions = [
  "Doctor / clinic / healthcare professional",
  "Restaurant / café / food brand",
  "Supplier / B2B company",
  "Service business",
  "Product brand",
  "Personal brand / professional",
  "Other"
];

const budgetOptions = [
  "Local launch offer / compact scope",
  "Under 15,000 EGP",
  "15,000–30,000 EGP",
  "30,000–60,000 EGP",
  "60,000+ EGP",
  "Not sure yet"
];

const timelineOptions = ["ASAP", "Within 2 weeks", "This month", "Next month", "Flexible"];
const normalize = (value: string) => value.trim() || "Not provided";

export default function ProjectInquiryForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hello Omar, I want to discuss a project.",
      "",
      `Name: ${normalize(name)}`,
      `Business / brand: ${normalize(businessName)}`,
      `Project type: ${normalize(projectType)}`,
      `Business type: ${normalize(businessType)}`,
      `Budget range: ${normalize(budgetRange)}`,
      `Timeline: ${normalize(timeline)}`,
      `Project details: ${normalize(projectDetails)}`,
      "",
      "Please help me shape the right scope."
    ].join("\n");

    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  }, [name, businessName, projectType, businessType, budgetRange, timeline, projectDetails]);

  const inputClass =
    "mt-2 w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-sm text-[#11110f] outline-none transition placeholder:text-[#6f6a60] focus:border-black focus:ring-0";

  return (
    <div className="mt-14 grid gap-14 border-t border-black/15 pt-7 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
      <div>
        <form className="space-y-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="home-meta text-[#686259]">Name</label>
              <input id="name" type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="businessName" className="home-meta text-[#686259]">Business / brand name</label>
              <input id="businessName" type="text" placeholder="Business or brand name" value={businessName} onChange={(event) => setBusinessName(event.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="projectType" className="home-meta text-[#686259]">Project type</label>
              <select id="projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)} className={inputClass}>
                <option value="">Select project type</option>
                {projectTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="businessType" className="home-meta text-[#686259]">Business type</label>
              <select id="businessType" value={businessType} onChange={(event) => setBusinessType(event.target.value)} className={inputClass}>
                <option value="">Select business type</option>
                {businessTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="budgetRange" className="home-meta text-[#686259]">Budget / scope</label>
              <select id="budgetRange" value={budgetRange} onChange={(event) => setBudgetRange(event.target.value)} className={inputClass}>
                <option value="">Select budget / scope</option>
                {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="home-meta text-[#686259]">Timeline</label>
              <select id="timeline" value={timeline} onChange={(event) => setTimeline(event.target.value)} className={inputClass}>
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDetails" className="home-meta text-[#686259]">Project details</label>
            <textarea
              id="projectDetails"
              placeholder="What do you want to build, what should it achieve, and what do you already have?"
              value={projectDetails}
              onChange={(event) => setProjectDetails(event.target.value)}
              rows={5}
              className={inputClass}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-black/15 pt-6">
            <button
              type="button"
              onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
              className="home-text-link"
            >
              Send brief on WhatsApp <span aria-hidden="true">↗</span>
            </button>
            <a href={whatsappBaseUrl} target="_blank" rel="noreferrer" className="text-sm text-[#686259] transition hover:text-[#11110f]">
              Or message directly
            </a>
          </div>
        </form>
      </div>

      <div className="space-y-12">
        <div className="border-t border-black/15 pt-5">
          <p className="home-meta text-[#686259]">What happens next?</p>
          <ol className="mt-6 border-b border-black/15">
            {[
              "I review the business, goal, and current assets.",
              "I suggest the smallest useful scope instead of adding unnecessary features.",
              "We agree on scope, timeline, payment, and delivery path before work starts."
            ].map((item, index) => (
              <li key={item} className="grid grid-cols-[42px_1fr] gap-4 border-t border-black/15 py-5 first:border-t-0">
                <span className="home-meta text-[#6f6a60]">0{index + 1}</span>
                <span className="text-sm leading-relaxed text-[#5f5a51]">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t border-black/15 pt-5">
          <p className="home-meta text-[#686259]">Choose the closest proof</p>
          <div className="mt-6 border-b border-black/15">
            {[
              ["/work/pharmacist-portfolio", "Professional / clinic website"],
              ["/work/farrag-coffee", "Brand + ordering experience"],
              ["/work/hiltech", "Larger business system"]
            ].map(([href, label], index) => (
              <a
                key={href}
                href={href}
                className="group grid grid-cols-[42px_1fr_auto] gap-4 border-t border-black/15 py-5 first:border-t-0"
              >
                <span className="home-meta text-[#6f6a60]">0{index + 1}</span>
                <span className="text-sm font-semibold">{label}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
