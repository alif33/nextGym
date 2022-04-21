import React, { useEffect, useState } from "react";
import { getData } from "../../../__lib__/helpers/HttpService";
import ProductDesc from "./ProductDesc";

const Product = ({ id }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData(`/admin/product/${id}`).then((data) => setProduct(data));
  }, [id]);

  return (
    <section className="app-ecommerce-details">
      <div className="card">
        <div className="card-body">
          <div className="row my-2">
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={product.image}
                  className="img-fluid product-img"
                  alt="product image"
                />
              </div>
            </div>
            <ProductDesc detail={product}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
