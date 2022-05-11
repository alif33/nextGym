import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import NumberFormat from 'react-number-format';

const PaymentDetail = ({sellInfo}) => {
    const {tax, discount, shipping, customer} = sellInfo
    console.log(sellInfo)
    const {carts} = useSelector(state => state)
    const grandTotal = _.sumBy(carts.cartList, cart =>  { return cart.subTotal; }); 
    return (
        <>
            <table className='table border rounded-pill'>
                <tbody className=''>
                    <tr>
                        <td className='p-50 text-start'>Total Products</td>
                        <td className='p-50 text-end'>
                            <span  className='bg-primary px-50 py-25 rounded-circle text-white'>{carts.cartList?.length}</span>
                        </td>
                    </tr>
                    {tax && <tr>
                        <td className='p-50 text-start'>Order Tax</td>
                        <td className='p-50 text-end'>${tax || '00.0'}</td>
                    </tr>}
                   {shipping &&
                        <tr>
                        <td className='p-50 text-start'>Shipping</td>
                        <td className='p-50 text-end'>${tax || '00.0'}</td>
                    </tr>
                   }
                   { discount &&
                        <tr>
                        <td className='p-50 text-start'>Disocunt</td>
                        <td className='p-75 text-end'>${discount || '00.0'}</td>
                    </tr>
                   }
                    <tr>
                        <td className='p-50 text-start'>Ground Total</td>
                        <td className='p-50 text-end'>
                        <NumberFormat value={grandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default PaymentDetail;