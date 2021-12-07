import React from "react";
import 'antd/dist/antd.css';
import {Card, Button} from "antd";
import { Footer } from "./ItemCardStyled";
import {NavLink} from "react-router-dom";
import model1 from "../../components/Icon/model1.jpg"


export const ItemCard = ({ name, price, imageSrc, power, id }) => (
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
            <NavLink to={`/catalog/item/${id}`}>
                <Button>
                    View more...
                </Button>
            </NavLink>
        </Footer>
    </Card>
);