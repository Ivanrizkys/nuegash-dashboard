import { useEffect } from "react";
import { updateSidebar } from "./store";
import Task from "@/src/assets/icons/Task";
import Mentor from "@/src/assets/icons/Mentor";
import { RootState } from "@/src/global/store";
import Message from "@/src/assets/icons/Message";
import Setting from "@/src/assets/icons/Setting";
import Overview from "@/src/assets/icons/Overview";
import { useDispatch, useSelector } from "react-redux";
import AppLogo from "@/src/components/molecules/AppLogo";
import Item from "@/src/components/organisms/Sidebar/Item"
import HelpCenter from "@/src/components/organisms/Sidebar/HelpCenter"

const Sidebar = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: RootState) => state.sidebar.value)
  
  useEffect(() => {
    console.log("ini adalah state nya adik adik", value)
  }, [value])

  const handleChangeSidebar = (value: number) => {
    dispatch(updateSidebar(value))
  }
  
  return (
    <div className="fixed top-0 left-0 w-[252px] bg-primary-0">
      <div className="relative h-screen box-border z-10 p-8">
        <AppLogo />
        <div className="pt-[60px] flex flex-col gap-y-6">
          <Item
            title="Overview"
            active={value === 1}
            icon={<Overview active={value === 1} />}
            to="/"
            handleClick={handleChangeSidebar}
            value={1}
            
          />
          <Item
            title="Task"
            active={value === 2}
            icon={<Task active={value === 2} />}
            to="/tasks"
            handleClick={handleChangeSidebar}
            value={2}
          />
          <Item
            title="Mentors"
            active={value === 3}
            icon={<Mentor active={value === 3} />}
            to="/mentors"
            handleClick={handleChangeSidebar}
            value={3}
          />
          <Item
            title="Message"
            active={value === 4}
            icon={<Message active={value === 4} />}
            to="/messages"
            handleClick={handleChangeSidebar}
            value={4}
          />
          <Item
            title="Settings"
            active={value === 5}
            icon={<Setting active={value === 5} />}
            to="/settings"
            handleClick={handleChangeSidebar}
            value={5}
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
