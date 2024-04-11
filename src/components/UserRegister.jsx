import React from "react";
import theme from "../theme/Theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function UserRegister() {
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
                    backgroundSize: "cover",
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
                        <TextField
                            id="Name"
                            size="large"
                            variant="filled"
                            label="Name"
                            color="secondary"
                            fullWidth
                            required
                            autoComplete="off"
                            autoFocus
                            sx={{
                                margin: "0 0 20px", // Add margin bottom for spacing
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
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
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
                                },
                            }}
                            InputProps={{
                                // Change position to "end"
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EmailIcon sx={{ color: "#ffffff" }} />
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
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
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
                        <TextField
                            id="phone"
                            size="large"
                            variant="filled"
                            label="Phone Number"
                            color="secondary"
                            fullWidth
                            type="number"
                            required
                            autoComplete="off"
                            sx={{
                                margin: "0 0 20px", // Add margin bottom for spacing
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
                                },
                            }}
                            InputProps={{
                                // Change position to "end"
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PhoneAndroidIcon
                                            sx={{ color: "#ffffff" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="state"
                            size="large"
                            variant="filled"
                            label="State"
                            color="secondary"
                            fullWidth
                            type="text"
                            required
                            autoComplete="off"
                            sx={{
                                margin: "0 0 20px", // Add margin bottom for spacing
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
                                },
                            }}
                            InputProps={{
                                // Change position to "end"
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LocationOnIcon
                                            sx={{ color: "#ffffff" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="refcode"
                            size="large"
                            variant="filled"
                            label="Invite Code"
                            color="secondary"
                            fullWidth
                            type="text"
                            required
                            autoComplete="off"
                            sx={{
                                margin: "0 0 20px", // Add margin bottom for spacing
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff", // Font color
                                    fontSize: "1.5rem", // Font size
                                    textAlign: "center",
                                    padding: "5px",
                                },
                            }}
                            InputProps={{
                                // Change position to "end"
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LocationOnIcon
                                            sx={{ color: "#ffffff" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            variant="contained"
                            sx={{ mt: 10, ...theme.buttons.gradient }}
                            size="large"
                        >
                            Register Now
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default UserRegister;
