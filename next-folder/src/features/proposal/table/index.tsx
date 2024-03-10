import Table from "@/common/table";
import ProposalTableRow from "./row";

export default function ProposalTable({ proposal }: { proposal: any }) {
  return (
    <Table>
      <Table.Header>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>تاریخ ثبت</th>
        <th>تاریخ آخرین ویرایش</th>
        <th></th>
      </Table.Header>
      <Table.Body>
        <ProposalTableRow proposal={proposal} />
      </Table.Body>
    </Table>
  );
}
