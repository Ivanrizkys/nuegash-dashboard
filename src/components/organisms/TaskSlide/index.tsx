import "swiper/css";
import { useId } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import CardTask from "@/src/components/molecules/CardTask";
import { SwiperContainer } from "@/src/styles/index";

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
                <CardTask
                  image="https://s3-alpha-sig.figma.com/img/3383/da9a/5e6800bc07f249dba70a9128599ffaa6?Expires=1665964800&Signature=cis4e-5Vk6qcNR70H4sJkoAUogsFzeoOxnaX~cYs9-0rrDjBsh4jPeqLiUWe-fQgFX5XIut3r523FwvQRcVP8rGbOrabMHDsSXkG2UGSNT2~yXdDSsKlIf5ADPd9ZViIuBfn4ZBXhRobECaaLYTdY6me29pIFa-vjo38ANnZcdN620m9sZL10JX2yZ65zA8pmDwZ8mSmPhsVoh6bFONAOdJxMM6ly~jXts0sl~vTuzP-Iamt4NGgDb4O0ypInOZajMbPUC0FL6dqvJLOi4Fvn-4zDr5aXy1N-us9Gw28op4uHe~SOeaHqIMGWwoYPszOEQKAWiTOK8BSzUZvXYqSdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Creating Mobile App Design"
                  role="UI UX Design"
                  progress={15}
                  timeRemaining="3 Days Left"
                  contributor={[
                    {
                      image: "https://s3-alpha-sig.figma.com/img/375b/7a9f/c6fd3f7edcc62885c94d899223b36b74?Expires=1665964800&Signature=MnnXB4ropFHUfqzfdAhNs9Q95rdgamLgBsoi4gn9-9ET5oTP8hwQ94ylrVOO0ILJQe4DfpV5cpJmTgQmnoU4Pxqu8KTVJFgyo5BHkxsLatVN1r2~CxWwtRhC~-~ty8nuqz~QfkkyTrhB~chuuB4HwL-pDPbv-kc~JfqAbQ8zoyZQqYfe~pcem2FPDbHF5iwclbHQzuV~Ulj0E3MWLBJujhN2erlr26JvdWs~C1Hn4C42apIGMEUN~1qD46MmBs0KnK1tspWS6gkwCPODSN-Z6ZUNfvoDuj5lVTBM026KtKXfsfY~B~mtEsFv7Q6pQ80iO1tLcGCELIUKbW34jQ3PDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    },
                    {
                      image: "https://s3-alpha-sig.figma.com/img/375b/7a9f/c6fd3f7edcc62885c94d899223b36b74?Expires=1665964800&Signature=MnnXB4ropFHUfqzfdAhNs9Q95rdgamLgBsoi4gn9-9ET5oTP8hwQ94ylrVOO0ILJQe4DfpV5cpJmTgQmnoU4Pxqu8KTVJFgyo5BHkxsLatVN1r2~CxWwtRhC~-~ty8nuqz~QfkkyTrhB~chuuB4HwL-pDPbv-kc~JfqAbQ8zoyZQqYfe~pcem2FPDbHF5iwclbHQzuV~Ulj0E3MWLBJujhN2erlr26JvdWs~C1Hn4C42apIGMEUN~1qD46MmBs0KnK1tspWS6gkwCPODSN-Z6ZUNfvoDuj5lVTBM026KtKXfsfY~B~mtEsFv7Q6pQ80iO1tLcGCELIUKbW34jQ3PDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    },
                    {
                      image: "https://s3-alpha-sig.figma.com/img/375b/7a9f/c6fd3f7edcc62885c94d899223b36b74?Expires=1665964800&Signature=MnnXB4ropFHUfqzfdAhNs9Q95rdgamLgBsoi4gn9-9ET5oTP8hwQ94ylrVOO0ILJQe4DfpV5cpJmTgQmnoU4Pxqu8KTVJFgyo5BHkxsLatVN1r2~CxWwtRhC~-~ty8nuqz~QfkkyTrhB~chuuB4HwL-pDPbv-kc~JfqAbQ8zoyZQqYfe~pcem2FPDbHF5iwclbHQzuV~Ulj0E3MWLBJujhN2erlr26JvdWs~C1Hn4C42apIGMEUN~1qD46MmBs0KnK1tspWS6gkwCPODSN-Z6ZUNfvoDuj5lVTBM026KtKXfsfY~B~mtEsFv7Q6pQ80iO1tLcGCELIUKbW34jQ3PDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    },
                  ]}
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
