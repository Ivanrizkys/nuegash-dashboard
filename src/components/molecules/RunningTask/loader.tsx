import { motion } from "framer-motion";

const RunningTaskLoader = () => {
  return (
    <div className="w-full md:min-w-[194px] md:w-2/12 bg-secondary-500 rounded-default p-[20px] text-primary-0 flex items-center justify-between min-[370px]:justify-around sm:flex-col sm:justify-start sm:items-start">
      <div className="w-full animate-pulse">
        <div className="bg-primary-0 w-full max-w-[99.2px] h-6 rounded-skeleton-text"></div>
        <div className="bg-primary-0 w-full max-w-[50px] h-6 my-4 rounded-skeleton-text"></div>
      </div>
      <div className="flex items-center gap-x-[18px] w-full">
        <div className="w-full relative">
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="49"
              stroke="#546FFF"
              strokeWidth="3px"
              pathLength={1}
              style={{ rotate: -90 }}
              className="animate-pulse"
            />
          </motion.svg>
          <div className="w-10 h-7 bg-primary-0 rounded-skeleton-text animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="w-full max-w-[35.5px] animate-pulse">
          <div className="bg-primary-0 w-full max-w-[35.5px] h-6 rounded-skeleton-text"></div>
          <div className="bg-primary-0 w-full max-w-[35.5px] h-6 rounded-skeleton-text mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RunningTaskLoader;
