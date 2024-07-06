import React from 'react'
import { Grid, Typography } from '@mui/material'
import Domesticupcominggames from './Domesticupcominggames'
import Intupcominggames from './Intupcominggames'

function Upcominggames() {
    return (
        <Grid container mt={1} justifyContent="center" alignItems="center">
            <Grid item xs={12} textAlign="center">
                <Typography variant="h6">Upcoming Games</Typography>
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
