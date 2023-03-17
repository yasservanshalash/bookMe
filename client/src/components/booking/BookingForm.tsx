import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import { Place } from '../../types/types'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BookingForm = ({property}: {property: Place | undefined}) => {
  return (
    <Box>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography sx={{fontWeight: "bold"}}>{`$${property?.price}/night`}</Typography>
            <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            <Typography sx={{display: "flex", alignItems:"center", fontWeight: "bold"}}><StarIcon sx={{transform: "scale(0.7)"}}/> {`5`}</Typography>
            <Typography>{`10 reviews`}</Typography>
            </Box>
        </Box>
        <Box>
            <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" onChange={(e: any) => console.log(e.target.value)}/>
      </DemoContainer>
    </LocalizationProvider>
            </Box>
            <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DatePicker label="Basic date picker" onChange={(e: any) => console.log(e.target.value)}/>
            </LocalizationProvider>
            </Box>
        </Box>
    </Box>
  )
}

export default BookingForm