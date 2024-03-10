import Table from "@/common/table";
import toLocalDateShort from "@/utils/to-local-date-short";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";

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

export default function ProposalTableRow({ proposal }: { proposal: any }) {
  return (
    <Table.Row>
      <td>{truncateText(proposal.description, 60)}</td>
      <td>{toPersianNumbers(proposal.duration)}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>{toLocalDateShort(proposal.createdAt)}</td>
      <td>{toLocalDateShort(proposal.updatedAt)}</td>
  
    </Table.Row>
  );
}
