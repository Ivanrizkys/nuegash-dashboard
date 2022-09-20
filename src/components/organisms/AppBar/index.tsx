import UserAction from "@/src/components/molecules/UserAction";

interface AppBarProps {
  title: string;
  description?: string;
  userImg: string;
  withSearch?: boolean;
  notificationActive: boolean;
}

const AppBar = (props: AppBarProps) => {
  const { title, description, userImg, withSearch, notificationActive } = props;

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-secondary-500 mb-2">
            {title}
          </h2>
          {description && (
            <h3 className="text-base font-medium text-secondary-400">
              {description}
            </h3>
          )}
        </div>
        <UserAction notificationActive={notificationActive} userImg={userImg} />
      </div>
    </>
  );
};

export default AppBar;
