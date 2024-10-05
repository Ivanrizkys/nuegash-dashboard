import { Suspense } from "react";
import PageLoader from "../PageLoader";
import useAuth from "@/src/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/src/components/organisms/Sidebar";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? (
    <>
      <Sidebar />
      <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default PrivateRoute;
