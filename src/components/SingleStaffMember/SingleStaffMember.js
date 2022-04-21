import React, { useEffect, useState } from "react";
import { getData } from './../../../__lib__/helpers/HttpService';

const SingleStaffMember = ({staffId}) => {
  const [toggle, setToggle] = useState(false);
  const [staff, setStaff] = useState({})


  useEffect(()=> {
    getData(`/admin/staff/${staffId}`)
    .then(data => setStaff(data))
  }, [staffId])

  const handleStatus = async (status) => {
   if(status){
   
    const formData = await new FormData();
    formData.append("firstName", staff.firstName);
    formData.append("lastName", staff.lastName);
    formData.append("gender", staff.gender);
    formData.append("mobile", staff.mobile);
    formData.append("username", staff.username);
    formData.append("password", staff.password);
    formData.append("_package", staff._package);
    formData.append("_valid", staff._valid);
    formData.append("valid_", staff.valid_);
    formData.append("payDate", staff.payDate);
    formData.append("image", staff.image[0]);
    await submitData(formData);
    
   }
  }
const submitData =(data) => {
  console.log(data)
}

  return (
    <section className="app-user-view-account">
      <div className="row">

      <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
        {/* User Card */}
        <div className="card">
          <div className="card-body">
            <div className="user-avatar-section">
              <div className="d-flex align-items-center flex-column">
                <img  className="img-fluid rounded mt-3 mb-2" src={staff.image} height={110} width={110} alt="User avatar" />
                <div className="user-info text-center">
                  <h4>{staff.firstName + ' ' + staff.lastName}</h4>
                  <span className="badge bg-light-secondary">Staff Member</span>
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
                  <span>{staff.username?.split('@')[0]}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Email:</span>
                  <span>{staff.username}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Gender:</span>
                  <span>{staff.gender}</span>
                </li>
                {/* <li className="mb-75">
                  <span className="fw-bolder me-25">Status:</span>
                  {staff.status ? <span className="badge bg-light-success">Active</span>:
                    <span className="badge bg-light-danger">Inactive</span>
                  }
                </li> */}
                <li className="mb-75">
                  <span className="fw-bolder me-25">Role:</span>
                  <span>Staff</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Mobile:</span>
                  <span>{staff.mobile}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Salary:</span>
                  <span>${staff.salary}</span>
                </li>
                <li className="mb-75">
                  <span className="fw-bolder me-25">Position:</span>
                  <span>{new Date (staff.position).toLocaleDateString()}</span>
                </li>
                  
                <li className="mb-75">
                  <span className="fw-bolder me-25">Password:</span>
                  <span>{staff.password}</span>
                </li>
                  
              </ul>
              <div className="d-flex justify-content-center pt-2">
                <button className="btn btn-primary me-1 waves-effect waves-float waves-light" data-bs-target="#editUser" data-bs-toggle="modal">
                  Edit
                </button>
               {/* {
                 staff.status ?  <button onClick={() => handleStatus(member.status)}  className="btn btn-outline-danger suspend-user waves-effect">Inactive</button>:
                 <button onClick={() => handleStatus(member.status)} className="btn btn-outline-danger suspend-user waves-effect">Active</button>
               } */}
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

export default SingleStaffMember;
