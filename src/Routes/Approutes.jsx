import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import GettingStarted from '../components/GettingStarted'
import UserRegister from '../components/UserRegister'
import UserLogin from '../components/UserLogin'
import MobileLogin from '../components/MobileLogin'
import Test from '../components/Test'
import Dashboard from '../components/dashboard/Dashboard'
import Myaccount from '../components/dashboard/Myaccount'
import Wallet from '../components/dashboard/Wallet'
import Accounthistory from '../components/dashboard/Accounthistory'
import Gurugramgame from '../components/Games/Gurugramgame'
import Howtoplay from '../components/dashboard/Appcomp/Howtoplay'
import Leaderboard from '../components/dashboard/Appcomp/Leaderboard'
import Companyprofile from '../components/dashboard/Appcomp/Companyprofile'
import Chartscomp from '../components/dashboard/Appcomp/Chartscomp'
import Mygame from '../components/dashboard/Appcomp/Mygame'
import Gurugramgameinfo from '../components/Games/Gurugramgameinfo'
import Rohtakgameinfo from '../components/Games/Rohtakgameinfo'
import Rewarigameinfo from '../components/Games/Rewarigameinfo'
import Alwargameinfo from '../components/Games/Alwargameinfo'
import MainGame from '../components/Roulette/MainGame'
import Otp from '../components/Otp'
import Gamedetails from '../components/dashboard/Appcomp/Gamedetails'
import Dishawargameinfo from '../components/Games/Dishawargameinfo'
import Galigameinfo from '../components/Games/Galigameinfo'
import Faridabadgameinfo from '../components/Games/Faridabadgameinfo'
import Gaziabadgameinfo from '../components/Games/Gaziabadgameinfo'

import Appnotification from '../components/dashboard/Appcomp/Notifications'
import Shareapp from '../components/dashboard/Appcomp/Shareapp'
import Addmoney from '../components/dashboard/Addmoney'
import Withdrawmoney from '../components/dashboard/Withdrawmoney'
import Commissionconvert from '../components/dashboard/Commissioncovert'
import Commisionhistory from '../components/Commisionhistory'

function Approutes() {
    const isLoggedIn = false // Set it based on your authentication state

    return (
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/gurugramgame/*" element={<Gurugramgame />} />

            {/* Game Info */}
            <Route path="/dishawarinfo/*" element={<Dishawargameinfo />} />
            <Route path="/galiinfo/*" element={<Galigameinfo />} />
            <Route
                path="/faridabadgameinfo/*"
                element={<Faridabadgameinfo />}
            />
            <Route path="/gaziabadgameinfo/*" element={<Gaziabadgameinfo />} />
            <Route path="/gurugramgameinfo/*" element={<Gurugramgameinfo />} />
            <Route path="/alwargameinfo/*" element={<Alwargameinfo />} />
            <Route path="/rewarigameinfo/*" element={<Rewarigameinfo />} />
            <Route path="/rohtakgameinfo/*" element={<Rohtakgameinfo />} />
            {/* Game Info */}

            {/* Roulette Test Route */}
            <Route path="/roulette/*" element={<MainGame />} />
            {/* Roulette Test Route */}
            <Route path="/howtoplay" element={<Howtoplay />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/companyprofile" element={<Companyprofile />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/addmoney" element={<Addmoney />} />
            <Route path="/withdrawmoney" element={<Withdrawmoney />} />
            <Route path="/commissionconvert" element={<Commissionconvert />} />
            <Route path="/commissionhistory" element={<Commisionhistory />} />
            <Route path="/charts" element={<Chartscomp />} />
            <Route path="/mygame" element={<Mygame />} />
            <Route path="/shareapp" element={<Shareapp />} />
            <Route path="/gamedetails" element={<Gamedetails />} />
            <Route path="/history" element={<Accounthistory />} />
            <Route path="/Appnotification" element={<Appnotification />} />
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
            <Route path="/otp" element={<Otp />} />
        </Routes>
    )
}

export default Approutes
