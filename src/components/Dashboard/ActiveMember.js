import React, { useEffect, useState } from "react";
import { getData } from "./../../../__lib__/helpers/HttpService";

const ActiveMember = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getData("admin/members").then((data) => setMembers(data));
  }, []);

  const actvie = members.filter(member => member.status === true)

  return (
    <>
      <div className="col-lg-6 col-md-3 col-6">
        <div className="card card-tiny-line-stats">
          <div className="card-body pb-50">
            <h6>Active Members</h6>
            <h2 className="fw-bolder mb-1">{actvie?.length}</h2>
            <div id="statistics-profit-chart"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveMember;
