import AppBar from "@/src/components/organisms/AppBar";
import ActivityLoader from "@/src/components/molecules/Activity/loader";
import TaskSlideLoader from "@/src/components/organisms/TaskSlide/loader";
import TaskTodayLoader from "@/src/components/organisms/TaskToday/loader";
import RunningTaskLoader from "@/src/components/molecules/RunningTask/loader";
import MentorSlideLoader from "@/src/components/organisms/MentorSlide/loader";

const DashboardLoader = () => {
  return (
    <div className="xl:ml-[252px] flex flex-col lg:flex-row bg-[#FAFAFA] min-h-screen">
      <div className="lg:w-8/12 p-6 sm:p-8">
        <AppBar
          title={`Hi, Yuna Marinka`}
          userImg={"/profile.png"}
          description="Let's finish your task today"
          notificationActive={true}
        />
        <div className="xl:hidden mt-8">
          <h2 className="text-2xl font-semibold text-secondary-500 mb-2">
            Hi, Yuna Marinka
          </h2>
          <h3 className="text-base font-medium text-secondary-400">
            Let's finish your task today
          </h3>
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-8 mt-11">
          <RunningTaskLoader />
          <ActivityLoader />
        </div>
        <section className="mt-8">
          <MentorSlideLoader
            title="Monthly Mentors"
            swiperClass="monthly-mentors-loader"
          />
        </section>
        <section className="text-secondary-500 mt-8">
          <TaskSlideLoader
            title="Upcoming Task"
            swiperClass="upcoming-task-loader"
          />
        </section>
      </div>
      <div className="lg:w-4/12 p-6 sm:p-8 bg-[#F5F5F7] flex flex-col sm:flex-row-reverse gap-8 lg:gap lg:flex-col">
        <div className="bg-secondary-500 w-full h-[160px] rounded-default"></div>
        <TaskTodayLoader />
      </div>
    </div>
  );
};

export default DashboardLoader;
