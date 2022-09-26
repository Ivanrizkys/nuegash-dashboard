import UserAction from "@/src/components/molecules/UserAction";
import Input from "@/src/components/atoms/Input"
import Search from "@/src/assets/icons/Search";
import Category from "@/src/assets/icons/Category";
import Sort from "@/src/assets/icons/Sort";

interface AppBarProps {
  title: string;
  description?: string;
  userImg: string;
  withSearch?: boolean;
  notificationActive: boolean;
  placeholder?: string
}

const AppBar = (props: AppBarProps) => {
  const { title, description, userImg, withSearch, notificationActive, placeholder } = props;

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
      {withSearch && (
        <div className="flex justify-between items-center mt-6">
          <div className="w-full max-w-[480px]">
            <Input  
              placeholder={placeholder as string}
              inputAdorment={
                <Search />
              }
              adormentPosition="end"
            />
          </div>
          <div className="w-full max-w-[368px] flex items-center justify-between">
            <div className="flex items-center justify-between gap-x-[12px] px-7 py-[14px] rounded-default border-[1px] border-solid cursor-pointer border-[#F5F5F7]">
              <Category />
              <p className="text-xs font-semibold text-secondary-500">Category</p>
            </div>
            <div className="flex items-center justify-between gap-x-[12px] px-7 py-[14px] rounded-default border-[1px] border-solid cursor-pointer border-[#F5F5F7]">
              <Sort />
              <p className="text-xs font-semibold text-secondary-500">Sort By: Deadline</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
