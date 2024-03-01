import { HiCollection, HiDocumentText, HiHome, HiUser } from "react-icons/hi";

const permissions = {
  ADMIN: [
    {
      name: "داشبورد",
      to: "/dashboard/admin",
      icon: <HiHome size={20} />,
    },
    {
      name: "کاربران",
      to: "/dashboard/admin/all-users",
      icon: <HiUser size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/admin/all-projects",
      icon: <HiCollection size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/admin/all-proposals",
      icon: <HiCollection size={20} />,
    },
  ],
  FREELANCER: [
    {
      name: "داشبورد",
      to: "/dashboard/freelancer",
      icon: <HiHome size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/freelancer/projects",
      icon: <HiCollection size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/freelancer/proposals",
      icon: <HiCollection size={20} />,
    },
  ],
  OWNER: [
    {
      name: "خانه",
      to: "/dashboard/owner",
      icon: <HiHome size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/owner/projects",
      icon: <HiDocumentText size={20} />,
    },
  ],
};

export default permissions;
