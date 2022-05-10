import React, { useEffect, useState } from "react";
import { getData } from "../../../../__lib__/helpers/HttpService";
import ExerciseTable from "./ExerciseTable";
import GridLoader from "react-spinners/GridLoader";
const ExerciseList = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getData('/admin/exercises')
      .then(data => {
        setExercises(data)
      })
  }, [])


  return (
    <div className="row" id="basic-table">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Member Lists</h4>
          </div>

          {exercises?.length > 0 ?
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
                  {exercises?.map((data, i) => <ExerciseTable key={i} data={data} />)}
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

export default ExerciseList;
