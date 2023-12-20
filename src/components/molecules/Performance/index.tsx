import CircularProgress from "@/src/components/atoms/CircularProgress";

interface PerformaceProps {
  speed: number;
  consistency: number;
}

const Performance = ({ speed, consistency }: PerformaceProps) => {
  return (
    <div className="w-full">
      <div className="bg-secondary-500 rounded-default text-primary-0 p-5">
        <p className="text-base font-semibold">Performance</p>
        <div className="flex justify-evenly mt-4">
          <div className="flex flex-col gap-x-1  items-center">
            <CircularProgress 
              r={35}
              stroke="#546FFF"
              strokeWidth="3px"
              percentage={speed}
            />
            <p className="text-sm font-medium">Speed</p>
          </div>
          <div className="flex flex-col gap-x-1  items-center">
            <CircularProgress 
              r={35}
              stroke="#546FFF"
              strokeWidth="3px"
              percentage={consistency}
            />
            <p className="text-sm font-medium">Consistency</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance;