import { Box } from '@mui/material'
import React from 'react'
import PersonalDetails from '../components/profile/PersonalDetails'
import Settings from '../components/profile/Settings'

const Profile = () => {
  return (
    <Box sx={{display: "flex"}}>
        <Settings />
        <PersonalDetails />
    </Box>
  )
}

export default Profile