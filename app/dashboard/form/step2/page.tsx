import StarRating from '@/components/rating'
import { DashboardRoutes } from '@/enums/routes'
import { Button } from '@mui/material'

export default function Step2() {
  return (
    <div>
      <p>Movie Rating:</p>
      <div>
        <StarRating />
      </div>
      <div>
        <Button variant="contained" href={DashboardRoutes.STEP3}>
          Next
        </Button>
      </div>
    </div>
  )
}
