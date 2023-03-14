import { Box, Typography } from '@mui/material'
import React from 'react'
import PropertyItem from './PropertyItem'

const Properties = () => {
  return (
    <Box sx={{width: "70%", height: "90vh", overflowY: "scroll", margin: "0 auto"}}>
        <Box>
        <Typography>140 properties found</Typography>
        <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        </Box>
        </Box>
    </Box>
  )
}

export default Properties