'use client'
import { DashboardRoutes } from '@/enums/routes'
import { ButtonGroup, Button } from '@mui/material'

export default function Navigation() {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button href={DashboardRoutes.STEP1}>Movie Name</Button>
      <Button href={DashboardRoutes.STEP2}>Rating</Button>
      <Button href={DashboardRoutes.STEP3}>Review</Button>
    </ButtonGroup>
  )
}
