"use client";
import GeneralHeader from "@/common/dashboard/general-header";
import Loading from "@/common/loading";
import CategoriesStats from "@/features/dashboard/admin/categories-stats";
import ProjectStats from "@/features/dashboard/admin/projects-stats";
import ProposalStats from "@/features/dashboard/admin/proposals-stats";
import UserStats from "@/features/dashboard/admin/user-stats";
import useUsers from "@/hooks/authentication/use-users";

export default function AdminMainPage() {
  

  return (
    <>
      <GeneralHeader />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <ProposalStats />
        <UserStats />
        <ProjectStats />
        <CategoriesStats />
      </div>
    </>
  );
}
