import { DashboardRoutes } from '@/enums/routes'
import Link from 'next/link'

export default function Step2() {
  return (
    <div>
      <h1>Step 2</h1>

      <Link href={DashboardRoutes.STEP3}>Next</Link>
    </div>
  )
}
