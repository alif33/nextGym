import React from 'react';
import { useForm } from 'react-hook-form';
import { User, Percent, DollarSign } from "react-feather";
import NumberFormat from 'react-number-format';
import NumberInput from './NumberInput';
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
const TDS = ({ handleForm }) => {
    const dispatch = useDispatch()
    const { carts } = useSelector(state => state)
    console.log(carts.cartList)

    const grandTotal = _.sumBy(carts.cartList, cart =>  { return cart.subTotal; }); 

    console.log(grandTotal)

    return (
        <>
            <div className="">
                <h4 className="text-center bg-primary p-50 rounded text-white">Grand Total : 
                <NumberFormat value={grandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </h4>
                <div className="row">
                    <NumberInput icon={"%"} name="TAX" handleForm={handleForm} />
                    <NumberInput icon={"$"} name="Discount" handleForm={handleForm} />
                    <NumberInput icon={"$"} name="Shipping" handleForm={handleForm} />
                </div>
            </div>
        </>
    );
};

export default TDS;