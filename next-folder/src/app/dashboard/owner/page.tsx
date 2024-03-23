"use client";

import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useOwnerProjects from "@/hooks/projects/use-owner-projects";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";

export default function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) {
    return <Loading />;
  }
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (p: any) => p.status == "OPEN"
  ).length;
  const numOfDeclinedProjects = projects.filter(
    (p: any) => p.status === "CLOSED"
  ).length;
  const numOfProposals = projects.reduce(
    (acc: any, curr: any) => curr.proposals.length + acc,
    0
  );

  return (
    <>
      <GeneralHeader />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Stat
          color="primary"
          title="پروژه‌ها"
          singleName="پروژه"
          active={`${toPersianNumbers(numOfAcceptedProjects)} واگذار شده`}
          declined={`${toPersianNumbers(numOfDeclinedProjects)} بسته شده`}
          total={toPersianNumbers(numOfProjects)}
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
        />

        <Stat
          color="orange"
          title="درخواست ها"
          singleName="درخواست"
          total={toPersianNumbers(numOfProposals)}
          icon={<HiCollection className="w-20 h-20" />}
        />
      </div>
    </>
  );
}
