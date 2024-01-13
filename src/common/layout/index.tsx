import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/header";

export default function AppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="grid lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr] h-full">
      <Navbar />
      {/* <Sidebar /> */}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto h-full">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
