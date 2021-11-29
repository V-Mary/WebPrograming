import styled from "styled-components";

export const HeaderStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    li {
      display: inline-block;
      position: relative;
      margin: 30px 30px;
      font-size: 1.5rem;
      border-radius: 20px;
      min-width: 30%;
  }

  li:hover {
    background-color: #A04000 ;
  }

  li.chosen {
    background-color: #873600 ;
  }
`;
