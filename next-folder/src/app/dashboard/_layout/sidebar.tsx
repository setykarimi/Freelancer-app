"use client";
import useOutSideClick from "@/hooks/other/use-outside-click";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutSideClick(() => setOpen(false));

  const navClassName = "w-full flex items-center gap-2 p-2 rounded-md";

  const menuList = [
    {
      name: "test",
      to: "test",
      icon: <HiMenu />,
    },
  ];

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
        className={`space-y-2 lg:block lg:static fixed right-0 top-8 bg-secondary-0 lg:w-full w-1/2 h-full ${
          open ? "block" : "hidden"
        } p-4`}
      >
        {menuList.map(({ name, to, icon }) => (
          <li>
            <Link
              href={to}
              className={`bg-primary-100/50 text-primary-800 font-bold ${navClassName}`}
              //   className={({ isActive }) => {
              //     return isActive
              //       ? `bg-primary-100/50 text-primary-800 font-bold ${navClassName}`
              //       : `${navClassName} text-secondary-600`;
              //   }}
            >
              {icon}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
