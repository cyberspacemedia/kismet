import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Layout from './Layout' // Import the Layout component
import DefaultDash from './Defaultdash'
import UserContext from '../UserContext'

function Dashboard() {
    const navigate = useNavigate()
    const { setUserId } = useContext(UserContext)
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')
        console.log(storedUserId)

        if (storedUserId) {
            console.log('User Id Found')
            setUserId(storedUserId)
            setTimeout(() => {
                navigate('/dashboard')
            })
        } else {
            navigate('/login')
        }
    }, [navigate, setUserId])
    const isLoggedIn = true // Assuming initially user is logged in, you can set it based on your authentication state

    if (!isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return (
        <Layout>
            {/* Wrap the dashboard content with the Layout component */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <DefaultDash />
                            {/* Add any other components to render on the dashboard */}
                        </div>
                    }
                />
            </Routes>
        </Layout>
    )
}

export default Dashboard
