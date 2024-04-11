import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        text: {
            primary: "#fff", // Set default text color to white
        },
    },

    typography: {
        fontFamily: "Roboto, sans-serif",
        body1: {
            color: "#fff", // Apply default text color to the body1 variant
        },
        h3: {
            color: "red",
        },
        h4: {
            color: "#cc008f",
        },
    },
    buttons: {
        primary: {
            backgroundColor: "#1976d2",
            color: "#fff",
            borderRadius: "80px",
            padding: "10px 20px",
        },
        secondary: {
            backgroundColor: "#dc004e",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 20px",
        },
        custom: {
            backgroundColor: "#ff9800",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 20px",
        },
        gradient: {
            backgroundImage: "linear-gradient(to right, #ff416c, #ff4b2b)",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 20px",
        },
    },
});

export default theme;
