import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "./logout";
import DarkModeToggle from "@/features/theme";


export default function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex items-center justify-center">
        <Link href="dashboard">
          <HiOutlineUser className="w-5 h-5 text-secondary-500" />
        </Link>
      </li>
      <li className="flex items-center justify-center">
        <DarkModeToggle />
      </li>
      <li className="flex items-center justify-center"><Logout /></li>
    </ul>
  );
}
