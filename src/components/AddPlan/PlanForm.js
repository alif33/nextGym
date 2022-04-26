import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { authPost } from "../../../__lib__/helpers/HttpService";

const PlanForm = () => {
  const cookies = new Cookies();
  const [disable, setDisable] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = await new FormData();
    formData.append("title", data.title);
    formData.append("monthlyPrice", data.monthlyPrice);
    formData.append("annuallyPrice", data.annuallyPrice);
    formData.append("breakfast", data.breakfast);
    formData.append("dinner", data.dinner);
    formData.append("lunch", data.lunch);
    formData.append("extra", data.extra);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };
  const submitData = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/add-plan", data, admins.token).then((res) => {
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="form-label" htmlFor="first-name-column">
                Plan Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                id="first-name-column"
                className="form-control"
                placeholder="Title here"
                name="title"
              />
              {errors.title && (
                <div className="text-danger">Please enter title</div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="form-label" htmlFor="price">
                Monthly Price
              </label>
              <input
                {...register("monthlyPrice", { required: true })}
                className="form-control"
                type="number"
                id="monthlyPrice"
                name="monthlyPrice"
                placeholder="Enter Monthly price"
              />

              {errors.monthlyPrice && (
                <div className="text-danger">Please enter monthly price</div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="form-label" htmlFor="price">
                Annually Price
              </label>
              <input
                {...register("annuallyPrice", { required: true })}
                className="form-control"
                type="number"
                id="annuallyPrice"
                name="annuallyPrice"
                placeholder="Enter Annually price"
              />

              {errors.annuallyPrice && (
                <div className="text-danger">Please enter Annually price</div>
              )}
            </div>
          </div>
          {/* <div className="col-md-6 col-12">
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
                      </div> */}
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label htmlFor="customFile1" className="form-label">
                Plan image
              </label>
              <input
                {...register("image", { required: true })}
                className="form-control"
                type="file"
                id="customFile1"
                accept="image/png, image/gif, image/jpeg"
              />
              {errors.image && (
                <div className="text-danger">Please select image</div>
              )}
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="form-label" htmlFor="breakfast">
                Breackfast
              </label>
              <select
                {...register("breakfast", { required: true })}
                className="form-select"
                id="breakfast"
              >
                <option selected>Select</option>
                <option value={1}>True</option>
                <option value={2}>False</option>
              </select>
              {errors.breakfast && (
                <div className="text-danger">Please select </div>
              )}
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="d-block form-label" htmlFor="lunch">
                Lunch
              </label>
              <select
                {...register("lunch", { required: true })}
                className="form-select"
                id="lunch"
              >
                <option selected>Select</option>
                <option value={1}>True</option>
                <option value={2}>False</option>
              </select>
              {errors.lunch && <div className="text-danger">Please select</div>}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="d-block form-label" htmlFor="dinner">
                Dinner
              </label>
              <select
                {...register("dinner", { required: true })}
                className="form-select"
                id="dinner"
              >
                <option selected>Select</option>
                <option value={1}>True</option>
                <option value={2}>False</option>
              </select>
              {errors.dinner && (
                <div className="text-danger">Please select</div>
              )}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="d-block form-label" htmlFor="extra">Extra</label>
              
              <select
                {...register("extra", { required: true })}
                className="form-select"
                id="extra"
              >
                <option selected>Select</option>
                <option value={1}>True</option>
                <option value={2}>False</option>
              </select>

              {errors.extra && <div className="text-danger">Please select</div>}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="mb-1">
              <label className="d-block form-label" htmlFor="extra">Description</label>
              <textarea
              rows={6}
                {...register("extra", { required: true })}
                className="form-control"
                id="extra"
              >
              </textarea>
              {errors.extra && <div className="text-danger">Please select</div>}
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
    </>
  );
};

export default PlanForm;
