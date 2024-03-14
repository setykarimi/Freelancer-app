"use client";
import useUser from "@/hooks/authentication/use-user";
import Avatar from "./components/avatar";

export default function Navbar() {
  const { isLoading, user } = useUser();

  return (
    <div className="bg-secondary-0 py-3 px-8 border-b border-b-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-4 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Avatar />
      </div>
    </div>
  );
}
