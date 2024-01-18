import { useLocation } from "react-router-dom";
import useUser from "./use-user";

export default function useAuthorize() {
  const { isLoading, user } = useUser();

  const { pathname } = useLocation();

  let isAuthenticated = false;
  let isAuthorized = false;

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

  return { isLoading, isAuthorized, isAuthenticated };
}
