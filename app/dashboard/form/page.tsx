'use client'
import { DashboardRoutes } from '@/enums/routes'
import Link from 'next/link'

export default function Form() {
  return (
    <div>
      Lets start the form!
      <br />
      <Link href={DashboardRoutes.FORM + '/' + DashboardRoutes.STEP1}>
        Next
      </Link>
    </div>
  )
}
