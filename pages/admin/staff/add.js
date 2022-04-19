import { Link } from 'next/link';
import React from "react";
import { Toaster } from "react-hot-toast";
import AddStaff from "../../../src/components/AddStaff/AddStaff";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const Add = () => {
  return (
    <AdminLayout>
        <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Staff Members</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                  <Link href="/admin/dashboard">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Staff Members</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Staff</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}
        {/* layout icon */}
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right d-none">
            
          </div>
        </div>
        {/* / layout icon */}
      </div>
      <div className="content-body">
        {/* <MemberAdd/> */}
        <AddStaff/>
      </div>
    </AdminLayout>
  );
};

export default Add;


export const getServerSideProps = adminAuth(context => {
  return {
      props: {}
  }
})