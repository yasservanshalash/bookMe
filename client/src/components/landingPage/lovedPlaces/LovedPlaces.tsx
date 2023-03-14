import { Box, Typography } from '@mui/material'
import React from 'react'
import LovedPlace from './LovedPlace'

const LovedPlaces = () => {
  return (
    <Box sx={{width: "90%", margin: "0 auto 50px auto"}}>
        <Typography variant='h6' sx={{textAlign: "left", my: 4}}>Places loved by guests</Typography>
        <Box sx={{display: "flex", justifyContent: "center", gap: 2 }}>
        <LovedPlace name={"The London"} city={"Amsterdam"}  price={170} rating={9.2} image={"https://images.squarespace-cdn.com/content/v1/6165069dbcf00c0b136b53a3/1634013748621-7ODMK8QTWESQEK66II8G/tl-home-hero.jpg?format=2500w"} />
        <LovedPlace name={"The London"} city={"Amsterdam"}  price={170} rating={9.2} image={"https://images.squarespace-cdn.com/content/v1/6165069dbcf00c0b136b53a3/1634013748621-7ODMK8QTWESQEK66II8G/tl-home-hero.jpg?format=2500w"} />
        <LovedPlace name={"The London"} city={"Amsterdam"}  price={170} rating={9.2} image={"https://images.squarespace-cdn.com/content/v1/6165069dbcf00c0b136b53a3/1634013748621-7ODMK8QTWESQEK66II8G/tl-home-hero.jpg?format=2500w"} />
        <LovedPlace name={"The London"} city={"Amsterdam"}  price={170} rating={9.2} image={"https://images.squarespace-cdn.com/content/v1/6165069dbcf00c0b136b53a3/1634013748621-7ODMK8QTWESQEK66II8G/tl-home-hero.jpg?format=2500w"} />
        <LovedPlace name={"The London"} city={"Amsterdam"}  price={170} rating={9.2} image={"https://images.squarespace-cdn.com/content/v1/6165069dbcf00c0b136b53a3/1634013748621-7ODMK8QTWESQEK66II8G/tl-home-hero.jpg?format=2500w"} />
        </Box>
    </Box>
  )
}

export default LovedPlaces