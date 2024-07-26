import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Grid, Paper } from '@mui/material'
import Topmenu from './Topmenu'
import { apiClient } from '../../config/Config'
import AppLoader from '../../Loaders/AppLoader'
import BottomMenu from './Bottommenu'

function Leaderboard() {
    const [leaddata, setLeaddata] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        const getLeaderboard = async () => {
            const leaderboard = await apiClient.post('/getLeaderboard')
            console.log(leaderboard.data.data)
            setLeaddata(leaderboard.data.data)
            setLoader(false)
        }
        getLeaderboard()
    }, [])

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="LEADERBOARD" />
            </div>
            {loader && <AppLoader />}
            <div className="content">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        {leaddata.map((lead, index) => (
                            <Paper
                                variant="outlined"
                                key={index}
                                sx={{
                                    padding: 1,
                                    margin: 1,
                                    borderRadius: 5,
                                    background:
                                        'linear-gradient(318deg, rgba(151,0,161,1) 0%, rgba(106,0,186,1) 100%)',
                                }}
                            >
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                        <Box
                                            sx={{
                                                width: 25,
                                                height: 25,
                                                borderRadius: '50%',
                                                background:
                                                    'linear-gradient(184deg, rgba(161,0,84,1) 0%, rgba(181,0,186,1) 100%)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                border: '1px solid #fff',
                                            }}
                                        >
                                            <Typography variant="caption">
                                                {index + 1}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ marginLeft: 2 }}
                                        >
                                            {lead.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: '1em',
                                                }}
                                            >
                                                ₹{' '}
                                            </span>{' '}
                                            {lead.amount}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Box>
                </Box>
            </div>
            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </div>
    )
}

export default Leaderboard
