import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme"; // Import your custom theme

import GettingStarted from "./components/GettingStarted";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GettingStarted />
        </ThemeProvider>
    );
}

export default App;
