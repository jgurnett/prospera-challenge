'use client'
import { DashboardRoutes } from '@/enums/routes'
import { getData, LocalStorageKeys, removeData } from '@/utils/localStorage'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Step3() {
  useEffect(() => {
    const results = getData(LocalStorageKeys.MOVIE_DATA)
    if (!results?.id) {
      alert('Going back to step 1')
      router.push(DashboardRoutes.STEP1)
    }
    setId(results.id)
  }, [])

  const [review, setReview] = useState('')
  const [id, setId] = useState()
  const router = useRouter()

  async function nextStep() {
    await submitData()
    removeData(LocalStorageKeys.MOVIE_DATA)
    router.push(`/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.REVIEWS}`)
  }

  async function submitData() {
    try {
      const body = {
        id,
        review,
      }
      await fetch(`/api/review`, {
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
      <h1>Write a short review</h1>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        onChange={(event) => setReview(event.target.value)}
      />
      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: '#1A76D2' }}
        onClick={nextStep}
      >
        Done
      </Button>
    </div>
  )
}
