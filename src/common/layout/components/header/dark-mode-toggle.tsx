import { useDarkMode } from "@context/dark-mode";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-secondary-500" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary-500" />
      )}
    </button>
  );
}
