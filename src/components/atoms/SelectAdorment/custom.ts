import styled from "styled-components";

export const OptionsContainer = styled.div<{ active: boolean }>`
  top: 55px;
  width: 100%;
  position: absolute;
  z-index: 20;
  background: #FFFFFF;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;

  opacity: ${(props) => props.active ? "1" : "0"};

  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
`