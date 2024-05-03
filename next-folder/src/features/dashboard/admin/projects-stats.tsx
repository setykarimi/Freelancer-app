import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useProjects from "@/hooks/projects/use-projects";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import { BiSolidDuplicate } from "react-icons/bi";

export default function ProjectStats() {
  const { isLoading, projects, isError, error }: any = useProjects();

  if (isLoading) {
    return <Loading />;
  }

  const openProjects = projects.filter(
    (project: any) => project.status == "OPEN"
  ).length;
  const closedProjects = projects.filter(
    (project: any) => project.status == "CLOSED"
  ).length;

    if(isError){    
    throw (error?.response?.data?.message);
  }

  return (
    <Stat
      color="red"
      title="پروژه‌ها"
      singleName="پروژه"
      active={`${toPersianNumbers(openProjects)} فعال`}
      declined={`${toPersianNumbers(closedProjects)} بسته شده`}
      total={toPersianNumbers(projects?.length)}
      icon={<BiSolidDuplicate className="lg:w-20 w-16 lg:h-20 h-16" />}
    />
  );
}
