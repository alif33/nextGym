import React, { useState } from 'react';
import { Plus, Minus } from "react-feather";
const ProductList = () => {
    const [quantity, setQuantity] = useState(0)
    return (
        <>
            <tr>
                <td>hello</td>
                <td>hello</td>
                <td>
                    <div className="d-flex align-items-center justify-content-between">
                        <span onClick={() => setQuantity(quantity + 1)} className='btn  bg-primary text-white p-25 rounded'> <Plus /></span>
                        <span className=''>{quantity}</span>
                        <span onClick={() => setQuantity( quantity > 1 ? quantity - 1 : quantity)} className='btn bg-primary text-white p-25 rounded'> <Minus /></span>
                    </div>
                </td>
                <td>hello</td>
            </tr>
        </>
    );
};

export default ProductList;