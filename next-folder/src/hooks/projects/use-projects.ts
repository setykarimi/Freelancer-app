import { getProjectsApi } from "@/services/project-services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useProjects() {
  const searchParams = useSearchParams();
  const search = searchParams?.toString();

  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(`?${search}`),
  });

  const { projects } = data || {};

  return { isLoading, projects, isError };
}
