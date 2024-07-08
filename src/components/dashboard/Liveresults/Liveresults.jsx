import React from 'react'

import { Divider, Grid, Typography } from '@mui/material'
import Domesticliveresult from './Domesticliveresult'
import Intlliveresult from './Intlliveresult'

function LiveGame() {
    return (
        <Grid container spacing={1} mt={1}>
            <Grid item xs={12} textAlign={'left'} sx={{ ml: '0.5em' }}>
                <Divider
                    sx={{
                        color: '#ffffff', // Ensure the text color is white
                        '&::before, &::after': {
                            borderColor: '#8000ba', // Set the color of the divider lines
                        },
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            padding: '0 0.5rem', // Add padding around the text for better visibility
                        }}
                    >
                        Live Results
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12} md={10}>
                <Domesticliveresult />
            </Grid>
            <Grid item xs={12} md={10}>
                <Intlliveresult />
            </Grid>
        </Grid>
    )
}

export default LiveGame
