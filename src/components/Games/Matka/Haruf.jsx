import React, { useContext, useState, useEffect } from 'react'
import { Box, Grid, TextField, Typography, Button, Alert } from '@mui/material'
import UserContext from '../../UserContext'
import theme from '../../../theme/Theme'
import { apiClient } from '../../config/Config'
import { useNavigate } from 'react-router-dom'
import AppLoader from '../../Loaders/AppLoader'

function Haruf({ gameName, gameId, gameType }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const { userId } = useContext(UserContext)
    const numbers = Array.from({ length: 10 }, (_, index) =>
        index.toString().padStart(2, '0')
    )

    const [inputValues, setInputValues] = useState({
        A: Array(10).fill(''),
        B: Array(10).fill(''),
    })

    const [betData, setBetData] = useState({
        userId: userId,
        gameName: gameName,
        gameType: gameType,
        gameId: gameId,
        list: {
            A: [],
            B: [],
        },
    })

    const [totalAmount, setTotalAmount] = useState(0)
    const [isSaved, setIsSaved] = useState(false) // Track if data is saved

    const handleChange = (game, index, value) => {
        setInputValues((prevState) => {
            const updatedValues = { ...prevState }
            updatedValues[game][index] = value
            return updatedValues
        })
    }

    useEffect(() => {
        // Calculate the total amount whenever inputValues change
        const calculateTotalAmount = () => {
            const total = ['A', 'B'].reduce((acc, game) => {
                return (
                    acc +
                    inputValues[game].reduce((sum, value) => {
                        return sum + (parseFloat(value) || 0)
                    }, 0)
                )
            }, 0)

            setTotalAmount(total)
        }

        calculateTotalAmount()
    }, [inputValues])

    const handleSave = () => {
        const list = {
            A: [],
            B: [],
        }
        ;['A', 'B'].forEach((game) => {
            inputValues[game].forEach((amount, index) => {
                if (amount) {
                    list[game].push({
                        number: index,
                        amount: parseFloat(amount),
                    })
                }
            })
        })

        if (list.A.length === 0 && list.B.length === 0) {
            console.log('Validation: Data not found')
        } else {
            const updatedBetData = {
                ...betData,
                list: list,
            }
            setBetData(updatedBetData)
            console.log('Commision History:', updatedBetData)
            setIsSaved(true) // Mark as saved
        }
    }

    const handleSubmit = async () => {
        try {
            const response = await apiClient.post('/submitgame3', betData)
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
            console.error('API error Submit Haruf Game', error)
        }
    }

    return (
        <>
            <Box
                sx={{
                    height: '80vh',
                    overflowY: 'auto',
                    display: 'flex',
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
                <Grid container justifyContent="center">
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                        <Typography variant="caption">Andar Game</Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            {numbers.map((number, index) => (
                                <Box
                                    key={number}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            mr: 1,
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        A{index}
                                    </Box>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        placeholder="₹00"
                                        type="number"
                                        value={inputValues.A[index]}
                                        onChange={(e) =>
                                            handleChange(
                                                'A',
                                                index,
                                                e.target.value
                                            )
                                        }
                                        sx={{
                                            width: '3rem',
                                            '& .MuiInputBase-input': {
                                                padding: '4px',
                                                textAlign: 'center',
                                                fontSize: '1rem',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline':
                                                {
                                                    borderColor: 'red',
                                                },
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'gray',
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'center' }}>
                        <Typography variant="caption">Bahar Game</Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            {numbers.map((number, index) => (
                                <Box
                                    key={number}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            mr: 1,
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        B{index}
                                    </Box>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        margin="dense"
                                        placeholder="₹00"
                                        type="number"
                                        value={inputValues.B[index]}
                                        onChange={(e) =>
                                            handleChange(
                                                'B',
                                                index,
                                                e.target.value
                                            )
                                        }
                                        sx={{
                                            width: '3rem',
                                            '& .MuiInputBase-input': {
                                                padding: '4px',
                                                textAlign: 'center',
                                                fontSize: '1rem',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline':
                                                {
                                                    borderColor: 'red',
                                                },
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'gray',
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item>
                        {!isSaved && (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        )}
                    </Grid>
                    {isSaved && (
                        <Grid
                            container
                            justifyContent={'center'}
                            alignItems={'center'}
                            sx={{
                                position: 'fixed',
                                bottom: '2%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '98%',
                                zIndex: 1000,
                                borderRadius: '10px',
                                border: 'solid 1px #676767',
                                backgroundColor: '#494949',
                            }}
                        >
                            <Grid item xs={6} sx={{ textAlign: 'center' }}>
                                <Typography variant="caption">
                                    Total Amount :
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{ fontSize: '1.5rem' }}
                                >
                                    ₹ {totalAmount.toFixed(0)}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={handleSubmit}
                                    sx={{ ...theme.buttons.gradient }}
                                >
                                    Submit Game
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default Haruf
