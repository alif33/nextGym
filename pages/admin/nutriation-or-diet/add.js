import React from "react";
import { Toaster } from "react-hot-toast";
import AddPlan from "../../../src/components/AddPlan/AddPlan";
import AdminLayout from "./../../../src/components/AdminLayout/AdminLayout";

const add = () => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Nutriation/Diet</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Nutriation/Diet</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Plan</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right d-none"></div>
        </div>
      </div>
      <div className="content-body">
        <AddPlan/>
          
      </div>
    </AdminLayout>
  );
};

export default add;
