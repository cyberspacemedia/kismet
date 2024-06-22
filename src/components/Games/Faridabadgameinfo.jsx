import React from "react";
import Layout from "../dashboard/Layout";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

function Faridabadgameinfo() {
    return (
        <Layout>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={10}>
                    <Typography variant="h1">Faridabad</Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                    <Card
                        sx={{
                            backgroundColor: "#1c1c1c",
                            width: "90%",
                            margin: "0 auto",
                            borderRadius: "20px",
                            border: "solid 1px #585858",
                            mt: 2,
                        }}
                    >
                        <CardActionArea>
                            <CardHeader
                                title="Details about game"
                                sx={{
                                    color: "white",
                                    backgroundColor: "#303030",
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Game Info"
                                image="./StaticAssets/Images/Icons/Gurugram.png"
                                height="100"
                                sx={{ objectFit: "contain", mt: 1 }}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color={"#bababa"}
                                    sx={{ m: 1 }}
                                >
                                    Declares only one lucky number in a day that
                                    is same followed by all our country.
                                </Typography>
                                <Divider
                                    variant="middle"
                                    sx={{
                                        borderColor: "#ffffff",
                                        borderWidth: "0.5px",
                                        width: "50%",
                                        margin: "0 auto",
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ m: 1 }}
                                    color={"#bababa"}
                                >
                                    You can win huge money by placing that on
                                    your lucky number.
                                </Typography>
                                <Divider
                                    variant="middle"
                                    sx={{
                                        borderColor: "#ffffff",
                                        borderWidth: "0.5px",
                                        width: "50%",
                                        margin: "0 auto",
                                    }}
                                />

                                <Box
                                    sx={{
                                        width: "90%",
                                        margin: "0 auto",
                                        border: "solid 0.5px white",
                                        borderRadius: "10px",
                                        p: 1.5,
                                        mt: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Game Close time
                                        </Typography>
                                        <Typography variant="caption">
                                            05:42 PM
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Game Result time
                                        </Typography>
                                        <Typography variant="caption">
                                            06:30 PM
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Faridabadgameinfo;
