

import React from 'react'
import { useState } from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input} from '@material-ui/core';
import useStyle from './style'
import Place from '../Place/Place';

const List = ({places, type, setType, rating, setRating}) => {
    const classes = useStyle();
    

    return (
        <div className = {classes.container}>
            <Typography variant = "h4">
                Restaurants, Hotels and Attractions!
            </Typography>
            <FormControl className = {classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value = {type} onChange={(e)=>{
                    setType(e.target.value)
                }}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className = {classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange={(e)=>{
                    setRating(e.target.value)
                }}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing= {3} className={classes.list}>
                {
                    places ? places.map((place, i) => (
                        <Grid item key = {i} xs = {12}>
                            <Place place = {place} />
                        </ Grid>
                    )) : null
                }
            </Grid>
        </div>
    )

}
export default List