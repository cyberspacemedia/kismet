import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import UserContext from '../../UserContext'
import { apiClient } from '../../config/Config'
import BottomMenu from './Bottommenu'
import Topmenu from './Topmenu'
import AppLoader from '../../Loaders/AppLoader'
import '../../../theme/Game.css'
function Mygame() {
    const navigate = useNavigate()
    const userId = useContext(UserContext)
    const [game, setGame] = useState([])
    const [loader, setLoader] = useState(false)

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    const getSize = () => {
        if (isXs) return '60px'
        if (isSm) return '60px'
        if (isMd) return '100px'
        return '120px'
    }
    const size = getSize()
    useEffect(() => {
        setLoader(true)
        const fetchgamedata = async () => {
            try {
                const response = await apiClient.post('mygames', userId)
                console.log(response.data)

                if (response.data.success === true) {
                    setGame(response.data.data)
                    setLoader(false)
                } else {
                    setLoader(true)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchgamedata()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    const handlegameclick = async (
        gameName,
        gameType,
        gameId,
        date,
        gameStatus
    ) => {
        setLoader(true)
        const user = userId.userId
        const gameDetail = {
            userId: user,
            gameName: gameName,
            gameType: gameType,
            gameId: gameId,
            date: date,
            gameStatus: gameStatus,
        }
        //  console.log(data);
        setTimeout(() => {
            navigate('/gamedetails', { state: { gameDetail } })
        }, 1000)
    }

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="MY GAME" />
            </div>

            {loader && <AppLoader />}

            <div className="content">
                <Grid container justifyContent="center">
                    <Box sx={{ width: '100%' }}>
                        {game.map((gameItem, index) => (
                            <Grid item xs={12} md={10} key={index} mb={1}>
                                <Card
                                    sx={{
                                        width: '95%',
                                        margin: '0 auto',
                                        border: '1px solid #525252',
                                        borderRadius: '0px',
                                        backgroundColor: '#373736',
                                        background:
                                            'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                                    }}
                                >
                                    <CardActionArea
                                        onClick={() => {
                                            handlegameclick(
                                                gameItem.gameName,
                                                gameItem.gameType,
                                                gameItem.gameId,
                                                gameItem.date,
                                                gameItem.gameStatus
                                            )
                                        }}
                                    >
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

                                                            background:
                                                                'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                                                            display: 'flex',

                                                            alignItems:
                                                                'center',
                                                            overflow: 'hidden',
                                                            border: 'solid 1px gray',
                                                        }}
                                                    >
                                                        <img
                                                            src={`./StaticAssets/Images/Icons/${gameItem.gameName}.png`}
                                                            alt={game.gameName}
                                                            style={{
                                                                height: '90%',
                                                                width: '90%',
                                                                objectFit:
                                                                    'cover',
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
                                                    <Grid
                                                        item
                                                        container
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                    >
                                                        <Grid item>
                                                            <Typography
                                                                variant="subtitle2"
                                                                align="left"
                                                            >
                                                                {
                                                                    gameItem.gameName
                                                                }
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    padding:
                                                                        '0.5rem',
                                                                    width: '2rem',
                                                                    height: '2rem',
                                                                    borderRadius:
                                                                        '5px',
                                                                    color: '#ffff',
                                                                    display:
                                                                        'flex',
                                                                    alignItems:
                                                                        'center',
                                                                    justifyContent:
                                                                        'center',
                                                                    fontSize:
                                                                        '1rem',
                                                                    fontWeight:
                                                                        'bold',
                                                                    background:
                                                                        'linear-gradient(47deg, rgba(196,0,255,1) 0%, rgba(156,6,6,1) 100%)',
                                                                }}
                                                            >
                                                                {gameItem.gameStatus ===
                                                                1
                                                                    ? gameItem.winNumber
                                                                    : 'NA'}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                fontSize:
                                                                    '0.6rem',
                                                                color: '#b6b6b2',
                                                            }}
                                                            align="left"
                                                        >
                                                            {gameItem.gameType}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                fontSize:
                                                                    '0.7rem',
                                                                color: '#b6b6b2',
                                                            }}
                                                            align="left"
                                                        >
                                                            {gameItem.date} - ₹{' '}
                                                            {
                                                                gameItem.totalAmount
                                                            }
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
                                                        {gameItem.gameStatus ===
                                                        0 ? (
                                                            <Chip
                                                                label="RESULT"
                                                                color="success"
                                                                size="small"
                                                                sx={{
                                                                    mb: 1,
                                                                    width: '5rem',
                                                                }}
                                                            />
                                                        ) : (
                                                            <Chip
                                                                label="OFF"
                                                                color="warning"
                                                                size="small"
                                                                variant="outlined"
                                                                sx={{
                                                                    mb: 1,
                                                                    width: '5rem',
                                                                }}
                                                            />
                                                        )}
                                                    </Grid>
                                                    <Grid item>
                                                        {gameItem.gameStatus ===
                                                        1 ? (
                                                            gameItem.winStatus ===
                                                            0 ? (
                                                                <>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            border: 'solid 0.1px white',
                                                                            borderRadius:
                                                                                '5px',
                                                                            padding:
                                                                                '5px',
                                                                            fontWeight:
                                                                                'bold',
                                                                            color: 'white',
                                                                            textAlign:
                                                                                'center',
                                                                            width: '6rem',
                                                                            background:
                                                                                'linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)',
                                                                        }}
                                                                    >
                                                                        No
                                                                        Rewards
                                                                    </Typography>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        sx={{
                                                                            border: 'solid 0.1px #ff4ed1',
                                                                            borderRadius:
                                                                                '5px',
                                                                            padding:
                                                                                '5px',

                                                                            color: 'white',
                                                                            textAlign:
                                                                                'center',
                                                                            width: '6rem',
                                                                            backgroundColor:
                                                                                '#96387d',
                                                                            display:
                                                                                'flex', // Enable flexbox
                                                                            alignItems:
                                                                                'center', // Vertically center the content
                                                                            justifyContent:
                                                                                'center', // Horizontally center the content
                                                                        }}
                                                                    >
                                                                        <MilitaryTechIcon
                                                                            sx={{
                                                                                marginRight:
                                                                                    '5px',
                                                                                color: 'Yellow',
                                                                            }}
                                                                        />{' '}
                                                                        Winner
                                                                    </Typography>
                                                                </>
                                                            )
                                                        ) : (
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    border: 'solid 0.1px white',
                                                                    borderRadius:
                                                                        '5px',
                                                                    padding:
                                                                        '5px',
                                                                    fontWeight:
                                                                        'bold',
                                                                    color: 'white',
                                                                    textAlign:
                                                                        'center',
                                                                    width: '6rem',
                                                                    background:
                                                                        'linear-gradient(45deg, rgba(218,149,4,1) 0%, rgba(255,91,0,1) 100%)',
                                                                }}
                                                            >
                                                                Waiting
                                                            </Typography>
                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Box>
                </Grid>
            </div>

            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </div>
    )
}

export default Mygame
