import AllProjectsTable from "@/features/projects/all-projects/table";

export default function AllProjects({ searchParams }: { searchParams: any }) {
  return (
  
      <AllProjectsTable searchParams={searchParams}/>
  );
}
