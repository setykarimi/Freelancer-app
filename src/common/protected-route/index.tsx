import Loading from "@common/loading";
import useAuthorize from "@hook/use-authorize";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthorized, isLoading, isAuthenticated } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-0">
        <Loading />
      </div>
    );
  }

  if (isAuthenticated && isAuthorized) return children;
}
