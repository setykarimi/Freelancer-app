"use client";
import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useProposals from "@/hooks/proposals/use-proposals";
import { toPersianNumbersWithComma } from "@/utils/to-persian-numbers";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function FreelancerPage() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;

  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p: any) => p.status === 2);
  const balance = acceptedProposals.reduce(
    (acc: number, curr: any) => acc + curr.price,
    0
  );

  return (
    <>
      <GeneralHeader />
      <div className="grid grid-cols-3 gap-8">
        <Stat
          color="primary"
          title="درخواست ها"
          value={numOfProposals}
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
        />
        <Stat
          color="green"
          title="درخواست های تایید شده"
          value={acceptedProposals.length}
          icon={<HiCurrencyDollar className="w-20 h-20" />}
        />
        <Stat
          color="yellow"
          title="کیف پول"
          value={toPersianNumbersWithComma(balance)}
          icon={<HiCollection className="w-20 h-20" />}
        />
      </div>
    </>
  );
}
