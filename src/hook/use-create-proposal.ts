import { createProposalApi } from "@services/proposal-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isCreating, createProposal };
}
