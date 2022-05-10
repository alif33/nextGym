import React, { useEffect, useState } from "react";
import { getData } from "./../../../__lib__/helpers/HttpService";
import GridLoader from "react-spinners/GridLoader";
const ActiveMember = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getData("admin/members").then((data) => setMembers(data));
  }, []);

  const actvie = members?.filter(member => member.status === true)

  return (
    <>
      <div className="col-lg-6 col-md-3 col-6">
        <div className="card card-tiny-line-stats">
          {members?.length ?
            <div className="card-body pb-50">
              <h6>Active Members</h6>
              <h2 className="fw-bolder mb-1">{actvie?.length}</h2>
              <div id="statistics-profit-chart"></div>
            </div> :
            <div className="card-body p-3 ">
              <div className="d-flex justify-content-center align-items-center">
                <GridLoader color={color} loading={loading} size={8} />
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ActiveMember;
