import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

function Topmenu({ menu }) {
    const navigate = useNavigate()
    const theme = useTheme()

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
                <NotificationsIcon />
            </IconButton>
        </Box>
    )
}

export default Topmenu
