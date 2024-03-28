"use client";
import Loading from "@/common/loading";
import Table from "@/common/table";
import useProposals from "@/hooks/proposals/use-proposals";
import ProposalRow from "./row";

export default function AllProposalsTable() {
  const { isLoading, proposals, error }: any = useProposals();
  if (isLoading) return <Loading />;

  if (error) {
    throw new Error(error?.response?.data?.message);
  }

  if (!proposals.length) return <h3>یافت نشد</h3>;

  return (
    <>
      <h1 className="font-black text-secondary-700 text-xl">درخواست‌ها</h1>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th></th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal: any, index: number) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
