import React from "react";
import { Barcode } from 'react-barcode';

const MemberAdd = () => {
  return (
    <section id="multiple-column-form">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Member</h4>
            </div>
            <div className="card-body">
              <form className="form">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="first-name-column">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name-column"
                        className="form-control"
                        placeholder="First Name"
                        name="fname-column"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="last-name-column">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name-column"
                        className="form-control"
                        placeholder="Last Name"
                        name="lname-column"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="d-block form-label">Gender</label>
                      <div className="form-check my-50">
                        <input
                          type="radio"
                          id="validationRadiojq1"
                          name="validationRadiojq"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="validationRadiojq1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="validationRadiojq2"
                          name="validationRadiojq"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="validationRadiojq2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="city-column">
                        Mobile
                      </label>
                      <input
                        type="number"
                        id="city-column"
                        className="form-control"
                        placeholder="Mobile"
                        name="city-column"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="company-column">
                        Password
                      </label>
                      <input
                        type="Password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="selectDefault">
                        Membership Package
                      </label>
                      <select className="form-select" id="selectDefault">
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="valid-from">
                        Valid From
                      </label>
                      <input
                        type="date"
                        id="valid-from"
                        className="form-control"
                        name="valid-from"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="valid-to">
                        Valid to
                      </label>
                      <input
                        type="date"
                        id="valid-to"
                        className="form-control"
                        name="valid-to"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="valid-to">
                        Payment Date
                      </label>
                      <input
                        type="date"
                        id="valid-to"
                        className="form-control"
                        name="valid-to"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="customFile1" className="form-label">
                        Profile pic
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="customFile1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <Barcode height={80} value="http://github.com/kciter" />,
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="reset"
                      className="btn btn-primary me-1 waves-effect waves-float waves-light"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-outline-secondary waves-effect"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberAdd;
