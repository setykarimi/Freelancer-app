import Loading from "@common/loading";
import Table from "@common/table";
import useProjects from "@hook/use-projects";
import SubmittedProjectTableRow from "./row";

export default function SubmittedProjectTable() {
    const { isLoading, projects } = useProjects ();
  if (isLoading) return <Loading />;

  if (!projects.length) return <h3>یافت نشد</h3>;
  return (
    <>
      <div className="flex items-center justify-between text-secondary-700 mb-8">
        <h1 className="text-lg font-bold">لیست پروژه‌ها</h1>
        <div>فیلترها</div>
      </div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project: any, index: number) => (
            <SubmittedProjectTableRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
