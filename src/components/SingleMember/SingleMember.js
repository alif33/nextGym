import React, { useState } from "react";

const SingleMember = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="app-ecommerce-details">
      <div className="card">
        <div className="card-body">
          <div className="row my-2">
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
                  className="img-fluid product-img"
                  alt="product image"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-md-11 mx-auto ">
                  <div className="row border-primary  rounded pt-1 px-1  mb-1">
                    <p className="col-md-3 ">Name</p>
                    <p className=" col-md-9">Abubokor Siddik</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Gender</p>
                    <p className=" col-md-9">Male</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Mobile</p>
                    <p className=" col-md-9">01621675233</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Username</p>
                    <p className=" col-md-9">admin</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Password</p>
                    <p className=" col-md-9">password</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Ship Package</p>
                    <p className=" col-md-9">One</p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Valid Form</p>
                    <p className=" col-md-9">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Valid To</p>
                    <p className=" col-md-9">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Payment Date</p>
                    <p className=" col-md-9">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div className="row border-primary  rounded pt-1 px-1 mb-1">
                    <p className="col-md-3 ">Status</p>
                    <div className="col-md-9">
                      <div className="d-flex">
                        <p className="text-success">Active</p>
                        {/* <p className="text-warning">Inactive</p> */}
                        <div className="dropdown mx-2">
                          <button
                            onClick={() => setToggle(!toggle)}
                            type="button"
                            className={`btn btn-sm dropdown-toggle hide-arrow py-0 waves-effect waves-float waves-light ${
                              toggle ? "show" : ""
                            }`}
                            data-bs-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-vertical"
                            >
                              <circle cx={12} cy={12} r={1} />
                              <circle cx={12} cy={5} r={1} />
                              <circle cx={12} cy={19} r={1} />
                            </svg>
                          </button>
                          <div
                            className={`dropdown-menu dropdown-menu-end ${
                              toggle ? "show" : ""
                            }`}
                            style={
                              toggle
                                ? {
                                    position: "absolute",
                                    inset: "0px auto auto 0px",
                                    margin: "0px",
                                    transform: "translate(-93px, 14px)",
                                  }
                                : {}
                            }
                          >
                            <span className="dropdown-item">Active</span>
                            <span className="dropdown-item">Inactive</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMember;
