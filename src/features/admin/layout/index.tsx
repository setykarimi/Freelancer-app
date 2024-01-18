import AppLayout from "@common/layout";
import Sidebar from "@common/layout/components/sidebar";
import { HiCollection, HiHome, HiUser } from "react-icons/hi";

export default function AdminLayout() {
  const menuList = [
    {
      name: "داشبورد",
      to: "dashboard",
      icon: <HiHome size={20} />,
    },
    {
      name: "کاربران",
      to: "users",
      icon: <HiUser size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "projects",
      icon: <HiCollection size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "proposals",
      icon: <HiCollection size={20} />,
    },
  ];

  return (
    <AppLayout>
      <Sidebar menuList={menuList} />
    </AppLayout>
  );
}
