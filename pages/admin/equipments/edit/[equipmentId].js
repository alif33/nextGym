import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";
import EquipmentUpdateField from './../../../../src/components/Equipments/EquipmentUpdateField/EquipmentUpdateField';

const EquipmentUpdate = ({ equipmentId }) => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Equipments</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Equipments</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Edit Equipment</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <EquipmentUpdateField equipmentId={equipmentId} />
      </div>
    </AdminLayout>
  );
};

export default EquipmentUpdate;

export const getServerSideProps = adminAuth((context) => {
  const { equipmentId } = context.params;
  return {
    props: { equipmentId },
  };
});
