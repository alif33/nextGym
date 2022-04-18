import React from "react";
import { productData } from "./ProductData";
import ProductTable from "./ProductTable";

const ProductList = () => {
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>
         
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Start Date</th>
                  <th>Expired Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
               {productData.map((data, i) => <ProductTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
