"use client";
import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useUsers from "@/hooks/authentication/use-users";
import useProjects from "@/hooks/projects/use-projects";
import useProposals from "@/hooks/proposals/use-proposals";
import { HiCurrencyDollar, HiOutlineViewGrid, HiUser } from "react-icons/hi";

export default function AdminMainPage() {
  const {
    isLoading: isLoading1,
    proposals,
    isError: error1,
  }: any = useProposals();
  const {
    isLoading: isLoading2,
    projects,
    isError: error2,
  }: any = useProjects();
  const { isLoading: isLoading3, users, isError: error3 }: any = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;
  if (error1 || error2 || error3)
    throw new Error(error1 ? error1 : error2 ? error2 : error3);

  return (
    <>
      <GeneralHeader />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <Stat
          color="yellow"
          title="کاربران"
          value={users?.length}
          icon={<HiUser className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
        <Stat
          color="primary"
          title="درخواست‌ها"
          value={proposals?.length}
          icon={<HiOutlineViewGrid className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
        <Stat
          color="green"
          title="پروژه‌ها"
          value={projects?.length}
          icon={<HiCurrencyDollar className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
      </div>
    </>
  );
}
