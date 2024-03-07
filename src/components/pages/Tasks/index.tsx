import { Outlet } from "react-router-dom";
import AppBar from "@/src/components/organisms/AppBar";

const Tasks = () => {
  return (
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
  );
};

export default Tasks;
