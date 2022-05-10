import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.cartList.push(action.payload)
        }
    }
})