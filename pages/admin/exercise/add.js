import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";
import ExerciseAddField from "../../../src/components/Exercise/ExerciseAddField/ExerciseAddField";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const ExerciseAdd = () => {
  return (
    <AdminLayout>
       <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Exercise</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Exercise</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Exercise</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}

      </div>
      <div className="content-body">
          <ExerciseAddField />
      </div>
    </AdminLayout>
  );
};

export default ExerciseAdd;

export const getServerSideProps = adminAuth(context => {
  return {
      props: {}
  }
})