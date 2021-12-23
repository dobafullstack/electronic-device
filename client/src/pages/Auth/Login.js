import React, { useContext, useState } from "react";
import Tab from "react-bootstrap/Tab";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import authApi from "../../api/authApi";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const { addToast } = useToasts();
    const history = useHistory();
    const { setIsLogin } = useContext(AuthContext);

    const onLogin = async () => {
        try {
            const { result, code } = await authApi.login(
                usernameOrEmail,
                password
            );

            if (code === 200) {
                localStorage.setItem("access_token", result.accessToken);
                setIsLogin(true);
                history.replace("/");
            }
        } catch (error) {
            if (error.response.data) {
                addToast(error.response.data.error.message, {
                    appearance: "error",
                });
            } else {
                addToast(error.message, {
                    appearance: "error",
                });
            }
        }
    };


    return (
        <Tab.Pane eventKey='login'>
            <div className='login-form-container'>
                <div className='login-register-form'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type='text'
                            name='user-name'
                            placeholder='Username'
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            name='user-password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='button-box'>
                            <div className='login-toggle-btn'>
                                <input type='checkbox' />
                                <label className='ml-10'>Remember me</label>
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <button type='submit' onClick={() => onLogin()}>
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Tab.Pane>
    );
}
