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
        <td>{truncateText(proposal.description, 60)}</td>
        <td>{toPersianNumbers(proposal.duration)}</td>
        <td>{toPersianNumbersWithComma(proposal.price)}</td>
        <td>
          <span className={`badge ${statusStyle[proposal.status].className}`}>
            {statusStyle[proposal.status].label}
          </span>
        </td>
        <td>
          <Link href={`/dashboard/freelancer/proposal/${proposal._id}`}>
            <IoIosEye color="#fff" />
          </Link>
        </td>
      </Table.Row>
    </>
  );
}
