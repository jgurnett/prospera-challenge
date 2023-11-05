'use client'
import { DashboardRoutes } from '@/enums/routes'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export default function Step1() {
  const [date, setDate] = useState('')

  function handleDateChange(date: string) {
    setDate(date)
  }
  return (
    <div>
      <div className="flex flex-col">
        <p>What is the name of the film?</p>
        <TextField label="Name" />
      </div>
      <br />

      <div className="flex flex-col">
        <p>What day did you watch the film?</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select Date"
            value={date}
            renderInput={(props) => <TextField {...props} />}
            onChange={(newDate: string | null) =>
              handleDateChange(newDate || '')
            }
          />
        </LocalizationProvider>
      </div>

      <br />
      <div className="flex justify-end">
        <Button variant="contained" href={DashboardRoutes.STEP2}>
          Next
        </Button>
      </div>
    </div>
  )
}
