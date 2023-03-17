import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteItem from '../components/favorites/FavoriteItem'
import { RootState } from '../redux/store'

const FavoritesPage = () => {
    const properties = useSelector((state: RootState) => state.places.places)
  return (
    <Box sx={{width: "85%", margin: "0 auto"}}>
        <Typography variant='h5' sx={{fontWeight: "bold", textAlign: "center", mt: 4}}>Favorites</Typography>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", my: 7}}>
        {
            properties.map((property) => {
                return (
                    <FavoriteItem property={property} />
                )
            })
        }
        </Box>
    </Box>
  )
}

export default FavoritesPage