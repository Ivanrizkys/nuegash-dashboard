import "swiper/css";
import "./custom.css";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";
import ArrowDown from "@/src/assets/icons/ArrowDown";
import AppBar from "@/src/components/organisms/AppBar";
import TaskSlide from "@/src/components/organisms/TaskSlide";
import TaskToday from "@/src/components/organisms/TaskToday";
import MentorSlide from "@/src/components/organisms/MentorSlide";
import { CircularProgressbar } from "react-circular-progressbar";

const Dashboard = () => {
  return (
    <div className="xl:ml-[252px] flex bg-[#FAFAFA] min-h-screen">
      <div className="w-8/12 p-8">
        <AppBar
          title={`Hi, Yuna Marinka`}
          userImg={"/profile.png"}
          description="Let's finish your task today"
          notificationActive={true}
        />

        <div className="flex justify-between gap-x-8 mt-11">
          <div className="min-w-[194px] w-2/12 bg-secondary-500 rounded-default p-[20px] text-primary-0">
            <div className="font-semibold">
              <p className="text-base">Running Task</p>
              <p className="text-[32px] my-4">65</p>
            </div>
            <div className="flex items-center gap-x-[18px]">
              <div className="w-[68px] h-[68px]">
                <CircularProgressbar
                  value={45}
                  text={`${45}%`}
                  styles={{
                    path: {
                      stroke: "#546FFF",
                      strokeWidth: "3px",
                    },
                    trail: {
                      stroke: "#1A1E38",
                      strokeWidth: "3px",
                    },
                    text: {
                      fill: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: "500",
                    },
                  }}
                />
              </div>
              <div>
                <p className="text-xl font-semibold">100</p>
                <p className="text-sm font-medium">Task</p>
              </div>
            </div>
          </div>
          <div className="w-10/12 bg-[#F5F5F7] rounded-default p-5">
            <div className="flex items-center justify-between text-secondary-500">
              <p className="font-semibold text-base">Activity</p>
              <div className="flex items-center gap-x-2">
                <p className="font-medium text-xs">This Week</p>
                <div className="cursor-pointer">
                  <ArrowDown variant="small" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <MentorSlide
            title="Monthly Mentors"
            swiperClass="monthly-mentors-list"
          />
        </section>

        <section className="text-secondary-500 mt-8">
          <TaskSlide title="Upcoming Task" swiperClass="upcoming-task-list" />
        </section>
      </div>
      <div className="w-4/12 p-8 bg-[#F5F5F7]">
        <div className="bg-primary-0 w-full h-[160px] rounded-default mb-8"></div>
        <TaskToday
          image="https://s3-alpha-sig.figma.com/img/1d25/2753/c2202507d0496b4be017f255eebb9c31?Expires=1665964800&Signature=I8jlUpOANq7b5redOJtlhVqE2nb7A16yZm0uJ3AY8g~a9h91noWmUM4eHUhMYJKE53R8O9FAo1FWkFiv6mhZOfX7ydsqRN9KyfeH6HHwX7~fYFhEu7q20tMBfGhm46OKTlqj4Ints9C~cFQRXoTTaPTo-JU3hEkl3MAjq~aSJdmf5tLPbB5LRfbSi~QMPfUNs5cZre58h08GClslvim2DOmNh3EYKLNRTNARSKli7h8sTvusQcgHYlg0HaKhUzNSoYd6PvKjIGw6O38WyWPl7MnZ0dOo9lK-KJttoaS2nIcKNmMKfhw-TprowBZQJkoUDGSNyVmXLCeLlhv~LvfZHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Creating Mobile App Design"
          role="UI UX Design"
          progress={15}
          timeRemaining="3 Days Left"
          contributor={[
            {
              image: "https://s3-alpha-sig.figma.com/img/8f0a/243b/0dddcba6f432381fca2ee6232cf40165?Expires=1665964800&Signature=ERer68S0k9oCH6ImyuihAMbEHPt5DncDiOMigVN1J~SB9A0jgB57iS6txNl2ZhHQkECXRWE8y7E8duBsIFjYvOxlhTq-93lNc7m5EZslGoKaDR~3Op5WQ2jtQUceeUenyXqJY-LLHZ9R8fuoV43cNjfoQjTVZp4N0ULWz~qG1A~dDs2I25gILBR5M6iAXUFKs2mGeggfqxQnkLnh6wlPZxnhX7jNFxQZEqwx2B-rY~A8c90zTssICqhysyb4-Wkmq7X3AHG2c2bhBmg6VIEs0Q2birUbML9VqRi1e1V41n7e1rItQOPGTfekt8T3kMGJ9Aw~9~3MU1c1NAqj1I5OgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            },
            {
              image: "https://s3-alpha-sig.figma.com/img/375b/7a9f/c6fd3f7edcc62885c94d899223b36b74?Expires=1665964800&Signature=MnnXB4ropFHUfqzfdAhNs9Q95rdgamLgBsoi4gn9-9ET5oTP8hwQ94ylrVOO0ILJQe4DfpV5cpJmTgQmnoU4Pxqu8KTVJFgyo5BHkxsLatVN1r2~CxWwtRhC~-~ty8nuqz~QfkkyTrhB~chuuB4HwL-pDPbv-kc~JfqAbQ8zoyZQqYfe~pcem2FPDbHF5iwclbHQzuV~Ulj0E3MWLBJujhN2erlr26JvdWs~C1Hn4C42apIGMEUN~1qD46MmBs0KnK1tspWS6gkwCPODSN-Z6ZUNfvoDuj5lVTBM026KtKXfsfY~B~mtEsFv7Q6pQ80iO1tLcGCELIUKbW34jQ3PDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            },
            {
              image: "https://s3-alpha-sig.figma.com/img/fcca/fd50/f3b563f82df0cdeb796dc899e0e48a48?Expires=1665964800&Signature=hEJi0bOPpIJJ8IPpAaa5XCpmcHsaOfbyw9xz-pOoFRuABOB5IvJENyYcqhcHBtNhogV1voG2jpOCKcCkv0h91TBAhbSkMA6iwZGuNj~fpzYoKCAicnx0L7n5q7WKSPIGoh1L3bkZZtZqIwTPCTwH6nj-MkrIs~V4AmsOByKpgK9XlpauB8HIuYviEHeQOJq8oFA4j63AAi4yMFAkVkA41i0~mQ-tT0Up6Y9MNsRdZcQ-9L0-GiymCvg2CQQlWxvFvwcu2~3RKDc2zCG9v3BUln8tZmg-5YNacUCdRMfsIm6cHUf0PpYlrenijM8Ha0yOgYjh~ilWzPDgLxbGzcigEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
