import Loading from "@/common/loading";
import useLogout from "@/hooks/authentication/use-logout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export default function Logout() {
  const { isPending, logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logoutHandler}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}
