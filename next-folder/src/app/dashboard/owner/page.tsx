"use client";

import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useOwnerProjects from "@/hooks/projects/use-owner-projects";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) {
    return <Loading />;
  }
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (p: any) => p.status === 2
  ).length;
  const numOfProposals = projects.reduce(
    (acc: any, curr: any) => curr.proposals.length + acc,
    0
  );

  return (
    <>
      <GeneralHeader />
      <div className="grid md:grid-cols-3 gap-x-8">
        <Stat
          color="primary"
          title="پروژه ها"
          value={numOfProjects}
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
        />
        <Stat
          color="green"
          title="پروژه های واگذار شده"
          value={numOfAcceptedProjects}
          icon={<HiCurrencyDollar className="w-20 h-20" />}
        />
        <Stat
          color="yellow"
          title="درخواست ها"
          value={numOfProposals}
          icon={<HiCollection className="w-20 h-20" />}
        />
      </div>
    </>
  );
}
