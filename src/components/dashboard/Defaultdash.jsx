import React, { useState, useEffect } from 'react'
import theme from '../../theme/Theme'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    // Box,
    Typography,
    Box,
} from '@mui/material'
// import Imageslider from "./slider/Imageslider";
import Allgames from '../Games/Allgames'
import Liveresults from './Liveresults/Liveresults'
import LiveGame from './Livegames/LiveGame'
import Upcominggames from './Upcominggames/Upcominggames'

function Defaultdash() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // Check if the modal has been opened before by checking local storage
        const hasOpenedBefore = localStorage.getItem('hasOpenedBefore')
        if (!hasOpenedBefore) {
            // If the modal has not been opened before, open it and set the flag in local storage
            setOpen(true)
            localStorage.setItem('hasOpenedBefore', 'true')
        }
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box
            style={{
                height: '83vh', // Full height of the viewport
                overflowY: 'auto', // Enable vertical scrolling
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} lg={12} container justifyContent="center">
                    <Allgames />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    container
                    justifyContent="center"
                >
                    <Liveresults />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    container
                    justifyContent="center"
                >
                    <LiveGame />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    container
                    justifyContent="center"
                >
                    <Upcominggames />
                </Grid>
            </Grid>

            {/* Opening Dialog */}
            <Dialog open={open}>
                <DialogTitle
                    sx={{
                        backgroundColor: '#3c3c3c',
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    Welcome , User
                </DialogTitle>
                <DialogContent
                    sx={{ backgroundColor: '#262626', textAlign: 'center' }}
                >
                    <Typography variant="subtitle1">Notice Board</Typography>
                    <Typography variant="subtitle2">
                        अत्यन्त जरुरी सुचना! Kismet App में आप सभी यूजर्स का
                        स्वागत है! Kismet App में आप 24 घंटे पेमेंट ऐड कर सकते
                        हैं! अगर आपको पेमेंट जोड़ने या निकालने में कोई भी समस्या
                        होती है, तो आप हमारे नीचे दिए गए टेलीग्राम पर बात कर
                        सकते हैं।
                    </Typography>
                </DialogContent>
                <DialogActions
                    sx={{
                        backgroundColor: '#262626',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        sx={{ ...theme.buttons.gradient }}
                    >
                        Close
                    </Button>
                </DialogActions>
                <DialogContent
                    sx={{ backgroundColor: '#262626', textAlign: 'center' }}
                >
                    <Typography variant="body2" color="yellow">
                        Telegram ID : @kismet_87
                    </Typography>
                </DialogContent>
            </Dialog>
            {/* Opening Dialog */}
        </Box>
    )
}

export default Defaultdash
