import React from 'react';
import { firstNWord } from '../../../__lib__/helpers/Validator';

const ProductCard = ({product}) => {
    const {image, name} = product
    return (
        <div className='col col-md-6 col-lg-4 '>
            <div className="card border-1" style={{height: '270px'}}>
                <img src={image}
                    alt="Card image cap " height={130} width={150} className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{firstNWord(name, 20)}</h4>
                    <p className="card-text"></p>
                    <button type="button" className="btn btn-outline-primary"> Add </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;