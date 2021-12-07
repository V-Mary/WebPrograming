import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getItem} from "../../../Api";
import {ItemPageStyled} from "./ItemPage.styled";


export const ItemPage = () => {
    const {itemId} =  useParams();
    const [item, setItem] = useState();

    useEffect( () => {
        getItem(itemId)
            .then(receivedItem => {
                setItem(receivedItem);
            })
    }, [itemId] );

    if (item === undefined) {
        return <h1> Not Found </h1>
    }


    return (
        <ItemPageStyled>
            <div className="description">
                <h1>{item.name}</h1>
                <ul>
                    <li>Price: {item.price} </li>
                    <li>Power: {item.power} </li>
                </ul>
            </div>
        </ItemPageStyled>
    );
}