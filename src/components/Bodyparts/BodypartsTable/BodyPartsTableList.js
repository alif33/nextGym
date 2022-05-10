import React, { useEffect, useState } from "react";
import { getData } from './../../../../__lib__/helpers/HttpService';
import BodypartsTable from './BodypartsTable';
import GridLoader from "react-spinners/GridLoader";
const BodyPartsTableList = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [bodyparts, setBodyparts] = useState([])
  useEffect(() => {
    getData('/admin/bodyparts')
      .then(data => {
        setBodyparts(data)
      })
  }, [])


  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Bodyparts Lists</h4>
          </div>

          {
            bodyparts?.length > 0 ?
            <div className="table-responsive" style={bodyparts?.length < 5 ? { height: '300px' } : {}}>
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
                  {bodyparts?.map((data, i) => <BodypartsTable key={i} data={data} />)}
                </tbody>
              </table>
            </div>:
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

export default BodyPartsTableList;
