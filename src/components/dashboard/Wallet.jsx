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
    Slide,
    Fade,
    Grow,
    Zoom,
} from '@mui/material'
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function Wallet() {
    const { userId } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const walletFetch = async () => {
            try {
                const balance = await apiClient.post('/getbalance', data)
                setWallet(balance.data.data)
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

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const totalBalance = wallet.deposit + wallet.referral

    return (
        <>
            {loading && <AppLoader />}
            <div className="layout-container">
                <div className="top-menu">
                    <Topmenu menu="WALLET" />
                </div>
                <Grow in={!loading}>
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
                                        <span style={{ fontSize: '1rem' }}>
                                            ₹
                                        </span>
                                        {totalBalance}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} md={8}>
                                    <Chip
                                        label="100% Secure payments"
                                        color="success"
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
                                                                fontSize:
                                                                    '0.8em',
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
                                                                fontSize:
                                                                    '0.8em',
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
                                                                fontSize:
                                                                    '0.8em',
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
                                            onClick={handleOpenModal}
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
                </Grow>
                <div className="bottom-menu">
                    <BottomMenu />
                </div>
            </div>

            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Add Money</DialogTitle>
                <DialogContent>
                    <TextField
                        variant="outlined"
                        type="number"
                        fullWidth
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    ₹
                                </InputAdornment>
                            ),
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button onClick={handleCloseModal}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Wallet
