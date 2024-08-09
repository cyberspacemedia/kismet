import React, { useState, useContext } from 'react'
import theme from '../theme/Theme'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import PasswordIcon from '@mui/icons-material/Password'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import { apiClient } from './config/Config'
import UserContext from './UserContext' // Import UserContext

import AppLoader from './Loaders/AppLoader'

function UserLogin() {
    const navigate = useNavigate()
    const { setUserId } = useContext(UserContext) // Access context for user state
    // handle email and password Login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // error handling and messages via snackbar
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
        setLoading(false)
    }

    // handle email and password Login

    const handleMobileLogin = () => {
        navigate('/mobilelogin')
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        // Validate email and password
        const validation = validateLoginData(email, password)
        if (!validation.valid) {
            // Handle validation error
            console.log(validation.message)
            setOpen(true) // Optionally show a Snackbar or other UI feedback
            return
        }

        const data = {
            email: email,
            password: password,
        }

        setLoading(false)
        try {
            const response = await apiClient.post('/emailuserlogin', data)
            setLoading(true)
            console.log(response.data)

            if (response.data.success === true) {
                // Set UID and go to dashboard
                setUserId(response.data.data.id)
                localStorage.setItem('userId', response.data.data.id)

                setTimeout(() => {
                    navigate('/dashboard')
                }, 1000)
            } else {
                // Set up error and show them
                setOpen(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const validateLoginData = (email, password) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const passwordMinLength = 3

        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Invalid email format' }
        }

        if (password.length < passwordMinLength) {
            return {
                valid: false,
                message: `Password must be at least ${passwordMinLength} characters`,
            }
        }

        return { valid: true }
    }
    return (
        <>
            {loading && <AppLoader />}

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set anchorOrigin to top center
                key={`${'top'}${'center'}`} // Use backticks to create a string key
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Invalid email or password
                </Alert>
            </Snackbar>
            <Grid
                container
                direction={'column'}
                display="flex"
                textAlign="center"
                sx={{
                    backgroundColor: 'black',
                    height: '100vh',
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover', // Ensures the background image covers the entire container
                    backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item sx={{ mt: 2 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: '80px' }}
                        />
                    </Grid>
                    <Grid item sx={{ width: '80%', margin: 'auto', mt: 5 }}>
                        <Typography variant="h5" sx={{ textAlign: 'left' }}>
                            Login
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                            Welcom back, Its good to see you
                        </Typography>
                        <hr style={{ marginBottom: '20px' }} />
                        <form>
                            <TextField
                                className="primaryTextField"
                                id="email"
                                name="email"
                                size="small"
                                variant="filled"
                                label="Email"
                                color="secondary"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                                autoComplete="off"
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailIcon
                                                sx={{ color: '#ffffff' }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                className="primaryTextField"
                                id="password"
                                name="password"
                                size="small"
                                variant="filled"
                                label="Password"
                                color="secondary"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                required
                                autoComplete="off"
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PasswordIcon
                                                sx={{ color: '#ffffff' }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="small"
                                type="submit"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <br />
                            or
                            <br />
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="small"
                                onClick={handleMobileLogin}
                            >
                                Login with Phone
                            </Button>
                        </form>
                    </Grid>
                </Box>
                <Grid item sx={{ mt: 5 }}>
                    <Typography variant="subtitle2">
                        {' '}
                        Do not have account?{' '}
                        <Link to="/register">Register Here</Link>
                    </Typography>
                    <Typography variant="subtitle2">
                        {' '}
                        Or <Link to="/forgot">Forgot Password</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default UserLogin
