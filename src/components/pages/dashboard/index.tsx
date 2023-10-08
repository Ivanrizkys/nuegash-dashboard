import { Suspense } from 'react';
import DashboardContent from './content';
import DashboardLoader from './loader';

const Dashboard = () => {
  return (
    <Suspense fallback={<DashboardLoader />}>
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
