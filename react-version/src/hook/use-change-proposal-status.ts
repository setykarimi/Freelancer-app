import { changeUserStatusApi } from "@services/auth-service";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isEditing, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: any) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, changeUserStatus };
}
