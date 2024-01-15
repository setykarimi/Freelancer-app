import Table from "@common/table";
import toLocalDateShort from "@utils/to-local-date-short";
import { toPersianNumbersWithComma } from "@utils/to-persian-numbers";
import truncateText from "@utils/truncate-text";
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

export default function SubmittedProjectTableRow({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const { status } = project;

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
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-secondary-500" />
        </button>
      </td>
    </Table.Row>
  );
}
