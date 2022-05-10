import React, { useEffect, useState } from 'react';
import { getData } from '../../../__lib__/helpers/HttpService';
import ProductCard from './ProductCard';
import BounceLoader from "react-spinners/BounceLoader";



const Products = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#27d37f");
    const [products, setProducts] = useState()

    useEffect(() => {
        getData('/admin/products')
            .then(res => setProducts(res))
    }, [])
    return (
        <div className='row'>
            {
                products?.length ? products?.map((product, i) => <ProductCard key={i} product={product} />)
                    : <div className='h-100'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <BounceLoader color={color} loading={loading} size={50} />
                        </div>
                    </div>
            }

        </div>
    );
};

export default Products;