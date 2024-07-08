import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { apiClient } from '../../config/Config'

function Domesticliveresult() {
    const [gameStatus, setGameStatus] = useState(false)
    const [gameName, setGameName] = useState('')
    const [winnumber, setWinnumber] = useState(0)
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('xs'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    const getSize = () => {
        if (isXs) return '50px'
        if (isSm) return '50px'
        if (isMd) return '100px'
        return '120px'
    }

    const size = getSize()

    useEffect(() => {
        const result = async () => {
            try {
                const response = await apiClient.post('/last_game')
                console.log(response.data)
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
            <Grid container>
                <Grid item xs={12}>
                    {/* Card for Live Result */}
                    <Card
                        sx={{
                            width: '95%',
                            margin: '0 auto',
                            border: '1px solid #525252',
                            borderRadius: '5px',
                            backgroundColor: '#373736',
                            background:
                                'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <div
                                            style={{
                                                width: size,
                                                height: size,
                                                borderRadius: '50%',
                                                background:
                                                    'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                overflow: 'hidden',
                                                border: 'solid 1px gray',
                                            }}
                                        >
                                            <img
                                                src={`./StaticAssets/Images/Icons/${gameName}.png`}
                                                alt="Custom"
                                                style={{
                                                    height: '90%',
                                                    width: '90%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
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
                                                variant="subtitle1"
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

export default Domesticliveresult
