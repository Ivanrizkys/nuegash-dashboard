import "./custom.css";
import "swiper/css/navigation";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/global/store";
import { useSuspenseQuery } from "@apollo/client";
import AppBar from "@/src/components/organisms/AppBar";
import { GET_OVERVIEW_DATA } from "@/src/service/query";
import Activity from "@/src/components/molecules/Activity";
import TaskSlide from "@/src/components/organisms/TaskSlide";
import TaskToday from "@/src/components/organisms/TaskToday";
import RunningTask from "@/src/components/molecules/RunningTask";
import Performance from "@/src/components/molecules/Performance";
import MentorSlide from "@/src/components/organisms/MentorSlide";
import {
  ActivityData,
  RunningTaskData,
  PerformanceData,
} from "@/src/libs/dto/json";

const DashboardContent = () => {
  const userState = useSelector((state: RootState) => state.user);

  const { data } = useSuspenseQuery(GET_OVERVIEW_DATA);

  const activity = useMemo<ActivityData>(() => {
    const temp: ActivityData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      data: [0, 0, 0, 0, 0, 0, 0],
    };
    return data ? JSON.parse(data?.activity?.edges[0]?.node?.data) : temp;
  }, [data]);

  const runningTask = useMemo<RunningTaskData>(() => {
    const temp: RunningTaskData = {
      onProgress: 0,
      percentage: 0,
      total: 0,
    };
    return data ? JSON.parse(data?.runningTask?.edges[0]?.node?.data) : temp;
  }, [data]);

  const performance = useMemo<PerformanceData>(() => {
    const temp: PerformanceData = {
      speed: 0,
      consistency: 0,
    };
    return data ? JSON.parse(data?.performance?.edges[0]?.node?.data) : temp;
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-8/12 p-6 sm:p-8">
        <AppBar
          title={userState.Name}
          userImg={userState.ImageUrl}
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
          {data?.runningTask && (
            <RunningTask
              total={runningTask.total}
              percentage={runningTask.percentage}
              onProgress={runningTask.onProgress}
            />
          )}
          {data?.activity && (
            <Activity data={activity.data} labels={activity.labels} />
          )}
        </div>
        <section className="mt-8">
          {data?.mentorsCollection && (
            <MentorSlide
              title="Monthly Mentors"
              swiperClass="monthly-mentors-list"
              mentors={data?.mentorsCollection?.edges.map((mentor) => ({
                id: mentor?.node?.id as string,
                name: mentor?.node?.name ?? "",
                role: mentor?.node?.role ?? "",
                avatar: mentor?.node?.image ?? "",
                rating: mentor?.node?.rating as number,
                task: mentor?.node?.total_task ?? 0,
                review: mentor?.node?.total_review ?? 0,
                isFollowed: mentor?.node?.is_followed ?? false,
              }))}
            />
          )}
        </section>
        <section className="text-secondary-500 mt-8">
          {data?.tasksCollection && (
            <TaskSlide
              title="Upcoming Task"
              swiperClass="upcoming-task-list"
              tasks={data?.tasksCollection?.edges.map((task) => ({
                id: task?.node?.id as string,
                slug: task?.node?.slug,
                image: task?.node?.image ?? "",
                imageHash: task?.node?.image_hash,
                role: task?.node?.task_categories?.name ?? "",
                title: task?.node?.title ?? "",
                progress: task?.node?.progress ?? 0,
                timeRemaining: new Date("1995-12-17T03:24:00"),
                contributors: JSON.parse(task?.node?.mentors).map(
                  (image: string) => ({
                    image,
                  }),
                ),
              }))}
            />
          )}
        </section>
      </div>
      <div className="lg:w-4/12 p-6 sm:p-8 bg-[#F5F5F7] flex flex-col sm:flex-row-reverse gap-8 lg:gap lg:flex-col">
        {data?.performance && (
          <Performance
            speed={performance.speed}
            consistency={performance.consistency}
          />
        )}

        {data?.taskToday && (
          <TaskToday
            image={data?.taskToday?.edges[0]?.node?.image ?? ""}
            imageHash={data?.taskToday?.edges[0]?.node?.image_hash}
            title={data?.taskToday?.edges[0]?.node?.title ?? ""}
            role={data?.taskToday?.edges[0]?.node?.task_categories?.name ?? ""}
            progress={data?.taskToday?.edges[0]?.node?.progress ?? 0}
            timeRemaining="3 Days Left"
            contributor={JSON.parse(
              data?.taskToday?.edges[0]?.node?.mentors,
            ).map((image: string) => ({
              image,
            }))}
            assessments={JSON.parse(
              data?.taskToday?.edges[0]?.node?.assessment,
            )}
            slug={data?.taskToday?.edges[0]?.node?.slug}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
