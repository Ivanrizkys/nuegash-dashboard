import ArrowLeft from "@/src/assets/icons/ArrowLeft";
import ArrowRight from "@/src/assets/icons/ArrowRight";
import Notification from "@/src/assets/icons/Notification";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CardMentor from "@/src/components/molecules/CardMentor";
import CardTask from "@/src/components/molecules/CardTask";
import TaskToday from "@/src/components/organisms/TaskToday";

const Dashboard = () => {
  return (
    <div className="ml-[252px] flex bg-[#FAFAFA] min-h-screen">
      <div className="w-8/12 p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-500 mb-2">
              Hi, Yuna Marinka
            </h2>
            <h3 className="text-base font-medium text-secondary-400">
              Let's finish your task today
            </h3>
          </div>
          <div className="flex items-center gap-x-6">
            <Notification active />
            <img
              src="/profile.png"
              className="w-[52px] h-[52px] cursor-pointer"
              alt="profile"
            />
          </div>
        </div>

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
          <div className="w-10/12 h-[214px] bg-[#F5F5F7] rounded-default"></div>
        </div>

        <div className="text-secondary-500 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Monthly Mentors</h2>
            <div className="flex items-center gap-x-[10px]">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
          <div className="mt-[20px]">
            <CardMentor
              name="Cika Febriana"
              role="UI UX Design"
              task={40}
              rating={4.7}
              review={750}
              avatar="https://bit.ly/3QEIVsR"
              isFollowed={false}
            />
          </div>
        </div>

        <div className="text-secondary-500 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Upcoming Task</h2>
            <div className="flex items-center gap-x-[10px]">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
          <div className="mt-[20px]">
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
          </div>
        </div>
      </div>
      <div className="w-4/12 p-8 bg-[#F5F5F7]">
        <div className="bg-primary-0 w-full h-[160px] rounded-default mb-8"></div>
        <TaskToday
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
      </div>
    </div>
  );
};

export default Dashboard;
