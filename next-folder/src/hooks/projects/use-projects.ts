import { getProjectsApi } from "@/services/project-services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useProjects() {
  const search = useSearchParams();

  const queryObject = Object.fromEntries(new URLSearchParams(""));

  const { data, isLoading , isError} = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(""),
  });

  const { projects } = data || {};

  return { isLoading, projects, isError };
}
