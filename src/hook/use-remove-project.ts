import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProjectApi } from "../services/project-services";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { removeProject, isDeleting };
}
