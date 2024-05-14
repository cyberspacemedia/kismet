import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";

function Leaderboard() {
    return (
        <Layout>
            <Typography variant="caption"> Leader Board</Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "90%" }}>
                    <Paper
                        variant="outlined"
                        sx={{
                            padding: 1,
                            margin: 1,
                            borderRadius: 5,
                            background:
                                "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: "50%",
                                        background: "#000",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "2px solid #fff",
                                    }}
                                >
                                    <Typography variant="caption">1</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Rahul Chauhan Bist
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    <span
                                        style={{
                                            fontSize: "1em",
                                        }}
                                    >
                                        ₹{" "}
                                    </span>{" "}
                                    1,23,984
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            padding: 1,
                            margin: 1,
                            borderRadius: 5,
                            background:
                                "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: "50%",
                                        background: "#000",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "2px solid #fff",
                                    }}
                                >
                                    <Typography variant="caption">2</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Rahul Chauhan Bist
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    <span
                                        style={{
                                            fontSize: "1em",
                                        }}
                                    >
                                        ₹{" "}
                                    </span>{" "}
                                    1,23,984
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            padding: 1,
                            margin: 1,
                            borderRadius: 5,
                            background:
                                "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: "50%",
                                        background: "#000",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "2px solid #fff",
                                    }}
                                >
                                    <Typography variant="caption">3</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Rahul Chauhan Bist
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    <span
                                        style={{
                                            fontSize: "1em",
                                        }}
                                    >
                                        ₹{" "}
                                    </span>{" "}
                                    1,23,984
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            padding: 1,
                            margin: 1,
                            borderRadius: 5,
                            background:
                                "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: "50%",
                                        background: "#000",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "2px solid #fff",
                                    }}
                                >
                                    <Typography variant="caption">4</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Rahul Chauhan Bist
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    <span
                                        style={{
                                            fontSize: "1em",
                                        }}
                                    >
                                        ₹{" "}
                                    </span>{" "}
                                    1,23,984
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            padding: 1,
                            margin: 1,
                            borderRadius: 5,
                            background:
                                "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",
                        }}
                    >
                        <Grid container>
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: "50%",
                                        background: "#000",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "2px solid #fff",
                                    }}
                                >
                                    <Typography variant="caption">5</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Rahul Chauhan Bist
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2">
                                    <span
                                        style={{
                                            fontSize: "1em",
                                        }}
                                    >
                                        ₹{" "}
                                    </span>{" "}
                                    1,23,984
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Box>
        </Layout>
    );
}

export default Leaderboard;
