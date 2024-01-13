import {
    HiCollection,
    HiCurrencyDollar,
    HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./stat";

export default function Stats({ projects }: { projects: any }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p: any) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc: any, curr: any) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid md:grid-cols-3 gap-x-8">
      <Stat
        color="primary"
        title="پروژه‌ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="green"
        title="پروژه‌های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="yellow"
        title="درخواست‌ها"
        value={numOfProposals}
        icon={<HiCollection className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
    </div>
  );
}
