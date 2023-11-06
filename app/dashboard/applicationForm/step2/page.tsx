'use client'
import Loading from '@/components/loading'
import StarRating from '@/components/rating'
import { DashboardRoutes } from '@/enums/routes'
import { LocalStorageKeys, getData, updateData } from '@/utils/localStorage'
import { LocalizationProvider, DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Step2() {
  const [birthDate, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const results = getData(LocalStorageKeys.APPLICATION_DATA)
    if (!results?.id) {
      alert('Missing first data, navigating back to step 1')
      router.push(DashboardRoutes.STEP1)
    }
    setId(results.id)
    setDate(results?.birthDate)
  }, [])

  function handleDateChange(date: string) {
    setDate(date)
  }
  const [id, setId] = useState()
  const router = useRouter()

  async function nextStep() {
    await submitData()
    updateData(LocalStorageKeys.APPLICATION_DATA, { birthDate })
    router.push(DashboardRoutes.STEP3)
  }

  async function submitData() {
    setIsLoading(true)
    try {
      const body = {
        id,
        birthDate,
      }
      await fetch(`/api/application`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <Loading isLoading={isLoading} />
      <div>
        <p>What is your birthday?</p>
        <div className="py-4 flex flex-col">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={birthDate}
              renderInput={(props) => <TextField {...props} />}
              onChange={(newDate: string | null) =>
                handleDateChange(newDate || '')
              }
            />
          </LocalizationProvider>
        </div>
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
