import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#eceff1", px: 5}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent:"center"}}>
            <Typography variant='h5' sx={{fontWeight: "bolder"}}>BookMe</Typography>
            <Typography>Your favorite booking service since 1946</Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent:"center", my:2, gap: 1}}>
        <Typography sx={{fontWeight: "bolder"}}>Help</Typography>
        <Typography>FAQ</Typography>
        <Typography>customer service</Typography>
        <Typography>How to guide</Typography>
        <Typography>Contact Us</Typography>

        </Box>
    </Box>
  )
}

export default Footer