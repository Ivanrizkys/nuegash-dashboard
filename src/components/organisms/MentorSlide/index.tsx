import "swiper/css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardMentor from "@/src/components/molecules/CardMentor";
import { SwiperContainer } from "@/src/styles/index";

interface MentorSlideProps {
  title: string;
  swiperClass: string;
  mentors: Array<{
    id: string;
    name: string;
    role: string;
    task: number;
    rating: number;
    review: number;
    avatar: string;
    isFollowed: boolean;
  }>;
}

const MentorSlide = ({ title, swiperClass, mentors }: MentorSlideProps) => {
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
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <CardMentor
                  name={mentor.name}
                  role={mentor.role}
                  task={mentor.task}
                  rating={mentor.rating}
                  review={mentor.review}
                  avatar={mentor.avatar}
                  isFollowed={mentor.isFollowed}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
};

export default MentorSlide;
