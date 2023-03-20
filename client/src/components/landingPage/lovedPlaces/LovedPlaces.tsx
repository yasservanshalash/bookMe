import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import LovedPlace from './LovedPlace'

const LovedPlaces = () => {
  const places = useSelector((state: RootState) => state.places.places)
  return (
    <Box sx={{width: "90%", margin: "0 auto 50px auto"}}>
        <Typography variant='h6' sx={{textAlign: "left", my: 4}}>Places loved by guests</Typography>
        <Box sx={{display: "flex", justifyContent: "center", gap: 2 }}>
        {
          places.slice(0,5).map((place) => {
            return (
              <LovedPlace key={place._id} name={place.title} city={place.place}  price={place.price} rating={9.2} image={place.photos[0]} />

            )
          })
        }
        </Box>
    </Box>
  )
}

export default LovedPlaces