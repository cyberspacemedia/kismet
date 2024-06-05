import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        // Check if userId is present in local storage
        const storedUserId = localStorage.getItem("userid");
        return storedUserId ? storedUserId : null;
    });

    // Persist userId to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("userid", userId);
    }, [userId]);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
