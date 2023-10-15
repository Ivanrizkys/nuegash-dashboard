import { ReactNode } from "react";
import useAuth from "@/src/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuth();
  return auth ? <>{children}</> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
