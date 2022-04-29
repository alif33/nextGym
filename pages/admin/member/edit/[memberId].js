import dateFormat from "dateformat";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import AdminLayout from "../../../../src/components/AdminLayout/AdminLayout";
import { authPost, getData } from "../../../../__lib__/helpers/HttpService";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const MemberEdit = ({ memberId }) => {
  const [member, setMember] = useState();

  useEffect(() => {
    getData(`/admin/member/${memberId}`).then((data) => setMember(data));
  }, []);

  const male = member?.gender === "MALE";
  const female = member?.gender === "FEMALE";
  const _valid = dateFormat(member?._valid, "yyyy-mm-dd");
  const valid_ = dateFormat(member?.valid_, "yyyy-mm-dd");
  const payDate = dateFormat(member?.payDate, "yyyy-mm-dd");

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
    // await submitData(formData);
  };

  const submitData = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/member", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
        setDisable(false);
      } else {
        toast.error("Unsuccessfully");
        setDisable(false);
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
          <div className="mb-1 breadcrumb-right d-none"></div>
        </div>
      </div>
      <div className="content-body">
        {/* <MemberAdd/> */}
        <section id="multiple-column-form">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Edit Member</h4>
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
                            {...register("firstName", { required: false })}
                            type="text"
                            id="first-name-column"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            defaultValue={member?.firstName}
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
                            {...register("lastName", { required: false })}
                            type="text"
                            id="last-name-column"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            defaultValue={member?.lastName}
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
                              {...register("gender", { required: false })}
                              type="radio"
                              id="male"
                              name="gender"
                              value="MALE"
                              className="form-check-input"
                              defaultChecked={male}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              {...register("gender", { required: false })}
                              type="radio"
                              id="female"
                              name="gender"
                              value="FEMALE"
                              className="form-check-input"
                              defaultChecked={female}
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
                            {...register("mobile", { required: false })}
                            type="number"
                            id="city-column"
                            className="form-control"
                            placeholder="Mobile"
                            name="mobile"
                            defaultValue={member?.mobile}
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
                            {...register("username", { required: false })}
                            type="text"
                            id="username"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            defaultValue={member?.username}
                            autoComplete="false"
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
                            {...register("password", { required: false })}
                            type="Password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            defaultValue={member?.password}
                            autoComplete="false"
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
                            {...register("_package", { required: false })}
                            className="form-select"
                            id="selectDefault"
                          >
                            <option
                              selected={member?._package[0] === "1"}
                              value={1}
                            >
                              One
                            </option>
                            <option
                              selected={member?._package[0] === "2"}
                              value={2}
                            >
                              Two
                            </option>
                            <option
                              selected={member?._package[0] === "3"}
                              value={3}
                            >
                              Three
                            </option>
                            <option
                              selected={member?._package[0] === "4"}
                              value={4}
                            >
                              Four
                            </option>
                            <option
                              selected={member?._package[0] === "5"}
                              value={5}
                            >
                              Five
                            </option>
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
                            {...register("_valid", { required: false })}
                            type="date"
                            id="valid-from"
                            className="form-control"
                            name="_valid"
                            value={_valid}
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
                            {...register("valid_", { required: false })}
                            type="date"
                            id="valid-to"
                            className="form-control"
                            name="valid_"
                            value={valid_}
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
                            {...register("payDate", { required: false })}
                            type="date"
                            id="valid-to"
                            className="form-control"
                            name="payDate"
                            value={payDate}
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
                            {...register("image", { required: false })}
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

export default MemberEdit;

export const getServerSideProps = adminAuth((context) => {
  const { memberId } = context.params;
  return {
    props: {
      memberId,
    },
  };
});
