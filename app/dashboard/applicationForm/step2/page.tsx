'use client'
import StarRating from '@/components/rating'
import { DashboardRoutes } from '@/enums/routes'
import { LocalStorageKeys, getData } from '@/utils/localStorage'
import { LocalizationProvider, DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Step2() {
  useEffect(() => {
    const results = getData(LocalStorageKeys.MOVIE_DATA)
    if (!results?.id) {
      alert('Going back to step 1')
      router.push(DashboardRoutes.STEP1)
    }
    setId(results.id)
  }, [])

  const [date, setDate] = useState('')
  function handleDateChange(date: string) {
    setDate(date)
  }
  const [id, setId] = useState()
  const router = useRouter()

  async function nextStep() {
    await submitData()
    router.push(DashboardRoutes.STEP3)
  }

  async function submitData() {
    try {
      const body = {
        id,
        birthDate: date,
      }
      await fetch(`/api/application`, {
        method: 'PUT',
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
        <p>What is your birthday?</p>
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
      <div className="flex justify-end">
        <Button
          variant="contained"
          style={{ backgroundColor: '#1A76D2' }}
          onClick={nextStep}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
