import { Box, Chip, IconButton, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Place } from '../../types/types';

const FavoriteItem = ({property}: {property: Place}) => {
  return (
    <Paper sx={{width:"250px", display: "flex", flexDirection: "column", borderRadius: "20px"}}>
    <Box sx={{position: "relative"}}>
      <Box sx={{display: "flex", justifyContent: 'center'}}>
      <img src={property.photos[0]} style={{width: "235px", height: "250px", padding: "12px", borderRadius: "20px"}}/>

      </Box>
    <Chip label={property.place} variant="outlined" sx={{position: "absolute", top: "30px", left: "30px", backgroundColor: "#a2cf6e",px: 0.5    , borderRadius: "20px",}}/>
    </Box>
    <Box sx={{width: "90%", margin: "0 auto 20px auto",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "relative"}}>
        <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>{property.title}</Typography>
        <Typography variant='subtitle2' sx={{fontWeight: "lighter"}}>{property.place}</Typography>
        <Typography variant='subtitle1' sx={{fontWeight: "bolder"}}>{`from $${property.price}/night`}</Typography>
        <IconButton sx={{position: "absolute", bottom: "7px", right: "0px"}}>
            <ArrowForwardIosIcon sx={{fontSize: "70%", fontWeight: "bolder"}}/>
        </IconButton>
    </Box>
</Paper>
  )
}

export default FavoriteItem