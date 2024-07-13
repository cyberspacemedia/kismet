import React, { useState } from 'react'
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
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import theme from '../../theme/Theme'
import AddCardIcon from '@mui/icons-material/AddCard'

function Addmoney() {
    const [amount, setAmount] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const handlePayment = async () => {
        if (!amount || amount <= 0) {
            setSnackbarMessage('Please enter a valid amount')
            setSnackbarOpen(true)
            return
        }

        if (amount < 300) {
            setSnackbarMessage('Amount should be at least 300')
            setSnackbarOpen(true)
            return
        }

        const options = {
            key: 'rzp_live_1zbYx7bQwEe3Qp', // Replace with your Razorpay Key ID
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            name: 'KISMET',
            description: 'Add Money',
            handler: function (response) {
                // This function will handle the success response
                alert(
                    `Payment successful! Payment ID: ${response.razorpay_payment_id}`
                )

                // Send payment details to the backend
                fetch(
                    'http://your-backend-url/PaymentController/paymentSuccess',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            payment_id: response.razorpay_payment_id,
                            amount: amount,
                            uid: 'user_id', // Replace with actual user ID
                        }),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        // Handle backend response
                        console.log('Payment details saved:', data)
                    })
                    .catch((err) => {
                        console.error('Error saving payment details:', err)
                    })
            },
            prefill: {
                name: 'User Name', // Replace with user's name
                email: 'user@example.com', // Replace with user's email
                contact: '9999999999', // Replace with user's contact number
            },
            theme: {
                color: '#3399cc',
            },
        }

        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="ADD MONEY" />
            </div>
            <div className="content">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={10}>
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
                                        variant="outlined"
                                        placeholder="00"
                                        type="number"
                                        size="small"
                                        helperText="Amount should be more than 300"
                                        fullWidth
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value)
                                        }
                                    />
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
                        sx={{
                            padding: 2,
                            mt: 2,
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={`./StaticAssets/Images/secure.png`}
                            alt="Secure"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </Grid>
                    <Grid item xs={10} sx={{ padding: 2, textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{ mt: 2, ...theme.buttons.gradient }}
                            size="large"
                            startIcon={<AddCardIcon />}
                            onClick={handlePayment}
                        >
                            Add Money
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
                    severity="error"
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
    )
}

export default Addmoney
