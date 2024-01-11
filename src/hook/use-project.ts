import { getProjectApi } from "@services/project-services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
  });

  const { project } = data || {};

  return { isLoading, project };
}
