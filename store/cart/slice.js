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

        updateCart: (state, action) => {
            const { index, qty } = action.payload;
            state.cartList[index].qty = qty;
        }
    }
})