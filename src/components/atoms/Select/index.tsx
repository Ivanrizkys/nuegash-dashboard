import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/src/assets/icons/ArrowDown";
import { SelectItems, OptionsContainer } from "./custom";

interface SelectProps {
  value: string;
  children: React.ReactNode
}

const Select = (props: SelectProps) => {
  const { value, children } = props;
  const [active, setActive] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("")

  const optionEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelected(value)
    const selectItems = optionEl.current?.childNodes
    if (selectItems) {
      selectItems.forEach(items => {
        items.addEventListener("click", () => {
          const value = items.textContent
          setSelected(value as string)
          setActive(false)
        })
      })
    }
  }, [])

  return (
    <div 
      className="w-full flex flex-col text-secondary-500 text-xs font-medium relative"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <OptionsContainer 
        active={active}
      >
        <SelectItems className="select-items-container" ref={optionEl}>
          {children}
        </SelectItems>
      </OptionsContainer>

      <div 
        className="bg-primary-0 rounded-default relative order-[0] px-5 py-[17.5px] border-[1px] border-solid border-[#F5F5F7] cursor-pointer flex justify-between"
      >
        <p>{selected} (Default)</p>
        <div
          className="transition-transform duration-500"
          style={{
            transform: active ? "rotate(180deg)" : "rotate(0)"
          }}
        >
          <ArrowDown variant="large" />
        </div>
      </div>
    </div>
  );
};

export default Select;
