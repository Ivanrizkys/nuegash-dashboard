import "swiper/css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardTask from "@/src/components/molecules/CardTask";
import { SwiperContainer } from "@/src/styles/index";

interface TaskSlideProps {
  title: string;
  swiperClass: string;
  tasks: Array<{
    id: string;
    image: string;
    imageHash: string;
    role: string;
    title: string;
    progress: number;
    timeRemaining: Date;
    contributors: Array<{
      image: string;
    }>;
    slug: string;
  }>;
}

const TaskSlide = ({ title, swiperClass, tasks }: TaskSlideProps) => {
  return (
    <div className="text-secondary-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex items-center gap-x-[10px]">
          <div className={`cursor-pointer ${swiperClass}-prev`}>
            <ArrowLeft />
          </div>
          <div className={`cursor-pointer ${swiperClass}-next`}>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <SwiperContainer>
          <Swiper
            navigation={{
              nextEl: `.${swiperClass}-next`,
              prevEl: `.${swiperClass}-prev`,
            }}
            modules={[Navigation]}
            className={swiperClass}
            slidesPerView={"auto"}
            spaceBetween={32}
          >
            {tasks.map((task) => (
              <SwiperSlide key={task.id}>
                <CardTask
                  image={task?.image}
                  title={task?.title}
                  role={task?.role}
                  progress={task?.progress}
                  timeRemaining="3 Days Left"
                  contributor={task?.contributors}
                  imageHash={task?.imageHash}
                  slug={task?.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
};

export default TaskSlide;
