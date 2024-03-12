import Table from "@/common/table";
import toLocalDateShort from "@/utils/to-local-date-short";

export default function AllCategoriesTableRow({
  category,
  index,
}: {
  category: any;
  index: number;
}) {
  return (
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
  );
}
