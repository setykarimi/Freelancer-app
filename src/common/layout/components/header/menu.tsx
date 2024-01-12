import DarkModeToggle from "@common/layout/components/header/dark-mode-toggle";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logout from "./logout";

export default function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex items-center justify-center">
        <Link to="dashboard">
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
