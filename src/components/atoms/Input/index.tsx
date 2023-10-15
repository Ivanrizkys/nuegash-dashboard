import React, { forwardRef } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  inputAdorment?: React.ReactNode;
  adormentPosition?: "start" | "end";
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    placeholder,
    type,
    inputAdorment,
    adormentPosition,
    error,
    ...resProps
  } = props;
  return (
    <div
      className={`w-full inline-flex items-center gap-x-7 border-solid border-[1px] rounded-default transition-colors duration-500 ${
        error ? "border-error-500" : "border-[#F5F5F7]"
      } ${
        adormentPosition === "start" ? "flex-row" : "flex-row-reverse"
      } py-[14px] px-7`}
    >
      <div className="flex items-center justify-center">{inputAdorment}</div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...resProps}
        className="focus:outline-none w-full text-xs text-secondary-400"
      />
    </div>
  );
});

export default Input;
