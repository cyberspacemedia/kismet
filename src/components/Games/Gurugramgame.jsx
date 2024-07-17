import React from 'react'
import { Box, Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'

import Gametab from './Matka/Gametab'
import Topmenu from '../dashboard/Appcomp/Topmenu'
function Gurugramgame() {
    const location = useLocation()
    const { gameName, gameId } = location.state || {}

    return (
        <>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu={gameName} />
                </div>
                <div className="content">
                    <Box sx={{ backgroundColor: 'black', minHeight: '85vh' }}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Gametab gameName={gameName} gameId={gameId} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Gurugramgame
