import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { User, Percent, DollarSign } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { setCustomers } from "../../../../store/customers/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import CustomerModal from "./CustomerModal";
import SelectedProduct from "./SelectedProduct";
import TDS from "./TDS";


const Sell = () => {

    const dispatch = useDispatch()
    const { customers } = useSelector(state => state)
    const [trigger, setTrigger] = useState(false);
    const cookies = new Cookies();
    const [disable, setDisable] = useState(false);
    const [tds, setTDS] = useState({})
    const [handleFormData, setHandleFormData] = useState({})


    useEffect(() => {
        dispatch(setCustomers())
    }, []);

    const handleForm = (e) => {
        const name = e.target.name
        const value = e.target.value
        setHandleFormData(values => ({ ...values, [name]: value }))

    }

    console.log(handleFormData)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = await new FormData();
        formData.append("title", e);


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
    return (
        <section id="multiple-column-form">
            {trigger && <CustomerModal trigger={trigger} setTrigger={setTrigger} />}
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
                                                    name="customer"
                                                    className="form-select"
                                                    id="customer"
                                                    data-v-aa799a9e
                                                    onChange={(e) => handleForm(e)}
                                                >
                                                    <option selected>Select customer</option>
                                                    {customersList?.length > 0 && customersList?.map((customer, i) => <option key={i} value={customer._id}>{customer.name}</option>)}

                                                </select>
                                                <div data-v-aa799a9e className="input-group-prepend">
                                                    <div onClick={() => setTrigger(true)} data-v-aa799a9e className="input-group-text" style={{ cursor: 'pointer' }}><User /></div>
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
                                                <button type="reset" className="btn btn-danger waves-effect w-100" >  Reset </button>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <button className="btn btn-primary waves-effect w-100"
                                                    type="submit"
                                                    onClick={(e) => handleSubmit(e)}
                                                > Pay Now </button>
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
