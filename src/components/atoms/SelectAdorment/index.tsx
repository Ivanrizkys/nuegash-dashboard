import {
  Content,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  forwardRef,
  ElementRef,
} from "react";

export interface SelectItem {
  value: string;
  title: string;
}

interface SelectAdormentProps {
  items: SelectItem[];
  value: string;
  icon: ReactNode;
  placeholder?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SelectAdorment = forwardRef<ElementRef<"button">, SelectAdormentProps>(
  ({ items, value, icon, placeholder, setValue }, ref) => {
    return (
      <Root value={value} onValueChange={setValue}>
        <Trigger
          ref={ref}
          className="flex items-center gap-[12px] rounded-default px-7 py-[14px] border border-solid border-[#F5F5F7] outline-none"
        >
          {icon}
          <Value aria-label={value}>
            <span className="text-xs font-semibold text-secondary-500">
              {placeholder ? `${placeholder} ` : ""}
              {items.find((item) => item.value === value)?.title}
            </span>
          </Value>
        </Trigger>
        <Portal>
          <Content
            position="popper"
            className="w-radix-select-width bg-primary-0 rounded-default z-10 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            <Viewport>
              {items.map((item) => (
                <Item
                  key={item.value}
                  value={item.value}
                  className="text-xs text-secondary-500 font-semibold py-2 px-[10px] hover:bg-[#F5F5F7] cursor-pointer outline-none"
                >
                  <ItemText>{item.title}</ItemText>
                </Item>
              ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    );
  },
);

export default SelectAdorment;
