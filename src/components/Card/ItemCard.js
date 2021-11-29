import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";
import { Footer } from "./ItemCardStyled";

const { Meta } = Card;

export const ItemCard = ({ name, price,imageSrc, power }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
        }
    >
        <Footer>
            <p>{name}</p>
            <p>{price}</p>
            <p>{power}</p>
        </Footer>
    </Card>
);