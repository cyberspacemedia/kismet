import React, { useContext, useState } from 'react'
import {
    Card,
    CardContent,
    Chip,
    Box,
    Grid,
    Button,
    Snackbar,
    Alert,
    Grow,
    Typography,
    Divider,
    TextField,
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import theme from '../../theme/Theme'
import AddCardIcon from '@mui/icons-material/AddCard'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../config/Config'
import { useLocation } from 'react-router-dom'

function Earningconvert() {
    const navigate = useNavigate()
    const { userId } = useContext(UserContext)
    const location = useLocation()
    const { winning } = location.state || {}
    const [amount, setAmount] = useState(0)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const convertnow = async () => {
        const data = { userId, amount: amount }
        console.log(data)
        try {
            const response = await apiClient.post(
                '/convert_wining_to_deposit',
                data
            )
            console.log(response)
            if (response.data.success === true) {
                setSnackbarMessage('Earning Converted to Deposit')
                setSnackbarOpen(true)
                setTimeout(() => {
                    navigate('/wallet')
                }, 2000)
            } else {
                setSnackbarMessage(response.data.message)
                setSnackbarOpen(true)
                setTimeout(() => {
                    navigate('/wallet')
                }, 2000)
            }
        } catch (error) {
            console.error('API error Covert Commision', error)
        }
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    return (
        <Grow in={true}>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="EARNING CONVERT" />
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
                                <CardContent>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Typography variant="body2">
                                            You can convert your earnings into
                                            deposit for playing game. For
                                            withdrawing earning you can use
                                            withdraw button from wallet.
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2">
                                            आप गेम खेलने के लिए अपनी कमाई को
                                            डिपॉजिट में बदल सकते हैं। कमाई
                                            निकालने के लिए आप वॉलेट से निकासी
                                            बटन का उपयोग कर सकते हैं।
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{ padding: 2, textAlign: 'center' }}
                        >
                            <TextField
                                id="amount"
                                label="Enter Amount"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{ padding: 2, textAlign: 'center' }}
                        >
                            <Chip
                                label={`Total Earning:  ₹${winning}`}
                                color="success"
                                sx={{
                                    fontSize: '0.85em',
                                    m: 1,
                                    p: 1,
                                    width: '100%',
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                startIcon={<AddCardIcon />}
                                onClick={convertnow}
                            >
                                CONVERT NOW
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="bottom-menu">
                    <BottomMenu />
                </div>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
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

export default Earningconvert
