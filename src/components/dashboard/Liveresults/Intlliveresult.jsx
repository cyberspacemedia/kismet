import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { apiClient } from '../../config/Config'

function Intlliveresult() {
    const [gameStatus, setGameStatus] = useState(false)
    const [gameName, setGameName] = useState('')
    const [winnumber, setWinnumber] = useState(0)
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    useEffect(() => {
        const result = async () => {
            try {
                const response = await apiClient.post('/int_last_game')
                // console.log(response.data);
                setGameStatus(response.data.success)
                setGameName(response.data.data.gameName)
                setStartTime(response.data.data.startTime)
                setEndTime(response.data.data.endTime)
                if (response.data.success === true) {
                    setWinnumber(response.data.data.number)
                }
            } catch (error) {}
        }
        result()
    }, [])

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    {/* Card for Live Result */}
                    <Card
                        sx={{
                            width: '95%',
                            margin: '0 auto',
                            border: '1px solid gray',
                            borderRadius: '15px',
                            backgroundColor: '#373736',
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <img
                                            src={`./StaticAssets/Images/Icons/${gameName}.png`}
                                            alt="Custom"
                                            style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        xs
                                        direction="column"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: '15px',
                                                    fontWeight: 'bold',
                                                }}
                                                align="left"
                                            >
                                                {gameName}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: '12px',
                                                    color: '#b6b6b2',
                                                }}
                                                align="left"
                                            >
                                                Winning Number
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontSize: '12px',
                                                    color: '#b6b6b2',
                                                }}
                                                align="left"
                                            >
                                                {startTime} - {endTime}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        xs
                                        direction="column"
                                        justifyContent={'flex-end'}
                                        alignItems={'end'}
                                    >
                                        <Grid item>
                                            {gameStatus ? (
                                                <Typography
                                                    variant="body2"
                                                    align="right"
                                                    color={'white'}
                                                    sx={{
                                                        padding: '0.5rem',
                                                        border: 'solid 1px gray',
                                                        borderRadius: '10px',
                                                        color: '#ffff',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.8em',
                                                        background:
                                                            'linear-gradient(60deg, rgba(78,78,77,1) 0%, rgba(0,0,0,1) 100%)',
                                                    }}
                                                >
                                                    {winnumber}
                                                </Typography>
                                            ) : (
                                                <>
                                                    <span>Result</span>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            padding: '0.5rem',
                                                            border: 'solid 0.1px gray',
                                                            borderRadius: '5px',
                                                            color: 'orange',
                                                            fontWeight: 'bold',
                                                            fontSize: '1em',
                                                            background:
                                                                'linear-gradient(60deg, rgba(78,78,77,1) 0%, rgba(0,0,0,1) 100%)',
                                                        }}
                                                    >
                                                        Waiting
                                                    </Typography>
                                                </>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* Card for Live Result */}
                </Grid>
            </Grid>
        </>
    )
}

export default Intlliveresult
