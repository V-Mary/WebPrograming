import React from "react";
import {HeaderStyled, NavLinkStyled} from "./HeaderStyled";

export const Header = () => (
    <HeaderStyled>
        <NavLinkStyled to={'/'}>
            Home
        </NavLinkStyled>
        <NavLinkStyled to={'/catalog'}>
            Catalog
        </NavLinkStyled>
        <NavLinkStyled to={'/cart'}>
            Cart
        </NavLinkStyled>
    </HeaderStyled>
)