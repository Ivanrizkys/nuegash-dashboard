import TaskSlideLoader from "../../organisms/TaskSlide/loader";

const ExploreContentLoader = () => {
  return (
    <div className="p-8">
      <section>
        <TaskSlideLoader 
          title="The Limit"
          swiperClass="the-limit-loader"
        />
      </section>
      <section className="mt-8">
        <TaskSlideLoader 
          title="New Task"
          swiperClass="new-task-loader"
        />
      </section>
    </div>
  );
};

export default ExploreContentLoader;
