import { useRef, useState } from "react";
import Sort from "@/src/assets/icons/Sort";
import Search from "@/src/assets/icons/Search";
import Input from "@/src/components/atoms/Input";
import Category from "@/src/assets/icons/Category";
import UserAction from "@/src/components/molecules/UserAction";
import HamburgerMenu from "@/src/assets/icons/HamburgerMenu";
import { useDispatch } from "react-redux";
import { updateShowSidebar } from "@/src/global/app";
import SelectAdorment, { Option } from "@/src/components/atoms/SelectAdorment";

interface AppBarProps {
  title: string;
  description?: string;
  userImg: string;
  withSearch?: boolean;
  notificationActive: boolean;
  placeholder?: string;
}

const AppBar = (props: AppBarProps) => {
  const {
    title,
    description,
    userImg,
    withSearch,
    notificationActive,
    placeholder,
  } = props;

  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="hidden xl:block">
            <h2 className="text-2xl font-semibold text-secondary-500 mb-2">
              {title}
            </h2>
            {description && (
              <h3 className="text-base font-medium text-secondary-400">
                {description}
              </h3>
            )}
          </div>
          <button
            onClick={() => dispatch(updateShowSidebar(true))}
            className="xl:hidden"
          >
            <HamburgerMenu />
          </button>
        </div>
        <UserAction notificationActive={notificationActive} userImg={userImg} />
      </div>
      {withSearch && (
        <div className="flex justify-between items-center mt-6">
          <div className="w-full max-w-[480px]">
            <Input
              placeholder={placeholder as string}
              inputAdorment={
                <div
                  className="cursor-pointer"
                  onClick={() => inputEl.current?.focus()}
                >
                  <Search />
                </div>
              }
              adormentPosition="end"
              ref={inputEl}
              type="text"
            />
          </div>
          <div className="w-full max-w-[368px] hidden lg:flex items-center justify-between">
            <SelectAdorment
              defaultText="Category"
              setValue={setCategory}
              icon={<Category />}
            >
              <Option value="">Category</Option>
              <Option value="upcoming">Upcoming</Option>
              <Option value="done">Done</Option>
              <Option value="invalid">Invalid</Option>
            </SelectAdorment>
            <SelectAdorment
              placeholder="Sort By:"
              defaultText="Deadline"
              setValue={setCategory}
              icon={<Sort />}
            >
              <Option value="deadline">Deadline</Option>
              <Option value="assigment">Assigment</Option>
              <Option value="progress">Progress</Option>
            </SelectAdorment>
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
