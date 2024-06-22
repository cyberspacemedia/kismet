import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    CardHeader,
    Box,
} from "@mui/material";
import { apiClient } from "../../config/Config";
import AppLoader from "../../Loaders/AppLoader";

function Gamedetails() {
    const location = useLocation();
    const [gameData, setGameData] = useState(null);
    const data = location.state.gameDetail;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.post("/mygames_list", data);
                console.log(response.data.data);
                setGameData(response.data.data);
            } catch (error) {
                console.error("API Error", error);
            }
        };
        fetchData();
    }, [data]);

    return (
        <Layout>
            <Typography variant="caption" sx={{ m: 2 }}>
                GAME DETAILS
            </Typography>
            <Grid
                container
                justifyContent="center"
                style={{ minHeight: "80vh" }} // Adjust height as needed
            >
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    {gameData ? (
                        <Card
                            sx={{
                                width: "100%",
                                border: "0.1px solid gray",
                                borderRadius: "10px",
                                mt: 5,
                            }}
                        >
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: "darkgray",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {data.gameName}
                                        {data.gameStatus === 1 ? (
                                            <Chip
                                                label="On"
                                                color="success"
                                                sx={{ ml: 1 }}
                                                size="small"
                                            />
                                        ) : (
                                            <Chip
                                                label="Completed"
                                                color="warning"
                                                sx={{ ml: 1 }}
                                                size="small"
                                            />
                                        )}
                                    </Typography>
                                }
                                sx={{
                                    backgroundColor: "black",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            />
                            <CardContent sx={{ backgroundColor: "black" }}>
                                <img
                                    src={`./StaticAssets/Images/Icons/${data.gameName}round.png`}
                                    alt="Custom"
                                    style={{
                                        height: "50px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ color: "white" }}
                                >
                                    {data.gameName}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "white" }}
                                >
                                    {data.date}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "white", mt: 2 }}
                                >
                                    {data.gameType} Game
                                </Typography>
                                <Typography variant="caption">
                                    Amount placed on numbers
                                </Typography>

                                {/* Create a box here with two number above each other and bborder on both with different color */}

                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent={"center"}
                                >
                                    {gameData.map((game, index) => (
                                        <Grid item xs={3} sm={3} key={index}>
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: "50px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    border: "1px solid gray",
                                                    borderRadius: "10px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        height: "50%",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "red",
                                                            fontSize: "1rem",
                                                            fontWeight:
                                                                "bolder",
                                                        }}
                                                    >
                                                        {game.number}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        height: "50%",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        borderTop:
                                                            "solid 0.1px yellow",
                                                        borderTopRightRadius:
                                                            "5px",
                                                        borderTopLeftRadius:
                                                            "5px",
                                                        borderBottomRightRadius:
                                                            "5px",
                                                        borderBottomLeftRadius:
                                                            "5px",
                                                        backgroundColor:
                                                            "orange",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "black",
                                                            fontSize: "0.7rem",
                                                            fontWeight:
                                                                "bolder",
                                                        }}
                                                    >
                                                        ₹{game.amount}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    ) : (
                        <AppLoader />
                    )}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gamedetails;
