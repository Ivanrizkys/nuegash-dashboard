import "./custom.css";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";
import ArrowDown from "@/src/assets/icons/ArrowDown";
import AppBar from "@/src/components/organisms/AppBar";
import TaskSlide from "@/src/components/organisms/TaskSlide";
import TaskToday from "@/src/components/organisms/TaskToday";
import MentorSlide from "@/src/components/organisms/MentorSlide";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );


  const options: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false
        },
        ticks: {
          color: "#141522",
          font: {
            size: 12,
            weight: "600"
          },
          callback: (value: number) => {
            return value
          }
        }
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          color: "#F5F5F7",
        },
        ticks: {
          font: {
            size: 12,
            weight: "600"
          },
          color: "#141522",
        }
      }
    },
    elements: {
      line: {
        tension: 0.5,
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      tooltip: {
        displayColors: false,
        bodyFont: {
          size: 14,
          weight: "600"
        },
        padding: {
          x: 18,
          y: 8,
        },
        callbacks: {
          title: () => null,
          label: ({raw}: {raw: number}) => `${raw} Task`
        }
      }
    },
    
  };

  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Task',
        data: [1, 2, 1, 3, 2, 2.3, 2.8],
        borderColor: '#141522',
        backgroundColor: '#FFFF',
        color: "#141522"
      },
    ],
  };


  
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
            <div className="flex bg-white p-4 rounded-default mt-5">
              <div className="h-[98px] w-full">
                <Line options={options} data={data} width={"100%"} />
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
          image="https://res.cloudinary.com/draaoe7rc/image/upload/v1672716435/nuegas/task/task-1_t57skg.png"
          title="Creating Mobile App Design"
          role="UI UX Design"
          progress={15}
          timeRemaining="3 Days Left"
          contributor={[
            {
              image: "https://res.cloudinary.com/draaoe7rc/image/upload/v1672717660/nuegas/mentor/mentor-1_io3lzd.png",
            },
            {
              image: "https://res.cloudinary.com/draaoe7rc/image/upload/v1672717660/nuegas/mentor/mentor-5_oecy53.png",
            },
            {
              image: "https://res.cloudinary.com/draaoe7rc/image/upload/v1672717660/nuegas/mentor/mentor-3_m4cy4u.png",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
