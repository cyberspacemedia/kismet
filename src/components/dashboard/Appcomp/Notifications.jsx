import React, { useContext, useEffect, useState } from 'react'
import { Box, Card, CardContent, Grid, Icon, Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import Topmenu from './Topmenu'
import BottomMenu from './Bottommenu'
import UserContext from '../../UserContext'
import { apiClient } from '../../config/Config'
import '../../../theme/Game.css' // Adjust the path as per your actual directory structure

function Notifications() {
    const userId = useContext(UserContext)
    const [notification, setNotification] = useState([])

    const data = userId

    useEffect(() => {
        const getNotification = async () => {
            try {
                const response = await apiClient.post('/get_notification', data)
                console.log(response)
                if (response.data.success === true) {
                    setNotification(response.data.data.notification)
                }
            } catch (error) {
                console.error('Error fetching notifications:', error)
            }
        }

        getNotification()
    }, [data]) // Ensure useEffect runs when userId changes

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="NOTIFICATIONS" />
            </div>
            <div className="content">
                <Grid
                    container
                    justifyContent="center" // Center items horizontally
                    style={{ width: '100%' }}
                >
                    {notification.length > 0 ? (
                        notification.map((item, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={10}
                                md={10}
                                key={index}
                                mt={1}
                            >
                                <Card
                                    sx={{
                                        overflow: 'visible',
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        width: '100%', // Ensure Card takes full width
                                        maxWidth: 600, // Optional: limit maximum width if needed
                                        margin: 'auto',

                                        background:
                                            'linear-gradient(79deg, rgba(83,0,103,1) 0%, rgba(155,2,168,1) 100%)',
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '16px',
                                            position: 'relative',
                                            width: '100%', // Ensure CardContent takes full width
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '100%',
                                                alignItems: 'center',
                                                position: 'relative',
                                            }}
                                        >
                                            {/* Date */}
                                            <NotificationsActiveIcon
                                                sx={{ color: 'white' }}
                                            />
                                            {/* Content */}
                                            <Box
                                                sx={{
                                                    flex: 1,
                                                    textAlign: 'left',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    mx: 2, // Margin to space out from the date and icon
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{ color: 'white' }}
                                                >
                                                    {item.headline}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'white' }}
                                                >
                                                    {item.message}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    flexShrink: 0, // Prevent date from expanding
                                                    textAlign: 'left',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                    width: 'auto', // Allow width to fit content
                                                }}
                                            >
                                                {item.date}
                                            </Typography>

                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    right: 16,
                                                    top: '50%',
                                                    transform:
                                                        'translateY(-50%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            ></Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                sx={{ textAlign: 'center', mt: 2 }}
                            >
                                No notifications found.
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </div>
            <BottomMenu />
        </div>
    )
}

export default Notifications
