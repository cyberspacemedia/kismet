import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import Domesticupcominggames from './Domesticupcominggames'
import Intupcominggames from './Intupcominggames'

function Upcominggames() {
    return (
        <Grid container mt={1} justifyContent="center" alignItems="center">
            <Grid item xs={12} textAlign="center">
                <Divider
                    sx={{
                        color: '#ffffff', // Ensure the text color is white
                        '&::before, &::after': {
                            borderColor: '#ffffff', // Set the color of the divider lines
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: '#ffffff', // Set the color of the centered text

                            padding: '0 0.5rem', // Add padding around the text for better visibility
                        }}
                    >
                        Upcoming Game
                    </Typography>
                </Divider>
            </Grid>
            <Grid
                item
                xs={6}
                md={6}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Domesticupcominggames />
            </Grid>
            <Grid
                item
                xs={6}
                md={6}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Intupcominggames />
            </Grid>
        </Grid>
    )
}

export default Upcominggames
