import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
    <Box sx={{width: "25%"}}>
        <IconButton>
            <ArrowBack />
        </IconButton>
        <Typography>Profile Settings</Typography>
        <Box>
            
        </Box>
    </Box>
  )
}

export default Settings