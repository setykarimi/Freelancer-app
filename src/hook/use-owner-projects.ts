import { getOwnerProjectsApi } from "@services/project-services";
import { useQuery } from "@tanstack/react-query";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
