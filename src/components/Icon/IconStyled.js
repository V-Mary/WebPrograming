import styled from "styled-components";
import Icon from "@ant-design/icons";

export const IconStyled = styled(Icon)`
  color: ${({color}) => color};
  font-size: 1.5em;
  margin: 0 20px;
  cursor: pointer;
`;