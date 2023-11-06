import { Card } from '@mui/material'
import Navigation from '@/components/formNavigation'
import { DashboardRoutes } from '@/enums/routes'

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseRoute = `/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.APPLICATION_FORM}/`
  const links = [
    { name: 'Name', route: DashboardRoutes.STEP1 },
    { name: 'Birthday', route: DashboardRoutes.STEP2 },
    { name: 'Phone', route: DashboardRoutes.STEP3 },
  ]
  return (
    <section className="flex flex-col items-center">
      <Navigation links={links} baseRoute={baseRoute} />
      <br />
      <Card className="p-8 w-full md:w-96">{children}</Card>
    </section>
  )
}
