import UsersTable from "@features/admin/users/table";

export default function AdminUsers() {
  return (
    <>
      <h1 className="font-black text-secondary-700 text-xl mb-8">کاربران</h1>
      <UsersTable />
    </>
  );
}
