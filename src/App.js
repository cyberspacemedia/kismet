import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme"; // Import your custom theme
import Approutes from "./Routes/Approutes";

import withLoader from "./components/Loaders/withLoader"; // Import the withLoader HOC

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Approutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default withLoader(App); // Wrap the App component with withLoader HOC
