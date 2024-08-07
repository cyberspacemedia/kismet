import React, { useState, useEffect, useContext } from 'react'
import {
    Alert,
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import theme from '../../../theme/Theme'
import UserContext from '../../UserContext'
import { apiClient } from '../../config/Config'
import { useNavigate } from 'react-router-dom'
import AppLoader from '../../Loaders/AppLoader'

function Crossinggame({ gameName, gameId, gameType }) {
    const { userId } = useContext(UserContext)
    const navigate = useNavigate()
    const [crossingNumbers, setCrossingNumbers] = useState('')
    const [crossingAmount, setCrossingAmount] = useState('')
    const [savedCrossingAmount, setSavedCrossingAmount] = useState('')
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)
    const [pairs, setPairs] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const generatePairs = (input) => {
        const digits = input.split('')
        const newPairs = []

        digits.forEach((d1) => {
            digits.forEach((d2) => {
                newPairs.push(`${d1}${d2}`)
            })
        })

        return newPairs
    }

    const handleSave = () => {
        if (!crossingNumbers || !crossingAmount) {
            setSeverity('error')
            setMessage('All fields must be filled.')
            return
        }

        const digits = crossingNumbers.split('')
        const uniqueDigits = new Set(digits)

        if (digits.length !== uniqueDigits.size) {
            setSeverity('error')
            setMessage('All digits must be unique.')
            return
        }

        if (crossingNumbers.length < 2) {
            setSeverity('error')
            setMessage('Crossing numbers must be at least 2 digits.')
            return
        }
        setMessage('') // Clear any previous error message
        const generatedPairs = generatePairs(crossingNumbers)
        setPairs(generatedPairs)
        setSavedCrossingAmount(crossingAmount)

        const amount = parseInt(crossingAmount, 10)
        const total = generatedPairs.length * amount
        setTotalAmount(total)
    }

    const handleSubmit = async () => {
        setLoader(true)
        const betData = {
            userId: userId,
            gameName: gameName,
            gameType: gameType,
            gameId: gameId,
            numbers: pairs,
            amount: crossingAmount,
        }
        // console.log(betData);
        if (crossingAmount > 0) {
            try {
                const response = await apiClient.post(
                    '/submitgamecrossing',
                    betData
                )

                // console.log(response.data);

                if (response.data.success === true) {
                    setMessage(response.data.message)
                    setSeverity('success')
                    setLoader(false)
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000)
                } else {
                    setMessage(response.data.message)
                    setSeverity('error')
                    setLoader(false)
                }
            } catch (error) {
                setSeverity('error')
                setMessage(error)
            }
        } else {
            setSeverity('error')
            setMessage('Fill all fields')
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
            {loader && <AppLoader />}
            {severity && (
                <Alert
                    severity={severity}
                    variant="filled"
                    onClose={() => setSeverity('')}
                    sx={{
                        zIndex: '9999',
                        position: 'absolute',
                        top: '50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '90%',
                    }}
                >
                    {message}
                </Alert>
            )}
            <Box
                sx={{
                    height: '30vh',
                    overflowY: 'auto',
                    display: 'flex',
                }}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={10}>
                        <Paper
                            sx={{
                                background:
                                    'linear-gradient(318deg, rgba(151,0,161,1) 0%, rgba(168,59,59,1) 100%)',
                                borderRadius: '10px',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                id="crossingnumbers"
                                label="Crossing Numbers"
                                type="number"
                                variant="standard"
                                placeholder="00"
                                value={crossingNumbers}
                                onChange={(e) => {
                                    setCrossingNumbers(e.target.value)
                                }}
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1rem',
                                        color: 'white',
                                        textAlign: 'center',
                                    },
                                }}
                                InputProps={{
                                    style: {
                                        fontSize: '1rem',
                                        color: 'white',
                                        textAlign: 'center',
                                    },
                                }}
                                inputProps={{
                                    style: { textAlign: 'center' }, // Center-align the input text
                                }}
                            />

                            <TextField
                                id="crossingamount"
                                label="Crossing into Amount"
                                variant="standard"
                                type="number"
                                value={crossingAmount}
                                onChange={(e) => {
                                    setCrossingAmount(e.target.value)
                                }}
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1rem',
                                        color: 'white',
                                        textAlign: 'center',
                                    },
                                }}
                                InputProps={{
                                    style: {
                                        fontSize: '1rem',
                                        color: 'white',
                                        textAlign: 'center',
                                    },
                                }}
                                inputProps={{
                                    style: { textAlign: 'center' }, // Center-align the input text
                                }}
                            />
                            <Typography variant="caption">
                                * Amount should be below 5000
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            onClick={handleSave}
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{ borderRadius: '20px' }}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Grid container justifyContent={'center'}>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1">Crossing Pairs</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1">Amount</Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    height: '35vh',
                    overflowY: 'auto',
                }}
            >
                <Grid container justifyContent={'center'}>
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                        {pairs.map((pair, index) => (
                            <Typography key={index} sx={{ fontSize: '1rem' }}>
                                {pair}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                        {pairs.map((_, index) => (
                            <Typography key={index} sx={{ fontSize: '1rem' }}>
                                ₹ {savedCrossingAmount}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>
            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    position: 'fixed', // Position the Grid container fixed within the viewport
                    bottom: '2%', // Position 8% from the bottom of the viewport
                    left: '50%', // Center horizontally
                    transform: 'translateX(-50%)', // Move back to center horizontally
                    width: '98%', // Set width to 80% of the viewport
                    zIndex: 1000, // Ensure it appears above other content
                    borderRadius: '10px',
                    border: 'solid 1px #676767',
                    backgroundColor: '#494949',
                }}
            >
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Typography variant="caption">Total Amount :</Typography>
                    <Typography variant="h1" sx={{ fontSize: '1.5rem' }}>
                        ₹ {totalAmount}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleSubmit}
                        sx={{ ...theme.buttons.gradient }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Crossinggame
