'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardRoutes } from '@/enums/routes'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Perform automatic redirection when the component loads
    router.push(`${DashboardRoutes.DASHBOARD}/${DashboardRoutes.FORM}`)
  }, [])

  return <div></div>
}
