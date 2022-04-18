import React from "react";
import { Box, DollarSign, TrendingUp, User } from "react-feather";
import AdminLayout from "../../src/components/AdminLayout/AdminLayout";
import badge from "/public/img/badge.svg";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="content-header row"></div>
      <div className="content-body">
        {/* Dashboard Ecommerce Starts */}
        <section id="dashboard-ecommerce">
          <div className="row match-height">
            {/* Medal Card */}
            <div className="col-xl-4 col-md-6 col-12">
              <div className="card card-congratulation-medal">
                <div className="card-body">
                  <h5>Congratulations 🎉 John!</h5>
                  <p className="card-text font-small-3">
                    You have won gold medal
                  </p>
                  <h3 className="mb-75 mt-2 pt-50">
                    <a href="#">$48.9k</a>
                  </h3>
                  <button type="button" className="btn btn-primary">
                    View Sales
                  </button>
                  <img
                    src={badge.src}
                    className="congratulation-medal"
                    alt="Medal Pic"
                  />
                </div>
              </div>
            </div>
            {/* /  Medal Card  */}

            {/* Statistics Card  */}
            <div className="col-xl-8 col-md-6 col-12">
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
                            <TrendingUp className="avater-con" />
                          </div>
                        </div>
                        <div className="my-auto">
                          <h4 className="fw-bolder mb-0">230k</h4>
                          <p className="card-text font-small-3 mb-0">Sales</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                      <div className="d-flex flex-row">
                        <div className="avatar bg-light-info me-2">
                          <div className="avatar-content">
                            <User className="avatar-icon" />
                          </div>
                        </div>
                        <div className="my-auto">
                          <h4 className="fw-bolder mb-0">8.549k</h4>
                          <p className="card-text font-small-3 mb-0">
                            Customers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                      <div className="d-flex flex-row">
                        <div className="avatar bg-light-danger me-2">
                          <div className="avatar-content">
                            <Box className="avatar-icon" />
                          </div>
                        </div>
                        <div className="my-auto">
                          <h4 className="fw-bolder mb-0">1.423k</h4>
                          <p className="card-text font-small-3 mb-0">
                            Products
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="d-flex flex-row">
                        <div className="avatar bg-light-success me-2">
                          <div className="avatar-content">
                            <DollarSign className="avatar-icon" />
                          </div>
                        </div>
                        <div className="my-auto">
                          <h4 className="fw-bolder mb-0">$9745</h4>
                          <p className="card-text font-small-3 mb-0">Revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / Statistics Card */}
          </div>

          <div className="row match-height">
            <div className="col-lg-4 col-12">
              <div className="row match-height">
                {/* <!-- Bar Chart - Orders --> */}
                <div className="col-lg-6 col-md-3 col-6">
                  <div className="card">
                    <div className="card-body pb-50">
                      <h6>Orders</h6>
                      <h2 className="fw-bolder mb-1">2,76k</h2>
                      <div id="statistics-order-chart"></div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Bar Chart - Orders --> */}

                {/* <!-- Line Chart - Profit --> */}
                <div className="col-lg-6 col-md-3 col-6">
                  <div className="card card-tiny-line-stats">
                    <div className="card-body pb-50">
                      <h6>Profit</h6>
                      <h2 className="fw-bolder mb-1">6,24k</h2>
                      <div id="statistics-profit-chart"></div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Line Chart - Profit --> */}

                {/* <!-- Earnings Card --> */}
                <div className="col-lg-12 col-md-6 col-12">
                  <div className="card earnings-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <h4 className="card-title mb-1">Earnings</h4>
                          <div className="font-small-2">This Month</div>
                          <h5 className="mb-1">$4055.56</h5>
                          <p className="card-text text-muted font-small-2">
                            <span className="fw-bolder">68.2%</span>
                            <span> more earnings than last month.</span>
                          </p>
                        </div>
                        <div className="col-6">
                          <div id="earnings-chart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / Earnings Card  */}
              </div>
            </div>

            {/* Revenue Report Card */}
            <div className="col-lg-8 col-12">
              <div className="card card-revenue-budget">
                <div className="row mx-0">
                  <div className="col-md-8 col-12 revenue-report-wrapper">
                    <div className="d-sm-flex justify-content-between align-items-center mb-3">
                      <h4 className="card-title mb-50 mb-sm-0">
                        Revenue Report
                      </h4>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center me-2">
                          <span className="bullet bullet-primary font-small-3 me-50 cursor-pointer"></span>
                          <span>Earning</span>
                        </div>
                        <div className="d-flex align-items-center ms-75">
                          <span className="bullet bullet-warning font-small-3 me-50 cursor-pointer"></span>
                          <span>Expense</span>
                        </div>
                      </div>
                    </div>
                    <div id="revenue-report-chart"></div>
                  </div>
                  <div className="col-md-4 col-12 budget-wrapper">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        2020
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          2020
                        </a>
                        <a className="dropdown-item" href="#">
                          2019
                        </a>
                        <a className="dropdown-item" href="#">
                          2018
                        </a>
                      </div>
                    </div>
                    <h2 className="mb-25">$25,852</h2>
                    <div className="d-flex justify-content-center">
                      <span className="fw-bolder me-25">Budget:</span>
                      <span>56,800</span>
                    </div>
                    <div id="budget-chart"></div>
                    <button type="button" className="btn btn-primary">
                      Increase Budget
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* / Revenue Report Card  */}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
