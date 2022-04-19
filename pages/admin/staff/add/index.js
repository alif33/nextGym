import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import StaffField from "../../../../src/components/StaffField/StaffField";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const AddToStaff = () => {
  

  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Members</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Members</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Member</a>
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
        {/* <MemberAdd/> */}
      <StaffField/>
      </div>
    </AdminLayout>
  );
};

export default AddToStaff;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
