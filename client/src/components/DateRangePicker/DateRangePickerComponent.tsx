import { Box, Button } from '@mui/material'
import React from 'react'
import { DateRangePicker, DateRange as Range } from "mui-daterange-picker";

interface DateRange {
    startDate?: Date,
    endDate?: Date
}

interface DefinedRange {
    label: string,
    startDate: Date,
    endDate: Date
}

const DateRangePickerComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [dateRange, setDateRange] = React.useState<Range>({});
    
    const toggle = () => setOpen(!open);
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
        <Button onClick={() => setOpen(true)}>Open</Button>
            <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => {
        setDateRange(range)
        console.log(range.startDate)
    }}
    />
    </Box>
  )
}

export default DateRangePickerComponent