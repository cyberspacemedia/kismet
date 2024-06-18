import {
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { apiClient } from "../config/Config";

function Livegame() {
    const [gameName, setGameName] = useState("");
    const [gameId, setGameId] = useState("");
    const [game, setGame] = useState(false);
    const navigate = useNavigate();
    const findliveGame = async () => {
        try {
            const response = await apiClient.post("/getlivegame");
            // console.log(response.data);
            if (response.data.success === true) {
                setGame(true);
                setGameName(response.data.data.gameName);
                setGameId(response.data.data.gameId);
            } else {
                setGame(false);
            }
        } catch (error) {
            setGame(false);
            console.error("Error fetching live game:", error);
        }
    };

    useEffect(() => {
        findliveGame();
    }, []);

    const handleliveGame = () => {
        navigate("/gurugramgame", { state: { gameName, gameId } });
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} alignItems="flex-start">
                    <Typography variant="h3" align="left">
                        Live Game
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {game ? (
                        <>
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
                                <CardActionArea onClick={handleliveGame}>
                                    <CardContent>
                                        <Grid
                                            container
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <Grid item>
                                                <img
                                                    src="./StaticAssets/Images/Icons/Gurugramround.png"
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
                                                alignItems="flex-start" // This ensures all items inside are aligned to the left
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
                                                        42819 Playing
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="open"
                                                        color="success"
                                                        size="small"
                                                        sx={{
                                                            alignSelf:
                                                                "flex-start",
                                                            width: "80px",
                                                            height: "15px",
                                                            fontSize: "10px",
                                                        }}
                                                    />
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
                                                <Grid
                                                    item
                                                    container
                                                    direction="column"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <PlayCircleIcon
                                                        sx={{
                                                            fontSize: "3rem",
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="caption"
                                                        align="center"
                                                    >
                                                        Play
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* Card for Live Result */}
                        </>
                    ) : (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            style={{ width: "100%" }}
                        >
                            <Skeleton
                                variant="rounded"
                                height={80}
                                width="95%"
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default Livegame;
