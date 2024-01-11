import useOutSideClick from "@hook/use-outside-click";
import { useState } from "react";
import { HiDocumentText, HiHome, HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutSideClick(() => setOpen(false));

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

  const navClassName = "w-full flex gap-2 p-2 rounded-xl";

  return (
    <div
      className="bg-secondary-0 row-start-1 row-span-2 border-l border-l-secondary-200"
      ref={ref}
    >
      <button
        className="p-2 text-secondary-600 lg:hidden block"
        onClick={() => setOpen((prv) => !prv)}
      >
        <HiMenu size={20} />
      </button>
      <ul
        className={`space-y-2 lg:block lg:static fixed right-0 top-8 bg-white lg:w-full w-1/2 h-full ${
          open ? "block" : "hidden"
        } p-4`}
      >
        {menuList.map(({ name, to, icon }) => (
          <li>
            <NavLink
              to={to}
              className={({ isActive }) => {
                return isActive
                  ? `bg-primary-100/50 text-primary-800 font-bold ${navClassName}`
                  : `${navClassName} text-secondary-600`;
              }}
            >
              {icon}
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
