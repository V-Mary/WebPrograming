import React, {useEffect, useState} from 'react';
import {getItemList} from "../../Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getItemCards} from "../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";

export const
    CardStorage = ({itemNum, itemIncrement= 1, style, filters}) => {
        const [itemListSize, setItemListSize] = useState(itemNum ? itemNum: 0);
        const [itemList, setItemList] = useState([]);
        useEffect (() => {
            getItemList()
                .then(
                    receivedItemList => {
                        if (filters) {
                            receivedItemList = receivedItemList.filter( (item) =>
                                {
                                    const isProperName = item.name.toLowerCase().search(filters.name) !== -1;
                                    let isProperPrice;
                                    if (filters.price) {
                                        isProperPrice = item.price === filters.price;
                                    }
                                    else {
                                        isProperPrice = true;
                                    }
                                    return (isProperName && isProperPrice);
                                }
                            )
                        }
                        if (itemListSize >= receivedItemList.length) {
                            setItemListSize(0);
                        }
                        if (itemListSize === 0) {
                            setItemList(receivedItemList)
                        }
                        else setItemList(receivedItemList.slice(0, itemListSize))
                    }
                )
                .catch( () =>  {
                    console.log("Error occurred during loading data from server");
                })
        }, [itemListSize, filters]);
        return (
            <div style={style}>
                <CardStorageStyled>
                    {
                        (itemList.length !== 0) ?
                            getItemCards(itemList) : <h2>Nothing found</h2>
                    }
                </CardStorageStyled>
                {
                    !(itemListSize === 0 || itemListSize > itemList.length) &&
                    <Button onClick={() => setItemListSize(itemListSize+itemIncrement)}>Show more...</Button>
                }
            </div>
        );
    }