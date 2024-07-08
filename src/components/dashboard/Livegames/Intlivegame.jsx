import {
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Skeleton,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { apiClient } from '../../config/Config'

function Intlivegame() {
    const [gameName, setGameName] = useState('')
    const [gameId, setGameId] = useState('')
    const [game, setGame] = useState(false)
    const navigate = useNavigate()

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

    const findliveGame = async () => {
        try {
            const response = await apiClient.post('/int_live_slot')
            // console.log(response.data)
            if (response.data.success === true) {
                setGame(true)
                setGameName(response.data.data.gameName)
                setGameId(response.data.data.gameId)
            } else {
                setGame(false)
            }
        } catch (error) {
            setGame(false)
            console.error('Error fetching live game:', error)
        }
    }

    useEffect(() => {
        findliveGame()
    }, [])

    const handleliveGame = () => {
        navigate('/gurugramgame', { state: { gameName, gameId } })
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    {game ? (
                        <>
                            {/* Card for Live Result */}
                            <Card
                                sx={{
                                    width: '95%',
                                    margin: '0 auto',
                                    border: '1px solid ##069c21',
                                    borderRadius: '5px',
                                    backgroundColor: '#373736',
                                    background:
                                        'linear-gradient(47deg, rgba(1,31,2,1) 0%, rgba(6,156,33,1) 100%)',
                                }}
                            >
                                <CardActionArea onClick={handleliveGame}>
                                    <CardContent>
                                        <Grid
                                            container
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <Grid item>
                                                <div
                                                    style={{
                                                        width: size,
                                                        height: size,
                                                        borderRadius: '3px',
                                                        background:
                                                            'linear-gradient(47deg, rgba(1,31,2,1) 0%, rgba(6,156,33,1) 100%)',
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                        overflow: 'hidden',
                                                        border: 'solid 1px gray',
                                                    }}
                                                >
                                                    <img
                                                        src={`./StaticAssets/Images/Icons/${gameName}.png`}
                                                        alt={gameName}
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
                                                alignItems="flex-start" // This ensures all items inside are aligned to the left
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
                                                        42819 Playing
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Chip
                                                        label="open"
                                                        color="success"
                                                        size="small"
                                                        sx={{
                                                            alignSelf:
                                                                'flex-start',
                                                            width: '80px',
                                                            height: '15px',
                                                            fontSize: '10px',
                                                        }}
                                                    />
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
                                                <Grid
                                                    item
                                                    container
                                                    direction="column"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <PlayCircleIcon
                                                        sx={{
                                                            fontSize: '3rem',
                                                            color: '#ffff',
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="caption"
                                                        align="center"
                                                    >
                                                        Play
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* Card for Live Result */}
                        </>
                    ) : (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            style={{ width: '100%' }}
                        >
                            <Skeleton
                                variant="rounded"
                                height={80}
                                width="95%"
                                sx={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default Intlivegame
