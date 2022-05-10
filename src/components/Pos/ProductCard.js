import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../../store/cart/actions';
import { firstNWord, isExistCart } from '../../../__lib__/helpers/Validator';
import _ from 'lodash';

const ProductCard = ({ product }) => {
    const { _id, image, name, price, quantity } = product;

    const { carts } = useSelector(state => state)
    const dispatch = useDispatch()
   
    useEffect(() => {

    }, [])


    const handleAddProduct = id => {
        if(carts.cartList.length===0){
            dispatch(setCart(_id, product, 1))
        }else{

            if(_.find(carts.cartList, pro=> pro._p === id)){
                alert("Exists");
            }else{
                dispatch(setCart(_id, product, 1))
            }
        }
    }
    console.log(carts.cartList);
    return (
        <div className='col col-md-6 col-lg-4 '>
            <div className="card border-1" style={{ height: '270px' }}>
                <img src={image}
                    alt="Card image cap " height={120} className="" />
                <div className="card-body">
                    <h5 className="card-title">{firstNWord(name, 2)}</h5>
                    <p>Quantity: {quantity}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button
                            onClick={(e) => handleAddProduct(_id)}
                            type="button" className="btn btn-outline-primary p-50" > Add </button>
                        <button className="btn btn-primary  p-50">${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;