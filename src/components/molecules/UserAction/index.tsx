import Notification from "@/src/assets/icons/Notification";

interface UserActionProps {
  userImg: string;
  notificationActive: boolean;
}

const UserAction = ({ userImg, notificationActive }: UserActionProps) => {
  return (
    <div className="flex items-center gap-x-6">
      <div className="cursor-pointer">
        <Notification active={notificationActive} />
      </div>
      <img
        src={userImg}
        className="w-[52px] h-[52px] cursor-pointer"
        alt="profile"
      />
    </div>
  );
};

export default UserAction;
