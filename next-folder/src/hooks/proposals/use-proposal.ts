import { getProposalApi } from "@/services/proposal-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useProposal() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["proposal", id],
    queryFn: () => getProposalApi(id),
    retry: false,
  });

  const { proposal } = data || {};

  return { isLoading, proposal };
}
