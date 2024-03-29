"use client";
import Modal from "@/common/modal";
import Table from "@/common/table";
import useRemoveProject from "@/hooks/projects/use-remove-project";
import toLocalDateShort from "@/utils/to-local-date-short";
import { toPersianNumbersWithComma } from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";
import Link from "next/link";
import { useState } from "react";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import CreateProjectForm from "../../create";
import ConfirmDelete from "./components/confirm-delete";
import ToggleProjectStatus from "./components/toggle-project-status";

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
        <td data-title="عنوان پروژه">{truncateText(project.title, 30)}</td>
        <td data-title="دسته‌بندی">{project.category.title}</td>
        <td data-title="بودجه">{toPersianNumbersWithComma(project.budget)}</td>
        <td data-title="ددلاین">{toLocalDateShort(project.deadline)}</td>
        <td data-title="تگ‌ها">
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag: string) => (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td data-title="فریلنسر">{project.freelancer?.name || "-"}</td>
        <td data-title="وضعیت">
          <ToggleProjectStatus project={project} />
        </td>
        <td data-title="عملیات">
          <div className="flex items-center gap-x-4 justify-center">
            <>
              <button onClick={() => setIsEditOpen(true)}>
                <TbPencilMinus className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                open={isEditOpen}
                title={`ویرایش ${project.title}`}
                onClose={() => setIsEditOpen(false)}
              >
                <CreateProjectForm
                  onClose={() => setIsEditOpen(false)}
                  projectToEdit={project}
                />
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
        <td data-title="درخواست‌ها">
          <Link
            href={`/dashboard/owner/project/${project._id}`}
            className="flex justify-center items-center"
          >
            <HiEye className="text-primary-800 w-5 h-5" />
          </Link>
        </td>
      </Table.Row>
    </>
  );
}
