import React, { useState } from "react";
import { apiClient } from "./config/Config";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Test() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const formData = {
        name,
        email,
    };

    // const handleInputChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // useEffect(() => {
    //     const fetchdata = async () => {
    //         try {
    //             const response = await apiClient.get("/getusers");
    //             console.log(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchdata();
    // }, []);

    const handlesubmit = async () => {
        try {
            console.log(formData);
            const response = await apiClient.post("insertuser", formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={name}
                    sx={{ backgroundColor: "black" }}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={email}
                    sx={{ backgroundColor: "black" }}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlesubmit}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}

export default Test;
