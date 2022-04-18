import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';
import MemberTable from "./MemberTable";

const MemberList = () => {
  const [members, setMembers] = useState([])
useEffect(()=>{
  getData('/admin/members')
  .then(data => {
    setMembers(data)
  })
},[])

  
  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>
         
          <div className="table-responsive" style={members.length < 5 ? {height: '200px'}: {}}>
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Start Date</th>
                  <th>Expired Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
               {members.map((data, i) => <MemberTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
