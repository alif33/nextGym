import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';
import StaffTable from "./StaffTable";
import GridLoader from "react-spinners/GridLoader";
const StaffList = () => {

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [staffs, setStaffs] = useState([])
  useEffect(() => {
    getData('/admin/staffs')
      .then(data => setStaffs(data))
  }, [])
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>

          {staffs?.length > 0 ? <div className="table-responsive" style={staffs?.length < 5 ? { height: '200px' } : {}}>
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Salary</th>
                  <th>Actions</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {staffs?.map((data, i) => <StaffTable key={i} data={data} />)}
              </tbody>
            </table>
          </div>
            :
            <div className="p-4">
              <div className="d-flex justify-content-center align-items-center">
                <GridLoader color={color} loading={loading} size={8} />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default StaffList;
