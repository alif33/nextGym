import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Cookies from "universal-cookie";
import { setCustomers } from '../../../../store/customers/actions';
import { authPost } from '../../../../__lib__/helpers/HttpService';
import Modals from '../../Modals/Modals';
import PaymentDetail from './PaymentDetail';


const ReciptModal = ({ trigger, setTrigger }) => {

    return (
        <>
            <Modals trigger={trigger} setTrigger={setTrigger} size={'modal-sm'}>
                <h4>Invoice POS</h4>
                <hr />
                <div className="mt-3">
                    <h1 className="text-center fw-4">Stocky</h1>
                    <div>
                        <div className="mb-0">Date: {new Date().toLocaleDateString()}</div>
                        <div className="mb-0">Address: 3618 Abia Martin</div>
                        <div className="mb-0">Email: jahid0734@gmail.com</div>
                        <div className="mb-0">Phone: 017XXXXXXX</div>
                        <div className="mb-0">Customer: Jahid Hasan</div>
                    </div>
                    <div className='mt-1'>
                        <div>
                            Avocat
                            <div className='d-flex justify-content-between border-bottom'>
                                <span>1.00 KG X 15.00 </span>
                                <span>15.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modals>
        </>
    );
};

export default ReciptModal;