'use client'
import { DashboardRoutes } from '@/enums/routes'
import { Button } from '@mui/material'

export default function Form() {
  return (
    <div>
      <p>You have made it to the application flow!</p>
      <br />
      <Button
        variant="contained"
        href={DashboardRoutes.APPLICATION_FORM + '/' + DashboardRoutes.STEP1}
      >
        Start application!
      </Button>
    </div>
  )
}
