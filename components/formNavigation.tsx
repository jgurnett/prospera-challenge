'use client'
import { DashboardRoutes } from '@/enums/routes'
import { ButtonGroup, Button } from '@mui/material'

interface NavigationProps {
  links: { name: string; route: DashboardRoutes }[]
  baseRoute: string
}

export default function Navigation({ links, baseRoute }: NavigationProps) {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      {links.map((link) => (
        <Button key={link.name} href={baseRoute + link.route}>
          {link.name}
        </Button>
      ))}
    </ButtonGroup>
  )
}
