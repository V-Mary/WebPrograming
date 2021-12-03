import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;

  .active {
    background-color: #A04000 ;
  }

` ;

export const NavLinkStyled  = styled(NavLink)`
  display: inline-block;
  padding: 5px 5px 10px 5px;
  position: relative;
  font-weight: bold;
  margin: 10px 30px;
  font-size: 1.5rem;
  border: 1px solid inherit;
  border-radius: 25px;
  cursor: pointer;
  min-width: 8em;
  color: black;
  
  :hover {
    background-color: #A04000 ;
    color: black;
  }
  
`;
