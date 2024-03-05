import { logoutApi } from "@/services/auth-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.replace("/auth");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isPending, logout };
}
