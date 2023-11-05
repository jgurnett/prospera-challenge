'use client'
import { DashboardRoutes } from '@/enums/routes'
import { ButtonGroup, Button } from '@mui/material'

export default function Navigation() {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button href={DashboardRoutes.STEP1}>One</Button>
      <Button href={DashboardRoutes.STEP2}>Two</Button>
      <Button href={DashboardRoutes.STEP3}>Three</Button>
    </ButtonGroup>
  )
}
