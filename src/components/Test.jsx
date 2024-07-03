import React, { useState } from "react";

import {
    Grid,
    Select,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import Mydatepicker from "./dashboard/Appcomp/Mydatepicker";
import Layout from "./dashboard/Layout";

function Test() {
    const gameNames = [
        { name: "Gurugram", number: "12" },
        { name: "Rewari", number: "23" },
    ];
    const [game, setGame] = useState("");

    const handleGameSelect = (e) => {
        setGame(e.target.value);
    };
    return (
        <Layout>
            <Typography variant="caption">Charts</Typography>
            <Grid container justifyContent={"flex-start"} alignItems={"center"}>
                <Grid item xs={5}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Select Game</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={game}
                            label="Age"
                            onChange={handleGameSelect}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <Mydatepicker />
                </Grid>
                <Grid item xs={12} md={12}>
                    {/* Container for each Game */}
                    {gameNames.map((game, index) => (
                        <Grid
                            container
                            justifyContent="center" // Center horizontally
                            alignItems="center" // Center vertically
                            sx={{
                                width: "90%",
                                p: "10px",
                                mt: "5px",
                                margin: "20px auto 0 auto",
                                border: "solid 1px gray",
                                borderRadius: "15px",
                                backgroundColor: "#343433",
                            }}
                            key={index}
                        >
                            <Grid
                                item
                                xs={4}
                                container
                                justifyContent="flex-start"
                            >
                                <img
                                    alt="Game"
                                    src={`./StaticAssets/Images/Icons/${game.name}round.png`}
                                    style={{ height: "50px" }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="baseline"
                            >
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{ fontWeight: "bold", color: "white" }}
                                >
                                    {game.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    align="center"
                                    sx={{ color: "gray" }}
                                >
                                    Winning Number
                                </Typography>
                            </Grid>
                            <Grid item xs={4} container justifyContent="end">
                                <Typography
                                    variant="h5"
                                    color="initial"
                                    sx={{
                                        padding: "10px",
                                        border: "solid 1px gray",
                                        borderRadius: "10px",
                                        display: "flex", // Ensure flexbox is used
                                        justifyContent: "center", // Center content horizontally
                                        alignItems: "center", // Center content vertically
                                        color: "#ff5b00",
                                        fontWeight: "bold",
                                        fontSize: "1.5em",
                                        background:
                                            "linear-gradient(60deg, rgba(78,78,77,1) 0%, rgba(0,0,0,1) 100%)",
                                    }}
                                >
                                    {game.number}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Test;
