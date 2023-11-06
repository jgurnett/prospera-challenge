'use client'
import { DashboardRoutes } from '@/enums/routes'
import { ApplicationData } from '@/interfaces/applicationData'
import { LocalStorageKeys, getData, removeData } from '@/utils/localStorage'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Review() {
  useEffect(() => {
    const results = getData(LocalStorageKeys.APPLICATION_DATA)
    if (!results?.id) {
      alert('Going back to step 1')
      router.push(DashboardRoutes.STEP1)
    }
    setApplication(results)
    console.log(results)
  }, [])

  const [application, setApplication] = useState<ApplicationData>()

  const router = useRouter()

  async function nextStep() {
    await submitData()
    removeData(LocalStorageKeys.APPLICATION_DATA)
    router.push(`/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.APPLICATIONS}`)
  }

  async function submitData() {
    try {
      if (!application) {
        alert('no application saved')
        return
      }
      const body = {
        id: application.id,
        submitted: true,
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
      <p>
        <b>Company name: </b>
        {application?.companyName}
      </p>
      <p>
        <b>Your name: </b>
        {application?.name}
      </p>
      <p>
        <b>Birthday: </b>
        {new Date(application?.birthDate || '').toDateString()}
      </p>
      <p>
        <b>Phone number: </b>
        {application?.phoneNumber}
      </p>

      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: '#1A76D2' }}
        onClick={nextStep}
      >
        Submit application!
      </Button>
    </div>
  )
}
