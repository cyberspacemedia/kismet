import React from "react";
import { Routes, Route } from "react-router-dom";
import GettingStarted from "../components/GettingStarted";
import UserRegister from "../components/UserRegister";
import UserLogin from "../components/UserLogin";
import MobileLogin from "../components/MobileLogin";
import Test from "../components/Test";
import Dashboard from "../components/dashboard/Dashboard";

function Approutes() {
    return (
        <>
            <Routes>
                <Route path="/" index element={<GettingStarted />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/mobilelogin" element={<MobileLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </>
    );
}

export default Approutes;
