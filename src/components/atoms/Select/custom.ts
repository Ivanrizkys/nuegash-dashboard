import styled from "styled-components";

export const SelectItems = styled.div`
  option {
    padding: 17.5px 20px 17.5px 20px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      background: #f5f5f7;
    }
  }
`;

export const OptionsContainer = styled.div<{ active: boolean }>`
  order: 1;
  width: 100%;
  position: absolute;
  top: 59px;
  z-index: 10;
  overflow-y: auto;
  border-radius: 10px;
  background: #ffffff;
  max-height: ${(props) => (props.active ? "255px" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition-duration: 500ms;
  transition-property: max-height, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f5f5f7;
    border-radius: 10px;
  }
`;
