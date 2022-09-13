import Star from "@/src/assets/icons/Star";
import TaskItem from "@/src/assets/icons/TaskItem";
import { useId } from "react";

interface CardMentorProps {
  name: string;
  role: string;
  task: number;
  rating: number;
  review: number;
  avatar: string;
  isFollowed: boolean;
}

const CardMentor = (props: CardMentorProps) => {
  const { name, role, task, rating, review, avatar, isFollowed } = props;

  const id = useId();

  return (
    <div className="w-full max-w-[328px] bg-primary-0 rounded-default cursor-pointer p-6">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`img-${id}`}
          className="w-12 h-12 rounded-[50%]"
        />
        <div className="ml-2">
          <h4 className="font-semibold text-base">{name}</h4>
          <p className="text-xs font-medium text-secondary-400">{role}</p>
        </div>
        <p
          className={`text-sm font-medium ml-auto ${
            isFollowed
              ? "text-secondary-400"
              : "text-primary-500 cursor-pointer"
          }`}
        >
          {isFollowed ? "Followed" : "+ Follow"}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm font-medium mt-5">
        <div className="flex items-center">
          <TaskItem />
          <p className="ml-2">{task} Task</p>
        </div>
        <div className="flex items-center">
          <Star />
          <p className="ml-2">
            {rating} ({review} Reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMentor;
