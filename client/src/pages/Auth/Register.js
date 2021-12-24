import React from "react";
import Tab from "react-bootstrap/Tab";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import authApi from "../../api/authApi";

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

    const onSubmit = (values) => {
        console.log(values);

        const register = async () => {
            if (values.password !== values.confirmPassword){
                addToast('Invalid Confirm Password', {appearance: 'warning'})
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
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({ values, handleSubmit, handleChange }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder='Full Name'
                                />
                                <input
                                    type='text'
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    placeholder='Username'
                                />
                                <input
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    type='email'
                                />
                                <input
                                    type='tel'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Phone'
                                />
                                <input
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                />
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
