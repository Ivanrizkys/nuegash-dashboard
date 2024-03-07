import { Suspense } from "react";
import DashboardLoader from "./loader";
import DashboardContent from "./content";
import PrivateRoute from "@/src/components/atoms/PrivateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <Suspense fallback={<DashboardLoader />}>
        <DashboardContent />
      </Suspense>
    </PrivateRoute>
  );
};

export default Dashboard;
