import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useProposals from "@/hooks/proposals/use-proposals";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import { BiSolidLayer } from "react-icons/bi";

export default function ProposalStats() {
  const { isLoading, proposals, isError, error }: any = useProposals();

  if (isLoading) {
    return <Loading />;
  }

  const activeProposals = proposals.filter(
    (proposal: any) => proposal.status == 2
  ).length;
  const declinedProposals = proposals.filter(
    (proposal: any) => proposal.status == 0
  ).length;
  const waitToconfirmProposals = proposals.filter(
    (proposal: any) => proposal.status == 1
  ).length;

  if(isError){
    console.log("error", error);
    
    throw new Error(error?.response?.data?.message);
  }

  return (
    <Stat
      color="primary"
      title="درخواست‌ها"
      singleName="درخواست"
      total={toPersianNumbers(proposals?.length)}
      active={`${toPersianNumbers(activeProposals)} قعال`}
      declined={`${toPersianNumbers(declinedProposals)} بسته شده`}
      wait={`${toPersianNumbers(waitToconfirmProposals)} در انتظار تایید`}
      icon={<BiSolidLayer className="lg:w-20 w-16 lg:h-20 h-16" />}
    />
  );
}
