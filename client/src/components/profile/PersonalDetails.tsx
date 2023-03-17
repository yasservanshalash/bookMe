import { CameraAlt } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

const PersonalDetails = () => {

    const nav = useNavigate();
    const user = useSelector((state: RootState) => state.users.user)
    
    if(user._id === "") {
        nav("/");
    }
  return (
    <Box sx={{m: 10, display: "flex", flexDirection: "column", gap: 2}}>
        <Typography variant='h6' sx={{fontWeight: "bold"}}>Personal Details</Typography>
        <Typography>Edit your personal details</Typography>
        <Box sx={{position: "relative"}}>
        <img src={user.avatar} style={{width: "100px", height: "100px", borderRadius: "50%"}} alt="avatar" />
        <IconButton sx={{background: "white", "&:hover": {background: "white"}, position: "absolute", left: "65px", top: "70px"}}>
        <CameraAlt />

        </IconButton>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Full name</Typography>
            <Typography>{user.name}</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Location</Typography>
            <Typography>{ user.location ? user.location : `‎ ` }</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Email</Typography>
            <Typography>{user.email}</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Nationality</Typography>
            <Typography>{ user.location ? user.location : `‎ `}</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Date of birth</Typography>
            <Typography>{ user.dateOfBirth ? user.dateOfBirth : `‎ `}</Typography>
            <Typography>Edit</Typography>
        </Box>
    </Box>
  )
}

export default PersonalDetails