import Modal from "@/common/modal";
import Table from "@/common/table";
import ChangeProposalStatus from "@/features/proposals/components/change-proposal-status";
import truncateText from "@/utils/truncate-text";
import { useState } from "react";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

export default function ProposalRow({
  proposal,
  index,
}: {
  index: number;
  proposal: any;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus proposalId={proposal._id} onClose={()=> setOpen(false)}/>
        </Modal>
      </td>
    </Table.Row>
  );
}
