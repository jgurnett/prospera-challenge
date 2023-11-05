import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import prisma from '@/lib/prisma'

interface ReviewInfo {
  movieTitle: string
  dateWatched: Date
  rating: number
  review: string
}

export default async function Reviews() {
  const reviews = await prisma.review.findMany({ where: { userId: 1 } })

  return (
    <div>
      {reviews.map((review, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {review.movieName}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {review.dateWatched.toDateString()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>Rating: {review.rating} out of 5 stars.</p>
            <br />
            <Typography>Review:{review.review}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
