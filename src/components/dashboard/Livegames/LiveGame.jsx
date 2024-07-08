import React from 'react'
import Domesticlivegame from './Domesticlivegame'
import Intlivegame from './Intlivegame'
import { Divider, Grid, Typography } from '@mui/material'

function LiveGame() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} textAlign={'left'} sx={{ ml: '0.5em' }}>
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
                        Live Game
                    </Typography>
                </Divider>
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
