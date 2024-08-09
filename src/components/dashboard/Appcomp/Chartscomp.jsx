import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import dayjs from 'dayjs'
import {
    Grid,
    Select,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Mydatepicker from './Mydatepicker'
import { apiClient } from '../../config/Config'
import AppLoader from '../../Loaders/AppLoader'
import Bottommenu from './Bottommenu'
import Topmenu from './Topmenu'

function Chartscomp() {
    const [loader, setLoader] = useState(false)
    const [game, setGame] = useState('')
    const [date, setDate] = useState(dayjs())
    const [gameData, setGameData] = useState([])
    const [gamestatus, setGamestatus] = useState(false)

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    const getSize = () => {
        if (isXs) return '60px'
        if (isSm) return '60px'
        if (isMd) return '100px'
        return '120px'
    }

    const size = getSize()

    const handleGameSelect = (e) => {
        setGame(e.target.value)
    }

    const fetchdata = async (data) => {
        setLoader(true) // Show loader
        try {
            const response = await apiClient.post('charts', data)
            if (response.data.success === true) {
                setGameData(response.data.data)
                setGamestatus(true)
            } else {
                setGamestatus(false)
            }
        } catch (error) {
            console.error('API Error', error)
        } finally {
            setLoader(false) // Hide loader
        }
    }

    const handlechartsubmit = async () => {
        setGamestatus(false)
        const data = {
            gameName: game,
            date: date?.format('DD-MM-YYYY'),
        }
        fetchdata(data)
    }

    useEffect(() => {
        const data = {
            gameName: '',
            date: date?.format('DD-MM-YYYY'),
        }
        fetchdata(data)
    }, [date])

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="CHARTS" />
            </div>

            {loader && <AppLoader />}

            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: '875',
                    backgroundColor: 'black',
                    height: '60px',
                    top: '0',
                }}
                mt={5}
            >
                <Grid item xs={4}>
                    <FormControl fullWidth variant="filled" size="small">
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: 'white', fontSize: '0.8rem' }}
                        >
                            Select Game
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={game}
                            label="Select Game"
                            onChange={handleGameSelect}
                            className="primarySelect"
                        >
                            <MenuItem
                                value="Disawar"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Disawar
                            </MenuItem>
                            <MenuItem
                                value="Gali"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Gali
                            </MenuItem>
                            <MenuItem
                                value="Faridabad"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Faridabad
                            </MenuItem>
                            <MenuItem
                                value="Gaziabad"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Gaziabad
                            </MenuItem>
                            <MenuItem
                                value="Gurugram"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Gurugram
                            </MenuItem>
                            <MenuItem
                                value="Rewari"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Rewari
                            </MenuItem>
                            <MenuItem
                                value="Alwar"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Alwar
                            </MenuItem>
                            <MenuItem
                                value="Rohtak"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                }}
                            >
                                Rohtak
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Mydatepicker date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={handlechartsubmit}
                        sx={{
                            width: '2.5em',
                            height: '2.5em',
                            minWidth: 'unset',
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>

            {gamestatus === true && (
                <div className="content">
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        mt={5}
                        sx={{ height: '78vh', overflowY: 'auto' }}
                    >
                        {gameData.map((game, index) => (
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                                key={index}
                                sx={{
                                    width: '95%',
                                    p: '10px',
                                    margin: '5px 0', // Added some margin between the cards
                                    border: '1px solid #525252',
                                    borderRadius: '5px',
                                    backgroundColor: '#373736',
                                    background:
                                        'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                                }}
                            >
                                <Grid item xs={3}>
                                    <div
                                        style={{
                                            width: size,
                                            height: size,
                                            borderRadius: '3px',
                                            background:
                                                'linear-gradient(47deg, rgba(34,34,34,1) 0%, rgba(82,82,82,1) 41%, rgba(0,0,0,1) 100%)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                            border: 'solid 1px gray',
                                        }}
                                    >
                                        <img
                                            src={`./StaticAssets/Images/Icons/${game.gameName}.png`}
                                            alt={game.gameName}
                                            style={{
                                                height: '90%',
                                                width: '90%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Typography variant="subtitle1">
                                        {game.gameName}
                                    </Typography>
                                    <Typography variant="body2">
                                        Winning Number
                                    </Typography>
                                    <Typography variant="body2">
                                        {game.startTime} - {game.endTime}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            padding: '0.5rem',
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '5px',
                                            color: '#ffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            background:
                                                'linear-gradient(47deg, rgba(196,0,255,1) 0%, rgba(156,6,6,1) 100%)',
                                        }}
                                    >
                                        {game.winNumber}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
            <Bottommenu />
        </div>
    )
}

export default Chartscomp
