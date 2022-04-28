import React, { useEffect, useState } from "react";
import { getData } from '../../../../__lib__/helpers/HttpService';
import BodypartsTable from './BodypartsTable';

const BodyPartsTableList = () => {
  const [bodyparts, setBodyparts] = useState([])
useEffect(()=>{
  getData('/admin/bodyparts')
  .then(data => {
    setBodyparts(data)
  })
},[])

  
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>
         
          <div className="table-responsive" style={bodyparts?.length < 5 ? {height: '300px'}: {}}>
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
               {bodyparts?.map((data, i) => <BodypartsTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPartsTableList;
