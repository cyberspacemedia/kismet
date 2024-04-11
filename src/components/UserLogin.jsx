import React from "react";
import theme from "../theme/Theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";

function UserLogin() {
    return (
        <>
            <Grid
                container
                direction={"column"}
                display="flex"
                textAlign="center"
                sx={{
                    backgroundColor: "black",
                    height: "100vh",
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
                            Welcom back
                        </Typography>
                        <hr style={{ marginBottom: "20px" }} />
                        <form>
                            <TextField
                                id="email"
                                size="large"
                                variant="filled"
                                label="Email"
                                color="secondary"
                                type="email"
                                fullWidth
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
                                size="large"
                                variant="filled"
                                label="Password"
                                color="secondary"
                                fullWidth
                                type="password"
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
                                type="submit"
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
                        <a href="/register">Register Here</a>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default UserLogin;
