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
            console.log(action)
            const { index } = action.payload;
            ++ state.cartList[index].qty;
        },

        // decreaseCart: (state, action) => {
        //     const { index } = action.payload;
        //     -- state.cartList[index].qty;
        // }
    }
})