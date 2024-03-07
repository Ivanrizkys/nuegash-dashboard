import useAuth from "@/src/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/src/components/organisms/Sidebar";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? (
    <>
      <Sidebar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default PrivateRoute;
