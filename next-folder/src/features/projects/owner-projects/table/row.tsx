"use client"
import Modal from "@/common/modal";
import Table from "@/common/table";
import toLocalDateShort from "@/utils/to-local-date-short";
import { toPersianNumbersWithComma } from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";
import { useState } from "react";
import { TbPencilMinus } from "react-icons/tb";
import CreateProjectForm from "../../create";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Link from "next/link";
import useRemoveProject from "@/hooks/projects/use-remove-project";
import ToggleProjectStatus from "./components/toggle-project-status";
import ConfirmDelete from "./components/confirm-delete";


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
          <ToggleProjectStatus project={project}/>
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
                <CreateProjectForm onClose={()=> setIsEditOpen(false)} projectToEdit={project}/>
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
              <ConfirmDelete
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
        <td>
          <Link href={`/dashboard/owner/project/${project._id}`} className="flex justify-center items-center">
            <HiEye className="text-primary-800 w-5 h-5"/>
          </Link>
        </td>
      </Table.Row>
    </>
  );
}
