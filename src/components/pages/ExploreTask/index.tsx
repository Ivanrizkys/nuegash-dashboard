import TaskSlide from "@/src/components/organisms/TaskSlide";

const ExploreTask = () => {
  return (
    <div className="p-8">
      <section>
        <TaskSlide title="The Limit" swiperClass="the-limit" />
      </section>
      <section className="mt-8">
        <TaskSlide title="New Task" swiperClass="new-task" />
      </section>
    </div>
  )
}

export default ExploreTask