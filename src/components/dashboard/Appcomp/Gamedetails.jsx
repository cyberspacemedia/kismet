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
} from '@mui/material'
import { apiClient } from '../../config/Config'
import AppLoader from '../../Loaders/AppLoader'
import BottomMenu from './Bottommenu'

import Topmenu from './Topmenu'

function Gamedetails() {
    const location = useLocation()
    const [gameData, setGameData] = useState(null)
    const data = location.state.gameDetail

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.post('/mygames_list', data)
                // console.log(response.data.data)
                setGameData(response.data.data)
            } catch (error) {
                console.error('API Error', error)
            }
        }
        fetchData()
    }, [data])

    return (
        <>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="GAME DETAILS" />
                </div>

                {/* End Top Bar */}
                {gameData ? (
                    <div className="content">
                        <Grid container justifyContent="center">
                            <Grid item xs={10} sm={8} md={6} lg={4}>
                                <Card
                                    sx={{
                                        width: '100%',
                                        border: '0.1px solid gray',
                                        borderRadius: '10px',
                                        background:
                                            'linear-gradient(43deg, rgba(42,0,113,1) 0%, rgba(200,78,255,1) 100%)',
                                    }}
                                >
                                    <CardHeader
                                        title={
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: 'black',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    backgroundColor:
                                                        'transparent',
                                                }}
                                            >
                                                {data.gameName}
                                                {data.gameStatus === 0 ? (
                                                    <Chip
                                                        label="Waiting"
                                                        color="secondary"
                                                        sx={{ ml: 1 }}
                                                        size="small"
                                                    />
                                                ) : (
                                                    <Chip
                                                        label="Completed"
                                                        color="success"
                                                        sx={{ ml: 1 }}
                                                        size="small"
                                                    />
                                                )}
                                            </Typography>
                                        }
                                        sx={{
                                            background:
                                                'linear-gradient(to right, #ff416c, #ff4b2b)',
                                            color: 'white',
                                            textAlign: 'center',
                                        }}
                                    />
                                    <CardContent
                                        sx={{ backgroundColor: 'black' }}
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                <img
                                                    src={`./StaticAssets/Images/Icons/${data.gameName}.png`}
                                                    alt={data.gameName}
                                                    style={{
                                                        height: '50px',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ color: 'white' }}
                                                >
                                                    {data.gameName}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: 'white' }}
                                                >
                                                    {data.date}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        color: 'white',
                                                        mt: 1,
                                                    }}
                                                >
                                                    {data.gameType} Game
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption">
                                                    Amount placed on numbers
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                justifyContent="center"
                                                spacing={1}
                                            >
                                                {gameData.map((game, index) => (
                                                    <Grid
                                                        item
                                                        xs={3}
                                                        sm={3}
                                                        key={index}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'column',
                                                                justifyContent:
                                                                    'center',
                                                                alignItems:
                                                                    'center',
                                                                border: '1px solid #2a0071',
                                                                borderRadius:
                                                                    '10px',
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    color: 'red',
                                                                    fontSize:
                                                                        '1rem',
                                                                    fontWeight:
                                                                        'bolder',
                                                                }}
                                                            >
                                                                {game.number}
                                                            </Typography>
                                                            <Box
                                                                sx={{
                                                                    width: '100%',
                                                                    height: '50%',

                                                                    display:
                                                                        'flex',
                                                                    justifyContent:
                                                                        'center',
                                                                    alignItems:
                                                                        'center',
                                                                    borderColor:
                                                                        'solid 0.1px #2a0071',
                                                                    borderTopRightRadius:
                                                                        '5px',
                                                                    borderTopLeftRadius:
                                                                        '5px',
                                                                    borderBottomRightRadius:
                                                                        '5px',
                                                                    borderBottomLeftRadius:
                                                                        '5px',
                                                                    background:
                                                                        'linear-gradient(0deg, rgba(42,0,113,1) 0%, rgba(200,78,255,1) 100%)',
                                                                }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        color: 'white',
                                                                        fontSize:
                                                                            '1rem',
                                                                    }}
                                                                >
                                                                    ₹
                                                                    {
                                                                        game.amount
                                                                    }
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                ) : (
                    <>
                        <AppLoader />
                    </>
                )}
                <BottomMenu />
            </div>
        </>
    )
}

export default Gamedetails
