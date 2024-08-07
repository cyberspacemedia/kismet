import React, { createContext, useState, useEffect } from 'react'

// Create UserContext
const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        // Initialize userId from local storage if available
        const storedUserId = localStorage.getItem('userid')
        return storedUserId ? storedUserId : null
    })

    // Update local storage whenever userId changes
    useEffect(() => {
        if (userId) {
            localStorage.setItem('userid', userId)
        }
    }, [userId])

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
