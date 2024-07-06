import React from 'react'
import Domesticlivegame from './Domesticlivegame'
import Intlivegame from './Intlivegame'
import { Grid, Typography } from '@mui/material'

function LiveGame() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} textAlign={'left'} sx={{ ml: '0.5em' }}>
                <Typography variant="h6">Live Game</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <Domesticlivegame />
            </Grid>
            <Grid item xs={12} md={10}>
                <Intlivegame />
            </Grid>
        </Grid>
    )
}

export default LiveGame
