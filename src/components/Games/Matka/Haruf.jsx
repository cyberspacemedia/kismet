import React, { useState } from 'react'
import { Box, Grid, TextField, Typography, Button } from '@mui/material'

function Haruf() {
    const numbers = Array.from({ length: 10 }, (_, index) =>
        index.toString().padStart(2, '0')
    )

    const [inputValues, setInputValues] = useState({
        A: Array(10).fill(''),
        B: Array(10).fill(''),
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
            console.log('Commision History:', list)
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
                                        placeholder="00"
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
                                        placeholder="00"
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
                </Grid>
            </Box>
        </>
    )
}

export default Haruf
