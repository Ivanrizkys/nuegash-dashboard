import { Suspense } from "react";
import DashboardLoader from "./loader";
import DashboardContent from "./content";

const Dashboard = () => {
  return (
    <Suspense fallback={<DashboardLoader />}>
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
