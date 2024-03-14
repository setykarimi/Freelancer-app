import useUser from "@/hooks/authentication/use-user";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import HeaderMenu from "./menu";

export default function Avatar() {
  const [showMenu, setShowMenu] = useState(true);
  const { user } = useUser();
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-x-2 text-secondary-700 bg-primary-100/50 py-2 pr-4 pl-2 rounded-lg">
        <div className="bg-primary-900 w-6 h-6 rounded-full flex items-center justify-center">
          <FaUser color="#fff" size={14} />
        </div>
        <div>
          <span className="font-bold text-xs block text-secondary-700">
            {user?.name}
          </span>
          <span
            className="block text-secondary-500"
            style={{ fontSize: "10px" }}
          >
            {user?.email}
          </span>
        </div>

        <button className="mr-6" onClick={handleShowMenu}>
          <BiDotsVerticalRounded size={18} />
        </button>
      </div>

      <HeaderMenu
        showMenu={showMenu}
        role={user?.role}
        onClose={() => setShowMenu(false)}
      />
    </div>
  );
}
