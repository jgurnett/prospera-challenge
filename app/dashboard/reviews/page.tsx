'use client'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ReviewInfo {
  movieTitle: string
  dateWatched: Date
  rating: number
  review: string
}

export default function Reviews() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const reviews: ReviewInfo[] = [
    {
      movieTitle: 'test',
      dateWatched: new Date(),
      rating: 4,
      review: ' good movie',
    },
  ]

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      {reviews.map((review, index) => (
        <Accordion key={index} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {review.movieTitle}
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
