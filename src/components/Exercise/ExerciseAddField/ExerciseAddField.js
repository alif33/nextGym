import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "suneditor/dist/css/suneditor.min.css";
import Cookies from "universal-cookie";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import { getData } from "./../../../../__lib__/helpers/HttpService";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const ExerciseAddField = () => {
  const [bodyparts, setBodyparts] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [instructions, setInstructions] = useState()
  const [tips, setTips] = useState()


  const [trigger, setTrigger] = useState(false);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    getData("/admin/bodyparts").then((data) => setBodyparts(data));
    getData("/admin/equipments").then((data) => setEquipments(data));
    getData("/admin/levels").then((data) => setLevels(data));
  }, []);
  console.log(bodyparts.length <= 0);

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
    formData.append("bodyPart", data.bodyPart);
    formData.append("equipment", data.equipment);
    formData.append("level", data.level);
    formData.append("rest", data.rest);
    formData.append("sets", data.sets);
    formData.append("reps", data.reps);
    formData.append("instructions", instructions);
    formData.append("tips", tips);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };

  const submitData = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/exercise", data, admins.token).then((res) => {
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
              <h4 className="card-title">Add Equipment</h4>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="title">
                        Title
                      </label>
                      <input
                        {...register("title", { required: true })}
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Title here"
                        name="title"
                      />
                      {errors.title && (
                        <div className="text-danger">Title is required</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="bodyPart">
                        Bodypart
                      </label>
                      <select
                        disabled={bodyparts.length <= 0}
                        {...register("bodyPart", { required: true })}
                        type="text"
                        id="bodyPart"
                        className="form-select"
                      >
                        <option selected defaultValue="">
                          Select bodypart
                        </option>
                        {bodyparts?.map((parts, i) => (
                          <option key={i} value={parts._id}>
                            {parts.name}
                          </option>
                        ))}
                      </select>
                      {errors.bodyPart && (
                        <div className="text-danger">Bodypart is required</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="equipment">
                        Equipment
                      </label>
                      <select
                        disabled={bodyparts.length <= 0}
                        {...register("equipment", { required: true })}
                        type="text"
                        id="equipment"
                        className="form-select"
                      >
                        <option selected defaultValue="">
                          Select Equipment
                        </option>
                        {equipments?.map((equipment, i) => (
                          <option key={i} value={equipment._id}>
                            {equipment.name}
                          </option>
                        ))}
                      </select>
                      {errors.equipment && (
                        <div className="text-danger">Equipment is required</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="level">
                        Levels
                      </label>
                      <select
                        disabled={bodyparts.length <= 0}
                        {...register("level", { required: true })}
                        type="text"
                        id="level"
                        className="form-select"
                      >
                        <option selected defaultValue="">
                          Select Level
                        </option>
                        {levels?.map((level, i) => (
                          <option key={i} value={level._id}>
                            {level.name}
                          </option>
                        ))}
                      </select>
                      {errors.level && (
                        <div className="text-danger">Level is required</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="rest">
                        Rest
                      </label>
                      <input
                        {...register("rest", { required: true })}
                        type="text"
                        id="rest"
                        className="form-control"
                        placeholder="Rest"
                      />

                      {errors.rest && (
                        <div className="text-danger">Rest is required</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="reps">
                        Reps
                      </label>
                      <input
                        {...register("reps", { required: true })}
                        type="text"
                        id="reps"
                        className="form-control"
                        placeholder="Reps"
                      />

                      {errors.reps && (
                        <div className="text-danger">Reps is required</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="sets">
                        Sets
                      </label>
                      <input
                        {...register("sets", { required: true })}
                        type="text"
                        id="sets"
                        className="form-control"
                        placeholder="Reps"
                      />

                      {errors.sets && (
                        <div className="text-danger">Reps is required</div>
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
                 
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                    <label htmlFor="" className="form-label">
                        Instructions <span className="text-danger">*</span>
                      </label>
                      <SunEditor
                        height="260px"
                        onChange={(e) => setInstructions(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                    <label htmlFor="" className="form-label">
                        Tips <span className="text-danger">*</span>
                      </label>
                      <SunEditor
                        height="260px"
                        onChange={(e) => setTips(e)}
                      />
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

export default ExerciseAddField;
