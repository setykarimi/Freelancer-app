import AllCategoriesTable from "@/features/categories/all-categories/table";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className="font-black text-secondary-700 text-xl">دسته‌بندی‌ها</h1>
      <AllCategoriesTable />
    </>
  );
}
