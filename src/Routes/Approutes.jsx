import React from "react";
import { Routes, Route } from "react-router-dom";
import GettingStarted from "../components/GettingStarted";
import UserRegister from "../components/UserRegister";

function Approutes() {
    return (
        <>
            <Routes>
                <Route path="/" index element={<GettingStarted />} />
                <Route path="/register" element={<UserRegister />} />
            </Routes>
        </>
    );
}

export default Approutes;
