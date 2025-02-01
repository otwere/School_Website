import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles
}) => {
  const {
    user,
    isAuthenticated
  } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;