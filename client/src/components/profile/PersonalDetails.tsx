import { Box, Typography } from '@mui/material'
import React from 'react'

const PersonalDetails = () => {
  return (
    <Box sx={{m: 10, display: "flex", flexDirection: "column", gap: 2}}>
        <Typography variant='h6' sx={{fontWeight: "bold"}}>Personal Details</Typography>
        <Typography>Edit your personal details</Typography>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfNFA-ao6gnYJNGgEAsyNP5mTMCE4PD6dKLEKqsrC&s"} style={{width: "100px", height: "100px", borderRadius: "50%"}} alt="avatar" />
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
            <Typography>Full name</Typography>
            <Typography>Maria</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
            <Typography>Location</Typography>
            <Typography>Hamburg, Germany</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
            <Typography>Email</Typography>
            <Typography>maria@gmail.com</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
            <Typography>Nationality</Typography>
            <Typography>German</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
            <Typography>Date of birth</Typography>
            <Typography>16-04-1996</Typography>
            <Typography>Edit</Typography>
        </Box>
    </Box>
  )
}

export default PersonalDetails