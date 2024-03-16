import { useDarkMode } from "@/context/dark-mode";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode }: any = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <div className="flex items-center gap-2">
          <HiOutlineSun size={13} className="text-secondary-500" />
          <span className="text-xs"> تغییر به روز</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <HiOutlineMoon size={13} className="text-secondary-500" />
          <span className="text-xs">تغییر به شب</span>
        </div>
      )}
    </button>
  );
}
