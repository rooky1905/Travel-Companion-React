import React from 'react'

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyle from './style'

const Place = ({place}) =>{
    const classes = useStyle()
    return(
        <Card elevation = {6}>
            <CardMedia 
                style ={{height : 350}}
                image = {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title = {place.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating value={Number(place.rating)} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant = "subtitle1"> Price </Typography>
                    <Typography gutterBottom variant = "subtitle1"> {place.price_level} </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant = "subtitle1"> Ranking </Typography>
                    <Typography gutterBottom variant = "subtitle1"> {place.ranking} </Typography>
                </Box>
                {
                    
                    place ? (place.cuisine ? place.cuisine.map(({name})=>(
                        <Chip key = {name} size = "small" label = {name} className={classes.chip} />
                    )) : null) : null
                }
                {
                    
                    place ? (place.address ? 
                        <Typography gutterBottom variant="body2" color="textSecondary" className = {classes.subtitle}>
                            <LocationOnIcon /> {place.address}
                        </Typography>
                        : null) : null
                }
                {
                    
                    place ? (place.phone ? 
                        <Typography gutterBottom variant="body2" color="textSecondary" className = {classes.subtitle}>
                            <PhoneIcon /> {place.phone}
                        </Typography>
                        : null) : null
                }
                
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>{window.open(place.web_url, "_blank")}}>
                        Trip Advisor Page
                    </Button>
                </CardActions>
            </CardContent>

        </Card>
    )
}

export default Place