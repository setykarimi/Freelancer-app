import { getProposalsApi } from "@services/proposal-service";
import { useQuery } from "@tanstack/react-query";

export default function useProposals(){
    const {data, isLoading} = useQuery({
        queryKey: ["proposals"],
        queryFn: getProposalsApi
    })

    const {proposals} = data || {}

    return {proposals, isLoading}
}