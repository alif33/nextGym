import React, { useEffect, useState } from 'react';
import { getData } from '../../../__lib__/helpers/HttpService';
import ProductCard from './ProductCard';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";



const Products = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#27d37f");
    const [products, setProducts] = useState()

    useEffect(() => {
        getData('/admin/products')
            .then(res => setProducts(res))
    }, [])
    console.log(products)
    return (
        <div className='row'>
            {
                products?.length ? products?.map((product, i) => <ProductCard product={product} />)
                    : <div className='text-center'>
                        <BounceLoader color={color} loading={loading} size={50} />
                    </div>
            }

        </div>
    );
};

export default Products;