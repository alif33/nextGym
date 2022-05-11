import React, { useEffect, useState } from 'react';
import { Plus, Minus, X } from "react-feather";
import { useDispatch, useSelector } from 'react-redux';
import { increaseCart, setCart, decreaseCart } from '../../../../store/cart/actions';
import { firstNWord } from '../../../../__lib__/helpers/Validator';
import NumberFormat from 'react-number-format';

const ProductList = ({ cart, index }) => {
    const { name, price } = cart.data;
    const dispatch = useDispatch()


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

                <td className=''>
                    <NumberFormat value={cart.subTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                   <span className='ms-25'>
                        <X className='btn p-25' onClick={() => console.log('click hocche')} color='red' size={30}/>
                        </span>
                </td>
            </tr>
        </>
    );
};

export default ProductList;