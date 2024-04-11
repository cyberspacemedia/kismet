// withLoader.js
import React, { useState, useEffect } from "react";
import Loader from "./AppLoader";

const withLoader = (WrappedComponent) => {
    const WithLoader = (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            // Simulate loading delay (remove this in your actual app)
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 1000);

            // Cleanup function
            return () => clearTimeout(timeout);
        }, []);

        return (
            <div>{loading ? <Loader /> : <WrappedComponent {...props} />}</div>
        );
    };

    return WithLoader;
};

export default withLoader;
