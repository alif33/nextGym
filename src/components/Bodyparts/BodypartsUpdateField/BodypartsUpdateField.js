import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { authPost, getData } from "../../../../__lib__/helpers/HttpService";

const BodypartsUpdateField = ({bodypartId}) => {

  const [trigger, setTrigger] = useState(false);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);
  const [bodypart, setBodypart] = useState()

  useEffect(() => {
    getData(`/admin/bodypart/${bodypartId}`)
    .then(data => setBodypart(data))
  }, [bodypartId]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = await new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };

  const submitData = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/bodypart", data, admins.token).then((res) => {
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
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Bodyparts</h4>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="first-name-column">
                        Name
                      </label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        id="first-name-column"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        defaultValue={bodypart?.name}
                      />
                      {errors.name && (
                        <div className="text-danger">
                          Name is required
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="customFile1" className="form-label">
                        Image
                      </label>
                      <input
                        {...register("image", { required: true })}
                        className="form-control"
                        type="file"
                        id="customFile1"
                        accept="image/png, image/gif, image/jpeg"
                        name="image"
                      />
                      {errors.image && (
                        <div className="text-danger">Please select image</div>
                      )}
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

export default BodypartsUpdateField;
