import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import AdminLayout from "../../../src/components/AdminLayout/AdminLayout";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";
import { authPost } from "./../../../__lib__/helpers/HttpService";
const Add = () => {
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = await new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("gender", data.gender);
    formData.append("mobile", data.mobile);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("_package", data._package);
    formData.append("_valid", data._valid);
    formData.append("valid_", data.valid_);
    formData.append("payDate", data.payDate);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };

  const submitData = async (data) => {
    setDisable(true)
    const admins = await cookies.get("_admin");
    authPost("/admin/member", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
        setDisable(false)
      } else {
        toast.error("Unsuccessfully");
        setDisable(false)
      }
    });
  };

  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Members</h2>
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
          <div className="mb-1 breadcrumb-right d-none">
           
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
                  <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="first-name-column"
                          >
                            First Name
                          </label>
                          <input
                            {...register("firstName", { required: true })}
                            type="text"
                            id="first-name-column"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                          />
                          {errors.firstName && (
                            <div className="text-danger">
                              Please enter first name
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="last-name-column"
                          >
                            Last Name
                          </label>
                          <input
                            {...register("lastName", { required: true })}
                            type="text"
                            id="last-name-column"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                          />
                          {errors.lastName && (
                            <div className="text-danger">
                              Please enter last name
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="d-block form-label">Gender</label>
                          <div className="form-check my-50">
                            <input
                              {...register("gender", { required: true })}
                              type="radio"
                              id="male"
                              name="gender"
                              value="MALE"
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              {...register("gender", { required: true })}
                              type="radio"
                              id="female"
                              name="gender"
                              value="FEMALE"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          {errors.gender && (
                            <div className="text-danger">
                              Please select gender
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="city-column">
                            Mobile
                          </label>
                          <input
                            {...register("mobile", { required: true })}
                            type="number"
                            id="city-column"
                            className="form-control"
                            placeholder="Mobile"
                            name="mobile"
                          />
                          {errors.mobile && (
                            <div className="text-danger">
                              Please enter mobile number
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            {...register("username", { required: true })}
                            type="text"
                            id="username"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                          />
                          {errors.username && (
                            <div className="text-danger">
                              Please enter username
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="company-column"
                          >
                            Password
                          </label>
                          <input
                            {...register("password", { required: true })}
                            type="Password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                          />
                          {errors.password && (
                            <div className="text-danger">
                              Please enter password
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="selectDefault">
                            Membership Package
                          </label>
                          <select
                            {...register("_package", { required: true })}
                            className="form-select"
                            id="selectDefault"
                          >
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          {errors._package && (
                            <div className="text-danger">
                              Please select package
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="valid-from">
                            Valid From
                          </label>
                          <input
                            {...register("_valid", { required: true })}
                            type="date"
                            id="valid-from"
                            className="form-control"
                            name="_valid"
                          />
                          {errors._valid && (
                            <div className="text-danger">
                              Please select start date
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="valid-to">
                            Valid to
                          </label>
                          <input
                            {...register("valid_", { required: true })}
                            type="date"
                            id="valid-to"
                            className="form-control"
                            name="valid_"
                          />
                          {errors.valid_ && (
                            <div className="text-danger">
                              Please select expired date
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="valid-to">
                            Payment Date
                          </label>
                          <input
                            {...register("payDate", { required: true })}
                            type="date"
                            id="valid-to"
                            className="form-control"
                            name="payDate"
                          />
                          {errors.payDate && (
                            <div className="text-danger">
                              Please select payment date
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-1">
                          <label htmlFor="customFile1" className="form-label">
                            Profile pic
                          </label>
                          <input
                            {...register("image", { required: true })}
                            className="form-control"
                            type="file"
                            id="customFile1"
                            
                          />
                          {errors.image && (
                            <div className="text-danger">
                              Please select image
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <Barcode width={2} height={80} value="FSFDS56454FDF4" />,
                    </div>
                  </div> */}
                      <div className="col-12">
                        {disable ? (
                          <button
                            className="btn btn-outline-primary waves-effect"
                            type="button"
                            disabled
                          >
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-25 align-middle">
                              Loading...
                            </span>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary me-1 waves-effect waves-float waves-light"
                          >
                            Submit
                          </button>
                        )}
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

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
