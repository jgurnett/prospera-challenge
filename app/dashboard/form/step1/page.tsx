'use client'
import { DashboardRoutes } from '@/enums/routes'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useRouter } from 'next/navigation'
import { LocalStorageKeys, saveData } from '@/utils/localStorage'
import { MovieData } from '@/interfaces/movieData'

export default function Step1() {
  const [date, setDate] = useState('')
  const [movieName, setName] = useState('')
  const router = useRouter()

  function handleDateChange(date: string) {
    setDate(date)
  }

  async function nextStep() {
    const results = await submitData()
    if (!results) {
      // TODO - change to toasts
      alert('failed to save')
      return
    }
    saveData(LocalStorageKeys.MOVIE_DATA, { id: results.id, movieName, date })
    router.push(DashboardRoutes.STEP2)
  }

  async function submitData(): Promise<MovieData | undefined> {
    try {
      const body = {
        userId: 1,
        movieName,
        dateWatched: date,
      }

      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json()
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
        <Button variant="contained" onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  )
}
