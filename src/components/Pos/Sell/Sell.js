import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import Cookies from "universal-cookie";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import { getData } from "./../../../../__lib__/helpers/HttpService";


const Sell = () => {
  const [bodyparts, setBodyparts] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [instructions, setInstructions] = useState();
  const [tips, setTips] = useState();
  const [selectBodyparts, setSelectBodyparts] = useState([])

  const [trigger, setTrigger] = useState(false);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
 
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const partsOption = bodyparts?.map(parts => ({
    label: parts.name,
    value: parts._id
}));

  const onSubmit = async (data) => {
    const formData = await new FormData();
    formData.append("title", data.title);
    formData.append("equipment", data.equipment);
    formData.append("level", data.level);
    formData.append("rest", data.rest);
    formData.append("sets", data.sets);
    formData.append("reps", data.reps);
    formData.append("instructions", instructions);
    formData.append("tips", tips);
    for (let i = 0; i < selectBodyparts?.length; i++) {
      formData.append('bodyPart[]', selectBodyparts[i].value)
  }

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

  const handleSelectParts = (e) => {
    setSelectBodyparts(e.value)
  }

  return (
    <section id="multiple-column-form">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Exercise</h4>
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

                      <Select
                        onChange={handleSelectParts}
                        isMulti
                        name="colors"
                        options={partsOption}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />

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
                        disabled={equipments.length <= 0}
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

export default Sell;
