import { Card } from '@mui/material'
import Navigation from '@/components/formNavigation'
import { DashboardRoutes } from '@/enums/routes'

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseRoute = `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.FORM}/`
  const links = [
    { name: 'Movie name', route: DashboardRoutes.STEP1 },
    { name: 'Rating', route: DashboardRoutes.STEP2 },
    { name: 'Review', route: DashboardRoutes.STEP3 },
  ]
  return (
    <section className="flex flex-col items-center">
      <Navigation links={links} baseRoute={baseRoute} />
      <br />
      <Card className="p-8" style={{ minWidth: '450px' }}>
        {children}
      </Card>
    </section>
  )
}
