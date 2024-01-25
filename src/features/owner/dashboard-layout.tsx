import useOwnerProjects from "@hook/use-owner-projects";
import DashboardHeader from "../dashboard/header";
import Stats from "./stats";
import Loading from "@common/loading";

export default function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();


  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects}/>
    </div>
  );
}
