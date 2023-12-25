import { Outlet } from "react-router-dom";
import Navbar from "./components/header";
import Sidebar from "./components/sidebar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Navbar />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md bg-red-300 flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
