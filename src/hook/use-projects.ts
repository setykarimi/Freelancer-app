import { getProjectsApi } from "@services/project-services";
import { useQuery } from "@tanstack/react-query";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
