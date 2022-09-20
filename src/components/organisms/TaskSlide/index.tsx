import { useId } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardTask from "@/src/components/molecules/CardTask";

interface TaskSlideProps {
  title: string;
  swiperClass: string;
  // tasks: Array<{
  //   id: string
  //   image: string
  //   role: string
  //   title: string
  //   progress: number
  //   timeRemaining: Date
  //   contributors: Array<{
  //     id: string
  //     image: string
  //   }>
  // }>
}

const TaskSlide = ({ title, swiperClass }: TaskSlideProps) => {
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
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <SwiperSlide key={useId()}>
              <CardTask
                image="https://bit.ly/3L8H2Ds"
                title="Creating Mobile App Design"
                role="UI UX Design"
                progress={15}
                timeRemaining="3 Days Left"
                contributor={[
                  {
                    image: "https://bit.ly/3QEIVsR",
                  },
                  {
                    image: "https://bit.ly/3QEIVsR",
                  },
                  {
                    image: "https://bit.ly/3QEIVsR",
                  },
                ]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TaskSlide;
