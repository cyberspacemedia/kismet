import React, { useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import {
    Grid,
    InputAdornment,
    TextField,
    Button,
    Skeleton,
    Snackbar,
    Alert,
} from "@mui/material";
import UserContext from "../UserContext";
import { apiClient } from "../config/Config";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function MyAccount() {
    const { userId } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [snackOpen, setSnackOpen] = useState(false);

    const handleClose = () => {
        setSnackOpen(false);
    };

    const [profile, setProfile] = useState({ name: "", email: "", phone: "" });

    // One time render to fetch user details
    useEffect(() => {
        const data = {
            userId: userId,
        };
        const fetchdata = async () => {
            try {
                const response = await apiClient.post("/getuserprofile", data);
                setProfile(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
    }, [userId]);

    const handleupdateprofile = async () => {
        const data = {
            id: userId,
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
        };

        try {
            const updateresponse = await apiClient.post(
                "/updateuserprofile",
                data
            );
            //console.log(updateresponse.data);
            setMessage(updateresponse.data.message);
            setSuccess(updateresponse.data.success);
            setSnackOpen(true);
        } catch (error) {
            console.error(error);
        }

        console.log(data);
    };
    return (
        <Layout>
            <Snackbar
                open={snackOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    transform: "translateY(0)",
                }}
            >
                <Alert
                    onClose={handleClose}
                    severity={success ? "success" : "error"}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
            <Grid container justifyContent="center" alignItems="center">
                {/* Center and vertically align content */}
                <Grid item xs={10} md={10} textAlign="center">
                    <p>Profile Details </p>
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            sx={{ height: "50px", mt: "10px" }}
                        />
                    ) : (
                        <TextField
                            id="Name"
                            name="name"
                            size="small"
                            variant="filled"
                            label="Full Name"
                            color="secondary"
                            fullWidth
                            required
                            autoComplete="off"
                            autoFocus
                            value={profile.name}
                            onChange={(e) => {
                                setProfile({
                                    ...profile,
                                    name: e.target.value,
                                });
                            }}
                            sx={{
                                margin: "0 0 10px",
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)",
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff",
                                    fontSize: "1rem",
                                    textAlign: "center",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AccountCircle
                                            sx={{ color: "#ffffff" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            sx={{ height: "50px", mt: "10px" }}
                        />
                    ) : (
                        <TextField
                            id="email"
                            name="email"
                            size="small"
                            variant="filled"
                            label="Email"
                            color="secondary"
                            fullWidth
                            required
                            autoComplete="off"
                            autoFocus
                            value={profile.email}
                            onChange={(e) => {
                                setProfile({
                                    ...profile,
                                    email: e.target.value,
                                });
                            }}
                            sx={{
                                margin: "0 0 10px",
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)",
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff",
                                    fontSize: "1rem",
                                    textAlign: "center",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EmailIcon sx={{ color: "#ffffff" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    {loading ? (
                        <Skeleton
                            variant="rectangular"
                            sx={{ height: "50px", mt: "10px" }}
                        />
                    ) : (
                        <TextField
                            id="phone"
                            name="phone"
                            size="small"
                            variant="filled"
                            label="Phone"
                            color="secondary"
                            fullWidth
                            required
                            autoComplete="off"
                            autoFocus
                            value={profile.phone}
                            onChange={(e) => {
                                setProfile({
                                    ...profile,
                                    phone: e.target.value,
                                });
                            }}
                            sx={{
                                margin: "0 0 10px",
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "rgba(211, 211, 211, 0.1)",
                                },
                                "& .MuiInputBase-input": {
                                    color: "#fffff",
                                    fontSize: "1rem",
                                    textAlign: "center",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PhoneAndroidIcon
                                            sx={{ color: "#ffffff" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleupdateprofile}
                        size="small"
                        sx={{ borderRadius: "20px", mt: 2 }}
                    >
                        Update Profile
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default MyAccount;
