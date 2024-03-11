"use client";
import Loading from "@/common/loading";
import Table from "@/common/table";
import useCategories from "@/hooks/category/use-categories";
import toLocalDateShort from "@/utils/to-local-date-short";

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
          <Table.Row>
            <td>{++index}</td>
            <td>{category.title}</td>
            <td>{category.type}</td>
            <td>{category.englishTitle}</td>
            <td>{category.description}</td>
            <td>{toLocalDateShort(category.createdAt)}</td>
            <td>{toLocalDateShort(category.updatedAt)}</td>
            <td></td>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
