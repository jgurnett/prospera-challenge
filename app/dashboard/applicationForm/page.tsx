'use client'
import { DashboardRoutes } from '@/enums/routes'
import { Button } from '@mui/material'

export default function Form() {
  return (
    <div>
      <p>Lets add a movie review</p>
      <br />
      <Button
        variant="contained"
        href={DashboardRoutes.FORM + '/' + DashboardRoutes.STEP1}
      >
        Start review!
      </Button>
    </div>
  )
}
