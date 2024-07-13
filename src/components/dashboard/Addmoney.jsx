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
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import theme from '../../theme/Theme'
import AddCardIcon from '@mui/icons-material/AddCard'

function Addmoney() {
    const [amount, setAmount] = useState('')

    const handlePayment = async () => {
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount')
            return
        }

        const options = {
            key: 'rzp_test_U5WNvZ7P5evrkz', // Replace with your Razorpay Key ID
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            name: 'Your App Name',
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

    return (
        <div
            className="layout-container"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div className="top-menu">
                <Topmenu menu="ADD MONEY" />
            </div>
            <div className="content" style={{ flex: 1 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    style={{ height: '100%' }}
                >
                    <Grid item>
                        <Card
                            sx={{
                                width: 300,
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
                                        helperText="Amount should not be more than 10,000"
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
                    <Grid item mt={2}>
                        <img
                            src={`./StaticAssets/Images/secure.png`}
                            alt="Secure"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </Grid>
                    <Grid item>
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
        </div>
    )
}

export default Addmoney
