import React from "react"

interface InputProps {
  placeholder: string
  type?: React.HTMLInputTypeAttribute
  inputAdorment?: React.ReactNode
  adormentPosition?: "start" | "end"
}

const Input = (props: InputProps) => {
  const { placeholder, type, inputAdorment, adormentPosition } = props
  return (
    <div className={`w-full inline-flex items-center gap-x-7 border-solid border-[1px] border-[#F5F5F7] rounded-default ${adormentPosition === "start" ? "flex-row" : "flex-row-reverse"} py-[14px] px-7`}>
      <div className="flex items-center justify-center">
        {inputAdorment}
      </div>
      <input type="text" placeholder={placeholder} className="focus:outline-none w-full text-xs text-secondary-400" />
    </div>
  )
}

export default Input