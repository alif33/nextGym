import React from 'react';

const PaymentDetail = () => {
    return (
        <>
            <table className='table border rounded-pill'>
                <tbody className=''>
                    <tr>
                        <td className='p-50 text-start'>Total Products</td>
                        <td className='p-50 text-end'>
                            <span  className='bg-primary px-50 py-25 rounded-circle text-white'>2</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-50 text-start'>Order Tax</td>
                        <td className='p-50 text-end'>$00.0</td>
                    </tr>
                    <tr>
                        <td className='p-50 text-start'>Disocunt</td>
                        <td className='p-75 text-end'>$00.00</td>
                    </tr>
                    <tr>
                        <td className='p-50 text-start'>Ground Total</td>
                        <td className='p-50 text-end'>$00.0</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default PaymentDetail;