import React, { useEffect, useState } from "react";
import { getData } from '../../../../__lib__/helpers/HttpService';
import LevelTable from "./LevelTable";

const LevelTableList = () => {
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
            <h4 className="card-title">Member Lists</h4>
          </div>
         
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
        </div>
      </div>
    </div>
  );
};

export default LevelTableList;
