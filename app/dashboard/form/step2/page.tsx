'use client'
import StarRating from '@/components/rating'
import { DashboardRoutes } from '@/enums/routes'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Step2() {
  const [rating, setRating] = useState(0)
  const router = useRouter()

  async function nextStep() {
    await submitData()
    router.push(DashboardRoutes.STEP3)
  }

  async function submitData() {
    try {
      const body = {
        id: 1,
        rating,
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
