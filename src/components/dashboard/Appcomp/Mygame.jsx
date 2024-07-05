import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    IconButton,
} from "@mui/material";
import UserContext from "../../UserContext";
import { apiClient } from "../../config/Config";
import AppLoader from "../../Loaders/AppLoader";
import BottomMenu from "./Bottommenu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useTheme } from "@mui/material/styles";

function Mygame() {
    const navigate = useNavigate();
    const userId = useContext(UserContext);
    const [game, setGame] = useState([]);
    const [loader, setLoader] = useState(false);
    const theme = useTheme();

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous URL
    };

    useEffect(() => {
        setLoader(true);
        const fetchgamedata = async () => {
            try {
                const response = await apiClient.post("mygames", userId);
                console.log(response.data);

                if (response.data.success === true) {
                    setGame(response.data.data);
                    setLoader(false);
                } else {
                    setLoader(true);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchgamedata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const handlegameclick = async (
        gameName,
        gameType,
        gameId,
        date,
        gameStatus
    ) => {
        setLoader(true);
        const user = userId.userId;
        const gameDetail = {
            userId: user,
            gameName: gameName,
            gameType: gameType,
            gameId: gameId,
            date: date,
            gameStatus: gameStatus,
        };
        //  console.log(data);
        setTimeout(() => {
            navigate("/gamedetails", { state: { gameDetail } });
        }, 2000);
    };

    return (
        <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
            {/* Top Bar */}
            <Box sx={theme.components.MuiBox.styleOverrides.root["&.topbar"]}>
                {/* Logo on Top Left */}
                <IconButton
                    sx={{ color: "white", marginRight: "10px" }}
                    onClick={handleBackClick}
                >
                    <ArrowCircleLeftIcon />
                </IconButton>

                {/* Typography "GAME DETAILS" in Center */}
                <Typography variant="h6">GAME DETAILS</Typography>
                {/* Notification Icon on Top Right */}
                <IconButton sx={{ color: "white", marginRight: "10px" }}>
                    <NotificationsIcon />
                </IconButton>
            </Box>
            {/* End Top Bar */}

            {loader && <AppLoader />}

            <Grid container justifyContent="center">
                <Box sx={{ height: "80vh", overflowY: "auto", width: "100%" }}>
                    {game.map((gameItem, index) => (
                        <Grid item xs={12} md={10} key={index} m={1}>
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
                                    onClick={() => {
                                        handlegameclick(
                                            gameItem.gameName,
                                            gameItem.gameType,
                                            gameItem.gameId,
                                            gameItem.date,
                                            gameItem.status
                                        );
                                    }}
                                >
                                    <CardContent>
                                        <Grid
                                            container
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <Grid item>
                                                <img
                                                    src={`./StaticAssets/Images/Icons/${gameItem.gameName}round.png`}
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
                                                <Grid
                                                    item
                                                    container
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Grid item>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                fontSize:
                                                                    "1rem",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                            align="left"
                                                        >
                                                            {gameItem.gameName}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                border: "solid 0.1px orange",
                                                                p: "0.5em",
                                                                width: "2em",
                                                                height: "2em",
                                                                borderRadius:
                                                                    "5px",
                                                                bgcolor:
                                                                    "black",
                                                                fontSize: "1em",
                                                                fontWeight:
                                                                    "bold",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            {gameItem.gameStatus ===
                                                            1
                                                                ? gameItem.winNumber
                                                                : "NA"}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontSize: "0.6rem",
                                                            color: "#b6b6b2",
                                                        }}
                                                        align="left"
                                                    >
                                                        {gameItem.gameType}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontSize: "0.7rem",
                                                            color: "#b6b6b2",
                                                        }}
                                                        align="left"
                                                    >
                                                        {gameItem.date} - ₹
                                                        {gameItem.totalAmount}
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
                                                    {gameItem.gameStatus ===
                                                    0 ? (
                                                        <Chip
                                                            label="RESULT"
                                                            color="success"
                                                            size="small"
                                                            sx={{
                                                                mb: 1,
                                                                width: "5rem",
                                                            }}
                                                        />
                                                    ) : (
                                                        <Chip
                                                            label="OFF"
                                                            color="warning"
                                                            size="small"
                                                            variant="outlined"
                                                            sx={{
                                                                mb: 1,
                                                                width: "5rem",
                                                            }}
                                                        />
                                                    )}
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        variant="body2"
                                                        align="right"
                                                        sx={{
                                                            border: "solid 0.1px white",
                                                            borderRadius: "5px",
                                                            padding: "5px",
                                                            fontWeight: "bold",
                                                            color: "white",
                                                            textAlign: "center",
                                                            width: "7rem",
                                                            background:
                                                                "linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)",
                                                        }}
                                                    >
                                                        {gameItem.gameStatus ===
                                                        1
                                                            ? gameItem.winStatus ===
                                                              0
                                                                ? "No Rewards"
                                                                : "Winner"
                                                            : "Waiting"}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Box>
            </Grid>
            <BottomMenu />
        </Box>
    );
}

export default Mygame;
