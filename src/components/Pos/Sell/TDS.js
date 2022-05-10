import React from 'react';
import { useForm } from 'react-hook-form';
import { User, Percent, DollarSign } from "react-feather";
import NumberInput from './NumberInput';
const TDS = ({ handleForm }) => {


    return (
        <>
            <div className="">
                <h4 className="text-center bg-primary p-1 rounded text-white">Grand Total : 00.0</h4>
                <div className="row">
                    <NumberInput icon={<Percent />} name="TAX" handleForm={handleForm} />
                    <NumberInput icon={<DollarSign />} name="Discount" handleForm={handleForm} />
                    <NumberInput icon={<DollarSign />} name="Shipping" handleForm={handleForm} />
                </div>
            </div>
        </>
    );
};

export default TDS;