import Clock from "@/src/assets/icons/Clock";
import useImageLoader from "@/src/hooks/useImageLoader";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useId } from "react";
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
  slug: string;
}

const CardTask = (props: CardTaskProps) => {
  const { image, imageHash, title, role, progress, timeRemaining, contributor, slug } = props;

  const id = useId();
  const imageLoaded = useImageLoader(image)

  const progressInitial = useMotionValue(0)
  const progressResult = useTransform(progressInitial, Math.round)

  useEffect(() => {
    const animation = animate(progressInitial, progress, { duration: 0.6})

    return animation.stop
  }), []

  return (
    <Link to={`/tasks/${slug}`}>
      <div className="w-full max-w-[328px] min-w-[327px] bg-primary-0 text-secondary-500 rounded-default cursor-pointer group p-6 ">
        <div className="w-full h-[110px] overflow-hidden rounded-default">
          <motion.div
            initial={{ display: "block" }}
            animate={{ display: imageLoaded ? "none" : "block"}}
            transition={{ display: {delay: 0}}}
            className="w-full h-full relative"
          >
            <Blurhash
              hash={imageHash}
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </motion.div>
          <motion.img
            src={image}
            initial={{ opacity: 0.5}}
            animate={{ opacity: imageLoaded ? 1 : 0.5}}
            transition={{opacity: { duration: 0.3 }}}
            alt={`img-${id}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative"
          />
        </div>
        <h4 className="text-base font-semibold mt-4">{title}</h4>
        <p className="text-secondary-400 text-xs font-medium mt-1">{role}</p>
        <div className="flex items-center justify-between text-base font-medium mt-4 mb-2">
          <p>Progress</p>
          <p className="text-primary-500">
            <motion.span>{progressResult}</motion.span>
            <span>%</span>
          </p>
        </div>
        <div className="h-2 bg-primary-200 rounded-lg">
          <motion.div
            initial={{ width: 0}}
            animate={{ width: `${progress}%`}}
            transition={{width: {duration: 0.6}}}
            className="bg-primary-500 rounded-lg h-2 min-w-[16px] flex items-center justify-end"
          >
            <div className="w-4 h-4 border-2 border-solid border-primary-0 bg-primary-500 rounded-[50%]"></div>
          </motion.div>
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
