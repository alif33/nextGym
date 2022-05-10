import React from 'react';
import ProductList from './ProductList';

const SelectedProduct = () => {
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
                       <ProductList/>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SelectedProduct;