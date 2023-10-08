import Galery from "@/src/assets/icons/Galery";
import Button from "@/src/components/atoms/Button";
import FileSubmission from "@/src/assets/icons/FileSubmission";

const TaskDetailLoader = () => {
  return (
    <div className="flex flex-col min-[850px]:flex-row gap-x-6 gap-y-6 min-[900px]:gap-x-8 p-6 min-[900px]:p-8">
      <div className="w-full min-[850px]:w-8/12 bg-primary-0 rounded-default">
        <div className="w-full h-[500px] relative border border-solid border-primary-200 flex justify-center items-center rounded-default">
          <Galery loading />
          <div className="absolute w-full bottom-6 flex justify-center">
            <div className="w-4/5 py-12 px-6 flex items-center justify-between">
              <div className="flex items-center gap-6 w-4/5">
                <div className="w-[18px] h-[18px] rounded-full bg-primary-200 animate-pulse"></div>
                <div className="w-[70%] h-2 rounded-lg bg-primary-100 animate-pulse">
                  <div className="w-[20%] h-full rounded-r-lg bg-primary-200 animate-pulse"></div>
                </div>
                <div className="w-full max-w-[65px] h-[20px] rounded-skeleton-text animate-pulse bg-primary-200"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] rounded-full bg-primary-200 animate-pulse"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-primary-200 animate-pulse"></div>
                <div className="w-[18px] h-[18px] rounded-full bg-primary-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 text-secondary-500">
          <div className="w-full max-w-[500px] h-[40px] rounded-skeleton-text bg-primary-200 animate-pulse"></div>
          <div className="flex items-center my-4 text-sm font-medium w-full">
            <div className="w-full max-w-[175px] h-5 rounded-skeleton-text bg-primary-100 animate-pulse"></div>
            <div className="h-[28px] w-[1px] bg-[#DFDFDF] mx-[10px] rounded-[20px]"></div>
            <div className="w-full max-w-[91px] h-5 rounded-skeleton-text bg-primary-100 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-x-5 font-medium text-sm">
            <div className="w-[15px] h-[15px] bg-primary-200 rounded-full animate-pulse"></div>
            <div className="w-full max-w-[151px] h-5 rounded-skeleton-text bg-primary-200 animate-pulse"></div>
            <div className="w-[15px] h-[15px] bg-primary-200 rounded-full animate-pulse"></div>
            <div className="w-full max-w-[151px] h-5 rounded-skeleton-text bg-primary-200 animate-pulse"></div>
          </div>
          <div className="w-full max-w-[150px] h-[30px] rounded-skeleton-text animate-pulse bg-primary-200 mt-6 mb-4"></div>
          <div className="w-full h-5 rounded-skeleton-text animate-pulse bg-primary-100"></div>
          <div className="w-full h-5 rounded-skeleton-text animate-pulse bg-primary-100 mt-1"></div>
          <div className="w-full h-5 rounded-skeleton-text animate-pulse bg-primary-100 mt-1"></div>
          <div className="w-10/12 h-5 rounded-skeleton-text animate-pulse bg-primary-100 mt-1"></div>
          <div className="w-full max-w-[280px] h-[30px] rounded-skeleton-text animate-pulse bg-primary-200 mt-6 mb-4"></div>
          <div className="flex flex-col gap-y-5 w-full">
            {[1, 2, 3, 4].map((val) => (
              <div key={val} className="flex items-center gap-x-[10px]">
                <div className="w-5 h-5 rounded-full bg-primary-100 animate-pulse"></div>
                <div className="w-full max-w-[216px] h-5 rounded-skeleton-text animate-pulse bg-primary-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full min-[850px]:w-4/12 bg-primary-0 rounded-default p-6 text-secondary-500">
        <div className="w-full max-w-[170px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse mb-6"></div>
        <div className="w-11/12 h-[30px] bg-primary-200 rounded-skeleton-text animate-pulse mb-3"></div>
        <div className="w-full max-w-[180px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse mb-6"></div>
        <div className="w-full max-w-[150px] h-7 bg-primary-200 rounded-skeleton-text animate-pulse mt-6 mb-5"></div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="w-full max-w-[105px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
            <div className="w-full max-w-[73px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-full max-w-[101px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
            <div className="w-full max-w-[44px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-full max-w-[119px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
            <div className="w-full max-w-[30px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
          </div>
        </div>
        <div className="w-full max-w-[80px] h-7 bg-primary-200 rounded-skeleton-text animate-pulse mt-6 mb-5"></div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="w-full max-w-[91px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
            <div className="w-full max-w-[70px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-full max-w-[103px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
          </div>
        </div>
        <div className="mt-4 w-full h-40 rounded-default border-dashed border border-primary-500 flex items-center justify-center animate-pulse">
          <FileSubmission variant="success" />
        </div>
        <div className="mt-[60px]">
          <Button type="button" buttonFull>
            <p className="opacity-0">Submit</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailLoader;
