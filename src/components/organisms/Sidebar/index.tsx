import { useEffect, useState } from "react";
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

const Sidebar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const showSidebar = useSelector((state: RootState) => state.app.showSidebar);

  return (
    <div
      style={{ left: showSidebar ? "0" : "-252px" }}
      className="fixed top-0 bg-primary-0 w-[252px] transition-[left] duration-500 z-20"
    >
      <div className="relative h-screen box-border z-10 p-8">
        <AppLogo />
        <div className="pt-[60px] flex flex-col gap-y-6">
          <Item
            title="Overview"
            active={pathname === "/"}
            icon={<Overview active={pathname === "/"} />}
            to="/"
          />
          <Item
            title="Task"
            active={pathname.includes("/tasks")}
            icon={<Task active={pathname.includes("/tasks")} />}
            to="/tasks"
          />
          <Item
            title="Mentors"
            active={pathname.includes("/mentors")}
            icon={<Mentor active={pathname.includes("/mentors")} />}
            to="/mentors"
          />
          <Item
            title="Message"
            active={pathname.includes("/messages")}
            icon={<Message active={pathname.includes("/messages")} />}
            to="/messages"
          />
          <Item
            title="Settings"
            active={pathname.includes("/settings")}
            icon={<Setting active={pathname.includes("/settings")} />}
            to="/settings"
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
