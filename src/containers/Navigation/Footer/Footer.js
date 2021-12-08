import React from "react";
import {FooterStyled} from "./FooterStyled";
import {InstagramOutlined, FacebookFilled, TwitterCircleFilled} from "@ant-design/icons";
import {IconStyled} from "../../../components/Icon/IconStyled";

export const Footer = () => (
    <FooterStyled>
            <IconStyled component = {InstagramOutlined} color='#F6DDCC'/>
            <IconStyled component = {FacebookFilled} color='#F6DDCC'/>
            <IconStyled component = {TwitterCircleFilled} color='#F6DDCC'/>
    </FooterStyled>
);