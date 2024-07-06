import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    CardHeader,
    Box,
    IconButton,
} from '@mui/material'
import { apiClient } from '../../config/Config'
import AppLoader from '../../Loaders/AppLoader'
import BottomMenu from './Bottommenu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

function Gamedetails() {
    const navigate = useNavigate()
    const location = useLocation()
    const [gameData, setGameData] = useState(null)
    const data = location.state.gameDetail
    const theme = useTheme()

    const handleBackClick = () => {
        navigate(-1) // Go back to the previous URL
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.post('/mygames_list', data)
                console.log(response.data.data)
                setGameData(response.data.data)
            } catch (error) {
                console.error('API Error', error)
            }
        }
        fetchData()
    }, [data])

    return (
        <Box sx={{ backgroundColor: '#110b19', minHeight: '100vh' }}>
            {/* Top Bar */}
            <Box sx={theme.components.MuiBox.styleOverrides.root['&.topbar']}>
                {/* Logo on Top Left */}
                <IconButton
                    sx={{ color: 'white', marginRight: '10px' }}
                    onClick={handleBackClick}
                >
                    <ArrowCircleLeftIcon />
                </IconButton>

                {/* Typography "GAME DETAILS" in Center */}
                <Typography variant="h6">MY GAME</Typography>
                {/* Notification Icon on Top Right */}
                <IconButton sx={{ color: 'white', marginRight: '10px' }}>
                    <NotificationsIcon />
                </IconButton>
            </Box>
            {/* End Top Bar */}
            {gameData ? (
                <Grid
                    container
                    justifyContent="center"
                    style={{ minHeight: '80vh' }} // Adjust height as needed
                >
                    <Grid item xs={10} sm={8} md={6} lg={4}>
                        <Card
                            sx={{
                                width: '100%',
                                border: '0.1px solid gray',
                                borderRadius: '10px',
                                mt: 5,
                            }}
                        >
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: 'darkgray',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {data.gameName}
                                        {data.gameStatus === 0 ? (
                                            <Chip
                                                label="Waiting"
                                                color="success"
                                                sx={{ ml: 1 }}
                                                size="small"
                                            />
                                        ) : (
                                            <Chip
                                                label="Completed"
                                                color="warning"
                                                sx={{ ml: 1 }}
                                                size="small"
                                            />
                                        )}
                                    </Typography>
                                }
                                sx={{
                                    backgroundColor: 'black',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            />
                            <CardContent sx={{ backgroundColor: 'black' }}>
                                <img
                                    src={`./StaticAssets/Images/Icons/${data.gameName}round.png`}
                                    alt="Custom"
                                    style={{
                                        height: '50px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'white' }}
                                >
                                    {data.gameName}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: 'white' }}
                                >
                                    {data.date}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: 'white', mt: 2 }}
                                >
                                    {data.gameType} Game
                                </Typography>
                                <Typography variant="caption">
                                    Amount placed on numbers
                                </Typography>

                                {/* Create a box here with two number above each other and bborder on both with different color */}

                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent={'center'}
                                >
                                    {gameData.map((game, index) => (
                                        <Grid item xs={3} sm={3} key={index}>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '50px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    border: '1px solid gray',
                                                    borderRadius: '10px',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: '50%',
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: 'red',
                                                            fontSize: '1rem',
                                                            fontWeight:
                                                                'bolder',
                                                        }}
                                                    >
                                                        {game.number}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: '50%',
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                        borderTop:
                                                            'solid 0.1px yellow',
                                                        borderTopRightRadius:
                                                            '5px',
                                                        borderTopLeftRadius:
                                                            '5px',
                                                        borderBottomRightRadius:
                                                            '5px',
                                                        borderBottomLeftRadius:
                                                            '5px',
                                                        backgroundColor:
                                                            'orange',
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: 'black',
                                                            fontSize: '0.7rem',
                                                            fontWeight:
                                                                'bolder',
                                                        }}
                                                    >
                                                        ₹{game.amount}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <>
                    <AppLoader />
                </>
            )}
            <BottomMenu />
        </Box>
    )
}

export default Gamedetails
