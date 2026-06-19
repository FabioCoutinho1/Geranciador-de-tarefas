import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import Login from "../../pages/Login";

export const ProtectedRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRouter;
