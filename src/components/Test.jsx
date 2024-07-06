import React from 'react'
import Grid from '@mui/material/Grid'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Allgames() {
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery('(max-width:600px)')
    return (
        <Grid
            container
            spacing={1}
            p={2}
            sx={{
                backgroundColor: '#110b19',
                justifyContent: 'center',
            }}
        >
            <Grid item xs={3} md={3}>
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
                {/* Card Faridabad */}
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
                    <CardActionArea
                        onClick={() => navigate('/faridabadgameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Faridabad.png"
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
                                Faridabad
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Faridabad */}
            </Grid>
            <Grid item xs={3}>
                {/* Card Gaziabad */}
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
                    <CardActionArea
                        onClick={() => navigate('/gaziabadgameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gaziabad.png"
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
                                Gaziabad
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Gaziabad */}
            </Grid>

            <Grid item xs={3}>
                {/* Card Gurugram */}
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
                    <CardActionArea
                        onClick={() => navigate('/gurugramgameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
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
                                Gurugram
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Gurugram */}
            </Grid>
            <Grid item xs={3}>
                {/* Card Alwar */}
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
                    <CardActionArea
                        onClick={() => navigate('/alwargameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Alwar.png"
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
                                Alwar
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Alwar */}
            </Grid>
            <Grid item xs={3}>
                {/* Card Rewari */}
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
                    <CardActionArea
                        onClick={() => navigate('/rewarigameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rewari.png"
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
                                Rewari
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Rewari */}
            </Grid>
            <Grid item xs={3}>
                {/* Card Rohtak */}
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
                    <CardActionArea
                        onClick={() => navigate('/rohtakgameinfo')}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rohtak.png"
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
                                Rohtak
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* End Card Rohtak */}
            </Grid>
        </Grid>
    )
}

export default Allgames
