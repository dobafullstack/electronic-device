import { Formik } from "formik";
import React from "react";
import { Accordion, Card } from "react-bootstrap";
import * as yup from "yup";
import axiosClient from '../../api/axiosClient';

export default function ChangePassword({ user, addToast, token }) {
    const initialValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    const validate = yup.object().shape({
        oldPassword: yup.string().required("Mật khẩu cũ không được bỏ trống"),
        newPassword: yup.string().required("Mật khẩu mới không được bỏ trống"),
        confirmPassword: yup
            .string()
            .required("Mật khẩu xác nhận không được bỏ trống")
            .oneOf(
                [yup.ref("newPassword"), null],
                "Mật khẩu xác nhận không đúng"
            ),
    });

    const onPasswordChange = async (values, resetForm) => {
        const { oldPassword, newPassword } = values;

        if (user) {
            await axiosClient
                .put(
                    "/auth/change-password",
                    { oldPassword, newPassword },
                    {
                        headers: {
                            authorization: "Bearer " + token,
                        },
                    }
                )
                .then((res) => {
                    addToast("Cập nhật thành công", {
                        appearance: "success",
                        autoDismiss: true,
                        autoDismissTimeout: 3000,
                    });
                    resetForm();
                })
                .catch((error) => {
                    if (error.response.data) {
                        addToast(error.response.data.error.message, {
                            appearance: "error",
                            autoDismiss: true,
                            autoDismissTimeout: 3000,
                        });
                    }
                });
        }
    };

    return (
        <Card className='single-my-account mb-20'>
            <Card.Header className='panel-heading'>
                <Accordion.Toggle variant='link' eventKey='1'>
                    <h3 className='panel-title'>
                        <span>2 .</span> Change your password
                    </h3>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={(values, { resetForm }) =>
                            onPasswordChange(values, resetForm)
                        }>
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
                                        <h4>Change Password</h4>
                                        <h5>Your Password</h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='billing-info'>
                                                <label>Old Password</label>
                                                <input
                                                    type='password'
                                                    name='oldPassword'
                                                    value={values.oldPassword}
                                                    onChange={handleChange}
                                                />
                                                {errors.oldPassword &&
                                                touched.oldPassword ? (
                                                    <p className='text-danger'>
                                                        {errors.oldPassword}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='billing-info'>
                                                <label>New Password</label>
                                                <input
                                                    type='password'
                                                    name='newPassword'
                                                    value={values.newPassword}
                                                    onChange={handleChange}
                                                />
                                                {errors.newPassword &&
                                                touched.newPassword ? (
                                                    <p className='text-danger'>
                                                        {errors.newPassword}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12'>
                                            <div className='billing-info'>
                                                <label>
                                                    New Password Confirm
                                                </label>
                                                <input
                                                    type='password'
                                                    name='confirmPassword'
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    onChange={handleChange}
                                                />
                                                {errors.confirmPassword &&
                                                touched.confirmPassword ? (
                                                    <p className='text-danger'>
                                                        {errors.confirmPassword}
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
    );
}
