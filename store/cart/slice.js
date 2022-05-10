import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
    
        setCart: (state, action) => {
            state.cartList.push(action.payload);
        },

        increaseCart: (state, action) => {
            const { index, qty } = action.payload;
            ++ state.cartList[index].qty;
        },

        decreaseCart: (state, action) => {
            const { index, qty } = action.payload;
            -- state.cartList[index].qty;
        }
    }
})