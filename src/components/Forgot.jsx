import React, { useState } from 'react'
import theme from '../theme/Theme'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import { apiClient } from './config/Config'
import AppLoader from './Loaders/AppLoader'

function Forgot() {
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
        setLoading(false)
    }

    const handleReset = async (e) => {
        e.preventDefault() // Prevent form submission

        const validation = validateLoginData(email)
        if (!validation.valid) {
            console.log(validation.message)
            setMessage(validation.message)
            setOpen(true)
            return
        }

        const data = {
            email: email,
        }

        setLoading(true)
        try {
            const response = await apiClient.post('/forgotPassword', data)
            setLoading(false)
            console.log(response.data)

            if (response.data.success === true) {
                setSeverity('success')
                setMessage(response.data.message)
                setOpen(true)
            } else {
                setSeverity('error')
                setMessage(response.data.message)
                setOpen(true)
            }
        } catch (error) {
            console.error(error)
            setMessage('An error occurred. Please try again later.')
            setOpen(true)
            setLoading(false)
        }
    }

    const validateLoginData = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Invalid email format' }
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
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={`${'top'}${'center'}`}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
            <Grid
                container
                direction="column"
                textAlign="center"
                sx={{
                    backgroundColor: 'black',
                    height: '100vh',
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
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
                            Forgot Password
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                            Enter your registered email
                        </Typography>
                        <hr style={{ marginBottom: '20px' }} />
                        <form onSubmit={handleReset}>
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
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailIcon
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
                                type="submit" // Change to "submit"
                            >
                                Reset Password
                            </Button>
                        </form>
                    </Grid>
                </Box>
                <Grid item sx={{ mt: 5 }}>
                    <Typography variant="subtitle2">
                        Do not have an account?{' '}
                        <Link to="/register">Register Here</Link>
                    </Typography>
                    <Typography variant="subtitle2">
                        Or <Link to="/login">Login Now</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Forgot
