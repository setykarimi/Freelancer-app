import Loading from "@/common/loading";
import useLogout from "@/hooks/authentication/use-logout";
import { LuLogOut } from "react-icons/lu";

export default function Logout() {
  const { isPending, logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logoutHandler}>
      <LuLogOut className="text-secondary-500" size={13} />
    </button>
  );
}
