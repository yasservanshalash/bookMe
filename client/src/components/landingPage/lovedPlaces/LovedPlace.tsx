import { Box, Chip, IconButton, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const LovedPlace = ({name, city, price, image, rating}: {name: string, city: string, price: number, image: string, rating: number}) => {
  return (
    <Paper sx={{width:"290px", display: "flex", flexDirection: "column", borderRadius: "20px"}}>
        <Box sx={{position: "relative"}}>
        <img src={image} style={{width: "270px", height: "250px", padding: "12px", borderRadius: "20px"}}/>
        <Chip label={rating} variant="outlined" sx={{position: "absolute", top: "30px", left: "30px", backgroundColor: "#a2cf6e",px: 0.5    , borderRadius: "20px",}}/>
        </Box>
        <Box sx={{width: "90%", margin: "0 auto 20px auto",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "relative"}}>
            <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>{name}</Typography>
            <Typography variant='subtitle2' sx={{fontWeight: "lighter"}}>{city}</Typography>
            <Typography variant='subtitle1' sx={{fontWeight: "bolder"}}>{`from $${price}/night`}</Typography>
            <IconButton sx={{position: "absolute", bottom: "7px", right: "0px"}}>
                <ArrowForwardIosIcon sx={{fontSize: "70%", fontWeight: "bolder"}}/>
            </IconButton>
        </Box>
    </Paper>
  )
}

export default LovedPlace