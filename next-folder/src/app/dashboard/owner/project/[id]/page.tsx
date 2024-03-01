'use client'
import Loading from "@/common/loading";
import ProjectHeader from "@/features/project/components/header";
import ProjectProposal from "@/features/project/table";
import useProject from "@/hooks/projects/use-project";

export default function ProjectPage() {
  const { isLoading, project } = useProject();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ProjectHeader project={project} />
      <ProjectProposal proposal={project?.proposals} />
    </>
  );
}
