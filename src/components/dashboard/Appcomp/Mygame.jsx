import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Skeleton,
} from "@mui/material";
import UserContext from "../../UserContext";
import { apiClient } from "../../config/Config";
import AppLoader from "../../Loaders/AppLoader";

function Mygame() {
    const userId = useContext(UserContext);
    const [game, setGame] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        const fetchgamedata = async () => {
            try {
                const response = await apiClient.post("mygames", userId);
                // console.log(response.data);

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

    return (
        <Layout>
            {loader && (
                <>
                    <AppLoader />
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Skeleton
                                variant="rounded"
                                height={80}
                                width="95%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Skeleton
                                variant="rounded"
                                height={80}
                                width="95%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Skeleton
                                variant="rounded"
                                height={80}
                                width="95%"
                            />
                        </Grid>
                    </Grid>
                </>
            )}

            <Typography variant="caption"> My Game</Typography>
            <Grid container justifyContent="center" spacing={1}>
                {game.map((gameItem, index) => (
                    <Grid item xs={12} md={10} key={index}>
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
                                            <Grid item>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: "bold",
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
                                                        fontSize: "0.6rem",
                                                        color: "#b6b6b2",
                                                    }}
                                                    align="left"
                                                >
                                                    {gameItem.gameName}
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
                                                    14/02/2024 - ₹
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
                                                <Typography
                                                    variant="body2"
                                                    align="right"
                                                    color={"lightgreen"}
                                                >
                                                    {gameItem.status === 1
                                                        ? "on"
                                                        : "Off"}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="body2"
                                                    align="right"
                                                    sx={{
                                                        border: "solid 1px white",
                                                        borderRadius: "5px",
                                                        padding: "10px",
                                                        fontWeight: "bold",
                                                        color: "white",
                                                        background:
                                                            "linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)",
                                                    }}
                                                >
                                                    {gameItem.status === 1
                                                        ? "Waiting"
                                                        : "Declare Result Here"}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
}

export default Mygame;
