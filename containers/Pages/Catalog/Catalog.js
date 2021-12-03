import React, {useEffect, useState} from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanelStyled";
import {FilterInput} from "../../../components/ActionPannel/FilterInput";

export const Catalog = () => {
    const [filterName, setFilterName] = useState("");
    const [filterPrice, setFilterPrice] = useState(undefined);
    const [filterPower, setFilterPower] = useState(undefined);
    const [filters, setFilters] = useState(undefined);

    useEffect(() => {
        setFilters({
            name: filterName,
            price: filterPrice,
            power: filterPower
        })
    }, [filterName, filterPrice, filterPower])

    return (
        <PageStyled>
            <ActionPanelStyled>
                <FilterInput id="name" placeholder="Enter name..."
                             onSearch={(value) => setFilterName(value)}/>
                <FilterInput id="price" placeholder="Enter price..."
                             onSearch={(value) => setFilterPrice(Number(value))}/>
                <FilterInput id="power" placeholder="Enter power..."
                             onSearch={(value) => setFilterPower(Number(value))}/>
            </ActionPanelStyled>
            <CardStorage filters={filters} style={{}}/>
        </PageStyled>
    )
}