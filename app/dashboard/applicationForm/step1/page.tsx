'use client'
import { DashboardRoutes } from '@/enums/routes'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { LocalStorageKeys, getData, saveData } from '@/utils/localStorage'
import { MovieData } from '@/interfaces/movieData'
import Loading from '@/components/loading'
import { resourceLimits } from 'worker_threads'

export default function Step1() {
  const [companyName, setCompanyName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState()
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const results = getData(LocalStorageKeys.APPLICATION_DATA)
    if (results) {
      setCompanyName(results?.companyName)
      setName(results?.name)
      setId(results.id)
    }
  }, [])

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
        id,
        userId: 1,
        companyName,
        name,
      }

      const method = id ? 'PUT' : 'POST'
      const response = await fetch('/api/application', {
        method,
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

  function handleCompanyNameChange(event: ChangeEvent<HTMLInputElement>) {
    setCompanyName(event.target.value)
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  return (
    <div>
      <Loading isLoading={isLoading} />
      <div className="flex flex-col">
        <p className="pb-2">What company are you applying to?</p>
        <TextField
          label="Company"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
        <br />
        <p className="pb-2">What is your Name?</p>
        <TextField
          label="First Name"
          value={name}
          onChange={handleNameChange}
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
