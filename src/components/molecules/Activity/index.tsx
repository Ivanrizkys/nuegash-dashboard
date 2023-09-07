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
} from "chart.js";
import { Line } from "react-chartjs-2";
import ArrowDown from "@/src/assets/icons/ArrowDown";
import { ActivityData } from "@/src/libs/dto/json";

interface ActivityProps extends ActivityData {}

const Activity = (props: ActivityProps) => {
  const { data, labels } = props
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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
          display: false,
        },
        ticks: {
          color: "#141522",
          font: {
            size: 12,
            weight: "600",
          },
          callback: (value: number) => {
            return value;
          },
        },
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
            weight: "600",
          },
          color: "#141522",
        },
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      tooltip: {
        displayColors: false,
        bodyFont: {
          size: 14,
          weight: "600",
        },
        padding: {
          x: 18,
          y: 8,
        },
        callbacks: {
          title: () => null,
          label: ({ raw }: { raw: number }) => `${raw} Task`,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Task",
        data,
        borderColor: "#141522",
        backgroundColor: "#FFFF",
        color: "#141522",
      },
    ],
  };

  return (
    <div className="w-full md:w-10/12 bg-[#F5F5F7] rounded-default p-5">
      <div className="flex items-center justify-between text-secondary-500">
        <p className="font-semibold text-base">Activity</p>
        <div className="flex items-center gap-x-2">
          <p className="font-medium text-xs">This Week</p>
          <div className="cursor-pointer">
            <ArrowDown variant="small" />
          </div>
        </div>
      </div>
      <div className="flex bg-white p-4 rounded-default mt-5 w-full">
        <div className="h-[98px] w-full relative">
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
