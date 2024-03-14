"use client";
import useLogout from "@/hooks/authentication/use-logout";
import useUser from "@/hooks/authentication/use-user";
import useOutSideClick from "@/hooks/other/use-outside-click";
import permissions from "@/utils/permissions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutSideClick(() => setOpen(false));
  const { user } = useUser();
  const role: "ADMIN" | "FREELANCER" | "OWNER" = user?.role;
  const { isPending, logout } = useLogout();

  const pathname = usePathname();

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
        } lg:p-8 p-4`}
      >
        <div className="mb-12 text-secondary-700">
          <h2 className="font-black text-3xl text-right">
            <span className="text-primary-900">پراج</span>کــت
          </h2>
        </div>
        {permissions[role]?.map(({ name, to, icon }) => {
          const isActive = pathname == to;
          return (
            <li key={name}>
              <Link
                href={to}
                className={
                  isActive
                    ? `active--menu--sidebar sidebar--item`
                    : `sidebar--item text-secondary-600`
                }
              >
                {icon}
                {name}
              </Link>
            </li>
          );
        })}

        <li className="border-t border-t-secondary-100 pt-2">
          <Link href="" className="sidebar--item text-secondary-600">
            <BiSolidHelpCircle />
            راهنما
          </Link>
        </li>

        <li>
          
          <button
            onClick={() => logout()}
            className={`${isPending ? "!bg-secondary-300": ""}sidebar--item text-secondary-600`}
            disabled={isPending}
          >
            <IoLogOutOutline />
            خروج
          </button>
        </li>
      </ul>
    </div>
  );
}
