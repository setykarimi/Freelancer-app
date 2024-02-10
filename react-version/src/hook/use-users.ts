import { getUsersApi } from "@services/auth-service";
import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
    retry: false,
  });

  const { users }: any = data || {};

  return {
    isLoading,
    users,
  };
}
