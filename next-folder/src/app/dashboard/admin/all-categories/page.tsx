"use client";
import Modal from "@/common/modal";
import AllCategoriesTable from "@/features/categories/all-categories/table";
import CreateCategoryForm from "@/features/categories/create";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-black text-secondary-700 text-xl">دسته‌بندی‌ها</h1>
        <Modal
          title="اضافه کردن دسته‌بندی جدید"
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateCategoryForm onClose={() => setOpen(false)} />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--primary flex items-center gap-x-2"
        >
          <HiOutlinePlus />
          <span>اضافه کردن دسته‌بندی</span>
        </button>
      </div>

      <AllCategoriesTable />
    </>
  );
}
