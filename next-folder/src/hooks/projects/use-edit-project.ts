import { editProjectApi } from "@/services/project-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },

    onError: (err:any) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editProject };
}
