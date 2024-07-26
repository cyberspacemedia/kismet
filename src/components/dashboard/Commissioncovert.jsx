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
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import theme from '../../theme/Theme'
import AddCardIcon from '@mui/icons-material/AddCard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../config/Config'
import { useLocation } from 'react-router-dom'

function Commissionconvert() {
    const { userId } = useContext(UserContext)
    const location = useLocation()
    const { referral } = location.state || {}
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const navigate = useNavigate()

    const convertnow = async () => {
        const data = { userId }
        try {
            const response = await apiClient.post(
                '/convert_referral_to_wining',
                data
            )
            console.log(response)
            if (response.data.success === true) {
                setSnackbarMessage('Commission Converted')
                setSnackbarOpen(true)
                setTimeout(() => {
                    navigate('/wallet')
                }, 1000)
            } else {
                setSnackbarMessage(response.data.message)
                setSnackbarOpen(true)
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
                    <Topmenu menu="CONVERT COMMISSION" />
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
                                            Your money will be added to
                                            earnings. You can withdraw your
                                            commision after than
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2">
                                            आपका पैसा कमाई में जोड़ दिया जाएगा।
                                            आप इसके बाद अपना कमीशन निकाल सकते
                                            हैं। बदलने के लिए अब कंवर्ट बटन
                                            दबाएं।
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
                            <Chip
                                label={`Total Commission:  ₹${referral}`}
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
                        <Grid
                            item
                            xs={10}
                            sx={{ padding: 2, textAlign: 'center' }}
                        >
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                startIcon={<ListAltIcon />}
                                onClick={() => {
                                    navigate('/commissionhistory')
                                }}
                            >
                                COMMISSION HISTORY
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

export default Commissionconvert
