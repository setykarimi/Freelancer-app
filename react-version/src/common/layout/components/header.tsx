import useUser from "@hook/use-user";
import Avatar from "./header/avatar";
import HeaderMenu from "./header/menu";

export default function Navbar() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-b-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-4 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Avatar />
        <HeaderMenu />
      </div>
    </div>
  );
}
