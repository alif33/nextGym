import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';

const SingleMember = ({memberId}) => {
  const [toggle, setToggle] = useState(false);
  const [member, setMember] = useState({})


  useEffect(()=> {
    getData(`/admin/member/${memberId}`)
    .then(data => setMember(data))
  }, [memberId])

  return (
    <section className="app-user-view-account">
      <div className="row">

      <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
        {/* User Card */}
        <div className="card">
          <div className="card-body">
            <div className="user-avatar-section">
              <div className="d-flex align-items-center flex-column">
                <img className="img-fluid rounded mt-3 mb-2" src={member.image} height={110} width={110} alt="User avatar" />
                <div className="user-info text-center">
                  <h4>{member.firstName + ' ' + member.lastName}</h4>
                  <span className="badge bg-light-secondary">General Member</span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around my-2 pt-75">
              <div className="d-flex align-items-start me-2">
                <span className="badge bg-light-primary p-75 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check font-medium-2"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <div className="ms-75">
                  <h4 className="mb-0">1.23k</h4>
                  <small>Tasks Done</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <span className="badge bg-light-primary p-75 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase font-medium-2"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </span>
                <div className="ms-75">
                  <h4 className="mb-0">568</h4>
                  <small>Projects Done</small>
                </div>
              </div>
            </div>
            <h4 className="fw-bolder border-bottom pb-50 mb-1">Details</h4>
            <div className="info-container">
              <ul className="list-unstyled">
                <li className="mb-75">
                  <span className="fw-bolder me-25">Username:</span>
                  <span>{member.username?.split('@')[0]}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Email:</span>
                  <span>{member.username}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Gender:</span>
                  <span>{member.gender}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Status:</span>
                  {member.status ? <span className="badge bg-light-success">Active</span>:
                    <span className="badge bg-light-danger">Inactive</span>
                  }
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Role:</span>
                  <span>member</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Mobile:</span>
                  <span>{member.mobile}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Payment Date:</span>
                  <span>{new Date (member.payDate).toLocaleDateString()}</span>
                </li>
               
                <li className="mb-75">
                  <span className="fw-bolder me-25">Validation Started</span>
                  <span>{new Date(member._valid).toLocaleDateString()}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Validation ending</span>
                  <span>{new Date(member.valid_).toLocaleDateString()}</span>
                </li>
                  
              </ul>
              <div className="d-flex justify-content-center pt-2">
                <a href="javascript:;" className="btn btn-primary me-1 waves-effect waves-float waves-light" data-bs-target="#editUser" data-bs-toggle="modal">
                  Edit
                </a>
                <a href="javascript:;" className="btn btn-outline-danger suspend-user waves-effect">Inactive</a>
              </div>
            </div>
          </div>
        </div>
        {/* /User Card */}

      </div>
      </div>
    </section>
  );
};

export default SingleMember;
