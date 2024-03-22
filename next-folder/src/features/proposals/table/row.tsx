import Table from "@/common/table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";
import Link from "next/link";
import { IoIosEye } from "react-icons/io";

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
  proposal: any;
  index: number;
}) {
  return (
    <>
      <Table.Row>
        <td>{index + 1}</td>
        <td data-title="توضیحات">{truncateText(proposal.description, 60)}</td>
        <td data-title="زمان تحویل">{toPersianNumbers(proposal.duration)}</td>
        <td data-title="هزینه">{toPersianNumbersWithComma(proposal.price)}</td>
        <td data-title="وضعیت">
          <span className={`badge ${statusStyle[proposal.status].className}`}>
            {statusStyle[proposal.status].label}
          </span>
        </td>
        <td data-title="عملیات">
          <div className="w-full flex justify-center ">
            <Link href={`/dashboard/freelancer/proposal/${proposal._id}`} className="btn btn--primary !p-2">
              <IoIosEye size={15} className="w-6" />
            </Link>
          </div>
        </td>
      </Table.Row>
    </>
  );
}
