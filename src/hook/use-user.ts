import { getUser } from "@services/auth-service";
import { useQuery } from "@tanstack/react-query";

export default function useUser(){
    return useQuery({
        queryKey:["get-user"],
        queryFn: getUser,
        retry: false,
    })
}