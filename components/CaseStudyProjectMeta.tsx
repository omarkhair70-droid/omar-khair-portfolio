import { getProject } from "@/data/projects";
import ProjectActions from "@/components/ProjectActions";
import ProjectStatusBadge from "@/components/ProjectStatusBadge";

export default function CaseStudyProjectMeta({ projectId }: { projectId: string }) {
  const project = getProject(projectId);

  return (
    <div className="mt-6 space-y-4">
      <ProjectStatusBadge status={project.status} />
      {project.caveat ? <p className="max-w-3xl text-sm leading-relaxed text-stone-500">{project.caveat}</p> : null}
      <ProjectActions project={project} hideCaseStudy />
    </div>
  );
}
