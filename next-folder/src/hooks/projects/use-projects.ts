import { getProjectsApi } from "@/services/project-services";
import { useQuery } from "@tanstack/react-query";

export default function useProjects() {
  const search = window.location.search
  const queryObject = Object.fromEntries(
    new URLSearchParams(search)
  );

  console.log("queryObject", queryObject);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
  });

  const { projects } = data || {};

  return { isLoading, projects, isError };
}
