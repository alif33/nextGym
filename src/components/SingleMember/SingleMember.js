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
                  <div className="d-flex justify-content-between ">
                    <h5>Name</h5>
                    <h5>Abubokor Siddik</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Gender</h5>
                    <h5>Male</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Mobile</h5>
                    <h5>01621675233</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Username</h5>
                    <h5>admin</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Password</h5>
                    <h5>password</h5>
                  </div>
                  {/* </div>
                <div className="col-md-6"> */}
                  <div className="d-flex justify-content-between">
                    <h5>Ship Package</h5>
                    <h5>One</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Valid Form</h5>
                    <h5>{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Valid To</h5>
                    <h5>{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Payment Date</h5>
                    <h5>{new Date().toLocaleDateString()}</h5>
                  </div>
                </div>
                <div className="">
                  <button
                    className=" border-0 float-end px-4 py-1 bg-info fw-bold rounded-pill"
                    onClick={() => setToggle(!toggle)}
                  >
                    Action
                  </button>
                  {toggle ? (
                    <div className="">
                      <button className=" border-0 px-3 py-1 bg-info fw-bold rounded-pill">
                        Active
                      </button>
                      <button className=" border-0  mx-1 px-3 py-1 bg-info fw-bold rounded-pill">
                        Inactive
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
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
