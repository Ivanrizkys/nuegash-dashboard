import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  title: string;
  icon: ReactNode;
  active: boolean;
  to: string;
  handleClick: (value: number) => void;
  value: number;
}

const Item = ({ title, icon, active, to, handleClick, value }: ItemProps) => {
  return (
    <Link to={to}>
      <div
        className={`flex gap-x-3 px-[20px] py-[10px] items-center rounded-[10px] hover:bg-[#F5F5F7] ${
          active ? "bg-[#F5F5F7]" : ""
        }`}
        onClick={() => handleClick(value)}
      >
        {icon}
        <p
          className={`text-sm font-semibold ${
            active ? "text-secondary-500" : "text-secondary-300"
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Item;
