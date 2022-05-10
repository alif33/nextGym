import React, { useState } from 'react';
import { Plus, Minus } from "react-feather";
const ProductList = () => {
    const [quantity, setQuantity] = useState(0)
    return (
        <>
            <tr>
                <td>hello</td>
                <td>hello</td>
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
                <td>hello</td>
            </tr>
        </>
    );
};

export default ProductList;