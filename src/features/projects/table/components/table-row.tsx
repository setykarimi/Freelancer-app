import Table from "../../../../common/table";
import toLocalDateShort from "../../../../utils/to-local-date-short";
import { toPersianNumbersWithComma } from "../../../../utils/to-persian-numbers";
import truncateText from "../../../../utils/truncate-text";

export default function ProjectRow({project, index}) {
  return (
    <>
      <Table.Row key={project.id}>
        <td>{index + 1}</td>
        <td>{truncateText(project.title, 30)}</td>
        <td>{project.category.title}</td>
        <td>{toPersianNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td>
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag) => (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td>{project.freelancer?.name || "-"}</td>
        <td>
          {project.staatus == "OPEN" ? (
            <span className="badge badge--success">باز</span>
          ) : (
            <span className="badge badge--danger">بسته</span>
          )}
        </td>
      </Table.Row>
    </>
  );
}
