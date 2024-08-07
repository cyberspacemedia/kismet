import React, { useState, useEffect, useContext } from 'react'
import { Paper, Grid, Typography, Chip, Button, Box } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AddCardIcon from '@mui/icons-material/AddCard'
import RedeemIcon from '@mui/icons-material/Redeem'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../config/Config'
import UserContext from '../UserContext'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import AppLoader from '../Loaders/AppLoader'

function Wallet() {
    const { userId } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [wallet, setWallet] = useState({
        deposit: 0,
        referral: 0,
        wining: 0,
    })
    const navigate = useNavigate()

    useEffect(() => {
        const data = { userId: userId }
        setLoading(true)
        const walletFetch = async () => {
            try {
                const balance = await apiClient.post('/getbalance', data)
                setWallet(balance.data.data)
                console.log(balance.data.data)
                setLoading(false)
            } catch (error) {
                console.error('Wallet Fetch API Error', error)
                setLoading(false)
            }
        }
        walletFetch()
    }, [userId])

    const handleTransactions = () => {
        navigate('/history')
    }

    const totalBalance = wallet.deposit + wallet.referral + wallet.wining

    return (
        <>
            {loading && <AppLoader />}
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="WALLET" />
                </div>

                <div className="content">
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            padding: 2,
                            borderRadius: 5,
                            borderColor: '#9a00bf',
                            background:
                                'linear-gradient(337deg, rgba(154,0,191,1) 0%, rgba(255,78,209,1) 100%)',
                            width: '95%',
                            textAlign: 'center',
                            margin: 'auto',
                        }}
                    >
                        <Grid
                            item
                            container
                            xs={12}
                            md={10}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="body1" color={'white'}>
                                    Total Balance
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: '2rem' }}
                                >
                                    <span style={{ fontSize: '1rem' }}>₹</span>
                                    {totalBalance}
                                </Typography>
                            </Grid>
                            <Grid item xs={8} md={8}>
                                <Chip
                                    label="100% Secure payments"
                                    color="secondary"
                                    size="medium"
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent={'center'} mt={2}>
                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    padding: 2,
                                    borderRadius: 5,
                                    borderColor: 'white',
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.grey[500], 0.5),
                                    width: '95%',
                                    textAlign: 'center',
                                    margin: 'auto',
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ height: '100%' }}
                                >
                                    <Grid item>
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={0}
                                        >
                                            <Grid item>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: '0.8em',
                                                        }}
                                                    >
                                                        ₹
                                                    </span>
                                                    {wallet.deposit}
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Chip
                                                    label="Deposit"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    padding: 2,
                                    borderRadius: 5,
                                    borderColor: 'white',
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.grey[500], 0.5),
                                    width: '95%',
                                    textAlign: 'center',
                                    margin: 'auto',
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ height: '100%' }}
                                >
                                    <Grid item>
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={0}
                                        >
                                            <Grid item>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: '0.8em',
                                                        }}
                                                    >
                                                        ₹
                                                    </span>
                                                    {wallet.wining}
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Chip
                                                    label="Earnings"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>

                            {wallet.wining > 0 ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        sx={{
                                            borderRadius: '50px',
                                            mt: 2,
                                        }}
                                        onClick={() => {
                                            navigate('/earningconvert', {
                                                state: {
                                                    winning: wallet.wining,
                                                },
                                            })
                                        }}
                                    >
                                        Convert
                                    </Button>
                                </Box>
                            ) : null}
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    padding: 2,
                                    borderRadius: 5,
                                    borderColor: 'white',
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.grey[500], 0.5),
                                    width: '95%',
                                    textAlign: 'center',
                                    margin: 'auto',
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ height: '100%' }}
                                >
                                    <Grid item>
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={0}
                                        >
                                            <Grid item>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: '0.8em',
                                                        }}
                                                    >
                                                        ₹
                                                    </span>
                                                    {wallet.referral}
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Chip
                                                    label="Commission"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            {wallet.referral > 0 ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        sx={{
                                            borderRadius: '50px',
                                            mt: 2,
                                        }}
                                        onClick={() => {
                                            navigate('/commissionconvert', {
                                                state: {
                                                    referral: wallet.referral,
                                                },
                                            })
                                        }}
                                    >
                                        Convert
                                    </Button>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        sx={{
                                            borderRadius: '50px',
                                            mt: 2,
                                        }}
                                        onClick={() => {
                                            navigate('/commissionhistory', {
                                                state: {
                                                    referral: wallet.referral,
                                                },
                                            })
                                        }}
                                    >
                                        History
                                    </Button>
                                </Box>
                            )}
                        </Grid>
                        <Grid item sx={{ width: '90%' }}>
                            <Grid
                                container
                                spacing={2}
                                mt={2}
                                justifyContent="center"
                            >
                                <Grid item sx={{ width: '50%' }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                        startIcon={<AddCardIcon />}
                                        sx={{
                                            borderRadius: '50px',
                                            padding: 2,
                                        }}
                                        onClick={() => {
                                            navigate('/addmoney')
                                        }}
                                    >
                                        Add Money
                                    </Button>
                                </Grid>
                                <Grid item sx={{ width: '50%' }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        fullWidth
                                        startIcon={<RedeemIcon />}
                                        sx={{
                                            borderRadius: '50px',
                                            padding: 2,
                                        }}
                                        onClick={() => {
                                            navigate('/withdrawmoney')
                                        }}
                                    >
                                        Withdraw
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={5} sx={{ width: '90%' }}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                onClick={handleTransactions}
                                sx={{ padding: 2, borderRadius: 20 }}
                                fullWidth
                                endIcon={<CurrencyRupeeIcon />}
                            >
                                All Transactions
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <div className="bottom-menu">
                    <BottomMenu />
                </div>
            </div>
        </>
    )
}

export default Wallet
