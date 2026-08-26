"use client";

import { useMemo, useState } from "react";

const whatsappBaseUrl = "https://wa.me/201151891310";

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

  const inputClass = "mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-500 focus:bg-white";

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm md:p-7">
        <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-stone-800">Name</label>
              <input id="name" type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="businessName" className="text-sm font-medium text-stone-800">Business / brand name</label>
              <input id="businessName" type="text" placeholder="Business or brand name" value={businessName} onChange={(event) => setBusinessName(event.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="projectType" className="text-sm font-medium text-stone-800">Project type</label>
              <select id="projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)} className={inputClass}>
                <option value="">Select project type</option>
                {projectTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="businessType" className="text-sm font-medium text-stone-800">Business type</label>
              <select id="businessType" value={businessType} onChange={(event) => setBusinessType(event.target.value)} className={inputClass}>
                <option value="">Select business type</option>
                {businessTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="budgetRange" className="text-sm font-medium text-stone-800">Budget / scope</label>
              <select id="budgetRange" value={budgetRange} onChange={(event) => setBudgetRange(event.target.value)} className={inputClass}>
                <option value="">Select budget / scope</option>
                {budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="text-sm font-medium text-stone-800">Timeline</label>
              <select id="timeline" value={timeline} onChange={(event) => setTimeline(event.target.value)} className={inputClass}>
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDetails" className="text-sm font-medium text-stone-800">Project details</label>
            <textarea id="projectDetails" placeholder="What do you want to build, what should it achieve, and what do you already have?" value={projectDetails} onChange={(event) => setProjectDetails(event.target.value)} rows={5} className={inputClass} />
          </div>

          <button type="button" onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")} className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 sm:w-auto">Send brief on WhatsApp</button>
        </form>

        <div className="mt-5 border-t border-stone-200 pt-5">
          <p className="text-sm text-stone-600">Prefer to talk directly?</p>
          <a href={whatsappBaseUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-100">Message me on WhatsApp</a>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-xl font-semibold tracking-tight text-stone-900">What happens next?</h3>
          <ol className="mt-4 space-y-3 text-sm text-stone-700">
            <li>1. I review the business, goal, and current assets.</li>
            <li>2. I suggest the smallest useful scope instead of adding unnecessary features.</li>
            <li>3. We agree on scope, timeline, payment, and delivery path before work starts.</li>
          </ol>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Choose the closest proof</p>
          <div className="mt-3 space-y-3 text-sm text-stone-700">
            <a href="/work/pharmacist-portfolio" className="block rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition hover:bg-stone-100">Professional / clinic website →</a>
            <a href="/work/farrag-coffee" className="block rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition hover:bg-stone-100">Brand + ordering experience →</a>
            <a href="/work/hiltech" className="block rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition hover:bg-stone-100">Larger business system →</a>
          </div>
        </div>
      </aside>
    </div>
  );
}
