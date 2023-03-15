import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PropertyItem from './PropertyItem'

const Properties = () => {
  const properties = useSelector((state: RootState) => state.places.places)
  return (
    <Box sx={{width: "70%", height: "90vh", overflowY: "scroll", margin: "0 auto"}}>
        <Box>
        <Typography>140 properties found</Typography>
        <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
        {
          properties.map((property) => {
            return (
              <PropertyItem property={property} />
            )
          })
        }
        </Box>
        </Box>
    </Box>
  )
}

export default Properties