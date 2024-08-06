import React, { useContext, useEffect, useState } from 'react'
import theme from '../theme/Theme'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { useLocation } from 'react-router-dom'
import { Alert } from '@mui/material'
import { apiClient } from './config/Config'
import UserContext from './UserContext' // Import UserContext

function Otp() {
    const location = useLocation()
    const phone = location.state?.data.phone
    const referral = location.state?.data.referralCode
    const { setUserId } = useContext(UserContext) // Access context for user state
    const [otp, setOtp] = useState(0)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const verifyOtp = async () => {
        // Check if OTP is empty
        if (!otp) {
            setSeverity('error')
            setMessage('OTP cannot be empty.')
            return
        }

        // Check if OTP contains only numeric characters
        const numericRegex = /^\d+$/
        if (!numericRegex.test(otp)) {
            setSeverity('error')
            setMessage('OTP must contain only numbers.')
            return
        }

        // Check if OTP is exactly 4 digits long
        if (otp.length !== 4) {
            setSeverity('error')
            setMessage('OTP must be exactly 4 digits.')
            return
        }

        const data = {
            phone: phone,
            otp: otp,
            referralCode: referral,
        }
        console.log(data)
        try {
            const response = await apiClient.post('/verifyOTP', data)
            console.log(response.data)
            if (response.data.success === true) {
                setSeverity('success')
                setMessage(response.data.message)
                setUserId(response.data.data.id)
                //Store UID to local_storage
                localStorage.setItem('userId', response.data.data.id)
                setTimeout(() => {
                    navigate('/dashboard')
                }, 2000)
            } else {
                setSeverity('error')
                setMessage(response.data.message)
            }
        } catch (error) {
            setSeverity('error')
            setMessage(error)
        }
    }

    useEffect(() => {
        if (severity) {
            const timer = setTimeout(() => {
                setMessage('')
                setSeverity('')
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [severity])

    return (
        <>
            {severity && (
                <Alert
                    severity={severity}
                    variant="filled"
                    onClose={() => setSeverity('')}
                    sx={{
                        zIndex: '9999',
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '90%',
                    }}
                >
                    {message}
                </Alert>
            )}
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
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item sx={{ mt: 10 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: '100px' }}
                        />
                    </Grid>
                    <Grid item sx={{ width: '80%', margin: 'auto', mt: 5 }}>
                        <Typography variant="h5" sx={{ textAlign: 'left' }}>
                            {phone && <p>OTP sent on {phone}</p>}
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                            Enter OTP
                        </Typography>
                        <hr style={{ marginBottom: '20px' }} />
                        <form>
                            <TextField
                                id="otp"
                                size="large"
                                variant="filled"
                                label="OTP"
                                color="secondary"
                                type="tel"
                                fullWidth
                                required
                                onChange={(e) => {
                                    setOtp(e.target.value)
                                }}
                                autoComplete="off"
                                sx={{
                                    margin: '0 0 20px', // Add margin bottom for spacing
                                    '& .MuiFilledInput-root': {
                                        backgroundColor:
                                            'rgba(211, 211, 211, 0.1)', // Light gray transparent background
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fffff', // Font color
                                        fontSize: '1rem', // Font size
                                        textAlign: 'center',
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PhoneAndroidIcon
                                                sx={{ color: '#ffffff' }}
                                            />
                                        </InputAdornment>
                                    ),
                                    inputProps: { maxLength: 4 },
                                }}
                            />

                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                onClick={verifyOtp}
                            >
                                Login
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
                </Grid>
            </Grid>
        </>
    )
}

export default Otp
