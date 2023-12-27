import { Outlet } from "react-router-dom";
import Navbar from "./components/header";
import Sidebar from "./components/sidebar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-full">
      <Navbar />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto h-full">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
