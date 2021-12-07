import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getItem} from "../../../Api";
import {ItemPageStyled} from "./ItemPage.styled";
import {Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {IconStyled} from "../../../components/Icon/IconStyled";

import {addItem} from "../../../app/itemCart/itemSlice";
import {useDispatch} from "react-redux";

export const ItemPage = () => {
    const {itemId} =  useParams();
    const [item, setItem] = useState();

    const dispatch = useDispatch();

    useEffect( () => {
        getItem(itemId)
            .then(receivedItem => {
                setItem(receivedItem);
            })
    }, [itemId] );

    if (item === undefined) {
        return  <h1> Not Found </h1>
    }


    return (
        <ItemPageStyled>
            <div className="description">
                <Button onClick={() => {dispatch(addItem(item))}}> To Cart <IconStyled component={ShoppingCartOutlined}/> </Button>
                <ul>
                    <li>Name: {item.name} </li>
                    <li>Price: {item.price} </li>
                    <li>Power: {item.power} </li>
                </ul>
            </div>
        </ItemPageStyled>
    );
}