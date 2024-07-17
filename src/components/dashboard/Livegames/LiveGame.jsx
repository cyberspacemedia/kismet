import React from 'react'
import Domesticlivegame from './Domesticlivegame'
import Intlivegame from './Intlivegame'
import { Divider, Grid, Typography } from '@mui/material'

function LiveGame() {
    return (
        <Grid container spacing={1} mt={1}>
            <Grid
                item
                xs={12}
                lg={12}
                md={12}
                textAlign={'left'}
                sx={{ ml: '0.5em' }}
            >
                <Divider
                    sx={{
                        color: '#ffffff', // Ensure the text color is white
                        '&::before, &::after': {
                            borderColor: '#8000ba', // Set the color of the divider lines
                        },
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            padding: '0 0.5rem', // Add padding around the text for better visibility
                        }}
                    >
                        Live Game
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12} md={10} lg={12}>
                <Domesticlivegame />
            </Grid>
            <Grid item xs={12} md={10} lg={12}>
                <Intlivegame />
            </Grid>
        </Grid>
    )
}

export default LiveGame
