import Loading from "@common/loading";
import Table from "@common/table";
import useUsers from "@hook/use-users";
import UsersRow from "./row";

export default function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) return <Loading />;

  if (!users.length) return <h3>یافت نشد</h3>;

  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {users.map((user: any, index: number) => (
            <UsersRow key={user._id} user={user} index={index} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
