import styled from "styled-components";

export const ToogleContainer = styled.div`
  display: flex;
  justify-items: center;
  column-gap: 20px;

  input:checked ~ label div.toogle-circle {
    transform: translateX(25px);
    background: #546fff;
  }
`;
