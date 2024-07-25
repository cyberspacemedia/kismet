import React, { useContext, useEffect, useState } from 'react'
import { Badge, Box, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { apiClient } from '../../config/Config'
import UserContext from '../../UserContext'

function Topmenu({ menu }) {
    const { userId } = useContext(UserContext)
    const navigate = useNavigate()
    const theme = useTheme()
    const [notification, setNotification] = useState(0)

    useEffect(() => {
        const data = { userId }
        const notificationCount = async () => {
            try {
                const nCount = await apiClient.post(
                    'getNotificationCount',
                    data
                )
                console.log(nCount.data.data.count)
                setNotification(nCount.data.data.count)
            } catch (error) {
                console.error('API error topment Notification', error)
            }
        }
        notificationCount()
    }, [userId])

    const handleBackClick = () => {
        navigate(-1) // Go back to the previous URL
    }

    return (
        <Box sx={theme.components.MuiBox.styleOverrides.root['&.topbar']}>
            {/* Logo on Top Left */}
            <IconButton
                sx={{ color: 'white', marginRight: '10px' }}
                onClick={handleBackClick}
            >
                <ArrowCircleLeftIcon />
            </IconButton>

            <Typography variant="h6">{menu}</Typography>
            {/* Notification Icon on Top Right */}
            <IconButton
                sx={{ color: 'white', marginRight: '10px' }}
                onClick={() => {
                    navigate('/Appnotification')
                }}
            >
                <Badge badgeContent={notification} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default Topmenu
