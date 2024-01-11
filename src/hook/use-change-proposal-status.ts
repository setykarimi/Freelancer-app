import { changeProposalStatusApi } from "@services/proposal-service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isEditing, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: any) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, changeProposalStatus };
}
