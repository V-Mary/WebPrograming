import {createSlice} from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: "item",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, payloadItem) => {
            state.value.push(payloadItem.payload)
        },
        removeItem: (state, payloadId) => {
            state.value = state.value.filter((item) => item.id !== payloadId.payload)
        },
        clearCart: state => {
            state.value = []
        }
    }
})

export const {addItem, removeItem, clearCart} = itemSlice.actions;

export default itemSlice.reducer;