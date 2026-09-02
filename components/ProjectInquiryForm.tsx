"use client";

import { useState } from "react";

const whatsappBaseUrl = "https://wa.me/201151891310";
const projectTypes = [
  "Local business / professional website",
  "Business website",
  "Brand or ordering experience",
  "RFQ / business system",
  "Mobile product",
  "Portfolio / case-study website",
  "Not sure yet"
];
const budgets = ["Local launch offer", "15,000–30,000 EGP", "30,000–60,000 EGP", "60,000+ EGP", "Not sure yet"];
const normalize = (value: string) => value.trim() || "Not provided";

export default function ProjectInquiryForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  const message = [
    "Hello Omar, I want to discuss a project.",
    "",
    `Name: ${normalize(name)}`,
    `Business / brand: ${normalize(business)}`,
    `Project type: ${normalize(projectType)}`,
    `Budget / scope: ${normalize(budget)}`,
    `Details: ${normalize(details)}`
  ].join("\n");
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

  return (
    <form className="inquiry-form">
      <div className="inquiry-form__grid">
        <div className="field">
          <label htmlFor="inquiry-name">Name</label>
          <input id="inquiry-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="inquiry-business">Business / brand</label>
          <input id="inquiry-business" value={business} onChange={(event) => setBusiness(event.target.value)} placeholder="Name or context" />
        </div>
      </div>
      <div className="inquiry-form__grid">
        <div className="field">
          <label htmlFor="inquiry-type">Project type</label>
          <select id="inquiry-type" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
            <option value="">Choose the closest type</option>
            {projectTypes.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="inquiry-budget">Budget / scope</label>
          <select id="inquiry-budget" value={budget} onChange={(event) => setBudget(event.target.value)}>
            <option value="">Choose a range</option>
            {budgets.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="inquiry-details">The useful part</label>
        <textarea
          id="inquiry-details"
          rows={5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="What should the result do, and what do you already have?"
        />
      </div>
      <a className="inquiry-form__submit" href={whatsappUrl} target="_blank" rel="noreferrer">
        Send brief on WhatsApp ↗
      </a>
    </form>
  );
}
