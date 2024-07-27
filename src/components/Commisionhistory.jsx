import React, { useContext, useEffect, useState } from 'react'
import Topmenu from './dashboard/Appcomp/Topmenu'
import BottomMenu from './dashboard/Appcomp/Bottommenu'
import { Box, Grid, Paper, Typography } from '@mui/material'
import UserContext from './UserContext'
import { apiClient } from './config/Config'
import AppLoader from './Loaders/AppLoader'

function Commisionhistory() {
    const { userId } = useContext(UserContext)
    const [commision, setCommision] = useState([])
    const [dataFound, setDataFound] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const data = { userId }
        const fetchhistory = async () => {
            try {
                const response = await apiClient.post('commissionHistory', data)
                // console.log(response)
                if (response.data.success === true) {
                    setDataFound(true)
                    setCommision(response.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setDataFound(false)
                }
            } catch (error) {
                console.error('API Error Commission', error)
            }
        }
        fetchhistory()
    }, [userId])

    return (
        <div className="layout-container">
            {loading && <AppLoader />}
            <div className="top-menu">
                <Topmenu menu="COMMISSION HISTORY" />
            </div>

            <div className="content">
                <Grid container justifyContent="center">
                    <Box sx={{ width: '100%' }}>
                        {dataFound ? (
                            <>
                                {commision.map((data, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={10}
                                        mb={1}
                                        key={index}
                                    >
                                        <Paper
                                            elevation={1}
                                            variant="elevation"
                                            sx={{
                                                width: '100%',
                                                p: '10px',
                                                background:
                                                    'linear-gradient(79deg, rgba(161,0,84,1) 0%, rgba(181,0,186,1) 100%)',
                                            }}
                                        >
                                            <Box
                                                display="flex"
                                                justifyContent="space-between"
                                                alignItems={'center'}
                                            >
                                                <Box flex={1}>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                        sx={{
                                                            borderRadius: '5px',
                                                            border: 'solid 1px white',
                                                            textAlign: 'center',
                                                            p: 1,
                                                            fontSize: '1rem',
                                                            width: '50%',
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </Typography>
                                                </Box>
                                                <Box flex={2}>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                    >
                                                        {data.date}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                    >
                                                        {data.time}
                                                    </Typography>
                                                </Box>
                                                <Box flex={1}>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                    >
                                                        ₹ {data.amount}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </>
                        ) : (
                            <>No History Found</>
                        )}
                    </Box>
                </Grid>
            </div>
            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </div>
    )
}

export default Commisionhistory
