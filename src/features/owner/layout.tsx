import AppLayout from "@common/layout";
import Sidebar from "@common/layout/components/sidebar";
import { HiDocumentText, HiHome } from "react-icons/hi";

export default function OwnerLayout() {
    const menuList = [
        {
          name: "خانه",
          to: "/owner/dashboard",
          icon: <HiHome size={20} />,
        },
        {
          name: "پروژه‌ها",
          to: "/owner/projects",
          icon: <HiDocumentText size={20} />,
        },
      ];

  return <AppLayout>
    <Sidebar menuList={menuList}/>
  </AppLayout>;
}
