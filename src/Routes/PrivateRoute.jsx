import React, { useContext, useEffect } from 'react'
import { Route, Navigate } from 'react-router-dom'
import UserContext from '../components/UserContext' // Default import

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { userId, setUserId } = useContext(UserContext)

    useEffect(() => {
        const storedUserId = localStorage.getItem('userid')
        if (storedUserId) {
            setUserId(storedUserId)
        }
    }, [setUserId])

    return userId ? (
        <Route {...rest} element={Component} />
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateRoute
