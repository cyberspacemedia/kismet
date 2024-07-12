import React, { useState, useEffect, useContext } from 'react'
import {
    Paper,
    Grid,
    Typography,
    Chip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    InputAdornment,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import Slide from '@mui/material/Slide'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../config/Config'
import UserContext from '../UserContext'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function Wallet() {
    const { userId } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)
    const [amount, setAmount] = useState('0')
    const [wallet, setWallet] = useState({
        deposit: 0,
        referral: 0,
        wining: 0,
    })
    const navigate = useNavigate()

    useEffect(() => {
        const data = { userId: userId }
        const walletFetch = async () => {
            try {
                const balance = await apiClient.post('/getbalance', data)
                console.log(balance.data.data)
                setWallet(balance.data.data)
            } catch (error) {
                console.error('Wallet Fetch API Error', error)
            }
        }
        walletFetch()
    }, [userId])

    const handleTransactions = () => {
        navigate('/history')
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const totalBalance = wallet.deposit + wallet.referral

    return (
        <>
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="WALLET" />
                </div>
                <div className="content">
                    {/* End of Total Balance */}
                    <Paper
                        variant="outlined"
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
                                <Grid container direction="column" spacing={0}>
                                    <Grid item>
                                        <Typography
                                            variant="body1"
                                            color={'white'}
                                        >
                                            Total Balance
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '2rem' }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                ₹
                                            </span>
                                            {totalBalance}
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Chip
                                            label="100% Secure payments"
                                            color="success"
                                            size="medium"
                                            sx={{ width: '100%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End of Total Balance */}

                    <Grid
                        container
                        spacing={1}
                        justifyContent={'center'}
                        mt={2}
                    >
                        <Grid item xs={4}>
                            {/* Deposit Paper */}
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
                                                    sx={{ fontSize: '1rem' }}
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
                            {/* Deposit Paper */}
                        </Grid>
                        <Grid item xs={4}>
                            {/* Earnings */}
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
                                                    sx={{ fontSize: '1rem' }}
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
                            {/*  Earnings */}
                        </Grid>
                        <Grid item xs={4}>
                            {/* Commission */}
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
                                                    sx={{ fontSize: '1rem' }}
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
                            {/* Commission */}
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
                                        size="large"
                                        fullWidth
                                        sx={{
                                            borderRadius: '50px',
                                            padding: 2,
                                        }}
                                        onClick={handleOpenModal}
                                    >
                                        Add Money
                                    </Button>
                                </Grid>
                                <Grid item sx={{ width: '50%' }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        fullWidth
                                        sx={{
                                            borderRadius: '50px',
                                            padding: 2,
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
                            >
                                Transaction History
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <BottomMenu />
            </div>

            {/* Add Money Dialog */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                TransitionComponent={Transition}
                fullScreen
                PaperProps={{
                    sx: {
                        position: 'absolute',
                        bottom: 0,
                        maxHeight: '50vh',
                        width: '100%',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        backgroundColor: (theme) =>
                            alpha(theme.palette.grey[800], 0.8),
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CurrencyRupeeIcon sx={{ marginRight: '5px' }} />
                    Add Money
                </DialogTitle>

                <DialogContent sx={{ mt: 5, textAlign: 'center' }}>
                    <TextField
                        id="amount"
                        label="Enter Amount between 100 - 5000"
                        variant="standard"
                        type="number"
                        color="secondary"
                        value={amount}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon
                                        sx={{ color: '#ffff' }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                        fullWidth
                    />

                    <Chip
                        label="100% Safe and Secure"
                        color="success"
                        sx={{ mt: 5, width: '80%' }}
                        size="medium"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseModal}
                        variant="outlined"
                        color="inherit"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        color="secondary"
                    >
                        Add Money
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Add Money Dialog */}
        </>
    )
}

export default Wallet
