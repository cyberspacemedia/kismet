import React, { useContext, useEffect } from 'react'
import theme from '../theme/Theme'
import { useNavigate, Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import UserContext from './UserContext'

function GettingStarted() {
    const navigate = useNavigate()
    const { setUserId } = useContext(UserContext) // Access context for user state

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')
        console.log(storedUserId)

        if (storedUserId) {
            console.log('User Id Found')
            setUserId(storedUserId)
            setTimeout(() => {
                navigate('/dashboard')
            })
        }
    }, [navigate, setUserId])

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <>
            <Grid
                container
                direction={'column'}
                display="flex"
                textAlign="center"
                sx={{
                    height: '100vh',
                    backgroundImage: `url('./StaticAssets/Images/Getting_Started_wologo.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: 'black',
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item sx={{ mt: 5 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: '150px' }}
                        />
                        <Typography variant="body1" sx={{ mt: 3 }}>
                            Welcome to
                        </Typography>
                        <Typography variant="h4">KISMET APP</Typography>
                    </Grid>
                    <Grid item sx={{ width: '80%', margin: 'auto' }}>
                        <Button
                            variant="contained"
                            sx={{ mt: 5, ...theme.buttons.gradient }}
                            size="large"
                            onClick={handleRegister}
                        >
                            Register Now
                        </Button>
                        <Typography
                            variant="body1"
                            color="white"
                            sx={{ mt: 2 }}
                        >
                            Already registered, <Link to="/login">Login</Link>
                        </Typography>
                    </Grid>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 1,
                            right: 1,
                        }}
                    >
                        <Typography variant="caption" color="white">
                            Ver 1.10
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default GettingStarted
