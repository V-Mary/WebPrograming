import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";
import { Footer } from "./ItemCardStyled";
import model1 from "../../components/Icon/model1.jpg"

const { Meta } = Card;

export const ItemCard = ({ name, price, imageSrc, power }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "15px", margin: "5px"}}
        cover={
            <img style={{ borderRadius: "20px" }} alt="example" src={model1} />
        }
    >

        <Footer>
            <p>{name}</p>
            <p>{price} $</p>
            <p>{power} V</p>
        </Footer>
    </Card>
);