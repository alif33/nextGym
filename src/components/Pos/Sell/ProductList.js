import React, { useEffect, useState } from 'react';
import { Plus, Minus } from "react-feather";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../../../store/cart/actions';
import { firstNWord } from '../../../../__lib__/helpers/Validator';

const ProductList = ({ cart }) => {
    const { name, price } = cart.data;
    const [quantity, setQuantity] = useState(cart.qty);

    const dispatch = useDispatch()
    const { carts } = useSelector(state => state)

    const newarry = carts.cartList.map(obj => {
        if (obj._p === cart._p) {
            return { ...obj, qty: quantity };
        }

        return obj;
    });
    console.log(newarry)
    return (
        <>
            <tr>
                <td>{firstNWord(name, 2)}</td>
                <td>${price}</td>
                <td className='d-flex align-items-center justify-content-between'>

                    <span
                        onClick={() => setQuantity(quantity + 1)}
                        className='btn  bg-primary text-white p-25 rounded m-25'>
                        <Plus size={12} />
                    </span>
                    <span
                        className='btn btn-outline-primary  p-25 rounded m-25'>
                        {quantity}
                    </span>
                    <span onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
                        className='btn bg-primary text-white p-25 rounded m-25'>
                        <Minus size={12} />
                    </span>

                </td>
                <td>${quantity * price}</td>
            </tr>
        </>
    );
};

export default ProductList;