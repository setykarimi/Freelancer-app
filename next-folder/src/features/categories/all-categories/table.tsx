"use client";
import Loading from "@/common/loading";
import Table from "@/common/table";
import useCategories from "@/hooks/category/use-categories";
import AllCategoriesTableRow from "./row";

export default function AllCategoriesTable() {
  const { rawCategories, isLoading } = useCategories();

  if (isLoading) {
    return <Loading />;
  }

  return rawCategories.length == 0 ? (
    <span className="text-secondary-900">دسته‌بندی یافت نشد</span>
  ) : (
    <Table>
      <Table.Header>
        <th>ردیف</th>
        <th>عنوان</th>
        <th>نوع</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>تاریخ ثبت</th>
        <th>تاریخ ویرایش</th>
        <th></th>
      </Table.Header>
      <Table.Body>
        {rawCategories.map((category: any, index: number) => (
          <AllCategoriesTableRow category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
