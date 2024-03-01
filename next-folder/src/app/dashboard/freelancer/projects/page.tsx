import AllProjectsTable from "@/features/projects/all-projects/table";

export default function FreelancerProjects({ searchParams }: { searchParams: any }) {
  return (
    <>
      <h1 className="font-black text-secondary-700 text-xl">پروژه‌ها</h1>
      <AllProjectsTable searchParams={searchParams}/>
    </>
  );
}
