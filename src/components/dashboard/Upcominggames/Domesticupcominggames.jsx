import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { apiClient } from '../../config/Config'

function Domesticupcominggames() {
    const isSmallScreen = useMediaQuery('(max-width:600px)')
    const [gameData, setGameData] = useState([])
    const [gameFound, setGameFound] = useState(false)
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await apiClient.post('upcomming_game')
                // console.log(response.data)
                if (response.data.success === true) {
                    setGameFound(true)
                    setGameData(response.data.data)
                } else {
                    setGameFound(false)
                }
            } catch (error) {
                console.error('API Error', error)
            }
        }
        fetchdata()
    }, [])

    return (
        <Grid
            container
            spacing={1}
            p={1}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                {gameFound && (
                    <Card
                        sx={{
                            background:
                                'linear-gradient(47deg, rgba(142,142,142,1) 0%, rgba(34,34,34,1) 24%, rgba(0,0,0,1) 42%, rgba(46,46,46,1) 72%, rgba(140,140,140,1) 100%)',
                            borderRadius: '15px', // Optional: Add border radius if needed
                            border: 'solid 0.1px gray',
                            height: isSmallScreen ? '5em' : '10em', // Responsive height
                            width: isSmallScreen ? '5em' : '10em', // Responsive width
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CardActionArea sx={{ height: '100%', width: '100%' }}>
                            <CardMedia
                                component="img"
                                image={`./StaticAssets/Images/Icons/${gameData.gameName}.png`}
                                alt={gameData.gameName}
                                sx={{
                                    height: '50%', // Adjust the height to fit the card
                                    width: '50%', // Adjust the width to fit the card
                                    objectFit: 'cover', // Cover the card area
                                    margin: 'auto',
                                }}
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '8px 0px 0px 0px', // Padding to adjust the spacing
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{ color: 'white' }}
                                >
                                    {gameData.gameName}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </Grid>
        </Grid>
    )
}

export default Domesticupcominggames
