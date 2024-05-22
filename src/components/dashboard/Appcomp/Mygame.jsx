import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";

function Mygame() {
    return (
        <Layout>
            <Typography variant="caption"> My Game</Typography>
            <Grid container justifyContent="center" spacing={1}>
                {/* My Game Card */}
                <Grid item xs={12} md={10}>
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
                                                Crossing Game
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
                                                Gurugram
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
                                                14/02/2024 - ₹600
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
                                                off
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="body2"
                                                align="right"
                                                sx={{
                                                    border: "solid 1px white",
                                                    borderRadius: "5px",
                                                    padding: "15px",
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    background:
                                                        "linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)",
                                                }}
                                            >
                                                No Win
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* My Game Card */}

                {/* My Game Card */}
                <Grid item xs={12} md={10}>
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
                                                Crossing Game
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
                                                Gurugram
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
                                                14/02/2024 - ₹600
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
                                                off
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="body2"
                                                align="right"
                                                sx={{
                                                    border: "solid 1px white",
                                                    borderRadius: "5px",
                                                    padding: "15px",
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    background:
                                                        "linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)",
                                                }}
                                            >
                                                No Win
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* My Game Card */}
                {/* My Game Card */}
                <Grid item xs={12} md={10}>
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
                                                Crossing Game
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
                                                Gurugram
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
                                                14/02/2024 - ₹600
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
                                                off
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="body2"
                                                align="right"
                                                sx={{
                                                    border: "solid 1px white",
                                                    borderRadius: "5px",
                                                    padding: "15px",
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    background:
                                                        "linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)",
                                                }}
                                            >
                                                No Win
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* My Game Card */}
            </Grid>
        </Layout>
    );
}

export default Mygame;
