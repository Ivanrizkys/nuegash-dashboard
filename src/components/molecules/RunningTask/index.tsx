import {
  animate,
  useMotionValue,
  useTransform,
  motion,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import { RunningTaskData } from "@/src/libs/dto/json";

interface RunningTaskProps extends RunningTaskData {}

const RunningTask = (props: RunningTaskProps) => {
  const { total, percentage, onProgress } = props;

  const taskInitial = useMotionValue(0);
  const progressInitial = useMotionValue(0);
  const percentageInitial = useMotionValue(0);
  const taskResult = useTransform(taskInitial, Math.round);
  const progressResult = useTransform(progressInitial, Math.round);
  const percentageResult = useTransform(percentageInitial, Math.round);

  useEffect(() => {
    const taskAnimation = animate(taskInitial, total, { duration: 0.4 });
    const progressAnimation = animate(progressInitial, onProgress, {
      duration: 0.4,
    });
    const percentageAnimation = animate(percentageInitial, percentage, {
      duration: 0.4,
    });

    return progressAnimation.stop, taskAnimation.stop, percentageAnimation.stop;
  }, []);

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0;
      return {
        pathLength: percentage / 100,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="w-full md:min-w-[194px] md:w-2/12 bg-secondary-500 rounded-default p-[20px] text-primary-0 flex items-center justify-between min-[370px]:justify-around sm:flex-col sm:justify-start sm:items-start">
      <div className="font-semibold">
        <p className="text-base">Running Task</p>
        <motion.p className="text-[32px] my-4 text-center sm:text-left">
          {progressResult}
        </motion.p>
      </div>
      <div className="flex items-center gap-x-[18px]">
        <div className="relative">
          <motion.svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="35"
              cy="35"
              r="33"
              stroke="#546FFF"
              strokeWidth="3px"
              variants={draw}
              style={{ rotate: -90 }}
            />
          </motion.svg>
          <p className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-center text-lg font-medium">
            <motion.span>{percentageResult}</motion.span>
            <span>%</span>
          </p>
        </div>
        <div>
          <motion.p className="text-xl font-semibold">{taskResult}</motion.p>
          <p className="text-sm font-medium">Task</p>
        </div>
      </div>
    </div>
  );
};

export default RunningTask;
