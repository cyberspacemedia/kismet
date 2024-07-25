import React, { useContext, useState } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    TextField,
    Chip,
    Box,
    Grid,
    Button,
    Snackbar,
    Alert,
    Grow,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import theme from '../../theme/Theme'
import AddCardIcon from '@mui/icons-material/AddCard'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'
import { apiPayment } from '../config/Config'

function Withdrawmoney() {
    const { userId } = useContext(UserContext)
    const [amount, setAmount] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('upi')
    const [upiId, setUpiId] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [ifscCode, setIfscCode] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const navigate = useNavigate()

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const handleWithdraw = async () => {
        if (!amount || amount <= 0) {
            setSnackbarMessage('Please enter a valid amount')
            setSnackbarOpen(true)
            return
        }

        if (amount < 300) {
            setSnackbarMessage('Amount should be more than 300')
            setSnackbarOpen(true)
            return
        }

        let data
        if (paymentMethod === 'upi') {
            data = {
                amount: amount,
                userId: userId,
                method: '1',
                upiId: paymentMethod === 'upi' ? upiId : null,
            }
        } else if (paymentMethod === 'bank') {
            data = {
                amount: amount,
                userId: userId,
                method: '2',
                bankName: bankName,
                ifscCode: ifscCode,
                accountNumber: accountNumber,
            }
        }

        console.log(data)
        try {
            const response = await apiPayment.post('/withdrawrequest', data)
            console.log(response)
            setSnackbarMessage('Withdrawal request successful')
            setSnackbarOpen(true)
            setTimeout(() => {
                navigate('/wallet')
            }, 2000)
        } catch (error) {
            console.error('Error making withdrawal request:', error)
            setSnackbarMessage('Error making withdrawal request')
            setSnackbarOpen(true)
        }
    }

    return (
        <Grow in={true}>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="WITHDRAW MONEY" />
                </div>
                <div className="content">
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={11}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    background:
                                        'linear-gradient(45deg, rgba(150,56,125,1) 0%, rgba(255,78,209,1) 100%)',
                                }}
                            >
                                <CardHeader title="Enter Amount" />
                                <CardContent>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <TextField
                                            label="Amount"
                                            variant="filled"
                                            placeholder="00"
                                            type="number"
                                            size="small"
                                            helperText="Amount should be more than 300"
                                            fullWidth
                                            value={amount}
                                            onChange={(e) =>
                                                setAmount(e.target.value)
                                            }
                                            sx={{
                                                '& .MuiInputLabel-root': {
                                                    fontSize: '0.75rem', // Adjust the label font size
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& input': {
                                                        fontSize: '0.75rem', // Adjust the input text size
                                                    },
                                                    '& fieldset': {
                                                        borderRadius: '4px', // Adjust the border radius
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: '8px', // Adjust the input padding
                                                },
                                            }}
                                        />
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">
                                                Select Payment Method
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="payment-method"
                                                name="payment-method"
                                                value={paymentMethod}
                                                onChange={(e) =>
                                                    setPaymentMethod(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <FormControlLabel
                                                    value="upi"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                '& .MuiSvgIcon-root':
                                                                    {
                                                                        fontSize: 15,
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="UPI/Wallet"
                                                    sx={{
                                                        fontSize: '0.75rem', // Adjust font size
                                                        '& .MuiTypography-root':
                                                            {
                                                                fontSize:
                                                                    '0.75rem',
                                                            }, // Ensure the label text size matches
                                                    }}
                                                />
                                                <FormControlLabel
                                                    value="bank"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                '& .MuiSvgIcon-root':
                                                                    {
                                                                        fontSize: 15,
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Bank Transfer"
                                                    sx={{
                                                        fontSize: '0.75rem', // Adjust font size
                                                        '& .MuiTypography-root':
                                                            {
                                                                fontSize:
                                                                    '0.75rem',
                                                            }, // Ensure the label text size matches
                                                    }}
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        {paymentMethod === 'upi' ? (
                                            <TextField
                                                label="UPI ID"
                                                variant="outlined"
                                                placeholder="Enter your UPI ID"
                                                size="small"
                                                fullWidth
                                                value={upiId}
                                                onChange={(e) =>
                                                    setUpiId(e.target.value)
                                                }
                                                sx={{
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.75rem', // Adjust the label font size
                                                    },
                                                    '& .MuiOutlinedInput-root':
                                                        {
                                                            '& input': {
                                                                fontSize:
                                                                    '0.75rem', // Adjust the input text size
                                                            },
                                                            '& fieldset': {
                                                                borderRadius:
                                                                    '4px', // Adjust the border radius
                                                            },
                                                        },
                                                    '& .MuiInputBase-input': {
                                                        padding: '8px', // Adjust the input padding
                                                    },
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <TextField
                                                    label="Bank Name"
                                                    variant="outlined"
                                                    placeholder="Enter your Bank Name"
                                                    size="small"
                                                    fullWidth
                                                    value={bankName}
                                                    onChange={(e) =>
                                                        setBankName(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{
                                                        '& .MuiInputLabel-root':
                                                            {
                                                                fontSize:
                                                                    '0.75rem', // Adjust the label font size
                                                            },
                                                        '& .MuiOutlinedInput-root':
                                                            {
                                                                '& input': {
                                                                    fontSize:
                                                                        '0.75rem', // Adjust the input text size
                                                                },
                                                                '& fieldset': {
                                                                    borderRadius:
                                                                        '4px', // Adjust the border radius
                                                                },
                                                            },
                                                        '& .MuiInputBase-input':
                                                            {
                                                                padding: '8px', // Adjust the input padding
                                                            },
                                                    }}
                                                />
                                                <TextField
                                                    label="Account Number"
                                                    variant="outlined"
                                                    placeholder="Enter your Account Number"
                                                    size="small"
                                                    fullWidth
                                                    value={accountNumber}
                                                    onChange={(e) =>
                                                        setAccountNumber(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{
                                                        '& .MuiInputLabel-root':
                                                            {
                                                                fontSize:
                                                                    '0.75rem', // Adjust the label font size
                                                            },
                                                        '& .MuiOutlinedInput-root':
                                                            {
                                                                '& input': {
                                                                    fontSize:
                                                                        '0.75rem', // Adjust the input text size
                                                                },
                                                                '& fieldset': {
                                                                    borderRadius:
                                                                        '4px', // Adjust the border radius
                                                                },
                                                            },
                                                        '& .MuiInputBase-input':
                                                            {
                                                                padding: '8px', // Adjust the input padding
                                                            },
                                                    }}
                                                />
                                                <TextField
                                                    label="IFSC Code"
                                                    variant="outlined"
                                                    placeholder="Enter your IFSC Code"
                                                    size="small"
                                                    fullWidth
                                                    value={ifscCode}
                                                    onChange={(e) =>
                                                        setIfscCode(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{
                                                        '& .MuiInputLabel-root':
                                                            {
                                                                fontSize:
                                                                    '0.75rem', // Adjust the label font size
                                                            },
                                                        '& .MuiOutlinedInput-root':
                                                            {
                                                                '& input': {
                                                                    fontSize:
                                                                        '0.75rem', // Adjust the input text size
                                                                },
                                                                '& fieldset': {
                                                                    borderRadius:
                                                                        '4px', // Adjust the border radius
                                                                },
                                                            },
                                                        '& .MuiInputBase-input':
                                                            {
                                                                padding: '8px', // Adjust the input padding
                                                            },
                                                    }}
                                                />
                                            </>
                                        )}
                                        <Chip
                                            label="100% secure Payment"
                                            color="secondary"
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{ padding: 2, textAlign: 'center' }}
                        >
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                startIcon={<AddCardIcon />}
                                onClick={handleWithdraw}
                            >
                                Withdraw Money
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <BottomMenu />
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity="info"
                        variant="filled"
                        sx={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </div>
        </Grow>
    )
}

export default Withdrawmoney
