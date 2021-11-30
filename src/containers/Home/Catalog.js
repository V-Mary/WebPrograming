import React from "react";
import {CatalogStyled} from "./CatalogStyled";
import {CardStorage} from "../../components/Card/CardStorage";
import {getItemCards} from "./CatalogDom";
import {ActionPanel} from "../../components/ActionPannel/ActionPanel";

const items = [
    {name: "Bly", price: 200, power: 300 },
    {name: "Super", price: 200, power: 600 },
    {name: "BlackBB", price: 230, power: 300 },
    {name: "Kact", price: 230, power: 230 },
    {name: "Super", price: 230, power: 200 },
    {name: "Bly", price: 200, power: 300 },
    {name: "BlackBB", price: 600, power: 390 },
    {name: "BlackBB", price: 600, power: 390 }
]

export const Catalog = () => (
    <CatalogStyled>
        <ActionPanel />
        <CardStorage id="catalog">
            {
                getItemCards(items)
            }
        </CardStorage>
    </CatalogStyled>
)