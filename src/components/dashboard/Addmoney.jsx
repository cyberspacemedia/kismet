import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    TextField,
    Chip,
    Box,
    Grid,
    Button,
} from '@mui/material'
import Topmenu from './Appcomp/Topmenu'
import BottomMenu from './Appcomp/Bottommenu'

function Addmoney() {
    return (
        <div
            className="layout-container"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div className="top-menu">
                <Topmenu menu="ADD MONEY" />
            </div>
            <div className="content" style={{ flex: 1 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    style={{ height: '100%' }}
                >
                    <Grid item>
                        <Card
                            sx={{
                                width: 300,
                                textAlign: 'center',
                                borderRadius: '10px',
                                background:
                                    'linear-gradient(45deg, rgba(150,56,125,1) 0%, rgba(255,78,209,1) 100%)',
                            }}
                        >
                            <CardHeader title="Enter Amount" />
                            <CardContent>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <TextField
                                        label="Amount"
                                        variant="outlined"
                                        placeholder="00"
                                        type="number"
                                        helperText="Amount should not be more than 10,000"
                                        fullWidth
                                    />
                                    <Chip
                                        label="100% secure Payment"
                                        color="secondary"
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <img
                            src="image_url"
                            alt="Placeholder"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary">
                            Add Money
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <BottomMenu />
        </div>
    )
}

export default Addmoney
