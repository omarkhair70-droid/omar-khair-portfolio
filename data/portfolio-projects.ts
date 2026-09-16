import {
  laneLabels,
  projects as baseProjects,
  type Project,
} from "./projects";

export type { Project, ProjectLane } from "./projects";
export { laneLabels };

const fokharaProject: Project = {
  slug: "fokhara",
  index: "15",
  title: "Fokhara — The form remembers",
  compactTitle: "Fokhara",
  lane: "creative",
  category: "Experimental redesign / craft commerce",
  status: "Independent experimental redesign · working concept",
  year: "2026",
  role: "Research, product architecture, art direction and Next.js implementation",
  lead:
    "An experimental redesign for Fokhara Studio & Shop where clay, trace, workshop process and the life of handmade objects shape the interface before web trends do.",
  challenge:
    "The risk was producing a beautiful but generic ceramics website. The redesign needed to come from Fokhara's real material, making process, products and workshop culture while staying truthful about commerce and booking.",
  approach:
    "The project starts with product truth and non-web research, then translates that meaning into Carry + Recompose, Trace, Become the Maker and Settle with Intent. The working system keeps WooCommerce and WordPress as the operational source while the interface turns objects, workshops and studio context into one connected journey.",
  value:
    "Fokhara shows a research-led design process that can move from material and cultural meaning into a working digital product without inventing availability, payment success or decorative interaction for its own sake.",
  stack: ["Next.js", "TypeScript", "WooCommerce", "WordPress", "View Transitions"],
  capabilities: ["Research-led art direction", "Carry + Recompose", "Workshop journey", "Live commerce data"],
  gallery: [],
  galleryAlt: [],
  tone: "sand",
  visualMode: "text",
  featured: false,
  caseStudy: true,
  links: [
    { label: "Case study", href: "/work/fokhara", kind: "case-study" },
    { label: "Live concept", href: "https://fokhara.vercel.app", kind: "live" },
    { label: "GitHub", href: "https://github.com/omarkhair70-droid/Fokhara", kind: "repo" }
  ]
};

export const projects: Project[] = [...baseProjects, fokharaProject];
export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
