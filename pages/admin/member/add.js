import React from "react";
import Barcode from "react-barcode";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";
const Add = () => {
  return (
    <AdminLayout>
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">
               Members
              </h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Members</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Member</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <div className="dropdown">
              <button
                className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle waves-effect waves-float waves-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
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
                  className="feather feather-grid"
                >
                  <rect x={3} y={3} width={7} height={7} />
                  <rect x={14} y={3} width={7} height={7} />
                  <rect x={14} y={14} width={7} height={7} />
                  <rect x={3} y={14} width={7} height={7} />
                </svg>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="app-todo.html">
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
                    className="feather feather-check-square me-1"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span className="align-middle">Todo</span>
                </a>
                <a className="dropdown-item" href="app-chat.html">
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
                    className="feather feather-message-square me-1"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="align-middle">Chat</span>
                </a>
                <a className="dropdown-item" href="app-email.html">
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
                    className="feather feather-mail me-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="align-middle">Email</span>
                </a>
                <a className="dropdown-item" href="app-calendar.html">
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
                    className="feather feather-calendar me-1"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <span className="align-middle">Calendar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-body">
        {/* <MemberAdd/> */}
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
                      <Barcode width={2} height={80} value="FSFDS56454FDF4" />,
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
      </div>
    </AdminLayout>
  );
};

export default Add;
