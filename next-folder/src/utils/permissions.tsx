import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaChartSimple, FaCodePullRequest } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiHome, HiUser } from "react-icons/hi";

const permissions = {
  ADMIN: [
    {
      name: "داشبورد",
      to: "/dashboard/admin",
      icon: <GoHomeFill size={20} />,
    },
    {
      name: "کاربران",
      to: "/dashboard/admin/all-users",
      icon: <HiUser size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/admin/all-projects",
      icon: <FaChartSimple size={20} />,
    },
    {
      name: "درخواست‌ها",
      to: "/dashboard/admin/all-proposals",
      icon: <FaCodePullRequest size={20} />,
    },
    {
      name: "دسته‌بندی‌ها",
      to: "/dashboard/admin/all-categories",
      icon: <BiSolidCategoryAlt size={20} />,
    },
  ],
  FREELANCER: [
    {
      name: "داشبورد",
      to: "/dashboard/freelancer",
      icon: <GoHomeFill size={20} />,
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
      icon: <GoHomeFill size={20} />,
    },
    {
      name: "پروژه‌ها",
      to: "/dashboard/owner/projects",
      icon: <FaChartSimple size={20} />,
    },
  ],
};

export default permissions;
