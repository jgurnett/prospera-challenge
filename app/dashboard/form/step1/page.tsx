import { DashboardRoutes } from '@/enums/routes'
import Link from 'next/link'

export default function Step1() {
  return (
    <div>
      <h1>Step 1</h1>

      <Link href={DashboardRoutes.STEP2}>Next</Link>
    </div>
  )
}
