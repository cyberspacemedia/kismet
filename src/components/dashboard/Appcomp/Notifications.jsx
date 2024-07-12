import React, { useContext, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
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
                                        width: '100%',
                                        border: '0.1px solid gray',
                                        borderRadius: '10px',
                                        background:
                                            'linear-gradient(43deg, rgba(42,0,113,1) 0%, rgba(200,78,255,1) 100%)',
                                    }}
                                >
                                    <CardHeader
                                        title={
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: 'white',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {item.headline}
                                            </Typography>
                                        }
                                        sx={{
                                            borderBottom: '0.1px solid #2a0071',
                                            background:
                                                'linear-gradient(337deg, rgba(42,0,113,1) 0%, rgba(200,78,255,1) 100%)',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'white' }}
                                        >
                                            {item.message}
                                        </Typography>
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
