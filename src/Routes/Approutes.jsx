import React from "react";
import { Routes, Route } from "react-router-dom";
import GettingStarted from "../components/GettingStarted";
import UserRegister from "../components/UserRegister";
import UserLogin from "../components/UserLogin";

function Approutes() {
    return (
        <>
            <Routes>
                <Route path="/" index element={<GettingStarted />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
            </Routes>
        </>
    );
}

export default Approutes;
