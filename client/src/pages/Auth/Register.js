import React from "react";
import Tab from "react-bootstrap/Tab";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import authApi from "../../api/authApi";
import * as yup from "yup";

export default function Register() {
    const { addToast } = useToasts();

    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    };

    const validate = yup.object().shape({
        name: yup.string().required("Họ tên không được để trống"),
        username: yup.string().required("Tên tài khoản không được để trống"),
        email: yup.string().required("Email không được để trống"),
        password: yup.string().required("Mật khẩu không được để trống"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận không đúng"),
        phone: yup.string().required("Họ tên không được để trống"),
    });

    const onSubmit = (values) => {
        const register = async () => {
            if (values.password !== values.confirmPassword) {
                addToast("Invalid Confirm Password", { appearance: "warning" });
                return;
            }

            try {
                const { result } = await authApi.register(values);

                addToast(result, { appearance: "success" });
            } catch (error) {
                console.log(error);
                if (error.response.data) {
                    addToast(error.response.data.result, {
                        appearance: "error",
                    });
                }
            }
        };

        register();
    };
    return (
        <Tab.Pane eventKey='register'>
            <div className='login-form-container'>
                <div className='login-register-form'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validate}>
                        {({
                            values,
                            handleSubmit,
                            handleChange,
                            errors,
                            touched,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {errors.name && touched.name ? (
                                    <p className='text-danger m-0'>
                                        {errors.name}
                                    </p>
                                ) : null}
                                <input
                                    type='text'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder='Full Name'
                                />
                                {errors.username && touched.username ? (
                                    <p className='text-danger m-0'>
                                        {errors.username}
                                    </p>
                                ) : null}
                                <input
                                    type='text'
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    placeholder='Username'
                                />
                                {errors.email && touched.email ? (
                                    <p className='text-danger m-0'>
                                        {errors.email}
                                    </p>
                                ) : null}
                                <input
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    type='email'
                                />
                                {errors.phone && touched.phone ? (
                                    <p className='text-danger m-0'>
                                        {errors.phone}
                                    </p>
                                ) : null}
                                <input
                                    type='tel'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Phone'
                                />
                                {errors.password && touched.password ? (
                                    <p className='text-danger m-0'>
                                        {errors.password}
                                    </p>
                                ) : null}
                                <input
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <p className='text-danger m-0'>
                                        {errors.confirmPassword}
                                    </p>
                                ) : null}
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm Password'
                                />
                                <div className='button-box'>
                                    <button type='submit'>
                                        <span>Register</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </Tab.Pane>
    );
}
