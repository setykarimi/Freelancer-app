"use client"
import Loading from "@/common/loading";
import Table from "@/common/table";
import useOwnerProjects from "@/hooks/projects/use-owner-projects";
import ProjectRow from "./row";

export default function OwnerPorjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;

  if (!projects.length) return <h3>یافت نشد</h3>;

  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ‌ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th>درخواست‌ها</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project: any, index: number) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
