import React from 'react'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'
import { Box, Chip, Grid, Icon, Typography } from '@mui/material'
function CustomGridItem({ icon, status, amount, datetime, txnId }) {
    return (
        <Box
            sx={{ p: 2, border: '1px solid #ccc', borderRadius: '5px', mb: 2 }}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Box display="flex" alignItems="center">
                        <Icon>{icon}</Icon>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Typography variant="body1">{status}</Typography>
                        <Chip
                            label={`Txn ID: ${txnId}`}
                            color="primary"
                            sx={{ mt: 1 }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <Typography variant="body2">{amount}</Typography>
                        <Typography variant="body2">{datetime}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default function Accounthistory() {
    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="TRANSACTIONS" />
            </div>

            <div className="content">
                <Grid container direction="column" justifyContent="center">
                    <Grid item>
                        <CustomGridItem
                            status="Completed"
                            amount="$120"
                            datetime="2024-07-25 14:35"
                            txnId="1234567890"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </div>
    )
}
