import { motion } from "framer-motion";

const PerformanceLoader = () => {
  return (
    <div className="w-full">
      <div className="bg-secondary-500 rounded-default text-primary-0 p-5">
        <div className="w-full max-w-[90px] h-6 bg-primary-0 rounded-skeleton-text animate-pulse"></div>
        <div className="flex justify-evenly mt-4">
          <div className="flex flex-col items-center">
            <motion.svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="37"
                cy="37"
                r="35"
                stroke="#546FFF"
                strokeWidth="3px"
                pathLength={1}
                style={{ rotate: -90 }}
                className="animate-pulse"
              />
            </motion.svg>
            <div className="bg-primary-0 h-5 w-full max-w-[50px] animate-pulse rounded-skeleton-text mt-1"></div>
          </div>
          <div className="flex flex-col gap-x-1  items-center">
            <motion.svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="37"
                cy="37"
                r="35"
                stroke="#546FFF"
                strokeWidth="3px"
                pathLength={1}
                style={{ rotate: -90 }}
                className="animate-pulse"
              />
            </motion.svg>
            <div className="bg-primary-0 h-5 w-full max-w-[83px] animate-pulse rounded-skeleton-text mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceLoader;
