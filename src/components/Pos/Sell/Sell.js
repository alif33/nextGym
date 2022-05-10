import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { User } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { setCustomers } from "../../../../store/customers/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import CustomerModal from "./CustomerModal";


const Sell = () => {

    const dispatch = useDispatch()
    const { customers } = useSelector(state => state)
    const [trigger, setTrigger] = useState(false);
    const cookies = new Cookies();
    const [disable, setDisable] = useState(false);


    useEffect(() => {
        dispatch(setCustomers())
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
        const formData = await new FormData();
        formData.append("title", data);
      

        // await submitData(formData);
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

    const { customersList } = customers;
    console.log(customersList)
    return (
        <section id="multiple-column-form">
              {trigger && <CustomerModal trigger={trigger} setTrigger={setTrigger}/>}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Add Exercise</h4>
                        </div>
                        <div className="card-body">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className=" col-12">
                                        <div className="mb-1">
                                            <label className="form-label" htmlFor="customer">
                                                Customer Name
                                            </label>
                                            <div data-v-aa799a9e role="group" className="input-group">
                                                <select
                                                    {...register("customer", { required: true })}
                                                    name="customer"
                                                    className="form-select"
                                                    id="customer"
                                                    data-v-aa799a9e
                                                >
                                                    <option selected>Select customer</option>
                                                    {customersList.length > 0 && customersList.map((customer, i) => <option key={i} value={customer._id}>{customer.name}</option>)}

                                                </select>
                                                <div data-v-aa799a9e className="input-group-prepend">
                                                    <div onClick={() => setTrigger(true)} data-v-aa799a9e className="input-group-text" style={{cursor: 'pointer'}}><User/></div>
                                                </div>
                                            </div>
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
