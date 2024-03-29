import { useLocation } from "react-router-dom";
import useUser from "./use-user";

export default function useAuthorize() {
  const { isLoading, user } = useUser();

  const { pathname }: { pathname: any } = useLocation();

  let isAuthenticated = false;
  let isAuthorized = false;
  let isVerfied = false;
  if (user?.status === 2) isVerfied = true;

  const ROLES: any = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    isAuthenticated = true;
    if (user && user.role == ROLES[desiredRole]) isAuthorized = true;
  }

  return { isLoading, isAuthorized, isAuthenticated, isVerfied };
}
