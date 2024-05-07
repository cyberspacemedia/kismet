import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";
import { alpha } from "@mui/material/styles";

function Howtoplay() {
    return (
        <Layout>
            <Box sx={{ m: 2, textAlign: "center" }}>
                <Typography variant="h6">How to Play</Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    In this game you have 100 numbers, starting from 00 to 99.
                    You can put choose any number in jodi or crossing to play.
                </Typography>
            </Box>
            <Paper
                variant="outlined"
                sx={{
                    padding: 2,
                    borderRadius: 2,
                    borderColor: "gray",
                    backgroundColor: (theme) =>
                        alpha(theme.palette.grey[500], 0.1),
                    width: "95%", // Adjust width to 95%
                    textAlign: "center", // Align center horizontally
                    margin: "2px auto 0", // Center horizontally
                }}
            >
                <Typography variant="subtitle2"> Jodi Game</Typography>
                <Typography variant="caption">
                    You can choose any number in from 00 to 99 like
                    21,34,65,99,etc.
                </Typography>
            </Paper>
            <Paper
                variant="outlined"
                sx={{
                    padding: 2,

                    borderRadius: 2,
                    borderColor: "gray",
                    backgroundColor: (theme) =>
                        alpha(theme.palette.grey[500], 0.1),
                    width: "95%", // Adjust width to 95%
                    textAlign: "center", // Align center horizontally
                    margin: "2px auto 0", // Center horizontally
                }}
            >
                <Typography variant="subtitle2"> Crossing Game</Typography>
                <Typography variant="caption">
                    Like 3x3, 4x4, 5x5, you can play in crossing.
                </Typography>
                <Paper
                    variant="outlined"
                    sx={{
                        padding: 2,

                        borderRadius: 2,
                        borderColor: "gray",
                        backgroundColor: (theme) =>
                            alpha(theme.palette.grey[500], 0.1),
                        width: "99%", // Adjust width to 95%
                        textAlign: "center", // Align center horizontally
                        margin: "2px auto 0", // Center horizontally
                    }}
                >
                    <Grid container direction="row" spacing={2}>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Typography variant="caption">
                                2X2 = 4 numbers
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <Typography variant="caption">
                                21 Your Number, Crossings are 22,21,11,12
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
        </Layout>
    );
}

export default Howtoplay;
