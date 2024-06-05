import React, { useState, useContext } from "react";
import theme from "../theme/Theme";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { apiClient } from "./config/Config";
import UserContext from "./UserContext"; // Import UserContext

import AppLoader from "./Loaders/AppLoader";

function UserLogin() {
    const navigate = useNavigate();
    const { setUserId } = useContext(UserContext); // Access context for user state
    // handle email and password Login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // error handling and messages via snackbar
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        setLoading(false);
    };

    // handle email and password Login

    const handleMobileLogin = () => {
        navigate("/mobilelogin");
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        setLoading(false);
        try {
            const response = await apiClient.post("/emailuserlogin", data);
            setLoading(true);
            console.log(response.data);

            if (response.data.success === true) {
                //Set UID and go to dashboard

                // Set the userId in context
                setUserId(response.data.data.id);

                //Store UID to local_storage
                localStorage.setItem("userId", response.data.data.id);

                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            } else {
                //Set up error and show them
                setOpen(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {loading && <AppLoader />}

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set anchorOrigin to top center
                key={`${"top"}${"center"}`} // Use backticks to create a string key
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Invalid email or password
                </Alert>
            </Snackbar>
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
                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                            Login
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: "left" }}>
                            Welcom back, Its good to see you
                        </Typography>
                        <hr style={{ marginBottom: "20px" }} />
                        <form>
                            <TextField
                                id="email"
                                name="email"
                                size="large"
                                variant="filled"
                                label="Email"
                                color="secondary"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                                autoComplete="off"
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
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                                autoComplete="off"
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
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <br />
                            or
                            <br />
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                onClick={handleMobileLogin}
                            >
                                Login with Phone
                            </Button>
                        </form>
                    </Grid>
                </Box>
                <Grid item sx={{ mt: 5 }}>
                    <Typography variant="subtitle2">
                        {" "}
                        Do not have account?{" "}
                        <Link to="/register">Register Here</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default UserLogin;
