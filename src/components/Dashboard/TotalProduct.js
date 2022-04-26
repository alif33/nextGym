import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';

const TotalProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData('/admin/products').then(data=> setProducts(data))
    }, [])
  return (
    <>
      <div className="col-lg-6 col-md-3 col-6">
        <div className="card">
          <div className="card-body pb-50">
            <h6>Products</h6>
            <h2 className="fw-bolder mb-1">{products?.length}</h2>
            <div id="statistics-order-chart"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProduct;
