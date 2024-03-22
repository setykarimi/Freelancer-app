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
      <td data-title="">{index + 1}</td>
      <td data-title="عنوان پروژه">{truncateText(project.title, 30)}</td>
      <td data-title="بودجه">{toPersianNumbersWithComma(project.budget)}</td>
      <td data-title="ددلاین">{toLocalDateShort(project.deadline)}</td>
      <td data-title="وضعیت">
        <span className={`badge ${projectStatus[status]?.className} !px-3`}>
          {projectStatus[status]?.label}
        </span>
      </td>
      <td data-title="عملیات">
        <button onClick={() => setOpen(true)} className="btn btn--primary !p-2">
          <MdAssignmentAdd size={16} className="text-secondary-0" />
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
