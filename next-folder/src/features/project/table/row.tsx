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
      <td data-title="فریلنسر"> {proposal.user.name}</td>
      <td data-title="توضیحات">
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td data-title="زمان تحویل">{proposal.duration}</td>
      <td data-title="هزینه">{proposal.price}</td>
      <td data-title="وضعیت">
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td data-title="عملیات">
        <button onClick={() => setOpen(true)} className="btn btn--primary">تغییر وضعیت</button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
