import styled from 'styled-components';

interface DropzoneProps {
  isFocused: boolean
  isDragReject: boolean
  isDragAccept: boolean
  isError: boolean
}

const getBorderColor = (props: DropzoneProps) => {
  if (props.isFocused) return "#98ABFF"
  if (props.isDragAccept) return "#98ABFF"
  if (props.isDragReject) return "#FF4423"
  if (props.isError) return "#FF4423"
  return "#546FFF"
}

export const DropzoneContainer =  styled.div<DropzoneProps>`
  width: 100%;
  height: 160px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 10px;
  border-color: ${props => getBorderColor(props)};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`