import React from "react";
import {ItemCard} from "../../../components/Card/ItemCard";

export const createItemCard = (item) => {

    return (
        <ItemCard  key={item.id}
                  name = {item.name}
                  price={item.price}
                  power={item.power}
                   id={item.id}
        />
    )
}

export const getItemCards = (itemList) => {
    return itemList.map(createItemCard);
}