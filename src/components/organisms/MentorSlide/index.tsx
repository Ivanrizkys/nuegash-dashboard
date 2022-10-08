import "swiper/css";
import { useId } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardMentor from "@/src/components/molecules/CardMentor";
import { SwiperContainer } from "@/src/styles/index";

interface MentorSlideProps {
  title: string;
  swiperClass: string;
  // mentors: Array<{
  //   id: string;
  //   name: string;
  //   role: string;
  //   task: number;
  //   rating: number;
  //   review: number;
  //   avatar: string;
  //   isFollowed: boolean;
  // }>;
}

const MentorSlide = ({ title, swiperClass }: MentorSlideProps) => {
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
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <SwiperSlide key={useId()}>
                <CardMentor
                  name="Natasya Sifa Aulia"
                  role="UI UX Design"
                  task={40}
                  rating={4.7}
                  review={750}
                  avatar="https://s3-alpha-sig.figma.com/img/fcca/fd50/f3b563f82df0cdeb796dc899e0e48a48?Expires=1665964800&Signature=hEJi0bOPpIJJ8IPpAaa5XCpmcHsaOfbyw9xz-pOoFRuABOB5IvJENyYcqhcHBtNhogV1voG2jpOCKcCkv0h91TBAhbSkMA6iwZGuNj~fpzYoKCAicnx0L7n5q7WKSPIGoh1L3bkZZtZqIwTPCTwH6nj-MkrIs~V4AmsOByKpgK9XlpauB8HIuYviEHeQOJq8oFA4j63AAi4yMFAkVkA41i0~mQ-tT0Up6Y9MNsRdZcQ-9L0-GiymCvg2CQQlWxvFvwcu2~3RKDc2zCG9v3BUln8tZmg-5YNacUCdRMfsIm6cHUf0PpYlrenijM8Ha0yOgYjh~ilWzPDgLxbGzcigEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  isFollowed={false}
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
