import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button,
    Box,
    Paper,
    Grid,
    LinearProgress,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import PasswordIcon from '@mui/icons-material/Password'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import BadgeIcon from '@mui/icons-material/Badge'
import Badge from '@mui/material/Badge'
import WalletIcon from '@mui/icons-material/Wallet'
import EditIcon from '@mui/icons-material/Edit'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import NotificationsIcon from '@mui/icons-material/Notifications'
import UserContext from '../UserContext'
import { apiClient } from '../config/Config'

const AppNavigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { userId } = useContext(UserContext)
    const [profile, setProfile] = useState([])
    const [totalBalance, setTotalBalance] = useState(0)
    const [notifcationCount, setNotifcationCount] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const data = {
            userId: userId,
        }

        const fetchdata = async () => {
            try {
                const response = await apiClient.post('/getuserprofile', data)
                setProfile(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }

        const fetchbalance = async () => {
            try {
                const balance = await apiClient.post('/getbalance', data)
                console.log(balance.data.data)
                setTotalBalance(
                    balance.data.data.deposit + balance.data.data.wining
                )
            } catch (error) {
                console.error('API Error', error)
            }
        }

        const fetchnotification = async () => {
            try {
                const notification = await apiClient.post(
                    '/getNotificationCount',
                    data
                )
                console.log(notification.data.data.count)
                setNotifcationCount(notification.data.data.count)
            } catch (error) {
                console.error('API Error Fetch Notification', error)
            }
        }

        fetchdata()
        fetchbalance()
        fetchnotification()
    }, [userId])

    const handlelogout = () => {
        // Delete the 'userId' flag from local storage
        localStorage.removeItem('hasOpenedBefore')
        localStorage.removeItem('userId')
        navigate('/login')
    }

    // Function to handle opening the drawer
    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    // Function to handle closing the drawer
    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    return (
        <>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: '#47188f' }}>
                <Toolbar>
                    {/* Left side menu icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        sx={{
                            border: '1px solid orange', // Add a yellow outline
                            borderRadius: '50%', // Make the border circular
                            padding: '1px', // Add some padding to make space for the border
                        }}
                    >
                        <AccountCircleIcon />
                    </IconButton>
                    {/* Logo in the middle */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row', // Items placed next to each other
                            justifyContent: 'center',
                            ml: 5,
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{
                                height: '50px',
                            }}
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                        />
                    </Box>
                    {/* Right side settings menu */}

                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="settings"
                        onClick={() => {
                            navigate('/wallet')
                        }}
                    >
                        <Paper
                            sx={{
                                background:
                                    'linear-gradient(266deg, rgba(154,0,191,1) 0%, rgba(255,78,209,1) 100%)',
                                display: 'flex',
                                alignItems: 'center', // Align items vertically center
                                justifyContent: 'center', // Center content horizontally
                                padding: '0.3rem',
                                width: '4em',
                                borderRadius: '20px',
                                textAlign: 'center',
                                border: 'solid 0.5px #878787',
                            }}
                        >
                            <WalletIcon sx={{ fontSize: '20px' }} />{' '}
                            <Typography variant="caption">
                                ₹ {totalBalance}
                            </Typography>
                        </Paper>
                    </IconButton>

                    {/* Notification Icon */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="settings"
                        onClick={() => {
                            navigate('/Appnotification')
                        }}
                    >
                        <Badge badgeContent={notifcationCount} color="error">
                            <NotificationsIcon sx={{ fontSize: '20px' }} />
                        </Badge>
                    </IconButton>
                    {/* Notification Icon */}
                </Toolbar>
            </AppBar>
            {/* Drawer for left-side menu */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: {
                        backgroundColor: '#2A2A2A',
                        width: '17rem',
                    },
                }}
            >
                <Grid
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={2}
                >
                    <Grid item>
                        <AccountBoxIcon sx={{ fontSize: '100px' }} />
                        <IconButton
                            onClick={() => {
                                navigate('/myaccount')
                            }}
                            style={{
                                position: 'absolute',
                                top: 20,
                                right: '30%',
                                color: 'white',
                                backgroundColor: 'red',
                                border: 'solid 0.5px white',
                            }}
                        >
                            <EditIcon sx={{ fontSize: '0.8rem' }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} justifyItems={'center'}>
                        <Typography variant="body1" textAlign="center">
                            {profile.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} justifyItems={'center'}>
                        <Typography variant="body2" textAlign="center">
                            {profile.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} justifyItems={'center'}>
                        <span style={{ fontSize: '10px' }}>
                            Profile Completeness (60%)
                        </span>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            color="secondary"
                            sx={{ height: '5px', borderRadius: '10px' }}
                        />
                    </Grid>
                </Grid>

                <hr style={{ borderColor: 'red', width: '200px' }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '70%',
                        justifyContent: 'space-between',
                    }}
                >
                    <List>
                        {/* List items for the drawer */}
                        <ListItem>
                            <ListItemIcon>
                                <HelpOutlineIcon
                                    sx={{ color: 'white' }}
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={'How to Play'}
                                onClick={() => {
                                    navigate('/howtoplay')
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PasswordIcon
                                    sx={{ color: 'white' }}
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText primary={'Change Password'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LeaderboardIcon
                                    sx={{ color: 'white' }}
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Leaderboard'}
                                onClick={() => {
                                    navigate('/leaderboard')
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <BadgeIcon
                                    sx={{ color: 'white' }}
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Company Profile'}
                                onClick={() => {
                                    navigate('/companyprofile')
                                }}
                            />
                        </ListItem>
                    </List>
                    <Box p={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={handlelogout}
                            size="small"
                            sx={{ borderRadius: '20px' }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default AppNavigation
