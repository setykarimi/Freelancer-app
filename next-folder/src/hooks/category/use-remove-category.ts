import { removeCategoryApi } from "@/services/category-service";
import { removeProjectApi } from "@/services/project-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();
  const { mutate: removeCategory, isPending: isDeleting } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: () => {
      toast.success("دسته بندی با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { removeCategory, isDeleting };
}
