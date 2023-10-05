import Galery from "@/src/assets/icons/Galery";
import Button from "@/src/components/atoms/Button";

const TaskTodayLoader = () => {
  return (
    <div className="w-full bg-primary-0 text-secondary-500 rounded-default p-6">
      <div className="flex items-center justify-between mb-[20px] w-full">
        <div className="w-full max-w-[83.7px] h-6 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
        <div className="w-4 h-4 bg-primary-200 rounded-full animate-pulse"></div>
      </div>
      <div className="w-full h-[110px] rounded-default border-solid border border-[#F5F5F7] flex items-center justify-center">
        <Galery loading />
      </div>
      <div className="w-full max-w-[210.4px] h-6 bg-primary-200 rounded-skeleton-text animate-pulse mt-4"></div>
      <div className="w-full max-w-[100px] h-4 bg-primary-100 rounded-skeleton-text animate-pulse mt-1"></div>
      <div className="flex items-center justify-between text-base font-medium mt-4 mb-2 w-full">
        <div className="w-full max-w-[68.7px] h-6 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
        <div className="w-full max-w-[31.9px] h-6 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
      </div>
      <div className="w-full h-2 bg-primary-200 rounded-lg animate-pulse"></div>
      <div className="flex items-center justify-between mt-4 w-full">
        <div className="flex items-center gap-x-2 w-full">
          <div className="w-4 h-4 rounded-full bg-primary-200 animate-pulse"></div>
          <div className="w-full max-w-[84.5px] h-6 bg-primary-200 animate-pulse rounded-skeleton-text"></div>
        </div>
        <div className="w-full max-w-[31.9px] h-6 bg-primary-200 animate-pulse rounded-skeleton-text"></div>
      </div>
      <div className="w-full h-[1px] bg-[#F5F5F7] my-8"></div>
      <div className="flex items-center justify-between w-full">
        <div className="w-full max-w-[84px] h-6 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
        <div className="w-full max-w-[71.7px] h-4 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
      </div>
      {[1, 2, 3].map((val) => (
        <div
          key={val}
          className="flex items-center gap-x-3 text-base my-[20px] w-full"
        >
          <div className="w-9 h-9 bg-primary-200 rounded-default animate-pulse"></div>
          <div className="w-full h-6 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
        </div>
      ))}
      <div className="mt-14">
        <Button buttonFull type="button">
          <p className="opacity-0">Go To Detail</p>
        </Button>
      </div>
    </div>
  );
};

export default TaskTodayLoader;
