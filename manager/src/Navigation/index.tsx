import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../pages";

interface Props {
    children: React.ReactNode;
}

export default function Navigation({ children }: Props) {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}
