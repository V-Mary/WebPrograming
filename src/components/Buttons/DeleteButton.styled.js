import styled from "styled-components";
import {Button} from "antd";

export const DeleteButtonStyled = styled(Button)`
  background-color: orangered;
  color: white;
  border-color: white;
  width: 15em;
  max-width: 100%;

  :hover {
    background-color: #ff0000;
    color: #290047;
  }
`;