import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PropertyItem from './PropertyItem'

const Properties = () => {
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm)
  const numberOfDays = useSelector((state: RootState) => state.filter.numOfDays)
  const numberOfVisitors = useSelector((state: RootState) => state.filter.numberOfVisitors)
  const properties = useSelector((state: RootState) => state.places.places)
  return (
    <Box sx={{width: "70%", height: "90vh", overflowY: "scroll", margin: "0 auto"}}>
        <Box>
        <Typography variant='h6' sx={{fontWeight: "bold", m:2}}>{searchTerm === "" ? "" : `${properties.filter((property) => property.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || property.address.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).length } properties found`}</Typography>
        <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
        {
          properties.filter((property) => property.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || property.address.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).map((property) => {
            return (
              <PropertyItem key={property._id} property={property} />
            )
          })
        }
        </Box>
        </Box>
    </Box>
  )
}

export default Properties