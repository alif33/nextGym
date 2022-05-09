import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import CategoryModal from "../CategoryModal/CategoryModal";
import { authPost, getData } from "./../../../__lib__/helpers/HttpService";

const ClassScheduleField = () => {
  const [staffs, setStaffs] = useState([]);

  const [trigger, setTrigger] = useState(false);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    // getData('/admin/categories')
    // .then(data => setCategories(data))
    getData("/admin/staffs").then((data) => setStaffs(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setDisable(true);

    const admins = await cookies.get("_admin");
    authPost("/admin/class-shedule", data, admins.token).then((res) => {
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
    <section id="multiple-column-form">
      {trigger && <CategoryModal trigger={trigger} setTrigger={setTrigger} />}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Product</h4>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="className">
                        Class Name
                      </label>
                      <input
                        {...register("className", { required: true })}
                        type="text"
                        id="className"
                        className="form-control"
                        placeholder="Class schedul name"
                      />
                      {errors.className && (
                        <div className="text-danger">
                          Please enter class name
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="staffMember">
                        Select Staff Member
                      </label>

                      <div>
                        {staffs?.length > 0 ? (
                          <select
                            {...register("staffMember", { required: true })}
                            name="staffMember"
                            className="form-select"
                            id="staffMember"
                          >
                            <option selected>Select Staff</option>
                            {staffs?.length > 0 &&
                              staffs?.map((staff, i) => (
                                <option key={i} value={staff._id}>
                                  {staff.firstName}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <span>Loading...</span>
                        )}
                      </div>

                      {errors.staffMember && (
                        <div className="text-danger">
                          Please select staff member{" "}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="startDate" className="form-label">
                        Start Date
                      </label>
                      <input
                        {...register("startDate", { required: true })}
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        type="date"
                      />
                      {errors.startDate && (
                        <div className="text-danger">
                          Please select starting date
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="endDate" className="form-label">
                        Ending Date
                      </label>
                      <input
                        {...register("endDate", { required: true })}
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        type="date"
                      />
                      {errors.startDate && (
                        <div className="text-danger">
                          Please select ending date
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="selectedDate" className="form-label">
                        Selected Date
                      </label>
                      <input
                        {...register("selectedDate", { required: true })}
                        className="form-control"
                        id="selectedDate"
                        name="selectedDate"
                        type="date"
                      />
                      {errors.selectedDate && (
                        <div className="text-danger">
                          Please select selected date
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="memberLimit" className="form-label">
                        Member Limit
                      </label>
                      <input
                        {...register("memberLimit", { required: true })}
                        className="form-control"
                        id="memberLimit"
                        name="memberLimit"
                        type="number"
                        placeholder="Member limit"
                      />
                      {errors.memberLimit && (
                        <div className="text-danger">
                          Please add member limit
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="startTime" className="form-label">
                        Start Time
                      </label>
                      <input
                        {...register("startTime", { required: true })}
                        className="form-control"
                        id="startTime"
                        name="startTime"
                        type="time"
                      />
                      {errors.startTime && (
                        <div className="text-danger">
                          Please select staring time
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="endTime" className="form-label">
                        End Time
                      </label>
                      <input
                        {...register("endTime", { required: true })}
                        className="form-control"
                        id="endTime"
                        name="endTime"
                        type="time"
                      />
                      {errors.endTime && (
                        <div className="text-danger">
                          Please select staring time
                        </div>
                      )}
                    </div>
                  </div>

                  {/* <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="customFile1" className="form-label">
                        Description
                      </label>
                      <textarea
                        {...register("description", { required: true })}
                        className="form-control"
                        id="customFile1"
                        name="description"
                        rows={4}
                      />
                      {errors.description && (
                        <div className="text-danger">Please select image</div>
                      )}
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

export default ClassScheduleField;
