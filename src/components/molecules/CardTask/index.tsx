import Clock from "@/src/assets/icons/Clock";
import useImageLoader from "@/src/hooks/useImageLoader";
import { useId } from "react";
import { Blurhash } from "react-blurhash";
import { Link } from "react-router-dom";

interface CardTaskProps {
  image: string;
  imageHash: string;
  title: string;
  role: string;
  progress: number;
  timeRemaining: string;
  contributor: Array<{
    image: string;
  }>;
}

const CardTask = (props: CardTaskProps) => {
  const { image, imageHash, title, role, progress, timeRemaining, contributor } = props;

  const id = useId();
  const imageLoaded = useImageLoader(image)

  return (
    <Link to={`/tasks/task-detail`}>
      <div className="w-full max-w-[328px] min-w-[327px] bg-primary-0 text-secondary-500 rounded-default cursor-pointer group p-6 ">
        <div className="w-full h-[110px] overflow-hidden rounded-default">
          {!imageLoaded &&
            <Blurhash
              hash={imageHash}
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          }
          <img
            src={image}
            alt={`img-${id}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h4 className="text-base font-semibold mt-4">{title}</h4>
        <p className="text-secondary-400 text-xs font-medium mt-1">{role}</p>
        <div className="flex items-center justify-between text-base font-medium mt-4 mb-2">
          <p>Progress</p>
          <p className="text-primary-500">{progress}%</p>
        </div>
        <div className="h-2 bg-primary-200 rounded-lg">
          <div
            style={{ width: `${progress}%` }}
            className="bg-primary-500 rounded-lg h-2 min-w-[16px] flex items-center justify-end"
          >
            <div className="w-4 h-4 border-2 border-solid border-primary-0 bg-primary-500 rounded-[50%]"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <Clock variant="medium" />
            <p className="text-base font-medium">{timeRemaining}</p>
          </div>
          <div className="flex">
            {contributor.map(({ image }, index) => (
              <div
                key={useId()}
                className={`rounded-[50%] w-6 h-6 overflow-hidden ${
                  index === 0
                    ? ""
                    : "border-[1.5px] border-solid border-primary-0 -ml-1"
                }`}
              >
                <img src={image} alt={`image-${id}`} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardTask;
