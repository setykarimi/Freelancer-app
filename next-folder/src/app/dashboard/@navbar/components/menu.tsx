import DarkModeToggle from "@/features/theme";
import useOutSideClick from "@/hooks/other/use-outside-click";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "./logout";
import { LuLayoutDashboard } from "react-icons/lu";

export default function HeaderMenu({
  role,
  onClose,
  showMenu,
}: {
  role: string;
  onClose: () => void;
  showMenu: boolean;
}) {
  const ref = useOutSideClick(onClose);

  return (
    showMenu && (
      <div
        ref={ref}
        className="absolute left-0 bg-white shadow-md p-4 rounded-lg mt-2"
      >
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link
              href={`/dashboard/${role?.toLocaleLowerCase()}`}
              className="flex items-center gap-2"
            >
              <LuLayoutDashboard size={13} className="text-secondary-500" />
              <span className="text-xs">داشبورد</span>
            </Link>
          </li>
          <li className="flex items-center ">
            <DarkModeToggle />
          </li>
          <li className="flex items-center gap-2">
            <Logout />
            <span className="text-xs">خروج</span>
          </li>
        </ul>
      </div>
    )
  );
}
