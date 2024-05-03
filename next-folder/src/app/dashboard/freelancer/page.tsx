"use client";
import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useProposals from "@/hooks/proposals/use-proposals";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/to-persian-numbers";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";

export default function FreelancerPage() {
  const { isLoading, proposals, error }: any = useProposals();
  if (isLoading) return <Loading />;

  if (error) {
    throw (error?.response?.data?.message);
  }
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p: any) => p.status === 2);
  const declinedProposals = proposals.filter((p: any) => p.status === 0);
  const waitProposals = proposals.filter((p: any) => p.status === 1);
  const balance = acceptedProposals.reduce(
    (acc: number, curr: any) => acc + curr.price,
    0
  );

  return (
    <>
      <GeneralHeader />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Stat
          color="primary"
          title="درخواست‌ها"
          singleName="درخواست"
          active={`${toPersianNumbers(acceptedProposals.length)} تایید شده`}
          declined={`${toPersianNumbers(declinedProposals.length)} رد شده`}
          wait={`${toPersianNumbers(waitProposals.length)} در انتظار تایید`}
          total={toPersianNumbers(numOfProposals)}
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
        />

        <Stat
          color="orange"
          title="کیف پول"
          total={toPersianNumbersWithComma(balance)}
          icon={<HiCollection className="w-20 h-20" />}
        />
      </div>
    </>
  );
}
