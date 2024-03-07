import { useCallback } from "react";
import Task from "@/src/assets/icons/Task";
import Mentor from "@/src/assets/icons/Mentor";
import Message from "@/src/assets/icons/Message";
import Setting from "@/src/assets/icons/Setting";
import Overview from "@/src/assets/icons/Overview";
import AppLogo from "@/src/components/molecules/AppLogo";
import Item from "@/src/components/organisms/Sidebar/Item";
import HelpCenter from "@/src/components/organisms/Sidebar/HelpCenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/global/store";
import { useLocation } from "react-router-dom";
import { updateShowSidebar } from "@/src/global/app";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { showSidebar, screenWidth } = useSelector(
    (state: RootState) => state.app,
  );

  const handleItemClick = useCallback(() => {
    if (screenWidth < 1280) {
      dispatch(updateShowSidebar(false));
    }
  }, [screenWidth]);

  return (
    <div
      style={{ left: showSidebar ? "0" : "-252px" }}
      className="fixed top-0 bg-primary-0 w-[252px] transition-[left] duration-500 z-30"
    >
      <div className="relative h-screen box-border z-10 p-8">
        <AppLogo />
        <div className="pt-[60px] flex flex-col gap-y-6">
          <Item
            title="Overview"
            active={pathname === "/"}
            icon={<Overview active={pathname === "/"} />}
            to="/"
            onClick={handleItemClick}
          />
          <Item
            title="Task"
            active={pathname.includes("/tasks")}
            icon={<Task active={pathname.includes("/tasks")} />}
            to="/tasks"
            onClick={handleItemClick}
          />
          <Item
            title="Mentors"
            active={pathname.includes("/mentors")}
            icon={<Mentor active={pathname.includes("/mentors")} />}
            to="/mentors"
            onClick={handleItemClick}
          />
          <Item
            title="Message"
            active={pathname.includes("/messages")}
            icon={<Message active={pathname.includes("/messages")} />}
            to="/messages"
            onClick={handleItemClick}
          />
          <Item
            title="Settings"
            active={pathname.includes("/settings")}
            icon={<Setting active={pathname.includes("/settings")} />}
            to="/settings"
            onClick={handleItemClick}
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <HelpCenter />
      </div>
    </div>
  );
};

export default Sidebar;
