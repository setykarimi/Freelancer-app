import Modal from "@/common/modal";
import Table from "@/common/table";
import CreateProjectForm from "@/features/projects/create";
import ConfirmDelete from "@/features/projects/owner-projects/table/components/confirm-delete";
import useRemoveCategory from "@/hooks/category/use-remove-category";
import useRemoveProject from "@/hooks/projects/use-remove-project";
import toLocalDateShort from "@/utils/to-local-date-short";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import CreateCategoryForm from "../create";
import truncateText from "@/utils/truncate-text";

export default function AllCategoriesTableRow({
  category,
  index,
}: {
  category: any;
  index: number;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDelteOpen] = useState(false);
  const { removeCategory } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{++index}</td>
      <td>{category.title}</td>
      <td>{category.type}</td>
      <td>{category.englishTitle}</td>
      <td>{truncateText(category.description, 25)}</td>
      <td>{toLocalDateShort(category.createdAt)}</td>
      <td>{toLocalDateShort(category.updatedAt)}</td>
      <td>
      <div className="flex items-center gap-x-4">
            <>
              <button onClick={() => setIsEditOpen(true)}>
                <TbPencilMinus className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                open={isEditOpen}
                title={`ویرایش دسته بندی ${category.title}`}
                onClose={() => setIsEditOpen(false)}
              >
                <CreateCategoryForm onClose={()=> setIsEditOpen(false)} categoryToEdit={category}/>
              </Modal>
            </>
            <button onClick={() => setIsDelteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              title={`حذف ${category.title}`}
              onClose={() => setIsDelteOpen(false)}
            >
              <ConfirmDelete
                onClose={() => {
                  setIsDelteOpen(false);
                }}
                onConfirm={() =>
                  removeCategory(category._id, {
                    onSuccess: () => setIsDelteOpen(false),
                  })
                }
                resourceName={category.title}
                disabled={false}
              />
            </Modal>
          </div>
      </td>
    </Table.Row>
  );
}
