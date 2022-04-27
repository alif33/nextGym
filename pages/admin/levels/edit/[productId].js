import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import ProductEdit from "../../../../src/components/ProductEdit/ProductEdit";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const Edit = ({ productId }) => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
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
        <ProductEdit productId={productId} />
      </div>
    </AdminLayout>
  );
};

export default Edit;

export const getServerSideProps = adminAuth((context) => {
  const { productId } = context.params;
  return {
    props: { productId },
  };
});
