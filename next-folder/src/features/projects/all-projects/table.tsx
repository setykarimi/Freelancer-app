"use client";
import Loading from "@/common/loading";
import Table from "@/common/table";
import useCategories from "@/hooks/category/use-categories";
import useProjects from "@/hooks/projects/use-projects";
import AllProjectsRow from "./row";
import StatusFilter from "@/common/form/filter/status-tab";

const statusOptions = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

export default function AllProjectsTable() {
  const { isLoading, projects } = useProjects();

  const { newCategories } = useCategories();
  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex items-center">
            <StatusFilter filterField="status" options={statusOptions} />
            {/* <FilterDropDown
                filterField="category"
                options={[{ value: "", label: "همه" }, ...newCategories]}
              /> */}
            {/* <FilterDropDown
                filterField="sort"
                options={[
                  { value: "latest", label: "مرتب‌سازی (جدیدترین)" },
                  {
                    value: "earliest",
                    label: "مرتب‌سازی (قدیمی‌ترین)",
                  },
                ]}
              /> */}
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
                <AllProjectsRow
                  key={project._id}
                  project={project}
                  index={index}
                />
              ))}
            </Table.Body>
          </Table>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
