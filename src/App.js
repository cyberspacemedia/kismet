import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme"; // Import your custom theme
import Approutes from "./Routes/Approutes";

import withLoader from "./components/Loaders/withLoader"; // Import the withLoader HOC
import { UserProvider } from "./components/UserContext";

function App() {
    const [userId, setUserId] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <UserProvider value={{ userId, setUserId }}>
                    <Approutes />
                </UserProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default withLoader(App); // Wrap the App component with withLoader HOC
