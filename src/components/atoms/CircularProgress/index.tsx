import {
  Variants,
  animate,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect } from "react";

interface CircularProgressProps {
  r: number;
  stroke: string;
  strokeWidth: string;
  percentage: number;
}

const CircularProgress = (props: CircularProgressProps) => {
  const { r, stroke, strokeWidth, percentage } = props;

  const progressInitial = useMotionValue(0);
  const progresResult = useTransform(progressInitial, Math.round);

  useEffect(() => {
    const progressAnimation = animate(progressInitial, percentage, {
      duration: 0.4,
    });

    return progressAnimation.stop;
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
    <div className="relative">
      <motion.svg
        width={r * 2 + 4}
        height={r * 2 + 4}
        viewBox={`0 0 ${r * 2 + 4} ${r * 2 + 4}`}
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx={r + 2}
          cy={r + 2}
          r={r}
          stroke={stroke}
          strokeWidth={strokeWidth}
          variants={draw}
          style={{ rotate: -90 }}
        />
      </motion.svg>
      <p className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-center text-lg font-medium">
        <motion.span>{progresResult}</motion.span>
        <span>%</span>
      </p>
    </div>
  );
};

export default CircularProgress;
