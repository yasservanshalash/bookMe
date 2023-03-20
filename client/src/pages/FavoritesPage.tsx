import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteItem from '../components/favorites/FavoriteItem'
import { RootState } from '../redux/store'
import { Place } from '../types/types'

const FavoritesPage = () => {
    // const properties = useSelector((state: RootState) => state.places.places)
    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    console.log(favorites)
  return (
    <Box sx={{width: "85%", margin: "0 auto"}}>
        <Typography variant='h5' sx={{fontWeight: "bold", textAlign: "center", mt: 4}}>Favorites</Typography>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", my: 7}}>
        {
            favorites?.places?.map((property: Place) => {
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