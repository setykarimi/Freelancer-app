import Modal from "@/common/modal";
import Table from "@/common/table";
import { useState } from "react";
import ChangeUserStatus from "./change-user-status";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

export default function UsersRow({ index, user }: any) {
  const [open, setOpen] = useState(false);
  const { status } = user;
  return (
    <Table.Row key={user.id}>
      <td data-title="">{index + 1}</td>
      <td data-title="نام">{user.name}</td>
      <td data-title="ایمیل">{user.email}</td>
      <td data-title="شماره موبایل">{user.phoneNumber}</td>
      <td data-title="نقش">{user.role}</td>
      <td data-title="وضعیت">
        <span className={`badge ${statusStyle[status].className} text-xs`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td data-title="عملیات">
        <button onClick={() => setOpen(true)} className="btn btn--primary text-xs">تغییر وضعیت</button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}
