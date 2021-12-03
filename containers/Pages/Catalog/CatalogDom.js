import React from "react";
import {ItemCard} from "../../../components/Card/ItemCard";

export const createItemCard = (item) => {
    let image;
    return (
        <ItemCard image = {image}
                  name = {item.name}
                  price={item.price}
                  power={item.power}
        />
    )
}

export const getItemCards = (itemList) => {
    return itemList.map(createItemCard);
}