import React from 'react'
import Grid from '@mui/material/Grid'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Allgames() {
    const navigate = useNavigate()

    return (
        <Grid container spacing={1} p={2} sx={{ backgroundColor: '#110b19' }}>
            <Grid item xs={3}>
                {/* Card Disawar */}
                <Card
                    sx={{
                        background:
                            'linear-gradient(40deg, rgba(123,0,180,1) 0%, rgba(255,0,104,1) 100%)',
                        borderRadius: '15px', // Optional: Add border radius if needed
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // Optional: Add shadow for a nicer effect
                        height: '3em',
                        width: '3em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CardActionArea
                        onClick={() => navigate('/dishawarinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
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
                {/* End Card Disawar */}
            </Grid>
            <Grid item xs={3}>
                {/* Card Gali */}
                <Card
                    sx={{
                        background:
                            'linear-gradient(47deg, rgba(176,10,252,1) 0%, rgba(255,0,138,1) 100%)',
                        borderRadius: '15px', // Optional: Add border radius if needed
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // Optional: Add shadow for a nicer effect
                        height: '3em',
                        width: '3em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CardActionArea
                        onClick={() => navigate('/galiinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gali.png"
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
                                Gali
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Gali */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea
                        onClick={() => navigate('/faridabadgameinfo')}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
                            alt="Gurugram"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Faridabad</Typography>
                {/* Card 1 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea
                        onClick={() => navigate('/gaziabadgameinfo')}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
                            alt="Gurugram"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Gaziabad</Typography>
                {/* Card 1 */}
            </Grid>

            <Grid item xs={3}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea
                        onClick={() => navigate('/gurugramgameinfo')}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
                            alt="Gurugram"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Gurugram</Typography>
                {/* Card 1 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 2 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea onClick={() => navigate('/alwargameinfo')}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Alwar.png"
                            alt="Alwar"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Alwar</Typography>
                {/* Card 2 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 3 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea onClick={() => navigate('/rewarigameinfo')}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rewari.png"
                            alt="Rewari"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Rewari</Typography>
                {/* Card 3 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 4 */}
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <CardActionArea onClick={() => navigate('/rohtakgameinfo')}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rohtak.png"
                            alt="Rohtak"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Rohtak</Typography>
                {/* Card 4 */}
            </Grid>
        </Grid>
    )
}

export default Allgames
