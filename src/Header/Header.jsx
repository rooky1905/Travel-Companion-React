
import React from 'react'
import { useState } from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'

const Header = ({setCoordinates}) => {

    const [auto, setAuto] = useState(null)
    const onLoad = (au) => {
        setAuto(au)
    }
    const onPlaceChanged = () =>{
        const lat = auto.getPlace().geometry.location.lat();
        const lng = auto.getPlace().geometry.location.lng();

        setCoordinates({lat,lng})
    }
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className = {classes.toolbar}>
                <Typography variant = "h5" className={classes.title}>
                    Travel Companion
                </Typography>
                <Box display = "flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore
                    </Typography>
                    <Autocomplete onLoad= {onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className = {classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder = "Search" classes = {{root:classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default Header