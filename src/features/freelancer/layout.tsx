import AppLayout from "@common/layout";
import Sidebar from "@common/layout/components/sidebar";
import { HiCollection, HiHome } from "react-icons/hi";

export default function FreelancerLayout() {
  const menuList = [
    {
      name: "داشبورد",
      to: "dashboard",
      icon: <HiHome size={20} />,
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
