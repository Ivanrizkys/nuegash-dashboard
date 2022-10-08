import { useId } from "react"
import { ToogleContainer } from "./custom"

interface ToogleProps {
  // id: string
  label: string
}

const Toogle = (props: ToogleProps) => {
  const { label } = props
  
  const id = useId()
  
  return (
    <ToogleContainer>
      <input type="checkbox" id={id} className="hidden" />
      <label htmlFor={id}>
        <div className="w-[55px] h-[30px] rounded-[100px] border-solid border-[1px] border-[#F5F5F7] bg-primary-0 flex items-center cursor-pointer p-[5px] transition-all duration-500 toogle-wraper">
          <div className="w-5 h-5 bg-[#F5F5F7] rounded-[100px] transition-all duration-500 toogle-circle"></div>
        </div>
      </label>
      <span className="text-sm font-semibold text-secondary-500">{label}</span>
    </ToogleContainer>
  )
}

export default Toogle