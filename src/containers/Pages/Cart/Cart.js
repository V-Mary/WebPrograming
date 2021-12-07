import React from "react";
import {PageStyled} from "../Page.styled";
import {useSelector, useDispatch} from "react-redux";
import {removeItem, clearCart} from "../../../app/itemCart/itemSlice";
import {getItemCards} from "../Catalog/CatalogDom.js";
import {DeleteButtonStyled} from "../../../components/Buttons/DeleteButton.styled";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanelStyled";

export const Cart = () => {
    const itemList = useSelector((state) => state.itemInCart.value)
    const totalPrice = useSelector((state) =>
        state.itemInCart.value.reduce((total, item) => (total + item.price), 0)
    )
    const dispatch = useDispatch();

    if (itemList.length === 0) {
        return (<h1>Cart is empty</h1>)
    }

    return (
        <PageStyled style={{height:"100%"}}>
            <ActionPanelStyled>
                <h2>Total price: {totalPrice}</h2>
                <DeleteButtonStyled onClick={() => {dispatch(clearCart())}}>
                    Clear cart
                </DeleteButtonStyled>
            </ActionPanelStyled>
            <div style={{display:"flex", flexDirection:"row"}}>
                {

                    getItemCards(itemList, (item) =>
                        (<DeleteButtonStyled onClick={() => {dispatch(removeItem(item.id))}}>
                            Remove
                        </DeleteButtonStyled>)
                    )
                }
            </div>
        </PageStyled>
    )
}