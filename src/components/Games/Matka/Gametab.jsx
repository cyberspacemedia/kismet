import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Jodigame from "./Jodigame";
import Crossinggame from "./Crossinggame";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Gametab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Game Tab"
                    centered
                    sx={{
                        backgroundColor: "black",
                        "& .MuiTabs-indicator": {
                            backgroundColor: "orange",
                        },
                        "& .Mui-selected": {
                            color: "white !important",
                        },
                    }}
                >
                    <Tab
                        label="Jodi"
                        {...a11yProps(0)}
                        sx={{ color: "gray" }}
                    />
                    <Tab
                        label="Crossing"
                        {...a11yProps(1)}
                        sx={{ color: "gray" }}
                    />
                    <Tab
                        label="Haruf"
                        {...a11yProps(2)}
                        sx={{ color: "gray" }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Jodigame />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Crossinggame />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Haruf Coming Soon
            </CustomTabPanel>
        </Box>
    );
}