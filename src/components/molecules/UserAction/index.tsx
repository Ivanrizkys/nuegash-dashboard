import Notification from "@/src/assets/icons/Notification";
import { RootState } from "@/src/global/store";
import { useSelector } from "react-redux";

interface UserActionProps {
  userImg: string;
  notificationActive: boolean;
}

const UserAction = ({ userImg, notificationActive }: UserActionProps) => {
  const screenWidth = useSelector((state: RootState) => state.app.screenWidth);

  return (
    <div className="flex items-center gap-x-6">
      <div className="cursor-pointer">
        <Notification
          active={notificationActive}
          variant={screenWidth > 640 ? "large" : "small"}
        />
      </div>
      <img
        src={userImg}
        className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] cursor-pointer"
        alt="profile"
      />
    </div>
  );
};

export default UserAction;
