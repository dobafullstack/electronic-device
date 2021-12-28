import React from "react";
import Paypal from "./Paypal";

export default function Payment({ values, handleChange }) {
    return (
        <div className='payment-method'>
            <div className='pay-top sin-payment'>
                <input
                    id='payment-method_2'
                    className='input-radio'
                    type='radio'
                    value='cash'
                    onChange={handleChange}
                    defaultChecked='checked'
                    name='payment_method'
                />
                <label htmlFor='payment-method_2'>Cash on delivery </label>
                <div className='payment-box payment_method_bacs'>
                    <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.
                    </p>
                </div>
            </div>
            <div className='pay-top sin-payment'>
                <input
                    id='payment_method_1'
                    className='input-radio'
                    type='radio'
                    value='atm'
                    onChange={handleChange}
                    name='payment_method'
                />
                <label htmlFor='payment_method_1'> Direct Bank Transfer </label>
                <div className='payment-box payment_method_bacs'>
                    <p>
                        Make your payment directly into our bank account: <br />
                        TPBANK 03425624301 Bui Pham Vinh Ky
                        <br /> Please use your Order ID as the payment
                        reference.
                    </p>
                </div>
            </div>

            <div className='pay-top sin-payment sin-payment-3'>
                <input
                    id='payment-method_3'
                    className='input-radio'
                    type='radio'
                    value='paypal'
                    onChange={handleChange}
                    name='payment_method'
                />
                <label htmlFor='payment-method_3'>
                    PayPal <img alt src='assets/img/icon-img/paypal.png' />
                    <a href='https://www.dienmayxanh.com/kinh-nghiem-hay/paypal-la-gi-cach-tao-va-thiet-lap-tai-khoan-paypa-1179841'>
                        What is PayPal?
                    </a>
                </label>
                <div className='payment-box payment_method_bacs'>
                    <p>Continue checkout with PayPal in a new tab.</p>
                </div>
            </div>
        </div>
    );
}
