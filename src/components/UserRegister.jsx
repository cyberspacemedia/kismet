import React, { useState } from 'react'
import theme from '../theme/Theme'
import { apiClient } from './config/Config'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import PasswordIcon from '@mui/icons-material/Password'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import { SnackbarContent } from '@mui/material'
import AppLoader from './Loaders/AppLoader'

function UserRegister() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkboxChecked, setCheckboxChecked] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const [success, setSuccess] = useState(false)

    const formData = {
        name,
        email,
        password,
        registration_type: 1, // For Email Type Registeration
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleCheckboxChange = (event) => {
        setCheckboxChecked(event.target.checked)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        // Validation logic
        if (!name || !email || !password || !checkboxChecked) {
            setSnackbarMessage('All fields are required.')
            setSnackbarOpen(true)
        } else if (!validateEmail(email)) {
            setSnackbarMessage('Invalid email address.')
            setSnackbarOpen(true)
        } else {
            // Proceed with registration

            // Your registration logic goes here
            try {
                // console.log(formData);
                const response = await apiClient.post(
                    'registerUserEmail',
                    formData
                )
                console.log(response.data)
                setSuccess(response.data.success)
                setSnackbarOpen(true)
                setSnackbarMessage(response.data.message)

                if (response.data.success === true) {
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000)
                } else {
                    setSnackbarMessage(response.data.message)
                    setSnackbarOpen(true)
                }
            } catch (error) {
                console.error(error)
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request)
                    // You can set a state variable to display a generic error message
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message)
                }
            }
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false)
    }

    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    return (
        <>
            {success && <AppLoader />}
            <Grid
                container
                direction={'column'}
                display="flex"
                textAlign="center"
                sx={{
                    backgroundColor: '#000000',
                    height: '100vh',
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: 'center',
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
                        <Typography variant="h5">Register & Play</Typography>

                        <hr />

                        <form onSubmit={handleSubmit}>
                            <TextField
                                className="primaryTextField"
                                id="Name"
                                name="name"
                                size="large"
                                variant="filled"
                                label="Full Name"
                                color="secondary"
                                fullWidth
                                required
                                autoComplete="off"
                                autoFocus
                                value={name}
                                onChange={handleNameChange}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle
                                                sx={{ color: '#ffffff' }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                className="primaryTextField"
                                id="email"
                                name="email"
                                size="large"
                                variant="filled"
                                label="Email Address"
                                color="secondary"
                                type="email"
                                fullWidth
                                required
                                autoComplete="off"
                                value={email}
                                onChange={handleEmailChange}
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
                                size="large"
                                variant="filled"
                                label="Password"
                                color="secondary"
                                fullWidth
                                type="password"
                                required
                                autoComplete="off"
                                value={password}
                                onChange={handlePasswordChange}
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
                            <TextField
                                className="primaryTextField"
                                id="referralCode"
                                name="referralCode"
                                size="large"
                                variant="filled"
                                label="Referral Code"
                                color="secondary"
                                fullWidth
                                type="text"
                                autoComplete="off"
                                value={password}
                                onChange={handlePasswordChange}
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
                            <Typography variant="body2">
                                <Checkbox
                                    checked={checkboxChecked}
                                    onChange={handleCheckboxChange}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            color: '#ffffff',
                                        },
                                    }}
                                />
                                By Signing up you will agree to our{' '}
                                <a href="/">privacy policy</a> and{' '}
                                <a href="/">conditions</a>.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                            >
                                Register Now
                            </Button>{' '}
                            or <Link to="/login">Login Now</Link>
                        </form>
                    </Grid>
                </Box>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <SnackbarContent
                    style={{
                        background:
                            'linear-gradient(79deg, rgba(161,0,84,1) 0%, rgba(155,2,168,1) 100%)',
                        color: '#ffffff',
                    }}
                    message={snackbarMessage}
                />
            </Snackbar>
        </>
    )
}

export default UserRegister
