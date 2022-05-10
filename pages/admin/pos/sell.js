import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";
import BodypartsField from "../../../src/components/Bodyparts/BodypartsField.js/BodypartsField";
import StatisticsCard from "../../../src/components/Dashboard/StatisticsCard";
import Sell from "../../../src/components/Pos/Sell/Sell";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const AddBodyparts = () => {
    return (
        <AdminLayout>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="content-header row">
                {/* path */}
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <div className="row breadcrumbs-top">
                        <div className="col-12">
                            <h2 className="content-header-title float-start mb-0">Sell</h2>
                            {/* <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Product</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Product</a>
                  </li>
                </ol>
              </div> */}
                        </div>
                    </div>
                </div>
                {/* /path */}

            </div>
            <div className="content-body">
                <section id="dashboard-ecommerce">
                    <div className="row match-height">
                        {/* Medal Card */}
                        <div className="col-xl-6 col-md-6 col-12">
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
                                    
                                </div>
                            </div>
                        </div>
                       

                        {/* Statistics Card  */}
                        <div className="col-xl-6 col-md-6 col-12">
                            <div className="card card-statistics">
                                <div className="card-header">
                                    <h4 className="card-title">Statistics</h4>
                                    <div className="d-flex align-items-center">
                                        
                                    </div>
                                </div>
                                <div className="card-body statistics-body">
                                    <div className="row">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* / Statistics Card */}
                    </div>


                </section>
            </div>
        </AdminLayout>
    );
};

export default AddBodyparts;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})