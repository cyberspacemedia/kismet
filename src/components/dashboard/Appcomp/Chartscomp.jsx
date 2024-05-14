import React from "react";
import Layout from "../Layout";

import { Avatar, Grid, Typography } from "@mui/material";
import Mydatepicker from "./Mydatepicker";

function Chartscomp() {
    const gameNames = [
        { name: "Gurugram", number: "12" },
        { name: "Rewari", number: "23" },
        { name: "Alwar", number: "56" },
        { name: "Rohtak", number: "13" },
    ];
    return (
        <Layout>
            <Typography variant="caption">Charts</Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="subtitle2">Select the Date</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Mydatepicker />
                </Grid>
                <Grid item xs={12} md={12}>
                    {/* Container for each Game */}
                    {gameNames.map((game, index) => (
                        <Grid
                            container
                            justifyContent="center" // Center horizontally
                            alignItems="center" // Center vertically
                            spacing={2}
                            sx={{
                                width: "90%",
                                margin: "0 auto", // Add auto margins to center the container
                            }}
                            key={index}
                        >
                            <Grid item xs={4}>
                                <Avatar
                                    sx={{ bgcolor: "orange" }}
                                    alt="Game"
                                    src={`./StaticAssets/Images/Icons/${game.name}.png`}
                                    variant="rounded"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    {game.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <span
                                    style={{
                                        padding: "5px",
                                        backgroundColor: "#0000",
                                        border: "solid 1px gray",
                                        borderRadius: "5px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                    }}
                                >
                                    {game.number}
                                </span>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Chartscomp;
