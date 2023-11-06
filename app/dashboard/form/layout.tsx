import { Card } from '@mui/material'
import Navigation from './formNavigation'

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-center">
      <Navigation />
      <br />
      <Card className="p-8" style={{ minWidth: '450px' }}>
        {children}
      </Card>
    </section>
  )
}
