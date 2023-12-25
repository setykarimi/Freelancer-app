import { useQuery } from "@tanstack/react-query";
import { getUser } from "./auth-service";

export default function useUser(){
    return useQuery({
        queryKey:["get-user"],
        queryFn: getUser,
        retry: false,
    })
}