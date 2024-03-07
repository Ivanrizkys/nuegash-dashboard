import { useState } from "react";
import { CheckboxContainer } from "./custom";

interface CheckboxProps {
  name: string;
  onChange: any;
  value: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { name, onChange, value } = props;

  const [active, setActive] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name);
  };

  return (
    <CheckboxContainer active={value === name}>
      {name}
      <input type="radio" name="radio" onChange={handleChange} />
    </CheckboxContainer>
  );
};

export default Checkbox;
