import React, { useContext, useEffect, useState } from 'react'

import { Card, CardContent, Grid, Typography, Button, Box } from '@mui/material'
import { apiClient } from '../../config/Config'
import UserContext from '../../UserContext'
import AppLoader from '../../Loaders/AppLoader'
import BottomMenu from './Bottommenu'
import Topmenu from './Topmenu'
import theme from '../../../theme/Theme'
function Shareapp() {
    const userId = useContext(UserContext)

    const [referralData, setReferralData] = useState([])
    const [referralCode, setReferralCode] = useState('')
    const [pendingCommission, setPendingCommission] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true) // Show loader
            try {
                const response = await apiClient.post(
                    'get_referral_info',
                    userId
                )
                // console.log(response.data);
                setReferralData(response.data.data)
                setReferralCode(response.data.data.code)
            } catch (error) {
                console.error('API Error', error)
            } finally {
                setLoading(false) // Hide loader
            }
        }

        const fetchpending = async () => {
            try {
                const pending = await apiClient.post('/getbalance', userId)
                console.log(pending)
                setPendingCommission(pending.data.data.pending)
            } catch (error) {
                console.error('API Error', error)
            }
        }

        fetchdata()
        fetchpending()
    }, [userId])

    const handleInviteFriends = async () => {
        try {
            await navigator.clipboard.writeText(referralCode)
            console.log('Referral code copied to clipboard:', referralCode)
            // Optionally, show a success message or perform other actions
        } catch (error) {
            console.error('Failed to copy referral code:', error)
            // Handle error (e.g., show an error message)
        }
    }

    return (
        <>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="INVITE AND EARN" />
                </div>
                {loading && <AppLoader />}

                <div className="content" style={{}}>
                    <Grid
                        container
                        justifyContent={'center'}
                        spacing={2}
                        sx={{}}
                    >
                        <Grid item xs={10}>
                            <Card
                                variant="outlined"
                                sx={{
                                    background:
                                        'linear-gradient(318deg, rgba(150,56,125,1) 0%, rgba(255,78,209,1) 100%)',
                                    border: '2px solid #ff4ed1',
                                    borderRadius: 5,
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        component="div"
                                        gutterBottom
                                        sx={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Total Commission
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        component="div"
                                        sx={{
                                            color: 'white',
                                            fontSize: '2rem',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '1rem',
                                                verticalAlign: 'super',
                                            }}
                                        >
                                            ₹
                                        </span>
                                        {referralData.commission}
                                    </Typography>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{ gap: 1 }} // Optional: Adds space between elements
                                    >
                                        <Typography variant="subtitle2">
                                            Pending Commission
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                background:
                                                    'linear-gradient(279deg, rgba(83,0,103,1) 0%, rgba(125,8,135,1) 100%)',
                                                padding: '5px',
                                                borderRadius: '10px',
                                                width: '30%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            ₹ {pendingCommission}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={10} mt={5}>
                            <Typography
                                variant="subtitle1"
                                p={1}
                                sx={{
                                    border: '0.1px solid #ff4ed1',
                                    bgcolor: '#a801b3',
                                    borderRadius: 2,
                                }}
                            >
                                Total People Added :{' '}
                                {referralData.user_count > 0
                                    ? referralData.user_count
                                    : '0'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} mt={2}>
                            <Typography
                                variant="h3"
                                sx={{ padding: 2, textAlign: 'center' }}
                            >
                                Your referral Code
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    border: '3px dotted #ff4ed1',
                                    padding: 1,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                }}
                            >
                                {referralData.code}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                                onClick={handleInviteFriends}
                            >
                                Copy Referral Code
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <BottomMenu />
            </div>
        </>
    )
}

export default Shareapp
