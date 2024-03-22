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
      <td>1</td>
      <td data-title="توضیحات">{truncateText(proposal.description, 60)}</td>
      <td data-title="زمان تحویل">{toPersianNumbers(proposal.duration)}</td>
      <td data-title="هزینه">{toPersianNumbersWithComma(proposal.price)}</td>
      <td data-title="وضعیت">
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td data-title="تاریخ ثبت">{toLocalDateShort(proposal.createdAt)}</td>
      <td data-title="تاریخ آخرین ویرایش">
        {toLocalDateShort(proposal.updatedAt)}
      </td>
    </Table.Row>
  );
}
