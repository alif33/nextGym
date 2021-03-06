import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import SingleMember from "../../../../src/components/SingleMember/SingleMember";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";
import AdminLayout from "./../../../../src/components/AdminLayout/AdminLayout";

const MemberId = ({ memberId }) => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Member</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/admin/dashboard">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Members</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link href="/admin/member/list">
                      <a>Member lists</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">{memberId}</li>
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
        <SingleMember memberId={memberId} />
      </div>
    </AdminLayout>
  );
};

export default MemberId;

export const getServerSideProps = adminAuth((context) => {
  const { memberId } = context.params;
  return {
    props: {
      memberId,
    },
  };
});
