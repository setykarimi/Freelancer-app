import Loading from "@common/loading";
import DashboardHeader from "@features/dashboard/header";
import Stats from "@features/dashboard/stats";
import useProjects from "@hook/use-projects";
import useProposals from "@hook/use-proposals";
import useUsers from "@hook/use-users";

export default function AdminDashboardPage() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (
    <>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </>
  );
}
