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
import Loading from '@/components/loading'

export default function Step1() {
  const [companyName, setCompanyName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const router = useRouter()

  async function nextStep() {
    setIsLoading(true)
    const results = await submitData()
    if (!results) {
      // TODO - change to toasts
      alert('failed to save')
      return
    }
    saveData(LocalStorageKeys.APPLICATION_DATA, {
      id: results.id,
      companyName,
      name,
    })
    setIsLoading(false)
    router.push(DashboardRoutes.STEP2)
  }

  async function submitData(): Promise<MovieData | undefined> {
    try {
      const body = {
        userId: 1,
        companyName,
        name,
      }

      const response = await fetch('/api/application', {
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
      <Loading isLoading={isLoading} />
      <div className="flex flex-col">
        <p className="pb-2">What company are you applying to?</p>
        <TextField
          label="Company"
          onChange={(newValue) => setCompanyName(newValue.target.value)}
        />
        <br />
        <p className="pb-2">What is your Name?</p>
        <TextField
          label="First Name"
          onChange={(newValue) => setName(newValue.target.value)}
        />
      </div>
      <br />
      <br />
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
