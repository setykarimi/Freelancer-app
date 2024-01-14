import Loading from "@common/loading";
import useProposals from "@hook/use-proposals";
import DashboardHeader from "./dashboard-header";
import Stats from "./stats";

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
