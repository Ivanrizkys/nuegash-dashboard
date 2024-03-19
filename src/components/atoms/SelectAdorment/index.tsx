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
import { Dispatch, ReactNode, SetStateAction, forwardRef } from "react";

interface SelectItem {
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

const SelectAdorment = forwardRef<any, SelectAdormentProps>(
  ({ items, value, icon, placeholder, setValue }) => {
    return (
      <Root value={value} onValueChange={setValue}>
        <Trigger className="flex items-center gap-[12px] rounded-default px-7 py-[14px] border border-solid border-[#F5F5F7] outline-none">
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
            className="w-radix-select-width bg-primary-0 rounded-default z-10"
          >
            <Viewport>
              {items.map((item) => (
                <Item
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
