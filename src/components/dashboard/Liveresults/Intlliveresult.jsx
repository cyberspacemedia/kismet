import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import { apiClient } from "../../config/Config";

function Intlliveresult() {
    const [gameStatus, setGameStatus] = useState(false);
    const [gameName, setGameName] = useState("");
    const [winnumber, setWinnumber] = useState(0);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    const getSize = () => {
        if (isXs) return "50px";
        if (isSm) return "50px";
        if (isMd) return "100px";
        return "120px";
    };

    const size = getSize();

    useEffect(() => {
        const result = async () => {
            try {
                const response = await apiClient.post("/int_last_game");
                // console.log(response.data);
                setGameStatus(response.data.success);
                setGameName(response.data.data.gameName);
                setStartTime(response.data.data.startTime);
                setEndTime(response.data.data.endTime);

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
                            border: "1px solid #525252",
                            borderRadius: "5px",
                            backgroundColor: "#373736",
                            background:
                                "linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)",
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <div
                                            style={{
                                                width: size,
                                                height: size,
                                                borderRadius: "3px",
                                                background:
                                                    "linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                overflow: "hidden",
                                                border: "solid 1px gray",
                                            }}
                                        >
                                            <img
                                                src={`./StaticAssets/Images/Icons/${gameName}.png`}
                                                alt={gameName}
                                                style={{
                                                    height: "90%",
                                                    width: "90%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
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
                                                variant="subtitle1"
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
                                                Winning Number
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
                                                {startTime} - {endTime}
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
                                            {gameStatus ? (
                                                <Typography
                                                    variant="body2"
                                                    align="right"
                                                    color={"white"}
                                                    sx={{
                                                        padding: "0.5rem",
                                                        borderRadius: "10px",
                                                        color: "#ffff",
                                                        width: "3rem",
                                                        textAlign: "center",
                                                        fontSize: "1.5em",
                                                        background:
                                                            "linear-gradient(47deg, rgba(196,0,255,1) 0%, rgba(156,6,6,1) 100%)",
                                                    }}
                                                >
                                                    {winnumber}
                                                </Typography>
                                            ) : (
                                                <>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                            padding: "0.5rem",
                                                            borderRadius: "5px",
                                                            color: "#ffff",
                                                            fontSize: "0.8rem",
                                                            background:
                                                                "linear-gradient(47deg, rgba(196,0,255,1) 0%, rgba(156,6,6,1) 100%)",
                                                        }}
                                                    >
                                                        <BrowseGalleryIcon
                                                            sx={{
                                                                marginRight:
                                                                    "0.5rem",
                                                            }}
                                                        />
                                                        Waiting
                                                    </Typography>
                                                </>
                                            )}
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

export default Intlliveresult;
