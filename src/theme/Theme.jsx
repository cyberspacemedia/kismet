import { createTheme } from '@mui/material/styles'
import '@fontsource/roboto'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9a00bf',
        },
        text: {
            primary: '#ffff', // Set default text color to white
        },
        background: {
            default: 'black', // Set default background color to black
            paper: '#ffff', // Set paper component background color to black
        },
    },

    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

        body1: {
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '1.3rem',
        },
        body2: {
            color: '#d7d6d7',
            fontSize: '0.8rem',
        },
        h1: {
            fontSize: '1.2rem',
            color: '#ffffff',
            fontWeight: 'bolder',
        },
        h2: {
            fontSize: '1rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '0.9rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '0.8rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: '0.9em',
            color: '#ffffff',
            fontWeight: 'bold',

            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
            '@media (min-width:960px)': {
                fontSize: '1.2rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.4rem',
            },
        },
        h6: {
            fontSize: '0.7em',
            color: '#ffffff',
            fontWeight: 'bold',
            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
            '@media (min-width:960px)': {
                fontSize: '1.2rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.4rem',
            },
        },
        subtitle1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
            color: '#ffffff',
            fontWeight: 'bold',
            '@media (min-width:600px)': {
                fontSize: '1.4rem',
            },
            '@media (min-width:960px)': {
                fontSize: '1.4rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.4rem',
            },
        },

        subtitle2: {
            fontFamily: 'sans-serif',
            fontSize: '0.8rem',
            color: '#ffff',
            fontWeight: 'bold',
            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
            '@media (min-width:960px)': {
                fontSize: '1.4rem',
            },
            '@media (min-width:1280px)': {
                fontSize: '1.4rem',
            },
        },
        caption: {
            color: '#ffff',
            fontSize: '10px',
            fontFamily: 'sans-serif',
        },
    },
    components: {
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: 'white',
                    fontSize: '1rem',
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    '&.topbar': {
                        backgroundColor: '#47188f',
                        textAlign: 'center',
                        padding: '3px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomLeftRadius: '1em',
                        borderBottomRightRadius: '1em',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: '999',
                        width: '100%',
                    },
                },
            },
        },
    },
    buttons: {
        primary: {
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: '80px',
            padding: '10px 20px',
        },
        secondary: {
            backgroundColor: '#dc004e',
            color: '#fff',
            borderRadius: '8px',
            padding: '10px 20px',
        },
        custom: {
            backgroundColor: '#ff9800',
            color: '#fff',
            borderRadius: '8px',
            padding: '10px 20px',
        },
        gradient: {
            backgroundImage: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            color: '#fff',
            borderRadius: '8px',
            padding: '10px 20px',
        },
        squarenumberbutton: {
            color: '#fff',
            borderRadius: '5px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: '3px',

            background:
                'linear-gradient(45deg, rgba(80,80,80,1) 0%, rgba(40,40,40,1) 100%)',
            border: 'solid 0.5px #676767',
            height: '50px',
            width: '50px',
        },
    },
})

export default theme
