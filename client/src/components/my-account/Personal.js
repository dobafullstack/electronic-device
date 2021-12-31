import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup';
import axiosClient from '../../api/axiosClient';
import { Accordion, Card } from 'react-bootstrap';

export default function Personal({ user, fetchUser, setUser, addToast, token }) {
    const initialValues = {
        name: user.name,
        phone: user.phone,
    };

    const validate = yup.object().shape({
        name: yup.string().required("Họ và tên không được bỏ"),
        phone: yup
            .number()
            .typeError("Số điện thoại không hợp lệ")
            .required("Số điện thoại không được bỏ trống"),
    });

    const onChangeDetails = async (values) => {
        return await axiosClient
            .put("/auth/update", values, {
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then(({ result }) => {
                fetchUser();
                setUser(result);
                addToast(result, {
                    appearance: "success",
                    autoDismiss: true,
                    autoDismissTimeout: 3000,
                });
            });
    };

    return (
        <div>
            <Card className='single-my-account mb-20'>
                <Card.Header className='panel-heading'>
                    <Accordion.Toggle variant='link' eventKey='0'>
                        <h3 className='panel-title'>
                            <span>1 .</span> Edit your account information{" "}
                        </h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validate}
                            onSubmit={(values) => onChangeDetails(values)}>
                            {({
                                values,
                                handleChange,
                                errors,
                                touched,
                                handleSubmit,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='myaccount-info-wrapper'>
                                        <div className='account-info-wrapper'>
                                            <h4>My Account Information</h4>
                                            <h5>Your Personal Details</h5>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12'>
                                                <div className='billing-info'>
                                                    <label>Name</label>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.name &&
                                                    touched.name ? (
                                                        <p className='text-danger'>
                                                            {errors.name}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12'>
                                                <div className='billing-info'>
                                                    <label>Email Address</label>
                                                    <input
                                                        type='email'
                                                        name='email'
                                                        value={user.email}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12'>
                                                <div className='billing-info'>
                                                    <label>Phone</label>
                                                    <input
                                                        type='text'
                                                        name='phone'
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.phone &&
                                                    touched.phone ? (
                                                        <p className='text-danger'>
                                                            {errors.phone}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='billing-back-btn'>
                                            <div className='billing-btn'>
                                                <button type='submit'>
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    );
}
