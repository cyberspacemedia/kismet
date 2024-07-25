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

    return (
        <Grow in={true}>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="WITHDRAW MONEY" />
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
                                                    control={<Radio />}
                                                    label="UPI/Wallet"
                                                />
                                                <FormControlLabel
                                                    value="bank"
                                                    control={<Radio />}
                                                    label="Bank Transfer"
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
