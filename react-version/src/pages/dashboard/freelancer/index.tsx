import Loading from "@common/loading";
import Stats from "@features/dashboard/stats";
import DashboardHeader from "@features/dashboard/header";
import useProposals from "@hook/use-proposals";

export default function FreelancerDashboard() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </>
  );
}
