import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function Mydatepicker({ date, setDate }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                slots={{
                    textField: (params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            sx={{
                                "& .MuiInputBase-root": {
                                    bgcolor: "black",
                                    color: "white",
                                    fontSize: "0.875rem", // Smaller font size
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent", // No border
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                    fontSize: "0.875rem", // Smaller font size
                                },
                                "& .MuiIconButton-root": {
                                    color: "white",
                                    fontSize: "0.875rem", // Smaller font size
                                },
                            }}
                        />
                    ),
                }}
                slotProps={{
                    textField: {
                        label: "Select Date",
                    },
                    paperContent: {
                        sx: {
                            bgcolor: "black",
                            color: "white",
                        },
                    },
                    paper: {
                        sx: {
                            "& .MuiPickersDay-dayWithMargin": {
                                color: "white",
                                bgcolor: "black",
                                "&.Mui-selected": {
                                    bgcolor: "white",
                                    color: "black",
                                },
                                "&:hover": {
                                    bgcolor: "#555",
                                },
                            },
                            "& .MuiPickersYear-yearButton": {
                                color: "white",
                                bgcolor: "black",
                                "&.Mui-selected": {
                                    bgcolor: "white",
                                    color: "black",
                                },
                                "&:hover": {
                                    bgcolor: "#555",
                                },
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
}
