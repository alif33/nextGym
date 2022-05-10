import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';

const SelectedProduct = () => {

    const dispatch = useDispatch()
    const {carts} = useSelector(state => state)
    const {cartList} = carts;

    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    {cartList?.map((cart, i) => <ProductList cart={cart} key={i}/>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SelectedProduct;