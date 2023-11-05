'use client'
import { DashboardRoutes } from '@/enums/routes'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export default function Step1() {
  const [date, setDate] = useState('')
  const [movieName, setName] = useState('')

  function handleDateChange(date: string) {
    setDate(date)
  }

  async function submitData() {
    try {
      const body = {
        userId: 1,
        movieName,
        dateWatched: date,
      }
      await fetch(`/api/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <p>What is the name of the film?</p>
        <TextField
          label="Name"
          onChange={(newValue) => setName(newValue.target.value)}
        />
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
        <Button variant="contained" onClick={submitData}>
          me
        </Button>
        <Button variant="contained" href={DashboardRoutes.STEP2}>
          Next
        </Button>
      </div>
    </div>
  )
}
