import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function UnLogged({
    values,
    handleChange,
    addNewAddress,
    setAddNewAddress,
    errors,
    touched,
}) {
    const [cites, setCities] = useState([]);
    console.log(values);

    useEffect(() => {
        axiosClient
            .get("https://api-vietnam-city.herokuapp.com/")
            .then((res) => {
                // setFieldValue("city", res[0].name);
                setCities(res);
            });
    }, []);

    return !values ? null : (
        <div className='col-lg-7'>
            <div className='billing-info-wrap'>
                <h3>Billing Details</h3>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='billing-info mb-20'>
                            <label>Họ và tên</label>
                            <input
                                onChange={handleChange}
                                value={values.name}
                                type='text'
                                name='name'
                            />
                            {errors.name && touched.name ? (
                                <p className='text-danger'>{errors.name}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='billing-info mb-20'>
                            <label>Số điện thoại</label>
                            <input
                                onChange={handleChange}
                                value={values.phone}
                                type='tel'
                                name='phone'
                            />
                            {errors.phone && touched.phone ? (
                                <p className='text-danger'>{errors.phone}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='billing-select mb-20'>
                            <label>Tỉnh / thành</label>
                            <select onChange={handleChange} name='city'>
                                {cites.map((city, index) => (
                                    <option value={city.name} key={city.key}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            {errors.city && touched.city ? (
                                <p className='text-danger'>{errors.city}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='billing-select mb-20'>
                            <label>Quận / huyện</label>
                            <select onChange={handleChange} name='district'>
                                {values.city !== "" &&
                                    cites.map((city) => {
                                        if (city.name === values.city) {
                                            return city.district.map(
                                                (dis, index) => (
                                                    <option
                                                        key={dis.key}
                                                        value={dis.name}
                                                        selected={index === 0}>
                                                        {dis.name}
                                                    </option>
                                                )
                                            );
                                        }
                                    })}
                            </select>
                            {errors.district && touched.district ? (
                                <p className='text-danger'>{errors.district}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='billing-info mb-20'>
                            <label>Địa chỉ</label>
                            <input
                                onChange={handleChange}
                                value={values.street}
                                className='billing-address'
                                placeholder='House number and street name'
                                name='street'
                                type='text'
                            />
                            {errors.street && touched.street ? (
                                <p className='text-danger'>{errors.street}</p>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className='additional-info-wrap'>
                    <h4>Additional information</h4>
                    <div className='additional-info'>
                        <label>Order notes</label>
                        <textarea
                            placeholder='Notes about your order, e.g. special notes for delivery. '
                            name='description'
                            onChange={handleChange}
                            value={values.description}
                        />
                    </div>
                </div>
            </div>

            {addNewAddress && (
                <div className='d-flex justify-content-end mt-3'>
                    <button
                        className='btn btn-danger'
                        onClick={() => setAddNewAddress(false)}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}
