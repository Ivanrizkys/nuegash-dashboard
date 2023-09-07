import "./custom.css";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";
import AppBar from "@/src/components/organisms/AppBar";
import TaskSlide from "@/src/components/organisms/TaskSlide";
import TaskToday from "@/src/components/organisms/TaskToday";
import RunningTask from "@/src/components/molecules/RunningTask"
import Activity from "@/src/components/molecules/Activity"
import MentorSlide from "@/src/components/organisms/MentorSlide";
import { useQuery } from "@apollo/client";
import { GET_OVERVIEW_DATA } from "@/src/service/query";
import { useMemo } from 'react';
import { ActivityData, RunningTaskData } from "@/src/libs/dto/json";


const Dashboard = () => {
  const { data } = useQuery(GET_OVERVIEW_DATA)
  
  const activity = useMemo<ActivityData>(() => {
    const temp: ActivityData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      data: [0, 0, 0, 0, 0, 0, 0]
    }
    return data ? JSON.parse(data?.activity?.edges[0]?.node?.data) : temp;
  }, [data])
  
  const runningTask = useMemo<RunningTaskData>(() => {
    const temp: RunningTaskData = {
      onProgress: 0,
      percentage: 0,
      total: 0
    }
    return data ? JSON.parse(data?.runningTask?.edges[0]?.node?.data) : temp;
  }, [data])

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
          {data?.runningTask &&
            <RunningTask 
              total={runningTask.total}
              percentage={runningTask.percentage}
              onProgress={runningTask.onProgress}
            />
          }
          {data?.activity &&
            <Activity 
              data={activity.data}
              labels={activity.labels}
            />
          }
        </div>

        <section className="mt-8">
        {data?.mentorsCollection && 
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
              review: mentor?.node?.total_review ??0,
              isFollowed: mentor?.node?.is_followed ?? false
            }))}
          />
        }
        </section>

        <section className="text-secondary-500 mt-8">
          {data?.tasksCollection &&
            <TaskSlide 
              title="Upcoming Task" 
              swiperClass="upcoming-task-list"
              tasks={data?.tasksCollection?.edges.map((task) => ({
                id: task?.node?.id as string,
                image: task?.node?.image ?? "",
                role: task?.node?.task_categories?.name ?? "",
                title: task?.node?.title ?? "",
                progress: task?.node?.progress ?? 0,
                timeRemaining: new Date("1995-12-17T03:24:00"),
                contributors: JSON.parse(task?.node?.mentors).map((image: string) => ({
                  image
                }))
              }))}
            />
          }
        </section>
      </div>

      <div className="lg:w-4/12 p-6 sm:p-8 bg-[#F5F5F7] flex flex-col sm:flex-row-reverse gap-8 lg:gap lg:flex-col">
        <div className="bg-primary-0 w-full h-[160px] rounded-default"></div>
        
        {data?.taskToday && 
          <TaskToday
            image={data?.taskToday?.edges[0]?.node?.image ?? ""}
            title={data?.taskToday?.edges[0]?.node?.title ?? ""}
            role={data?.taskToday?.edges[0]?.node?.task_categories?.name ?? ""}
            progress={data?.taskToday?.edges[0]?.node?.progress ?? 0}
            timeRemaining="3 Days Left"
            contributor={JSON.parse(data?.taskToday?.edges[0]?.node?.mentors).map((image: string) => ({
              image
            }))}
            assessments={JSON.parse(data?.taskToday?.edges[0]?.node?.assessment)}
          />
        }
      </div>
    </div>
  );
};

export default Dashboard;
