import React, { useEffect, useState } from 'react';
import { Plus, Minus, X, Trash, Trash2 } from "react-feather";
import { useDispatch, useSelector } from 'react-redux';
import { increaseCart, decreaseCart, removeCart } from '../../../../store/cart/actions';
import { firstNWord } from '../../../../__lib__/helpers/Validator';
import NumberFormat from 'react-number-format';

const ProductList = ({ cart, index }) => {
    const { name, price } = cart.data;
    const dispatch = useDispatch()
    const { carts } = useSelector(state => state)

    const handleRemove = i => {
        const newCart = carts.cartList.filter(pd => pd._p !== i)
        dispatch(removeCart(newCart))
    }
    return (
        <>
            <tr>
                <td>{firstNWord(name, 2)}</td>
                <td>
                    <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </td>
                <td className='d-flex align-items-center justify-content-between'>

                    <span
                        onClick={() => dispatch(increaseCart(index))}
                        className='btn  bg-primary text-white p-25 rounded m-25'>
                        <Plus size={12} />
                    </span>
                    <span
                        className='btn btn-outline-primary  p-25 rounded m-25'>
                        {cart.qty}
                    </span>
                    <span onClick={() => cart.qty > 1 && dispatch(decreaseCart(index))}
                        className='btn bg-primary text-white p-25 rounded m-25'>
                        <Minus size={12} />
                    </span>

                </td>

                <td className='p-50'>
                    <span className='d-flex justify-content-evenly aling-items-center'>
                        <NumberFormat value={cart.subTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        <span className='ms-25'>
                            <Trash2 className='btn p-25'
                                onClick={() => handleRemove(cart._p)}
                                size={25} />
                        </span>
                    </span>
                </td>
            </tr>
        </>
    );
};

export default ProductList;