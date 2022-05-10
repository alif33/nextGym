import React, { useEffect, useState } from "react";
import { getData } from "../../../__lib__/helpers/HttpService";
import ProductTable from "./ProductTable";
import GridLoader from "react-spinners/GridLoader";
const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData('/admin/products')
      .then(data => {
        setProducts(data)
      })
  }, [])


  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>

          {
            products?.length > 0 ?
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Company</th>
                      <th>Actions</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((data, i) => <ProductTable key={i} data={data} />)}
                  </tbody>
                </table>
              </div>
              :
              <div className="p-4">
                <div className="d-flex justify-content-center align-items-center">
                  <GridLoader color={color} loading={loading} size={8} />
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductList;
