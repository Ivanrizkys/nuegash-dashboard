import { Outlet } from "react-router-dom";
import AppBar from "@/src/components/organisms/AppBar";
import PrivateRoute from "@/src/components/atoms/PrivateRoute";

const Tasks = () => {
  return (
    <PrivateRoute>
      <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen">
        <nav className="bg-primary-0 p-8 w-full">
          <AppBar
            title="Explore Task"
            userImg={"/profile.png"}
            notificationActive={true}
            withSearch={true}
            placeholder="Search Task"
          />
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Tasks;
