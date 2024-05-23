import {
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const gameName = "Alwar";

function Livegame() {
    const navigate = useNavigate();
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} alignItems="flex-start">
                    <Typography variant="h3" align="left">
                        Live Game
                    </Typography>
                </Grid>
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
                        <CardActionArea
                            onClick={() => navigate("/gurugramgame")}
                        >
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
                                                sx={{ alignSelf: "flex-start" }}
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
                                                    fontSize: "4rem",
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
                </Grid>
            </Grid>
        </>
    );
}

export default Livegame;
