import "swiper/css";
import { useId } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import { SwiperContainer } from "@/src/styles/index";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardMentorLoader from "@/src/components/molecules/CardMentor/loader";

interface MentorSlideLoaderProps {
  title: string;
  swiperClass: string;
}

const MentorSlideLoader = ({ title, swiperClass }: MentorSlideLoaderProps) => {
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
            {[1, 2, 3, 4, 5, 6, 7].map((value) => (
              <SwiperSlide key={useId()}>
                <CardMentorLoader />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
};

export default MentorSlideLoader;
