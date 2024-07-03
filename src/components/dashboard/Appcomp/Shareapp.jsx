import React from "react";
import Layout from "../Layout";
import { Card, CardContent, Grid, Typography, Button } from "@mui/material";

function Shareapp() {
    const handleInviteFriends = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Invite Friends",
                    text: "Join us and earn rewards!",
                    url: window.location.href,
                });
                console.log("Successfully shared");
            } catch (error) {
                console.error("Error sharing:", error.message);
            }
        } else {
            console.log("Web Share API not supported");
            // Handle fallback to other sharing methods here (e.g., showing a modal with share options)
        }
    };

    return (
        <Layout>
            <Grid container justifyContent={"center"} spacing={2}>
                <Grid item xs={12} md={10}>
                    <Typography variant="h4">Invite & Earn</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Card
                        variant="outlined"
                        sx={{
                            minWidth: 275,
                            backgroundColor: "black",
                            border: "2px solid orange",
                            borderRadius: 10,
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="body1"
                                component="div"
                                gutterBottom
                                sx={{ color: "white" }}
                            >
                                Commission
                            </Typography>
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{ color: "white", fontSize: "2rem" }}
                            >
                                <span
                                    style={{
                                        fontSize: "1rem",
                                        verticalAlign: "super",
                                    }}
                                >
                                    ₹
                                </span>
                                1000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} mt={5}>
                    <Typography
                        variant="body1"
                        p={2}
                        sx={{ border: "0.1px solid white", bgcolor: "#212121" }}
                    >
                        Total People Added : 0
                    </Typography>
                </Grid>
                <Grid item xs={10} mt={5}>
                    <Typography variant="h4">Your referral Code</Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            border: "3px dotted orange",
                            padding: "10px",
                            borderRadius: "15px",
                        }}
                    >
                        XYZ
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Button variant="contained" onClick={handleInviteFriends}>
                        Invite Friends
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Shareapp;
