import React from 'react';
import { firstNWord } from '../../../__lib__/helpers/Validator';

const ProductCard = ({ product }) => {
    const { image, name, price, quantity } = product
    const handleAddProduct = (e)=> {
        console.log(e)
    }
    return (
        <div className='col col-md-6 col-lg-4 '>
            <div className="card border-1" style={{ height: '270px' }}>
                <img src={image}
                    alt="Card image cap " height={120}  className="" />
                <div className="card-body">
                    <h5 className="card-title">{firstNWord(name, 2)}</h5>
                    <p>Quantity: {quantity}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button
                            onClick={(e) => handleAddProduct(product)}
                            type="button" className="btn btn-outline-primary p-50" > Add </button>
                        <button className="btn btn-primary  p-50">${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;