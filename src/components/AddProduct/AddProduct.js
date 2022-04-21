import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import CategoryModal from "../CategoryModal/CategoryModal";
import { authPost, getData } from "./../../../__lib__/helpers/HttpService";

const AddProduct = () => {
  const [trigger, setTrigger] = useState(false);
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
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("sku", data.sku);
    formData.append("manufacturerCompany", data.manufacturerCompany);
    formData.append("manufacturerDate", data.manufacturerDate);
    formData.append("description", data.description);
    formData.append("specification", data.specification);
    formData.append("image", data.image[0]);
    await submitData(formData);
  };

  const submitData = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/product", data, admins.token).then((res) => {
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

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getData('/admin/categories')
    .then(data => setCategories(data))
  }, [])

  return (
    <section id="multiple-column-form">
      {trigger && <CategoryModal trigger={trigger} setTrigger={setTrigger}/>}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Member</h4>
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
                      />
                      {errors.name && (
                        <div className="text-danger">
                          Please enter product name
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="username">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        {...register("price", { required: true })}
                        className="form-control"
                        name="price"
                        placeholder="Price $000"
                      />
                      {errors.price && (
                        <div className="text-danger">Please enter price</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="username">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="price"
                        {...register("quantity", { required: true })}
                        className="form-control"
                        name="quantity"
                        placeholder="Quantity"
                      />
                      {errors.price && (
                        <div className="text-danger">Please enter quantity</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row">
                      <div className="mb-1 col-md-6 col-12">
                        <label className="form-label" htmlFor="username">
                          SKU
                        </label>
                        <input
                          type="text"
                          id="sku"
                          {...register("sku", { required: true })}
                          className="form-control"
                          name="sku"
                          placeholder="SKU"
                        />
                        {errors.sku && (
                          <div className="text-danger">Please enter sku</div>
                        )}
                      </div>
                      <div className="mb-1 col-md-6 col-12">
                        <label className="form-label" htmlFor="company-column">
                          Specification
                        </label>
                        <input
                          {...register("specification", { required: true })}
                          type="text"
                          id="specification"
                          className="form-control"
                          name="specification"
                          placeholder="Specification"
                        />
                        {errors.specification && (
                          <div className="text-danger">
                            Please enter Specification
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row">
                      <div className="mb-1 col-md-6 col-12">
                        <label className="form-label" htmlFor="company-column">
                          Manufacturer Company
                        </label>
                        <input
                          {...register("manufacturerCompany", {
                            required: true,
                          })}
                          type="text"
                          id="manufacturerCompany"
                          className="form-control"
                          name="manufacturerCompany"
                          placeholder="Company Name"
                        />
                        {errors.manufacturerCompany && (
                          <div className="text-danger">
                            Please enter company name
                          </div>
                        )}
                      </div>
                      <div className="mb-1 col-md-6 col-12">
                        <label className="form-label" htmlFor="company-column">
                          Manufacturer Date
                        </label>
                        <input
                          {...register("manufacturerDate", { required: true })}
                          type="date"
                          id="date"
                          className="form-control"
                          name="manufacturerDate"
                        />
                        {errors.manufacturerDate && (
                          <div className="text-danger">
                            Please enter manufacturer date
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <label className="form-label" htmlFor="selectDefault">
                      Category
                    </label>
                    <div className="d-flex align-items-center">
                      <div>
                        {categories.length> 0 ? <select
                          {...register("category", { required: true })}
                          name="category"
                          className="form-select"
                          id="selectDefault"
                        >
                          <option selected>Select Category</option>
                        {categories.map((cate, i) =>   <option key={i} value={i+1}>{cate.categoryName}</option>)}
                     
                        </select> : <span>Loading...</span>}
                      </div>
                      <div className="ms-1">
                        <span
                          onClick={() => setTrigger(true)}
                          type="button"
                          className="btn btn-primary"
                        >
                          Add
                        </span>
                      </div>
                    </div>
                    {errors.category && (
                      <div className="text-danger">Please enter category</div>
                    )}
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-1">
                      <label htmlFor="customFile1" className="form-label">
                        Product Image
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

export default AddProduct;
