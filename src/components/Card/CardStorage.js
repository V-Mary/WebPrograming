import React, {useEffect, useState} from 'react';
import {getItemList} from "../../Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getItemCards} from "../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";
import {Loader} from "../Loader/Loader";

export const
    CardStorage = ({itemNum, itemIncrement= 1, style, filters}) => {
        const [itemListSize, setItemListSize] = useState(itemNum ? itemNum: 0);
        const [itemList, setItemList] = useState([]);
        const [isLoaded, setIsLoaded] = useState(false);
        const [filter, setFilter] = useState({});
        useEffect (() => {
            setFilter(filters ? filters : {})
        }, [filters]);

        console.log(filter.name)

        useEffect (() => {
            getItemList(filter.name)
                .then(
                    receivedItemList => {
                        if (itemListSize === 0) {
                            setItemList(receivedItemList)
                        }
                        else setItemList(receivedItemList.slice(0, itemListSize))
                        setIsLoaded(true)

                    }
                )
                .catch( () =>  {
                    console.log("Error occurred during loading data from server");
                })
        }, [itemListSize, filter]);
        return (
            <div style={style}>
                <CardStorageStyled>
                    {
                        (itemList.length !== 0) ?
                            getItemCards(itemList) :
                            isLoaded ? <h2>Nothing found</h2> : <Loader />
                    }
                </CardStorageStyled>
                {
                    !(itemListSize === 0 || itemListSize > itemList.length) &&
                    <Button onClick={() => setItemListSize(itemListSize+itemIncrement)}>Show more...</Button>
                }
            </div>
        );
    }