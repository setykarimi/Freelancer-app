import {
  BiSolidCategory,
  BiSolidDuplicate,
  BiSolidHome,
  BiSolidLayer,
  BiSolidUser,
} from "react-icons/bi";

const permissions = {
  ADMIN: [
    {
      name: "داشبورد",
      to: "/dashboard/admin",
      icon: <BiSolidHome size={20} />,
    },
    {
      name: "کاربران",
      to: "/dashboard/admin/all-users",
      icon: <BiSolidUser size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/admin/all-projects",
      icon: <BiSolidDuplicate size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/admin/all-proposals",
      icon: <BiSolidLayer size={20} />,
    },
    {
      name: "دسته‌بندی‌ها",
      to: "/dashboard/admin/all-categories",
      icon: <BiSolidCategory size={20} />,
    },
  ],
  FREELANCER: [
    {
      name: "داشبورد",
      to: "/dashboard/freelancer",
      icon: <BiSolidHome size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/freelancer/projects",
      icon: <BiSolidDuplicate size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/freelancer/proposals",
      icon: <BiSolidLayer size={20} />,
    },
  ],
  OWNER: [
    {
      name: "داشبورد",
      to: "/dashboard/owner",
      icon: <BiSolidHome size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/owner/projects",
      icon: <BiSolidDuplicate size={20} />,
    },
  ],
};

export default permissions;
