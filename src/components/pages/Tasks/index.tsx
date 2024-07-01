import { Outlet } from "react-router-dom";
import AppBar from "@/src/components/organisms/AppBar";

const Tasks = () => {
  return (
    <>
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
    </>
  );
};

export default Tasks;
