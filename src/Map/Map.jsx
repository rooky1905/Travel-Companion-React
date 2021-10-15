import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import useStyle from './style'

//Map API key : 'AIzaSyAz2NlI2LzToytJee-Ni-Hw4jweGae8E-g'
const Map = ({setCoordinates, setBounds, coordinates, places}) => {
    const classes = useStyle();
    const isDesktop = useMediaQuery('(min-width:600px)')
    
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key :'AIzaSyBzBWtJSGVh9X2dc8TN6XbSFyTcWjwAjHg'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng : e.center.lng})
                    setBounds({ne : e.marginBounds.ne, sw : e.marginBounds.sw})
                }}
                onChildClick={''}
            >
            
            {places ? places.map((place,i) => (
                <div
                    className = {classes.markerContainer}
                    lat = {Number(place.latitude)}
                    lng = {Number(place.longitude)}
                    key = {i}
                >
                    {
                        isDesktop ? (
                            <Paper elevation = {3} className={classes.paper}>
                                <Typography gutterBottom variant = "subtitle2" className={classes.typography}>{place.name}</Typography>
                                <img className={classes.pointer} src = {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt = {place.name}/>
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        ) : (<LocationOnOutlinedIcon color = "primary" fontSize = "large"/>)
                    }
                </div>
            )) : null}

            </GoogleMapReact>

        </div>
    )

}

export default Map