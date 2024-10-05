import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Sort from "@/src/assets/icons/Sort";
import Search from "@/src/assets/icons/Search";
import Input from "@/src/components/atoms/Input";
import Category from "@/src/assets/icons/Category";
import { updateShowSidebar } from "@/src/global/app";
import HamburgerMenu from "@/src/assets/icons/HamburgerMenu";
import UserAction from "@/src/components/molecules/UserAction";
import SelectAdorment from "@/src/components/atoms/SelectAdorment";

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

  const [category, setCategory] = useState("upcoming");
  const [sortBy, setSortBy] = useState<string>("deadline");

  const dispatch = useDispatch();

  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="hidden xl:block">
            <h2 className="text-2xl font-semibold text-secondary-500 mb-2">
              Hi, {title}
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
              items={[
                {
                  title: "Upcoming",
                  value: "upcoming",
                },
                {
                  title: "Done",
                  value: "done",
                },
                {
                  title: "Invalid",
                  value: "invalid",
                },
              ]}
              value={category}
              setValue={setCategory}
              icon={<Category />}
            />
            <SelectAdorment
              items={[
                {
                  title: "Deadline",
                  value: "deadline",
                },
                {
                  title: "Assigment",
                  value: "assigment",
                },
                {
                  title: "Progress",
                  value: "progress",
                },
              ]}
              placeholder="Sort By:"
              value={sortBy}
              setValue={setSortBy}
              icon={<Sort />}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
