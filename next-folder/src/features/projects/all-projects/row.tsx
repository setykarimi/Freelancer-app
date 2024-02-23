import Modal from "@/common/modal";
import Table from "@/common/table";
import CreateProposal from "@/features/proposals/create";
import toLocalDateShort from "@/utils/to-local-date-short";
import { toPersianNumbersWithComma } from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

const projectStatus: any = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته شده",
    className: "badge--danger",
  },
};

export default function AllProjectsRow({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const { status } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={project.id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status]?.className}`}>
          {projectStatus[status]?.label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-secondary-500" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام ${project.title}`}
        >
          <CreateProposal onClose={()=> setOpen(false)} projectId={project._id}/>
        </Modal>
      </td>
    </Table.Row>
  );
}
