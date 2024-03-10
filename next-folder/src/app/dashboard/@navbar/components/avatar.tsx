import useUser from "@/hooks/authentication/use-user";
import { IoPersonSharp } from "react-icons/io5";

export default function Avatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-x-2">
      <IoPersonSharp color="#fff" />
      <span className="text-secondary-700 font-bold text-sm">
        {user?.name} عزیز، خوش آمدید
      </span>
    </div>
  );
}
