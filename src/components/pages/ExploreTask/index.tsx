import TaskSlide from "@/src/components/organisms/TaskSlide";
import { GET_TASK_DATA } from "@/src/service/query";
import { useQuery } from "@apollo/client";

const ExploreTask = () => {
  const { data } = useQuery(GET_TASK_DATA);

  return (
    <div className="p-8">
      <section>
        {data?.theLimit && (
          <TaskSlide
            title="The Limit"
            swiperClass="the-limit"
            tasks={data?.theLimit?.edges.map((task) => ({
              id: task?.node?.id as string,
              image: task?.node?.image ?? "",
              role: task?.node?.task_categories?.name ?? "",
              title: task?.node?.title ?? "",
              progress: task?.node?.progress ?? 0,
              timeRemaining: new Date("1995-12-17T03:24:00"),
              contributors: JSON.parse(task?.node?.mentors).map(
                (image: string) => ({
                  image,
                })
              ),
            }))}
          />
        )}
      </section>
      <section className="mt-8">
        {data?.newTask && (
          <TaskSlide
            title="New Task"
            swiperClass="new-task"
            tasks={data?.newTask?.edges.map((task) => ({
              id: task?.node?.id as string,
              image: task?.node?.image ?? "",
              role: task?.node?.task_categories?.name ?? "",
              title: task?.node?.title ?? "",
              progress: task?.node?.progress ?? 0,
              timeRemaining: new Date("1995-12-17T03:24:00"),
              contributors: JSON.parse(task?.node?.mentors).map(
                (image: string) => ({
                  image,
                })
              ),
            }))}
          />
        )}
      </section>
    </div>
  );
};

export default ExploreTask;
