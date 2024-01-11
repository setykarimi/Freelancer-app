import useUser from "@hook/use-user";
import Avatar from "./header/avatar";

export default function Navbar() {
  const { isLoading, user } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-b-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Avatar />
      </div>
    </div>
  );
}
