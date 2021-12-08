import React from "react";
import {ItemCard} from "../../../components/Card/ItemCard";

export const createItemCard = (item, addOns=undefined) => {

    return (
        <ItemCard  key={item.id}
                  name = {item.name}
                  price={item.price}
                  power={item.power}
                   id={item.id}
                   addOns={addOns}
        />
    )
}

export const getItemCards = (itemList, addOnCallback = () => undefined) => {
    return itemList.map((item) => createItemCard(item, addOnCallback(item)));
}