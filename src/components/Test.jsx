import React, { useState, useEffect } from "react";
import { apiClient } from "./config/Config";

function Test() {
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        if (!hasData) {
            const fetchdata = async () => {
                try {
                    const response = await apiClient.get("/getUsers");
                    console.log(response);
                    setHasData(true); // Mark data fetched
                } catch (error) {
                    console.error(error);
                }
            };

            fetchdata();
        }
    }, [hasData]); // Only re-run when hasData changes

    return <div>Test</div>;
}

export default Test;
