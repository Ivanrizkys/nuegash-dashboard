import { RunningTaskData } from "@/src/libs/dto/json";
import { CircularProgressbar } from "react-circular-progressbar";

interface RunningTaskProps extends RunningTaskData {}

const RunningTask = (props: RunningTaskProps) => {
  const { total, percentage, onProgress } = props;

  return (
    <div className="w-full md:min-w-[194px] md:w-2/12 bg-secondary-500 rounded-default p-[20px] text-primary-0 flex items-center justify-between min-[370px]:justify-around sm:flex-col sm:justify-start sm:items-start">
      <div className="font-semibold">
        <p className="text-base">Running Task</p>
        <p className="text-[32px] my-4 text-center sm:text-left">{onProgress}</p>
      </div>
      <div className="flex items-center gap-x-[18px]">
        <div className="w-[99px] h-[99px] sm:w-[68px] sm:h-[68px]">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
          <p className="text-xl font-semibold">{total}</p>
          <p className="text-sm font-medium">Task</p>
        </div>
      </div>
    </div>
  );
};

export default RunningTask;
