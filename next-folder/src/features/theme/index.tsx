import { useDarkMode } from "@/context/dark-mode";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode }: any = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
     <div>
         <HiOutlineSun className="w-5 h-5 text-secondary-500" />
         تغییر به روز
     </div>
      ) : (
      <div>
          <HiOutlineMoon className="w-5 h-5 text-secondary-500" />
          تغییر به شب
      </div>
      )}
    </button>
  );
}
