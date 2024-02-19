"use client"
import GeneralHeader from '@/common/dashboard/general-header'
import useProposals from '@/hooks/proposals/use-proposals';

export default function AdminMainPage() {
  const { isLoading: isLoading1, proposals } = useProposals();
  // const { isLoading: isLoading2, projects } = useProjects();
  // const { isLoading: isLoading3, users } = useUsers();

  return (
    <>
      <GeneralHeader />
    </>
  );
}
