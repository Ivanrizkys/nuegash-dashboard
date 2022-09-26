import AppBar from "@/src/components/organisms/AppBar";
import TaskSlide from "@/src/components/organisms/TaskSlide";

const Tasks = () => {
  return (
    <div className="xl:ml-[252px] bg-[#FAFAFA] min-h-screen">
      <nav className="bg-primary-0 p-8 w-full">
        <AppBar
          title="Explore Task"
          userImg={"/profile.png"}
          notificationActive={true}
          withSearch={true}
          placeholder="Search Task"
        />
      </nav>
      <div className="p-8">
        <section>
          <TaskSlide title="The Limit" swiperClass="the-limit" />
        </section>
        <section className="mt-8">
          <TaskSlide title="New Task" swiperClass="new-task" />
        </section>
      </div>
    </div>
  );
};

export default Tasks;
