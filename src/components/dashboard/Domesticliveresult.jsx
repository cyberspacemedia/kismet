import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { apiClient } from "../config/Config";

const gameName = "Gurugram";

function Domesticliveresult() {
    const [gameStatus, setGameStatus] = useState(false);
    const [winnumber, setWinnumber] = useState(0);

    useEffect(() => {
        const result = async () => {
            try {
                const response = await apiClient.post("/last_game");
                console.log(response.data);
                setGameStatus(response.data.success);
                if (response.data.success === true) {
                    setWinnumber(response.data.data.number);
                }
            } catch (error) {}
        };
        result();
    }, []);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    {/* Card for Live Result */}
                    <Card
                        sx={{
                            width: "95%",
                            margin: "0 auto",
                            border: "1px solid gray",
                            borderRadius: "15px",
                            backgroundColor: "#373736",
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <img
                                            src="./StaticAssets/Images/Icons/Rohtakround.png"
                                            alt="Custom"
                                            style={{
                                                height: "50px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        xs
                                        direction="column"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                }}
                                                align="left"
                                            >
                                                {gameName}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "#b6b6b2",
                                                }}
                                                align="left"
                                            >
                                                Today's Winner
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "#b6b6b2",
                                                }}
                                                align="left"
                                            >
                                                Number
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        xs
                                        direction="column"
                                        justifyContent={"flex-end"}
                                        alignItems={"end"}
                                    >
                                        <Grid item>
                                            <Typography
                                                variant="body2"
                                                align="right"
                                                color={"white"}
                                                sx={{
                                                    border: "solid orange 2px",
                                                    borderRadius: "5px",
                                                    padding: "5px",
                                                    fontWeight:'bold',
                                                    backgroundColor:'black'
                                                }}
                                            >
                                                {gameStatus
                                                    ? winnumber
                                                    : "Waiting"}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* Card for Live Result */}
                </Grid>
            </Grid>
        </>
    );
}

export default Domesticliveresult;
