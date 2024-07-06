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
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await apiClient.post('upcomming_game')
                // console.log(response.data);
                setGameData(response.data.data)
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
            <Grid item xs={10}>
                {/* Card Disawar */}
                <Card
                    sx={{
                        background:
                            'linear-gradient(40deg, rgba(123,0,180,1) 0%, rgba(255,0,104,1) 100%)',
                        borderRadius: '15px', // Optional: Add border radius if needed
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // Optional: Add shadow for a nicer effect
                        height: isSmallScreen ? '3em' : '8em', // Responsive height
                        width: isSmallScreen ? '3em' : '8em', // Responsive width
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CardActionArea sx={{ height: '100%', width: '100%' }}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Disawar.png"
                            alt="Disawar"
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
                            <Typography variant="h6" sx={{ color: 'white' }}>
                                Disawar
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={`./StaticAssets/Images/Icons/${gameData.gameName}.png`}
                            alt={gameData.gameName}
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h5">{gameData.gameName}</Typography>
                {/* Card 1 */}
            </Grid>
        </Grid>
    )
}

export default Domesticupcominggames
