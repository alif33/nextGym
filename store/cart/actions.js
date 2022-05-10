import { cartSlice } from "./slice";
const { actions: slice } = cartSlice;

export const setCart = (_p, data, qty) => (dispatch) => {
    dispatch(slice.setCart({ _p, data, qty }))
}
export const increaseCart = index => (dispatch) => {
    console.log("action", index)
    dispatch(slice.increaseCart(index))
}
// export const decreaseCart = index => (dispatch) => {
//     console.log("action", index)
//     dispatch(slice.decreaseCart(index))
// }
