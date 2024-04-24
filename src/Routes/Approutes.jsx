import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GettingStarted from "../components/GettingStarted";
import UserRegister from "../components/UserRegister";
import UserLogin from "../components/UserLogin";
import MobileLogin from "../components/MobileLogin";
import Test from "../components/Test";
import Dashboard from "../components/dashboard/Dashboard";
import Myaccount from "../components/dashboard/Myaccount";
import Wallet from "../components/dashboard/Wallet";
import Accounthistory from "../components/dashboard/Accounthistory";
import Gurugramgame from "../components/Games/Gurugramgame";

function Approutes() {
    const isLoggedIn = false; // Set it based on your authentication state

    return (
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/gurugramgame/*" element={<Gurugramgame />} />

            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/history" element={<Accounthistory />} />
            <Route
                path="/"
                element={
                    isLoggedIn ? (
                        <Navigate to="/dashboard" replace />
                    ) : (
                        <GettingStarted />
                    )
                }
            />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/mobilelogin" element={<MobileLogin />} />
        </Routes>
    );
}

export default Approutes;
