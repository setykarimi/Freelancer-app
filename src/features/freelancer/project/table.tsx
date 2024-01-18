import FilterDropDown from "@common/form/filter/drop-down";
import Loading from "@common/loading";
import Table from "@common/table";
import useCategories from "@hook/use-categories";
import useProjects from "@hook/use-projects";
import SubmittedProjectTableRow from "./row";
import StatusFilter from "@common/form/filter/status-tab";

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

export default function SubmittedProjectTable() {
  const { isLoading, projects } = useProjects();

  const { newCategories } = useCategories();
  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex items-center justify-between text-secondary-700 mb-8">
            <h1 className="text-lg font-bold">لیست پروژه‌ها</h1>
            <div className="flex items-center">
              <StatusFilter filterField="status" options={statusOptions} />
              <FilterDropDown
                filterField="category"
                options={[{ value: "ALL", label: "همه" }, ...newCategories]}
              />
              <FilterDropDown
                filterField=""
                options={[
                  { value: "latest", label: "مرتب‌سازی (جدیدترین)" },
                  {
                    value: "earliest",
                    label: "مرتب‌سازی (قدیمی‌ترین)",
                  },
                ]}
              />
            </div>
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
                <SubmittedProjectTableRow
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
