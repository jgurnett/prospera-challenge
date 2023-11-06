'use client'
import StarRating from '@/components/rating'
import { DashboardRoutes } from '@/enums/routes'
import { LocalStorageKeys, getData } from '@/utils/localStorage'
import { Button } from '@mui/material'
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

  const [rating, setRating] = useState(0)
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
        rating,
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
      <p>Movie Rating:</p>
      <div>
        <StarRating onRatingChanged={setRating} />
      </div>
      <div>
        <Button variant="contained" onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  )
}
