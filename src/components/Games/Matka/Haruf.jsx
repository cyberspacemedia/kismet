import React, { useContext, useState } from 'react'
import { Box, Grid, TextField, Typography, Button } from '@mui/material'
import UserContext from '../../UserContext'
import theme from '../../../theme/Theme'
import { apiClient } from '../../config/Config'

function Haruf({ gameName, gameId, gameType }) {
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

    const handleChange = (game, index, value) => {
        setInputValues((prevState) => {
            const updatedValues = { ...prevState }
            updatedValues[game][index] = value
            return updatedValues
        })
    }

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
        }
    }

    const handleSubmit = async () => {
        try {
            const response = await apiClient.post('/submitgame3', betData)
            console.log(response)
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
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Grid>
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
                        <Grid item xs={6}>
                            <Typography variant="caption">
                                Total Amount :
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{ fontSize: '1.5rem' }}
                            >
                                ₹ 0
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
                </Grid>
            </Box>
        </>
    )
}

export default Haruf
