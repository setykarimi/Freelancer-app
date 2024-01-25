import Loading from "@common/loading";
import DashboardHeader from "@features/dashboard/header";
import Stats from "@features/dashboard/stats";
import useOwnerProjects from "@hook/use-owner-projects";

export default function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DashboardHeader />
      <Stats projects={projects} />
    </>
  );
}
