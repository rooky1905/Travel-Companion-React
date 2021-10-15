
import React from 'react'
import { useEffect, useState } from 'react'

import {CssBaseline, Grid} from '@material-ui/core'

import Header from './Header/Header'
import List from './List/List'
import Map from './Map/Map'
import { getRestaurants } from './api'

const App = () => {
    const [restaurants, setRestaurants] = useState('')
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({});
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
            setCoordinates({lat:latitude, lng:longitude})
        })
    }, [])
    
    useEffect(async () => {
        const response = await getRestaurants(type, bounds.sw, bounds.ne)
        console.log(response)
        setRestaurants(response?.filter((place)=>(place.name && place.num_reviews > 0)))
    }, [type, coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header setCoordinates = {setCoordinates} />
            
            <Grid container spacing = {3} style = {{width : '100%'}} >
            <Grid item xs = {12} md = {4}>
                <List places = {restaurants} type={type} setType = {setType} rating = {rating} setRating={setRating}/>
            </Grid>
            <Grid item xs = {12} md = {8}>
                <Map setCoordinates = {setCoordinates} setBounds = {setBounds} coordinates = {coordinates} places= {restaurants} />
            </Grid>
            </Grid>
        </>
    )

}

export default App