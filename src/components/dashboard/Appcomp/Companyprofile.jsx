import React from "react";
import Layout from "../Layout";
import StarIcon from "@mui/icons-material/Star";

import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Rating,
    Typography,
} from "@mui/material";
function Companyprofile() {
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12}>
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
                                title="Company Profile"
                                sx={{
                                    color: "white",
                                    backgroundColor: "#303030",
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="caption"
                                    color="#bababa"
                                    sx={{
                                        m: 1,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StarIcon
                                        sx={{ mr: 1, color: "orange" }}
                                        fontSize="small"
                                    />{" "}
                                    The company will keep all your information
                                    secure.
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="#bababa"
                                    sx={{
                                        m: 1,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StarIcon
                                        sx={{ mr: 1, color: "orange" }}
                                        fontSize="small"
                                    />{" "}
                                    You can join company without thinking, its
                                    100% secure and safe.
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="#bababa"
                                    sx={{
                                        m: 1,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StarIcon
                                        sx={{ mr: 1, color: "orange" }}
                                        fontSize="small"
                                    />{" "}
                                    The company will respect your work and stay
                                    connected with you as a friend.
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="#bababa"
                                    sx={{
                                        m: 1,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StarIcon
                                        sx={{ mr: 1, color: "orange" }}
                                        fontSize="small"
                                    />{" "}
                                    The work of company is goinf from many
                                    years. We have thousands of customers
                                    associated with us.
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
                                    variant="h1"
                                    color="orange"
                                    sx={{ mt: 3 }}
                                >
                                    5 Star Rating App
                                </Typography>
                                <Rating name="read-only" value={15} readOnly />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Companyprofile;
