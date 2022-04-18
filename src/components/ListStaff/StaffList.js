import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';
import StaffTable from "./StaffTable";
const StaffList = () => {

  const [staffs, setStaffs] = useState([])
  useEffect(()=> {
    getData('/admin/staffs')
    .then(data=> setStaffs(data))
  },[])
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>
         
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
               {staffs.map((data, i) => <StaffTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffList;
