import Loading from "@common/loading";
import useAuthorize from "@hook/use-authorize";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthorized, isLoading, isAuthenticated, isVerfied } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerfied &&  !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.")
      navigate("/not-access")
    };
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading, isVerfied]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-0">
        <Loading />
      </div>
    );
  }

  if (isAuthenticated && isAuthorized) return children;
}
