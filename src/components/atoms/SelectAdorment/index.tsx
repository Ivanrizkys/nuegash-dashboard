import { OptionsContainer } from "./custom";
import { forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import closeClickOutside, { CloseClickOutsideProps } from "@/src/components/hoc/closeClickOutside";

interface OptionProps {
  value: string;
  children: ReactNode;
}

interface SelectAdormentProps extends CloseClickOutsideProps {
  placeholder?: string;
  defaultText: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectAdorment = forwardRef<any, SelectAdormentProps>(
  (
    { placeholder, defaultText, icon, children, setValue, open, setOpen },
    ref
  ) => {
    const [title, setTitle] = useState<string>("");

    const optionEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (e: Event) => {
        const unknownEvent = e as unknown;
        const event = unknownEvent as React.MouseEvent<
          HTMLDivElement,
          MouseEvent
        >;
        const eventTarget = event.target as HTMLDivElement;
        setValue(eventTarget.getAttribute("data-value") ?? "");
        setTitle(eventTarget.innerText);
      };
      const selectItems = optionEl.current?.childNodes;
      if (selectItems) {
        selectItems.forEach((item) => {
          item.addEventListener("click", handleClick);
        });
      }

      return () => {
        if (selectItems) {
          selectItems.forEach((item) => {
            item.removeEventListener("click", handleClick);
          });
        }
      };
    }, []);

    return (
      <div className="flex flex-col text-secondary-500 text-xs font-medium relative">
        <button
          ref={ref}
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between gap-x-[12px] px-7 py-[14px] rounded-default border-[1px] border-solid cursor-pointer border-[#F5F5F7]"
        >
          {icon}
          <p className="text-xs font-semibold text-secondary-500">
            {placeholder ? `${placeholder} ` : ""}
            {title ? title : defaultText}
          </p>
        </button>
        <OptionsContainer
          ref={optionEl}
          active={open}
          className="absolute top-[55px]"
        >
          {children}
        </OptionsContainer>
      </div>
    );
  }
);

export const Option = ({ value, children }: OptionProps) => {
  return (
    <div
      data-value={value}
      className="text-xs text-secondary-500 py-2 px-[10px] hover:bg-[#F5F5F7] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default closeClickOutside<SelectAdormentProps>(SelectAdorment);
