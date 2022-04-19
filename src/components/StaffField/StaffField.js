import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import Cookies from "universal-cookie";
import { authPost } from "./../../../__lib__/helpers/HttpService";

const StaffField = () => {
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
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
    formData.append("position", data.position);
    formData.append("salary", data.salary);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };
console.log(errors.firstName ? true: false)
  const submitData = async (data) => {
    setDisable(true)
    const admins = await cookies.get("_admin");
    authPost("/admin/staff", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message)
        setDisable(false)
        reset();
      } else {
        toast.error("Unsuccessfully");
        setDisable(false)
      }
    });
  };

  return (
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
                      <label className="form-label" htmlFor="first-name-column">
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
                    {errors.firstName && <div className="text-danger">Please enter  first name</div>}

                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="last-name-column">
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
                            {errors.lastName && <div className="text-danger">Please enter  last name</div>}
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
                          id="femail"
                          name="gender"
                          value="FEMALE"
                          className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      {errors.gender && <div className="text-danger">Please select gender</div>}
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
                            {errors.mobile && <div className="text-danger">Please enter  mobile number</div>}
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
                        className="form-control"
                        name="username"
                        placeholder="Username"
                      />
                            {errors.username && <div className="text-danger">Please enter  username</div>}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="company-column">
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
                            {errors.password && <div className="text-danger">Please enter  password</div>}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="selectDefault">
                        Position
                      </label>
                      <select
                        {...register("position", { required: true })}
                        className="form-select"
                        id="selectDefault"
                      >
                        <option selected>Select Position</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      {errors.firstName && <div className="text-danger">Please select position</div>}
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
                        accept="image/png, image/gif, image/jpeg"
                        id="customFile1"
                      />
                            {errors.image && <div className="text-danger">Please enter select image</div>}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="company-column">
                        Monthly Salary
                      </label>
                      <input
                        {...register("salary", { required: true })}
                        type="number"
                        id="salary"
                        className="form-control"
                        name="salary"
                        placeholder="Salary $"
                      />
                          {errors.salary && <div className="text-danger">Please enter select image</div>}
                    </div>
                  </div>

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
                        <span className="ms-25 align-middle">Loading...</span>
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
  );
};

export default StaffField;
