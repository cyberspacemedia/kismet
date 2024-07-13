import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout' // Import the Layout component
import DefaultDash from './Defaultdash'

function Dashboard() {
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
