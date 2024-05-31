import React, { useState } from "react";
import theme from "../theme/Theme";
import { apiClient } from "./config/Config";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { CircularProgress, SnackbarContent } from "@mui/material";

function UserRegister() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [regStatus, setRegStatus] = useState(false);

    const formData = {
        name,
        email,
        password,
        registration_type: 1, // For Email Type Registeration
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckboxChecked(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validation logic
        if (!name || !email || !password || !checkboxChecked) {
            setSnackbarMessage("All fields are required.");
            setSnackbarOpen(true);
        } else if (!validateEmail(email)) {
            setSnackbarMessage("Invalid email address.");
            setSnackbarOpen(true);
        } else {
            // Proceed with registration
            // Your registration logic goes here
            try {
                console.log(formData);
                const response = await apiClient.post(
                    "registerUserEmail",
                    formData
                );
                // console.log(response.data);

                setRegStatus(true);
                if (response.status === 200) {
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                }
            } catch (error) {
                console.error(error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    // You can set a state variable to display a generic error message
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
            }
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            {regStatus && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "2%",
                        right: "5%",
                    }}
                >
                    <CircularProgress color="info" />
                </Box>
            )}
            <Grid
                container
                direction={"column"}
                display="flex"
                textAlign="center"
                sx={{
                    backgroundColor: "black",
                    height: "120vh",
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: "center",
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item sx={{ mt: 2 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: "100px" }}
                        />
                    </Grid>

                    <Grid item sx={{ width: "80%", margin: "auto", mt: 5 }}>
                        <Typography variant="body1">Register & Play</Typography>

                        <hr />

                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="Name"
                                name="name"
                                size="large"
                                variant="filled"
                                label="Full Name"
                                color="secondary"
                                fullWidth
                                required
                                autoComplete="off"
                                autoFocus
                                value={name}
                                onChange={handleNameChange}
                                sx={{
                                    margin: "0 0 10px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="email"
                                name="email"
                                size="large"
                                variant="filled"
                                label="Email Address"
                                color="secondary"
                                type="email"
                                fullWidth
                                required
                                autoComplete="off"
                                value={email}
                                onChange={handleEmailChange}
                                sx={{
                                    margin: "0 0 20px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailIcon
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="password"
                                name="password"
                                size="large"
                                variant="filled"
                                label="Password"
                                color="secondary"
                                fullWidth
                                type="password"
                                required
                                autoComplete="off"
                                value={password}
                                onChange={handlePasswordChange}
                                sx={{
                                    margin: "0 0 20px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PasswordIcon
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography variant="body2">
                                <Checkbox
                                    checked={checkboxChecked}
                                    onChange={handleCheckboxChange}
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 28,
                                            color: "#ffffff",
                                        },
                                    }}
                                />
                                By Signing up you will agree to our{" "}
                                <a href="/">privacy policy</a> and{" "}
                                <a href="/">conditions</a>.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                            >
                                Register Now
                            </Button>{" "}
                            or <Link to="/login">Login Now</Link>
                        </form>
                    </Grid>
                </Box>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <SnackbarContent
                    style={{
                        backgroundColor: "orange",
                        color: "white",
                    }}
                    message={snackbarMessage}
                />
            </Snackbar>
        </>
    );
}

export default UserRegister;
