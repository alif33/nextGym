import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Cookies from "universal-cookie";
import { setCustomers } from '../../../../store/customers/actions';
import { authPost } from '../../../../__lib__/helpers/HttpService';
import Modals from '../../Modals/Modals';


const CreatePaymentModal = ({ trigger, setTrigger }) => {
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(false)
    const cookies = new Cookies();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setDisable(true)
        const admins = await cookies.get("_admin");

        authPost("/admin/customer", data, admins.token).then((res) => {

            if (res.success) {
                toast.success(res.message);
                reset();
                setDisable(false);
                dispatch(setCustomers())

            } else {
                setDisable(false);
                toast.error(res.message)
            }
        });
    }
    return (
        <>
            <Modals trigger={trigger} setTrigger={setTrigger} size={'modal-lg'}>
                <h1 className="text-center mb-1" id="addNewCardTitle">
                    Add New Customer
                </h1>
                {/* form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    id="addNewCardValidation"
                    className="row gy-1 gx-2 mt-75"

                    noValidate="novalidate"
                >
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("name", { required: true })}
                                id="name"
                                name="name"
                                className="form-control add-credit-card-mask"
                                type="text"
                                placeholder="Enter Customer name"
                            />
                        </div>
                        {errors.name && (
                            <div className="text-danger">
                                Please enter Customer name
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("email", { required: false })}
                                id="email"
                                name="email"
                                className="form-control add-credit-card-mask"
                                type="text"
                                placeholder="Enter Email "
                            />
                        </div>
                        {errors.email && (
                            <div className="text-danger">
                                Please enter  email
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="phone">
                            Phone
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("phone", { required: false })}
                                id="phone"
                                name="phone"
                                className="form-control add-credit-card-mask"
                                type="number"
                                placeholder="Enter phone"
                            />
                        </div>
                        {errors.phone && (
                            <div className="text-danger">
                                Please enter Phone
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="country">
                            Country
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("country", { required: false })}
                                id="country"
                                name="country"
                                className="form-control add-credit-card-mask"
                                type="text"
                                placeholder="Enter country name"
                            />
                        </div>
                        {errors.country && (
                            <div className="text-danger">
                                Please select country
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="city">
                            City
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("city", { required: false })}
                                id="city"
                                name="city"
                                className="form-control add-credit-card-mask"
                                type="text"
                                placeholder="Enter city name"
                            />
                        </div>
                        {errors.city && (
                            <div className="text-danger">
                                city required
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="address">
                            Address
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                {...register("address", { required: false })}
                                id="address"
                                name="address"
                                className="form-control add-credit-card-mask"
                                type="text"
                                placeholder="Enter address "
                            />
                        </div>
                        {errors.address && (
                            <div className="text-danger">
                                Address required
                            </div>
                        )}
                    </div>
                    <div className="col-12 text-center">
                        {disable ? <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : <button
                            type="submit"
                            className="btn btn-primary me-1 mt-1 waves-effect waves-float waves-light"
                        >
                            Submit
                        </button>}


                    </div>
                </form>
            </Modals>
        </>
    );
};

export default CreatePaymentModal;