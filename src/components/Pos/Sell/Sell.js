import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { User, Percent, DollarSign } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { setCustomers } from "../../../../store/customers/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import CreatePaymentModal from "./CreatePaymentModal";
import CustomerModal from "./CustomerModal";
import ReciptModal from "./ReciptModal";
import SelectedProduct from "./SelectedProduct";
import TDS from "./TDS";

const Sell = () => {
  const dispatch = useDispatch();
  const { customers, carts } = useSelector((state) => state);
  const [customer, setCustomer] = useState(false);
  const [payment, setPayment] = useState(false);
  const [reciptModal, setReciptModal] = useState(false);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);
  const [handleFormData, setHandleFormData] = useState({});

  useEffect(() => {
    dispatch(setCustomers());
  }, []);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setHandleFormData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const { customersList } = customers;
  return (
    <section id="multiple-column-form">
      {customer && (
        <CustomerModal trigger={customer} setTrigger={setCustomer} />
      )}
      {payment && (
        <CreatePaymentModal
          sellInfo={handleFormData}
          reciptModal={reciptModal}
          setReciptModal={setReciptModal}
          trigger={payment}
          setTrigger={setPayment}
        />
      )}
      {reciptModal && (
        <ReciptModal trigger={reciptModal} setTrigger={setReciptModal} />
      )}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              {/* <h4 className="card-title">Add Exercise</h4> */}
            </div>
            <div className="card-body">
              <form className="form">
                <div className="row">
                  <div className=" col-12">
                    <div className="mb-1">
                      <label className="form-label" htmlFor="customer">
                        Customer Name
                      </label>
                      <div data-v-aa799a9e role="group" className="input-group">
                        <select
                          required
                          name="customer"
                          className="form-select"
                          id="customer"
                          data-v-aa799a9e
                          onChange={(e) => handleForm(e)}
                        >
                          <option selected>Select customer</option>
                          {customersList?.length > 0 &&
                            customersList?.map((customer, i) => (
                              <option key={i} value={customer._id}>
                                {customer.name}
                              </option>
                            ))}
                        </select>
                        <div data-v-aa799a9e className="input-group-prepend">
                          <div
                            onClick={() => setCustomer(true)}
                            data-v-aa799a9e
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                          >
                            <User />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mb-5">
                      <SelectedProduct />
                    </div>
                    <TDS handleForm={handleForm} />
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-1">
                        <button
                          type="reset"
                          className="btn btn-danger waves-effect w-100"
                        >
                          {" "}
                          Reset{" "}
                        </button>
                      </div>
                      <div className="col-12 col-md-6">
                        <button
                          className="btn btn-primary waves-effect w-100"
                          disabled={carts.cartList?.length === 0}
                          type="button"
                          onClick={(e) => {
                            setPayment(true);
                            handleSubmit(e);
                          }}
                        >
                          {" "}
                          Pay Now{" "}
                        </button>
                      </div>
                    </div>
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
