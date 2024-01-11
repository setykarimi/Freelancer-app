import Loading from "@common/loading";
import ProjectHeader from "@features/project/header";
import ProjectProposal from "@features/project/proposal/table";
import useProject from "@hook/use-project";

export default function Project() {
  const { isLoading, project } = useProject();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectProposal proposal={project?.proposals} />
    </div>
  );
}
