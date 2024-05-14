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
                    {gameNames.map((game) => (
                        <Grid
                            container
                            justifyContent="center" // Center horizontally
                            alignItems="center" // Center vertically
                            spacing={2}
                            sx={{
                                width: "90%",
                                margin: "0 auto", // Add auto margins to center the container
                            }}
                        >
                            <Grid item xs={4}>
                                <Avatar
                                    sx={{ bgcolor: "orange" }}
                                    alt="Game"
                                    src={`./StaticAssets/Images/Icons/${game.name}.png`}
                                    variant="square"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                {game.name}
                            </Grid>
                            <Grid item xs={4}>
                                {game.number}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Chartscomp;
