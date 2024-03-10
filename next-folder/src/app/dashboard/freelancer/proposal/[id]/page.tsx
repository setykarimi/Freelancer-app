"use client";
import Loading from "@/common/loading";
import ProposalTable from "@/features/proposal/table";
import ProposalTableHeader from "@/features/proposal/table/header";
import useProposal from "@/hooks/proposals/use-proposal";

export default function ProposalPage() {
  const { isLoading, proposal } = useProposal();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ProposalTableHeader />
      <ProposalTable proposal={proposal} />
    </>
  );
}
