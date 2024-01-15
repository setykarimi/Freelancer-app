import Loading from "@common/loading";
import useProposals from "@hook/use-proposals";
import Stats from "./stats";
import DashboardHeader from "@features/owner/dashboard-header";

export default function DashboardLayout() {
  const { isLoading, proposals } = useProposals();


  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals}/>
    </div>
  );
}
