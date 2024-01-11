import Table from "@common/table";
import ProposalRow from "./row";

export default function ProjectProposal({ proposal }: { proposal: any[] }) {
  if (!proposal.length) return <h1>درخواستی یافت نشد</h1>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposal.map((project: any, index: number) => (
          <ProposalRow key={project._id} proposal={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
