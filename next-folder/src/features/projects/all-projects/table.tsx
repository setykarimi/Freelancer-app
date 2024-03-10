"use client";
import FilterDropDown from "@/common/form/filter/drop-down";
import StatusFilter from "@/common/form/filter/status-tab";
import Loading from "@/common/loading";
import Table from "@/common/table";
import useCategories from "@/hooks/category/use-categories";
import useProjects from "@/hooks/projects/use-projects";
import AllProjectsRow from "./row";

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

export default function AllProjectsTable({
  searchParams,
}: {
  searchParams: any;
}) {
  const { isLoading, projects } = useProjects();

  const { newCategories } = useCategories();

  return (
    <>
      {!isLoading ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <StatusFilter options={statusOptions} searchParams={searchParams} />
            <FilterDropDown
              filterField="category"
              options={[{ value: "", label: "همه" }, ...newCategories]}
              searchParams={searchParams}
            />
            <FilterDropDown
              searchParams={searchParams}
              filterField="sort"
              options={[
                { value: "latest", label: "مرتب‌سازی (جدیدترین)" },
                {
                  value: "earliest",
                  label: "مرتب‌سازی (قدیمی‌ترین)",
                },
              ]}
            />
          </div>

          {projects.length ? (
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
          ) : (
            <span>پروژه‌ای یافت نشد</span>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
