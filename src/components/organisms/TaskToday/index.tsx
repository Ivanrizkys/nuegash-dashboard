import { useEffect, useId, useState } from "react";
import Clock from "@/src/assets/icons/Clock";
import LinearMore from "@/src/assets/icons/LinearMore";
import Button from "../../atoms/Button";
import { Blurhash } from "react-blurhash";
import useImageLoader from "@/src/hooks/useImageLoader";
import { useNavigate } from "react-router-dom";

interface TaskTodayProps {
  image: string;
  imageHash: string;
  title: string;
  role: string;
  progress: number;
  timeRemaining: string;
  contributor: Array<{
    image: string;
  }>;
  assessments: Array<string>
  slug: string;
}

const TaskToday = (props: TaskTodayProps) => {
  const { image, imageHash, title, role, progress, timeRemaining, contributor, slug } = props;

  const id = useId();
  const navigate = useNavigate()
  const imageLoaded = useImageLoader(image)

  return (
    <div className="w-full bg-primary-0 text-secondary-500 rounded-default p-6">
      <div className="flex items-center justify-between mb-[20px]">
        <h3 className="text-base font-semibold">Task Today</h3>
        <div className="cursor-pointer">
          <LinearMore />
        </div>
      </div>
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
          className="w-full h-full object-cover"
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
          <Clock variant="small" />
          <p className="text-base font-medium">{timeRemaining}</p>
        </div>
        <div className="flex">
          {contributor.map(({ image }, index) => (
            <div
              className={`rounded-[50%] w-6 h-6 overflow-hidden ${
                index === 0
                  ? ""
                  : "border-[1.5px] border-solid border-primary-0 -ml-1"
              }`}
              key={useId()}
            >
              <img src={image} alt={`image-${id}`} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#F5F5F7] my-8"></div>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Detail Task</h3>
        <p className="text-xs font-medium text-secondary-400">{role}</p>
      </div>
      <div className="flex items-center gap-x-3 text-base my-[20px]">
        <div className="w-9 h-9 flex items-center justify-center bg-[#F5F5F7] rounded-default">
          <p className="font-semibold">1</p>
        </div>
        <p className="font-medium">Understanding the tools in Figma</p>
      </div>
      <div className="flex items-center gap-x-3 text-base my-[20px]">
        <div className="w-9 h-9 flex items-center justify-center bg-[#F5F5F7] rounded-default">
          <p className="font-semibold">2</p>
        </div>
        <p className="font-medium">Understand the basics of making designs</p>
      </div>
      <div className="flex items-center gap-x-3 text-base my-[20px]">
        <div className="w-9 h-9 flex items-center justify-center bg-[#F5F5F7] rounded-default">
          <p className="font-semibold">3</p>
        </div>
        <p className="font-medium">Design a mobile application with figma</p>
      </div>
      <div className="mt-14">
        <Button 
          buttonFull 
          type="button"
          onClick={() => navigate(`/tasks/${slug}`)}
        >
          Go To Detail
        </Button>
      </div>
    </div>
  );
};

export default TaskToday;
