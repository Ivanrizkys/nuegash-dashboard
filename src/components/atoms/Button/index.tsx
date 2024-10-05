import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  buttonFull?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { children, type, buttonFull, onClick } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primary-500 rounded-default py-3 px-[60px] hover:bg-primary-600 active:bg-primary-700 text-primary-0 font-semibold text-sm ${buttonFull ? "w-full" : "w-auto"}`}
    >
      {children}
    </button>
  );
};

export default Button;
