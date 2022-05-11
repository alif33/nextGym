import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { setCustomers } from "../../../../store/customers/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import Modals from "../../Modals/Modals";
import PaymentDetail from "./PaymentDetail";
import _ from "lodash";

const CreatePaymentModal = ({
  trigger,
  setTrigger,
  setReciptModal,
  sellInfo,
}) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state);
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const grandTotal = _.sumBy(carts.cartList, (cart) => {
    return cart.subTotal;
  });

  const onSubmit = async () => {
    const data = {
      customer: sellInfo.customer,
      products: carts.cartList,
      subTotal: carts.subTotal,
      total: grandTotal,
    };
    setTrigger(false);
    
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/transaction", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        setReciptModal(true);
        setDisable(false);
    
      } else {
        setDisable(false);
        toast.error(res.message);
      }
    });
  };
  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={"modal-lg"}>
        <h1 className="text-center mb-1" id="addNewCardTitle">
          Create Payment
        </h1>

        <div className="row">
          <div className="col-12 col-md-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="addNewCardValidation"
              className="row gy-1 gx-2 mt-75"
              noValidate="novalidate"
            >
              <div className="">
                <label className="form-label" htmlFor="receivedAmount">
                  Recieved Amount *
                </label>
                <div className="input-group input-group-merge">
                  <input
                    defaultValue={`${grandTotal}.00`}
                    placeholder="00"
                    {...register("receivedAmount", { required: false })}
                    id="receivedAmount"
                    name="receivedAmount"
                    className="form-control add-credit-card-mask"
                    type="number"
                  />
                </div>
                {/* {errors.name && (
                                    <div className="text-danger">
                                        Please enter Customer name
                                    </div>
                                )} */}
              </div>
              <div className="">
                <label className="form-label" htmlFor="payingAmount">
                  Paying Amount *
                </label>
                <div className="input-group input-group-merge">
                  <input
                    {...register("payingAmount", { required: false })}
                    defaultValue={`${grandTotal}.00`}
                    id="payingAmount"
                    name="payingAmount"
                    className="form-control add-credit-card-mask"
                    type="number"
                    placeholder="00"
                  />
                </div>
              </div>
              <div className="">
                <label className="form-label" htmlFor="name">
                  Charge:
                </label>
                <div className="input-group input-group-merge">
                  <span className="ms-50">00.0</span>
                </div>
              </div>
              <div className="">
                <label className="form-label" htmlFor="method">
                  Payment Choice *
                </label>
                <div className="input-group input-group-merge">
                  <select
                    {...register("method", { required: false })}
                    id="method"
                    name="method"
                    className="form-control add-credit-card-mask"
                  >
                    <option selected value="cash">
                      Cash
                    </option>
                  </select>
                </div>
              </div>
              <div className="">
                <label className="form-label" htmlFor="name">
                  Note *
                </label>
                <div className="input-group input-group-merge">
                  <textarea
                    rows={2}
                    {...register("name", { required: false })}
                    id="name"
                    name="name"
                    className="form-control add-credit-card-mask"
                    type="text"
                  ></textarea>
                </div>
              </div>

              <div className="">
                {disable ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary me-1 mt-1 waves-effect waves-float waves-light"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="card mt-4">
              <div className="card-body">
                <PaymentDetail sellInfo={sellInfo} />
              </div>
            </div>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default CreatePaymentModal;
