import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-l-secondary-200 p-4">
      <ul>
        <li>
          <NavLink
            to="/owner/dashboard"
            className={({ isActive }) => {
              return isActive ? "bg-primary-100/50" : "";
            }}
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink to="/owner/dashboard">پروژه‌ها</NavLink>
        </li>
      </ul>
    </div>
  );
}
