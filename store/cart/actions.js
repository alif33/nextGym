import { cartSlice } from "./slice";
const { actions: slice } = cartSlice;

export const setCart = (_p, data, qty) => (dispatch) => {
    console.log("action", _p)
    dispatch(slice.setCart({ _p, data, qty }))
}
