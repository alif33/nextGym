import React, { useEffect, useState } from "react";
import { getData } from '../../../__lib__/helpers/HttpService';
import ClassTable from "./ClassTable";
import GridLoader from "react-spinners/GridLoader";
const ClassList = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [classeSchedules, setClassSchedules] = useState([])
  useEffect(() => {
    getData('/admin/class-shedules')
      .then(data => {
        setClassSchedules(data)
      })
  }, [])


  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>

          {classeSchedules?.length > 0 ?
            <div className="table-responsive" style={classeSchedules?.length < 5 ? { height: '200px' } : {}}>
              <table className="table">
                <thead>
                  <tr>

                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Member</th>
                    <th>Actions</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {classeSchedules?.map((data, i) => <ClassTable key={i} data={data} />)}
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

export default ClassList;
