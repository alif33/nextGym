import React from "react";
import { staffData } from "./StaffData";
import StaffTable from "./StaffTable";
const StaffList = () => {
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
                  <th>Positon</th>
                  <th>Status</th>
                  <th>ETC</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
               {staffData.map((data, i) => <StaffTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffList;
