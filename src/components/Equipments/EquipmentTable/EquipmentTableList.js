import React, { useEffect, useState } from "react";
import { getData } from '../../../../__lib__/helpers/HttpService';
import EquipmentTable from "./EquipmentTable";

const EquipmentTableList = () => {
  const [equipments, setEquipments] = useState([])
useEffect(()=>{
  getData('/admin/equipments')
  .then(data => {
    setEquipments(data)
  })
},[])

  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Equipment Lists</h4>
          </div>
         
          <div className="table-responsive" style={equipments?.length < 5 ? {height: '300px'}: {}}>
            <table className="table">
              <thead>
                <tr>
                  <th>photo</th>
                  <th>Name</th>
                  <th>Actions</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
               {equipments?.map((data, i) => <EquipmentTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentTableList;
