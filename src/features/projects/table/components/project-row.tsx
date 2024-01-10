import ConsifrmDelete from "@common/confirm/delete";
import Modal from "@common/modal";
import Table from "@common/table";
import CreateProjectForm from "@features/projects/form/create-project";
import useRemoveProject from "@hook/use-remove-project";
import toLocalDateShort from "@utils/to-local-date-short";
import { toPersianNumbersWithComma } from "@utils/to-persian-numbers";
import truncateText from "@utils/truncate-text";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

export default function ProjectRow({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDelteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

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
            {project.tags.map((tag: string) => (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td>{project.freelancer?.name || "-"}</td>
        <td>
          {project.status == "OPEN" ? (
            <span className="badge badge--success">باز</span>
          ) : (
            <span className="badge badge--danger">بسته</span>
          )}
        </td>
        <td>
          <div className="flex items-center gap-x-4">
            <>
              <button onClick={() => setIsEditOpen(true)}>
                <TbPencilMinus className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                open={isEditOpen}
                title={`ویرایش ${project.title}`}
                onClose={() => setIsEditOpen(false)}
              >
                <CreateProjectForm onclose={()=> setIsEditOpen(false)} projectToEdit={project}/>
              </Modal>
            </>
            <button onClick={() => setIsDelteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              title={`حذف ${project.title}`}
              onClose={() => setIsDelteOpen(false)}
            >
              <ConsifrmDelete
                onClose={() => {
                  setIsDelteOpen(false);
                }}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDelteOpen(false),
                  })
                }
                resourceName={project.title}
                disabled={false}
              />
            </Modal>
          </div>
        </td>
      </Table.Row>
    </>
  );
}
