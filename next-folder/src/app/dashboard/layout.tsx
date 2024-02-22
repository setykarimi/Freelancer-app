import React from "react";

export default function DashboardLayout({
  children,
  sidebar,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr] h-screen w-full max-w-[1920px]">
      {/* <Navbar /> */}
      {sidebar}

      <div className="bg-secondary-100 p-8 overflow-y-auto h-full">
        <div className="mx-auto max-w-screen-2xl flex flex-col gap-y-12">
          {children}
        </div>
      </div>
    </div>
  );
}
