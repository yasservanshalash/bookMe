import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import img from "../../../assets/newsletter.png"
const Newsletter = () => {
  return (
    <Paper sx={{width: "90%", margin: "0 auto 70px auto", display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderRadius: "20px"}}>
        <Box sx={{display: 'flex', gap: 2}}>
        <img src={img} style={{width: "66px", transform: "scale(0.5)"}}/>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <Typography sx={{fontWeight: "bolder"}}>Pssst!</Typography>
        <Typography>Do you want to get secret offers, and best prices for your stays?</Typography>
        <Typography>Signup for the newsletter and join BookMe club!</Typography>
        </Box>
        </Box>
        <Box>
            <Button>Sign up for newsletter</Button>
        </Box>
    </Paper>
  )
}

export default Newsletter