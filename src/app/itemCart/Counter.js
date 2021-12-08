import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItem, removeItem, clearCart} from "./itemSlice";

export const Counter = () => {
    const count = useSelector((state) => state.itemInCart.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <span>{count}</span>
                <button aria-label="Increment value"
                        onClick={() => dispatch(addItem())}>
                    Add item
                </button>
                <button aria-label="Decrement value"
                        onClick={() => dispatch(removeItem())}>
                    Remove item
                </button>
                <button aria-label="Reset value"
                        onClick={() => dispatch(clearCart())}>
                    Clear
                </button>
            </div>
        </div>
    )
}