import React from 'react';
import Tab from "react-bootstrap/Tab";


export default function Register() {
    return (
        <Tab.Pane eventKey='register'>
            <div className='login-form-container'>
                <div className='login-register-form'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type='text'
                            name='user-name'
                            placeholder='Username'
                        />
                        <input
                            type='password'
                            name='user-password'
                            placeholder='Password'
                        />
                        <input
                            name='user-email'
                            placeholder='Email'
                            type='email'
                        />
                        <div className='button-box'>
                            <button type='submit'>
                                <span>Register</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Tab.Pane>
    );
}
