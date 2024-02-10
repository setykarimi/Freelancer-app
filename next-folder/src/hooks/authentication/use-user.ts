import { getUser } from "@/services/auth-service";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const { user } = data || {};

  return {
    isLoading,
    user,
  };
}
