import { CameraAlt } from '@mui/icons-material'
import { Box, Button, IconButton, InputBase, TextField, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { lightGreen } from '@mui/material/colors';

const PersonalDetails = () => {
    const [nameEdit, setNameEdit] = useState(false)
    const [phoneNumberEdit, setPhoneNumberEdit] = useState(false)
    const [nationality, setNationalityEdit] = useState(false)
    const [email, setEmailEdit] = useState(false)
    const [location, setLocationEdit] = useState(false);

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
        {/* <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", gap:10}}>
            <Box>
            <Typography>Full name</Typography>

            </Box>
            <Box sx={{display: nameEdit ? "flex" : "none", gap: 10, alignItems: "center"}}>
            <InputBase sx={{border: "0px", outline: "0px"}} placeholder="Enter new name"/>
            <Box sx={{display: "flex"}}>
            <IconButton onClick={() => setNameEdit(false)}>
                <DoneIcon sx={{color: 'lightgreen'}}/>
            </IconButton>
            <IconButton onClick={() => setNameEdit(false)}>
                <CloseIcon  sx={{color: "red"}}/>
            </IconButton>
            </Box>

            </Box>
            <Box sx={{display: !nameEdit ? "grid" : "none", gridTemplateColumns: "1fr 1fr", gap: 10}}>
            <Typography>{user.name}</Typography>
            <Typography onClick={() => setNameEdit(true)}>Edit</Typography>
            </Box>
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
        </Box> */}
        <Box sx={{display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr", gap: 1}}>
        <Box sx={{display: "grid", gridTemplateColumns: "140px 400px 200px", alignItems: "center"}}>
            <Box>
                <Typography>Name:</Typography>
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
            <Box>
                <Button>Edit</Button>
            </Box>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "140px 400px 200px", alignItems: "center"}}>
            <Box>
                <Typography>Phone Number:</Typography>
            </Box>
            <Box>
                <Typography>{user.phoneNumber}</Typography>
            </Box>
            <Box>
                <Button>Edit</Button>
            </Box>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "140px 400px 200px", alignItems: "center"}}>
            <Box>
                <Typography>Nationality:</Typography>
            </Box>
            <Box>
                <Typography>{user.nationality}</Typography>
            </Box>
            <Box>
                <Button>Edit</Button>
            </Box>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "140px 400px 200px", alignItems: "center"}}>
            <Box>
                <Typography>Email:</Typography>
            </Box>
            <Box>
                <Typography>{user.email}</Typography>
            </Box>
            <Box>
                <Button>Edit</Button>
            </Box>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "140px 400px 200px", alignItems: "center"}}>
            <Box>
                <Typography>Location:</Typography>
            </Box>
            <Box>
                <Typography>{user.location}</Typography>
            </Box>
            <Box>
                <Button>Edit</Button>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default PersonalDetails