import styled from "styled-components";

export const CheckboxContainer = styled.label<{ active: boolean }>`
  font-size: 12px;
  font-weight: 500;

  width: 100%;
  max-width: 184px;
  padding: 16px 20px;
  border: ${(props) =>
    props.active ? "1px solid #546FFF" : "1px solid #F5F5F7"};
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;

  transition-property: all;
  transition-duration: 100ms;

  input[type="radio"] {
    appearance: none;
    background-color: #ffffff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 20px;
    height: 20px;
    border: 2px solid #f5f5f7;
    border-radius: 50%;

    transition-property: all;
    transition-duration: 100ms;
  }

  input[type="radio"]:checked {
    border: 4px solid #546fff;
  }
`;
