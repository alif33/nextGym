import React, { useEffect, useState } from "react";
import { getData } from '../../../../__lib__/helpers/HttpService';
import LevelTable from "./LevelTable";
import GridLoader from "react-spinners/GridLoader";

const LevelTableList = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [levels, setLevels] = useState([])
useEffect(()=>{
  getData('/admin/levels')
  .then(data => {
    setLevels(data)
  })
},[])

  
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Level Lists</h4>
          </div>
         
        {levels?.length > 0 ?
            <div className="table-responsive" style={levels?.length < 5 ? {height: '300px'}: {}}>
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
               {levels?.map((data, i) => <LevelTable key={i} data={data}/>)}
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

export default LevelTableList;
