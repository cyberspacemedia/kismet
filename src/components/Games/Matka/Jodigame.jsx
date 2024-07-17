import React, { useContext, useEffect, useState } from 'react'
import theme from '../../../theme/Theme'
import {
    Grid,
    Button,
    Box,
    Modal,
    Typography,
    TextField,
    Alert,
} from '@mui/material'
import UserContext from '../../UserContext'
import { apiClient } from '../../config/Config'
import { useNavigate } from 'react-router-dom'
import AppLoader from '../../Loaders/AppLoader'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    background:
        'linear-gradient(90deg, rgba(85,85,85,1) 0%, rgba(40,40,40,1) 100%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

function Jodigame({ gameName, gameId, gameType }) {
    const navigate = useNavigate()
    const gameNumbers = Array.from({ length: 100 }, (_, i) => i)

    const [open, setOpen] = React.useState(false)
    const [selectedNumber, setSelectedNumber] = React.useState(null)
    const [amounts, setAmounts] = React.useState(Array(100).fill(null)) // Array to store amounts for each number
    const [amount, setAmount] = React.useState('')
    const [totalAmount, setTotalAmount] = React.useState(0)
    const { userId } = useContext(UserContext)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)
    const handleOpen = (number) => {
        setSelectedNumber(number)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedNumber(null)
        setAmount('')
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleSave = () => {
        const newAmounts = [...amounts]
        const previousAmount = parseInt(newAmounts[selectedNumber] || 0) // Get the previous amount or 0 if null
        newAmounts[selectedNumber] = amount
        setAmounts(newAmounts)

        // Convert empty string to 0
        const parsedAmount = amount === '' ? 0 : parseInt(amount)

        setTotalAmount((prevTotal) => prevTotal - previousAmount + parsedAmount) // Deduct previous amount and add new amount
        handleClose()
    }

    const handleSubmit = async () => {
        setLoader(true)
        const selectedNumbersAndAmounts = gameNumbers.reduce((acc, number) => {
            if (amounts[number] !== null && amounts[number] !== '') {
                acc.push({ number, amount: amounts[number] })
            }
            return acc
        }, [])

        const gameData = {
            userId: userId,
            gameName: gameName,
            gameType: gameType,
            gameId: gameId,
            totalAmount: totalAmount,
            selectedNumbersAndAmounts: selectedNumbersAndAmounts,
        }
        console.log(gameData)
        if (totalAmount > 0) {
            try {
                const response = await apiClient.post('submitgame', gameData)
                console.log(response.data)
                if (response.data.success === true) {
                    setLoader(false)
                    setMessage(response.data.message)
                    setSeverity('success')
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000)
                } else {
                    setMessage(response.data.message)
                    setSeverity('error')
                    setLoader(false)
                }
            } catch (error) {
                setMessage('Something Went Wrong')
                setSeverity('error')
                setLoader(false)
            }
        } else {
            setMessage('Please place a bet')
            setSeverity('error')
            setLoader(false)
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
        <Box
            sx={{
                height: '73vh',
                overflowY: 'auto',
            }}
        >
            {loader && <AppLoader />}
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
                justifyContent="center"
                alignItems={'center'}
                spacing={1}
            >
                {gameNumbers.map((number) => (
                    <Grid item key={number} xs={3} md={2} sm={2} lg={3}>
                        <Button
                            variant="contained"
                            sx={{
                                ...theme.buttons.squarenumberbutton,
                                flexDirection: 'column',
                            }}
                            onClick={() => handleOpen(number)}
                        >
                            {number.toString().padStart(2, '0')}
                            {amounts[number] !== null && (
                                <Box
                                    sx={{
                                        mt: 0, // margin-top
                                        padding: '2px',
                                        borderRadius: '4px',
                                        background:
                                            'linear-gradient(318deg, rgba(168,1,179,1) 0%, rgba(182,0,0,1) 100%)',
                                        color: 'white',
                                        width: '60px',
                                        textAlign: 'center', // Center the text within the box
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    ₹ {amounts[number]}
                                </Box>
                            )}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h2"
                        sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            borderRadius: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            fontSize: '2rem',
                        }}
                    >
                        {selectedNumber !== null
                            ? selectedNumber.toString().padStart(2, '0')
                            : ''}
                    </Typography>
                    <Typography
                        variant="caption"
                        id="modal-modal-description"
                        sx={{ mt: 2, color: 'white', textAlign: 'center' }}
                    >
                        Place amount on selected number
                    </Typography>
                    <TextField
                        id="amount"
                        variant="standard"
                        size="small"
                        type="number"
                        inputProps={{ style: { textAlign: 'center' } }}
                        value={amount}
                        onChange={handleAmountChange}
                    />

                    <Typography
                        variant="caption"
                        id="modal-modal-description"
                        sx={{ mt: 2, color: 'white', textAlign: 'center' }}
                    >
                        * Amount below 5000
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ mt: 2, ...theme.buttons.gradient }}
                        size="small"
                        onClick={handleSave}
                    >
                        SAVE
                    </Button>
                </Box>
            </Modal>
            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    position: 'fixed', // Position the Grid container fixed within the viewport
                    bottom: '2%', // Position 8% from the bottom of the viewport
                    left: '50%', // Center horizontally
                    transform: 'translateX(-50%)', // Move back to center horizontally
                    width: '95%', // Set width to 80% of the viewport
                    zIndex: 1000, // Ensure it appears above other content
                    borderRadius: '10px',
                    border: 'solid 1px #676767',
                    backgroundColor: '#494949',
                }}
            >
                <Grid item xs={6} justifyContent={'center'} p={1}>
                    <Typography variant="h6">Total Amount :</Typography>
                    <Typography variant="h1" sx={{ fontSize: '1.5rem' }}>
                        {totalAmount}
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
        </Box>
    )
}

export default Jodigame
