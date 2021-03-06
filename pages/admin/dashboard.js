import React from "react";
import AdminLayout from "../../src/components/AdminLayout/AdminLayout";
import ActiveMember from "../../src/components/Dashboard/ActiveMember";
import StatisticsCard from "../../src/components/Dashboard/StatisticsCard";
import TotalProduct from "../../src/components/Dashboard/TotalProduct";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";
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
            <StatisticsCard />
            {/* / Statistics Card */}
          </div>

          <div className="row match-height">
            <div className="col-lg-4 col-12">
              <div className="row match-height">
                {/* <!-- Bar Chart - products --> */}
                <TotalProduct/>
                {/* <!--/ Bar Chart - products --> */}

                {/* <!-- Line Chart - Profit --> */}
                <ActiveMember/>
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
export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
