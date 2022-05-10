import React, { useEffect, useState } from "react";
import { getData } from "../../../__lib__/helpers/HttpService";
import ExerciseTable from "./ExerciseTable";

const ExerciseList = () => {

  const [exercises, setExercises] = useState([])
  
  useEffect(() => {
    getData('/admin/exercises')
    .then(data => {
      setProducts(data)
    })
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
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Company</th>
                  <th>Actions</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
               {exercises.map((data, i) => <ExerciseTable key={i} data={data}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
