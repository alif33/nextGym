import React, { useEffect, useState } from "react";
import { User, Users } from "react-feather";
import { getData } from "./../../../__lib__/helpers/HttpService";

const StatisticsCard = () => {
  const [members, setMembers] = useState([]);
  const [staffs, setStaffs] = useState([])



  useEffect(() => {
    getData("/admin/members").then((data) => setMembers(data));
    getData('/admin/staffs').then(data => setStaffs(data));

  }, []);

const staffMale = staffs?.filter(staff => staff.gender === 'MALE')
const staffFemale = staffs?.filter(staff => staff.gender === 'FEMALE')
const memberMale = members?.filter(staff => staff.gender === 'MALE')
const memberFemale = members?.filter(staff => staff.gender === 'FEMALE')

  return (
    <>
     {members.length > 0 && staffs.length > 0 &&  <div className="col-xl-8 col-md-6 col-12">
        <div className="card card-statistics">
          <div className="card-header">
            <h4 className="card-title">Statistics</h4>
            <div className="d-flex align-items-center">
              <p className="card-text font-small-2 me-25 mb-0">
                Updated 1 month ago
              </p>
            </div>
          </div>
          <div className="card-body statistics-body">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-primary me-2">
                    <div className="avatar-content">
                      <Users className="avater-con" />
                    </div>
                  </div>
                  <div className="my-auto">
                    <h4 className="fw-bolder mb-0">{staffs?.length}</h4>
                    <p className="card-text font-small-3 mb-0">Staff Members</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-info me-2">
                    <div className="avatar-content">
                      <Users className="avatar-icon" />
                    </div>
                  </div>
                  <div className="my-auto">
                    <h4 className="fw-bolder mb-0">{members?.length}</h4>
                    <p className="card-text font-small-3 mb-0">Members</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-danger me-2">
                    <div className="avatar-content">
                      <User className="avatar-icon" />
                    </div>
                  </div>
                  <div className="my-auto">
                    <h4 className="fw-bolder mb-0">{memberFemale?.length + staffFemale?.length}</h4>
                    <p className="card-text font-small-3 mb-0">Female</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-success me-2">
                    <div className="avatar-content">
                      <User className="avatar-icon" />
                    </div>
                  </div>
                  <div className="my-auto">
                    <h4 className="fw-bolder mb-0">{memberMale?.length + staffMale?.length}</h4>
                    <p className="card-text font-small-3 mb-0">Male</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default StatisticsCard;
