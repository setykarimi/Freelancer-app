"use client";
import { DarkModeProvider } from "@/context/dark-mode";
import React from "react";

export default function DashboardLayout({
  children,
  sidebar,
  navbar,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  navbar: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <div className="grid lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr] h-screen w-full max-w-[1920px]">
        {/* <Navbar /> */}
        {sidebar}

        <div className="bg-secondary-100  overflow-y-auto h-full">
            {navbar}
          <div className="container xl:max-w-screen-lg mx-auto flex flex-col gap-y-8 p-4">
            {children}
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
}
