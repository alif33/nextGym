import React from "react";
import AddProduct from "../../../src/components/AddProduct/AddProduct";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";

const add = () => {
  return (
    <AdminLayout>
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Product</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Product</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Product</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}

      </div>
      <div className="content-body">
          <AddProduct/>
      </div>
    </AdminLayout>
  );
};

export default add;
