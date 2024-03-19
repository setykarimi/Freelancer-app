"use client";
import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useUsers from "@/hooks/authentication/use-users";
import useCategories from "@/hooks/category/use-categories";
import useProjects from "@/hooks/projects/use-projects";
import useProposals from "@/hooks/proposals/use-proposals";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import {
  BiSolidCategory,
  BiSolidDuplicate,
  BiSolidLayer,
} from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";

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

  const {
    isLoading: isLoading4,
    rawCategories,
    isError: error4,
  }: any = useCategories();

  if (isLoading1 || isLoading2 || isLoading3 || isLoading4) return <Loading />;

  if (error1 || error2 || error3)
    throw new Error(
      error1 ? error1 : error2 ? error2 : error3 ? error3 : error4
    );

  return (
    <>
      <GeneralHeader />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <Stat
          color="orange"
          title="کاربران"
          value={`${toPersianNumbers(users?.length)} کاربر فعال`}
          icon={<PiUsersThree className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
        <Stat
          color="primary"
          title="درخواست‌ها"
          value={`${toPersianNumbers(proposals?.length)} درخواست فعال`}
          icon={<BiSolidLayer className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
        <Stat
          color="red"
          title="پروژه‌ها"
          value={`${toPersianNumbers(projects?.length)} پروژه فعال`}
          icon={<BiSolidDuplicate className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
        <Stat
          color="blue"
          title="دسته‌بندی‌ها"
          value={`${toPersianNumbers(
            rawCategories?.length
          )} دسته‌‌بندی ثبت شده`}
          icon={<BiSolidCategory className="lg:w-20 w-16 lg:h-20 h-16" />}
        />
      </div>
    </>
  );
}
