import { Box, Typography } from '@mui/material'
import React from 'react'
import Properties from '../components/propertiesPage/Properties'
import SearchFilter from '../components/propertiesPage/SearchFilter'

const PropertiesPage = () => {
  return (
    <Box sx={{flex: 1, flexGrow: 1, display: "flex", borderTop: "1px solid #E8E8E888", height: "100vh"}}>
        <SearchFilter />
        <Properties />
    </Box>
  )
}

export default PropertiesPage