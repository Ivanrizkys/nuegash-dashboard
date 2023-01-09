import styled from "styled-components";

export const Progress = styled.input.attrs(() => ({
  type: "range",
}))`
  appearance: none;
  width: 70%;
  height: 8px;
  border-radius: 8px;
  background: #F5F5F7;
  background-image: linear-gradient(#141522, #141522);
  background-size: ${props => ((props.value as number) * 100) / (props.max as number)}% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    appearance: none;
    height: 8px;
    width: 8px;
    background: #141522;
    cursor: pointer;
    border: none;
    transition: width .2s, height .2s;
  }
  &::-moz-range-thumb {
    appearance: none;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 2px 0 #555;
    transition: width .2s, height .2s;
  }
  &::-ms-thumb {
    appearance: none;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 2px 0 #555;
    transition: width .2s, height .2s;
  }
  
  &::-webkit-slider-thumb:hover {
    height: 20px;
    width: 20px;
  }
  &::-moz-range-thumb:hover {
    height: 20px;
    width: 20px;
  }
  &::-ms-thumb:hover {
    height: 20px;
    width: 20px;
  }
`;
