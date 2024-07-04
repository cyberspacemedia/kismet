import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
    Grid,
    Select,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Box,
} from "@mui/material";
import Mydatepicker from "./Mydatepicker";
import { apiClient } from "../../config/Config";
import AppLoader from "../../Loaders/AppLoader";

import Bottommenu from "./Bottommenu";

function Chartscomp() {
    const [loader, setLoader] = useState(false);
    const [game, setGame] = useState("");
    const [date, setDate] = useState(null);
    const [gameData, setGameData] = useState([]);
    const [gamestatus, setGamestatus] = useState(false);
    const handleGameSelect = (e) => {
        setGame(e.target.value);
    };

    const fetchdata = async (data) => {
        setLoader(true); // Show loader
        try {
            const response = await apiClient.post("charts", data);
            if (response.data.success === true) {
                setGameData(response.data.data);
                setGamestatus(true);
            } else {
                setGamestatus(false);
            }
        } catch (error) {
            console.error("API Error", error);
        } finally {
            setLoader(false); // Hide loader
        }
    };

    const handlechartsubmit = async () => {
        setGamestatus(false);
        const data = {
            gameName: game,
            date: date?.format("DD-MM-YYYY"),
        };
        fetchdata(data);
    };

    useEffect(() => {
        const data = {
            gameName: "",
            date: date?.format("DD-MM-YYYY"),
        };
        fetchdata(data);
    }, [date]);

    return (
        <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
            <Typography variant="caption">Charts</Typography>
            {loader && <AppLoader />}
            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
            >
                <Grid item xs={5}>
                    <FormControl fullWidth variant="filled" size="small">
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: "white", fontSize: "0.8rem" }}
                        >
                            Select Game
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={game}
                            label="Select Game"
                            onChange={handleGameSelect}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: "black",
                                        color: "white",
                                    },
                                },
                            }}
                            sx={{
                                bgcolor: "black",
                                color: "white",
                                fontSize: "1rem",
                                ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor: "white",
                                    },
                                ".MuiSvgIcon-root": {
                                    color: "white",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "white",
                                },
                            }}
                        >
                            <MenuItem
                                value="Disawar"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Disawar
                            </MenuItem>
                            <MenuItem
                                value="Gali"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Gali
                            </MenuItem>
                            <MenuItem
                                value="Faridabad"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Faridabad
                            </MenuItem>
                            <MenuItem
                                value="Gaziabad"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Gaziabad
                            </MenuItem>
                            <MenuItem
                                value="Gurugram"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Gurugram
                            </MenuItem>
                            <MenuItem
                                value="Rewari"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Rewari
                            </MenuItem>
                            <MenuItem
                                value="Alwar"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Alwar
                            </MenuItem>
                            <MenuItem
                                value="Rohtak"
                                sx={{
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                Rohtak
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <Mydatepicker date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handlechartsubmit}
                        sx={{
                            width: "2.5em",
                            height: "2.5em",
                            minWidth: "unset",
                            padding: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>

            {gamestatus === true && (
                <Grid container justifyContent="center" alignItems="center">
                    {gameData.map((game, index) => (
                        <Grid
                            container
                            justifyContent="center" // Center horizontally
                            alignItems="center" // Center vertically
                            sx={{
                                width: "90%",
                                p: "10px",
                                mt: "5px",
                                margin: "20px auto 0 auto",
                                border: "solid 1px gray",
                                borderRadius: "15px",
                                backgroundColor: "#343433",
                            }}
                            key={index}
                        >
                            <Grid
                                item
                                xs={4}
                                container
                                justifyContent="flex-start"
                            >
                                <img
                                    alt="Game"
                                    src={`./StaticAssets/Images/Icons/${game.gameName}round.png`}
                                    style={{ height: "50px" }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="baseline"
                            >
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{ fontWeight: "bold", color: "white" }}
                                >
                                    {game.gameName}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    align="center"
                                    sx={{ color: "gray" }}
                                >
                                    Winning Number {game.startTime} -{" "}
                                    {game.endTime}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} container justifyContent="end">
                                <Typography
                                    variant="h5"
                                    color="initial"
                                    sx={{
                                        padding: "10px",
                                        border: "solid 1px gray",
                                        borderRadius: "10px",
                                        display: "flex", // Ensure flexbox is used
                                        justifyContent: "center", // Center content horizontally
                                        alignItems: "center", // Center content vertically
                                        color: "#ff5b00",
                                        fontWeight: "bold",
                                        fontSize: "1em",
                                        background:
                                            "linear-gradient(60deg, rgba(78,78,77,1) 0%, rgba(0,0,0,1) 100%)",
                                    }}
                                >
                                    {game.winNumber}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Bottommenu />
        </Box>
    );
}

export default Chartscomp;
