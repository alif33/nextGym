import React from "react";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import ExerciseList from "../../../../src/components/Exercise/ExerciseItems/ExerciseList";
import ProductList from "../../../../src/components/ProductList/ProductList";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const list = () => {
  return (
    <AdminLayout>
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Exercises</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Exercises</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Exercise lists</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right d-none">

          </div>
        </div>
      </div>
      <div className="content-body">
        <ExerciseList/>
      </div>
    </AdminLayout>
  );
};

export default list;

export const getServerSideProps = adminAuth(context => {
  return {
      props: {}
  }
})