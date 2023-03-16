import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const Settings = () => {
  return (
    <Box sx={{width: "20%", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", backgroundColor: "#E8e8e866", py: 5, textAlign: "center"}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <IconButton sx={{alignSelf: "flex-start", position: "relative", bottom: "20px"}}>
            <ArrowBack />
        </IconButton>
        <Typography variant='h6' sx={{alignSelf: "flex-start"}}>Profile Settings</Typography>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", mt: 5, gap: 2}}>
          <Box sx={{display: "flex", gap: 2}}>
            <PersonIcon />
          <Typography>Personal Details</Typography>
          </Box>
          <Box sx={{display: "flex", gap: 2}}>
            <PaymentIcon />
            <Typography>Payment Information</Typography>
          </Box>
          <Box sx={{display: "flex", gap: 2}}>
            <HealthAndSafetyIcon />
            <Typography>Safety</Typography>
          </Box>
          <Box sx={{display: "flex", gap: 2}}>
              <SettingsIcon/>
              <Typography>Preferences</Typography>

          </Box>
          <Box sx={{display: "flex", gap: 2}}>
            <NotificationsIcon />
            <Typography>Notifications</Typography>
          </Box>
          <Box sx={{display: "flex", gap: 2}}>
            <PersonAddIcon />
            <Typography>Add other passengers</Typography>

          </Box>
        </Box>
      </Box>
      <Box sx={{display: "flex", justifyContent: "flex-start", gap: 2, position: "relative", right: "50px"}}>
        <LogoutIcon/>
        <Typography>Log out</Typography>
      </Box>
    </Box>
  )
}

export default Settings