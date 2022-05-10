import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
    
        setCart: (state, action) => {
            state.cartList.push(action.payload);
        },

        setCart: (state, action) => {
            const { index, qty } = action.payload;
            state.cartList[index].qty = qty;
        }
    }
})