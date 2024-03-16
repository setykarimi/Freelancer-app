import {
  BiSolidCategory,
  BiSolidDashboard,
  BiSolidDuplicate,
  BiSolidHome,
  BiSolidLayer,
  BiSolidUser,
} from "react-icons/bi";
import { FaChartSimple, FaCodePullRequest } from "react-icons/fa6";

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
      icon: <BiSolidDashboard size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/freelancer/projects",
      icon: <FaChartSimple size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/freelancer/proposals",
      icon: <FaCodePullRequest size={20} />,
    },
  ],
  OWNER: [
    {
      name: "داشبورد",
      to: "/dashboard/owner",
      icon: <BiSolidDashboard size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/owner/projects",
      icon: <FaChartSimple size={20} />,
    },
  ],
};

export default permissions;
