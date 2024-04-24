import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        text: {
            primary: "#ffff", // Set default text color to white
        },
    },

    typography: {
        fontFamily: "Roboto, sans-serif",
        body1: {
            color: "#ff00dd", // Apply default text color to the body1 variant
        },
        body2: {
            color: "#d7d6d7",
        },
        h3: {
            color: "red",
        },
        h4: {
            color: "#cc008f",
        },
        h5: {
            color: "#cc008f",
            fontSize: "2rem",
        },
        h6: {
            color: "#eeb741",
            fontSize: "1rem",
        },
        caption: {
            color: "#ffff",
            fontSize: "12px",
            fontFamily: "sans-serif",
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
