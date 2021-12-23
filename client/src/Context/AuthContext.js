import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        if (!token) setIsLogin(false);
        else {
            jwt.verify(
                token,
                process.env.REACT_APP_SECRET_JWT,
                (err, decode) => {
                    if (err) {
                        localStorage.removeItem("access_token");
                        setIsLogin(false);
                        console.log(err);
                    } else setIsLogin(true);
                }
            );
        }
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
