import AllProjectsTable from "@/features/projects/all-projects/table";

export default function FreelancerProjects({
  searchParams,
}: {
  searchParams: any;
}) {
  return <AllProjectsTable searchParams={searchParams} />;
}
