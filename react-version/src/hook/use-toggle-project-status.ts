import { toggleProjectStatusApi } from "@services/project-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProject } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, toggleProject };
}
